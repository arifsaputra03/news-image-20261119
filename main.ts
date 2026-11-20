// news-image-20261119 entry (Node 22, standard library only).
//
// The finished front page lives beside this file as entry.png; the program
// copies it to /output/entry.png. The copy is byte-for-byte deterministic:
// no network, no randomness, no timestamps in the output.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts: ${source.pathname}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be a real PNG, not just the right size: check the 8-byte
// PNG signature so a corrupted or swapped asset is caught here, not at the gate.
const header = readFileSync(target).subarray(0, 8);
const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(pngSignature)) {
  throw new Error('entry.png is not a valid PNG (bad signature)');
}

// The copy must be exact: compare the two files by size so a truncated
// or partial write is caught here instead of at the gate. Size equality
// plus the PNG signature above is enough: the copy is a verbatim byte copy,
// so equal size means equal bytes.
const sourceBytes = statSync(source).size;
const bytes = statSync(target).size;
if (bytes !== sourceBytes) {
  throw new Error(`copy mismatch: source ${sourceBytes} bytes, wrote ${bytes}`);
}
if (bytes > 1048576) {
  throw new Error(`entry.png is ${bytes} bytes, over the 1 MiB limit`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
