// Writes the printables' PDFs to voices/print/pdf/ and a small preview of each to voices/print/pdf/previews/.
// Run from the repository root after changing a rung, a portrait, or a printable:
//   node voices/tools/print_pdfs.mjs
// Needs Playwright with Chromium once: npm install --no-save playwright && npx playwright install chromium
// (or point PW_PATH at an installed copy of the playwright package).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW_PATH || 'playwright');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = path.join(ROOT, 'voices', 'print', 'pdf');
const PAGES = ['guides', 'rung-key', 'ladder', 'strips', 'table-card', 'bedtime'];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };

// A small static server, so the pages load their fonts and data the way they do on the site
const server = http.createServer((req, res) => {
  const file = path.join(ROOT, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}/voices/print/`;

fs.mkdirSync(path.join(OUT, 'previews'), { recursive: true });
const browser = await chromium.launch({ args: ['--font-render-hinting=none'] });  // even letter spacing on Linux
let failed = false;
for (const name of PAGES) {
  const page = await browser.newPage({ viewport: { width: 1100, height: 1700 }, deviceScaleFactor: 0.6 });
  const problems = [];
  page.on('pageerror', e => problems.push(e.message));
  page.on('requestfailed', r => problems.push('could not load ' + r.url()));
  await page.goto(base + name + '.html', { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => Promise.all([...document.images].map(i => i.decode().catch(() => {}))));
  await page.evaluate(() => window.P.shrinkPortraits(360));
  const sheets = await page.$$('.sheet');
  if (!sheets.length) problems.push('no sheets on the page');
  else await sheets[0].screenshot({ path: path.join(OUT, 'previews', name + '.jpg'), type: 'jpeg', quality: 82 });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: path.join(OUT, name + '.pdf'), preferCSSPageSize: true, printBackground: true });
  console.log(`${problems.length ? '✗' : '✓'} ${name}.pdf (${sheets.length} ${sheets.length === 1 ? 'page' : 'pages'})` + (problems.length ? ': ' + problems.join('; ') : ''));
  if (problems.length) failed = true;
  await page.close();
}
await browser.close();
server.close();
if (failed) process.exitCode = 1;
