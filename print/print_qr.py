"""Writes print/qr.js: QR codes, as SVG paths, for the Torah study word cards.
Each word gets two: the slide opened on that phrase (for an iPad) and its section of Eleven Ladders (for a phone).
Run from the repository root after changing an address: python3 print/print_qr.py (needs: pip install segno)"""
import json, os, re
import segno

BASE = "https://techrabbi.org/jacobs-ladder/"
LINKS = {
    "place-slide": BASE + "#place",
    "place-phone": BASE + "eleven-ladders/#yesharah",
    "stones-slide": BASE + "#stones",
    "stones-phone": BASE + "eleven-ladders/#f-stones",
    "ground-slide": BASE + "#ground",
    "ground-phone": BASE + "eleven-ladders/#dream-kehot",
}

out = {}
for key, url in LINKS.items():
    qr = segno.make(url, error="m")
    svg = qr.svg_inline(border=0, dark="#1b1812", omitsize=True)
    svg = re.sub(r"\s*class=\"segno\"", "", svg)
    svg = svg.replace("<svg ", '<svg shape-rendering="crispEdges" role="img" aria-label="QR code for ' + url + '" ', 1)
    out[key] = {"url": url, "short": url.replace("https://", ""), "svg": svg}

path = os.path.join(os.path.dirname(__file__), "qr.js")
with open(path, "w", encoding="utf-8") as f:
    f.write("/* QR codes for the word cards. Written by print/print_qr.py; don't edit by hand. */\n")
    f.write("window.WORD_QR = " + json.dumps(out, indent=1, ensure_ascii=False) + ";\n")
print("wrote print/qr.js:", ", ".join(out))
