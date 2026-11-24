// make.fun one-line entry writer
// Writes entry.txt into MAKEFUN_OUTPUT_DIR or /output
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const answer = `Petrichor`;

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');

console.log(answer.length);
