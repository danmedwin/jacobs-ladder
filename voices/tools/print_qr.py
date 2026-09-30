"""Writes voices/print/qr.js: a QR code, as an SVG path, for each group's link and for the take-home card.
Run from the repository root after changing an address: python3 voices/tools/print_qr.py (needs: pip install segno)"""
import json, os, re
import segno

BASE = "https://techrabbi.org/jacobs-ladder/"
LINKS = {
    "k2": BASE + "voices/#k2",
    "g34": BASE + "voices/#g34",
    "g57": BASE + "voices/#g57",
    "parents": BASE + "voices/#parents",
    "opening": BASE + "voices/#opening",
    "dream": BASE + "dream/",
}

out = {}
for key, url in LINKS.items():
    qr = segno.make(url, error="m")
    svg = qr.svg_inline(border=0, dark="#1b1812", omitsize=True)
    svg = re.sub(r"\s*class=\"segno\"", "", svg)
    svg = svg.replace("<svg ", '<svg shape-rendering="crispEdges" role="img" aria-label="QR code for ' + url + '" ', 1)
    out[key] = {"url": url, "short": url.replace("https://", ""), "svg": svg}

path = os.path.join(os.path.dirname(__file__), "..", "print", "qr.js")
with open(path, "w", encoding="utf-8") as f:
    f.write("/* QR codes for the printables. Written by voices/tools/print_qr.py; don't edit by hand. */\n")
    f.write("window.PRINT_QR = " + json.dumps(out, indent=1, ensure_ascii=False) + ";\n")
print("wrote voices/print/qr.js:", ", ".join(out))
