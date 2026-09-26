# Jacob’s Ladder · סולם יעקב

An interactive Talmud-page (daf) slide for a scholar-in-residence session on Parashat Vayeitzei.

Genesis 28:10–18 in the Revised JPS sits in the center, where the Gemara would be. Six key phrases are
highlighted. Selecting one shows how twelve translations render it and the AI images those wordings
produced (Google’s gemini-3-pro-image model), with notes from Rashi, the midrash, and Robert Alter.

Single-file webpage (`index.html`) with images in `img/`, sized as a 16:9 slide that scales to any screen.
Present it full screen: click a phrase or use the arrow keys (or 1–6), and click the large image to enlarge it.
Live at techrabbi.org/jacobs-ladder.

The companion page, `eleven-ladders/`, holds the full experiment behind the slide: twelve translations sent word for word
to the image model, the dream verses alone, instruction lenses, midrash as the prompt, eleven public-domain artworks
from Wikimedia Commons, and a chevrutah prompt lab with a prompt builder. Each phrase on the slide links to its section,
and the QR code in the slide’s bottom band opens it on a phone. Live at techrabbi.org/jacobs-ladder/eleven-ladders.

Images are shared by both pages: AI images in `img/`, artworks in `art/`.

Base text: The JPS Tanakh: Gender-Sensitive Edition (Revised JPS, 2023), CC BY-NC, via Sefaria.
Other translations are quoted only in short phrases.
