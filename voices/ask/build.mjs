// Bundles src/worker.js and the Anthropic SDK into dist/worker.js: the one file pasted into the Cloudflare editor.
// Run: npm run build
import { build } from 'esbuild';
await build({
  entryPoints: ['src/worker.js'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  conditions: ['workerd', 'worker', 'browser'],
  target: 'es2022',
  minify: true,
  legalComments: 'eof',
  outfile: 'dist/worker.js',
  banner: { js: '/* Voices of the Ladder: Ask anything. Built from voices/ask/src/worker.js with the Anthropic SDK (MIT).\n   Paste this whole file into the Cloudflare Worker editor. Setup: voices/ask/SETUP.md */' }
});
console.log('built dist/worker.js');
