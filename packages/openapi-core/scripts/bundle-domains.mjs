#!/usr/bin/env node
import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src', '.bundled');
mkdirSync(outDir, { recursive: true });

const domains = [
  'identity',
  'events',
  'scoring',
  'triage',
  'investigations',
  'baselines',
  'controls',
  'indicators',
  'reporting',
];

for (const domain of domains) {
  for (const [ext] of [
    ['openapi.yaml'],
    ['json'],
  ]) {
    const output = join(outDir, `${domain}.${ext === 'json' ? 'json' : 'openapi.yaml'}`);
    const r = spawnSync(
      'pnpm',
      ['exec', 'redocly', 'bundle', domain, '--output', output],
      { cwd: root, stdio: 'inherit', shell: false }
    );
    if (r.status !== 0) process.exit(r.status ?? 1);
  }
  console.log(`bundled ${domain}`);
}
