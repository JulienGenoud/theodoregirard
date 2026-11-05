#!/usr/bin/env bash
# Régénère les images WebP du recueil à partir des PDF d'origine.
#
#   public/livre/pdf/N.pdf  ->  public/livre/pages/page-N-{1600,900,320}.webp
#                           ->  src/data/pages.json (dimensions de chaque scan)
#
# Chaque PDF contient un seul scan JPEG : il est extrait sans perte (pdfimages),
# redressé si le PDF déclare une rotation, puis converti en WebP (cwebp).
# Prérequis (macOS) : brew install poppler webp imagemagick
set -euo pipefail

cd "$(dirname "$0")/.."
PDF_DIR="public/livre/pdf"
OUT_DIR="public/livre/pages"
MANIFEST="src/data/pages.json"

for tool in pdfimages pdfinfo cwebp magick; do
  command -v "$tool" >/dev/null || { echo "Outil manquant : $tool" >&2; exit 1; }
done

count=$(find "$PDF_DIR" -maxdepth 1 -name '*.pdf' | wc -l | tr -d ' ')
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
mkdir -p "$OUT_DIR"

{
  echo "["
  for n in $(seq 1 "$count"); do
    pdf="$PDF_DIR/$n.pdf"
    [ -f "$pdf" ] || { echo "PDF manquant : $pdf" >&2; exit 1; }
    pdfimages -j "$pdf" "$tmp/p$n"
    src="$(ls "$tmp"/p"$n"-000.* | head -1)"
    rot="$(pdfinfo "$pdf" | awk '/^Page rot:/{print $3}')"
    work="$src"
    if [ "${rot:-0}" != "0" ]; then
      work="$tmp/r$n.png"
      magick "$src" -rotate "$rot" "$work"
    fi
    w="$(magick identify -format '%w' "$work")"
    h="$(magick identify -format '%h' "$work")"
    for size in 1600 900 320; do
      quality=70; [ "$size" = 320 ] && quality=60
      width=$size; [ "$w" -lt "$size" ] && width=$w
      cwebp -quiet -q "$quality" -m 6 -resize "$width" 0 "$work" -o "$OUT_DIR/page-$n-$size.webp"
    done
    sep=","; [ "$n" = "$count" ] && sep=""
    echo "  { \"n\": $n, \"w\": $w, \"h\": $h }$sep"
    rm -f "$tmp"/p"$n"-* "$tmp/r$n.png"
  done
  echo "]"
} > "$MANIFEST"

echo "OK : $count pages converties dans $OUT_DIR, dimensions dans $MANIFEST"
