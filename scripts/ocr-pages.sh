#!/usr/bin/env bash
# Reconnaissance de texte (OCR) des pages imprimées du recueil.
#   public/livre/pdf/N.pdf  ->  content/ocr/pN.txt (texte brut, non relu)
# Les pages manuscrites (126-140, 146) et les documents sous droits (141, 142)
# sont ignorés. Prérequis : brew install poppler imagemagick tesseract tesseract-lang
set -euo pipefail
cd "$(dirname "$0")/.."
OUT="content/ocr"
SKIP=" 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 146 "
mkdir -p "$OUT"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT

for n in $(seq 1 146); do
  [[ "$SKIP" == *" $n "* ]] && continue
  pdf="public/livre/pdf/$n.pdf"
  pdfimages -j "$pdf" "$tmp/p$n"
  src="$(ls "$tmp"/p"$n"-000.* | head -1)"
  rot="$(pdfinfo "$pdf" | awk '/^Page rot:/{print $3}')"
  # Niveaux de gris, contraste normalisé, agrandissement vers ~300 dpi.
  magick "$src" -rotate "${rot:-0}" -colorspace Gray -normalize -resize 125% -sharpen 0x0.8 "$tmp/g$n.png"
  tesseract "$tmp/g$n.png" "$tmp/o$n" -l fra --psm 3 >/dev/null 2>&1
  python3 -I scripts/ocr-clean.py "$tmp/o$n.txt" > "$OUT/p$n.txt"
  rm -f "$tmp"/p"$n"-* "$tmp/g$n.png" "$tmp/o$n.txt"
done
echo "OCR terminé : $(ls "$OUT" | wc -l | tr -d ' ') pages dans $OUT"
