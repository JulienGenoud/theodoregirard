"""Nettoie la sortie brute de Tesseract : recolle les mots coupés en fin de
ligne, reforme les paragraphes et écarte les lignes de bruit."""
import re
import sys

raw = open(sys.argv[1], encoding="utf-8").read()
raw = raw.replace("’", "'").replace("ﬁ", "fi").replace("ﬂ", "fl")


def is_noise(line: str) -> bool:
    letters = sum(c.isalpha() for c in line)
    return len(line) < 3 or letters < 0.6 * len(line.replace(" ", ""))


paragraphs = []
for block in re.split(r"\n\s*\n", raw):
    lines = [l.strip(" |!¦") for l in block.splitlines()]
    lines = [l for l in lines if l and not is_noise(l)]
    if not lines:
        continue
    text = lines[0]
    for line in lines[1:]:
        if re.search(r"[A-Za-zÀ-ÿ]-$", text) and line[:1].islower():
            text = text[:-1] + line  # mot coupé : « de-\nmande » -> « demande »
        else:
            text += " " + line
    text = re.sub(r"\s+", " ", text).strip()
    # Parasites typographiques fréquents de l'OCR : { } | ¦ ‘ isolés, ponctuation en tête.
    text = re.sub(r"(?<=\s)[{}|¦‘](?=\s|\w)", "", text)
    text = re.sub(r"[{}|¦]", "", text)
    text = re.sub(r"^[^\wÀ-ÿ«—(\"']+", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    if len(text) >= 25:
        paragraphs.append(text)

print("\n\n".join(paragraphs))
