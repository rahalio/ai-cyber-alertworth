# Webapp domain services

This directory is filled by **zero-codegen** (`layers.webapp.services`).

Expected layout per domain:

```
src/services/domains/{domain}/
  contracts/          # Zod re-exports from @alertworth/core
  hooks/              # React Query queries + mutations
  {domain}.service.ts
  facade.ts
  {domain}.api-types.ts
  index.ts
```

Run from repo root:

```bash
PYTHONPATH=.codegen/codegen/src python3 -m zero_codegen.cli.main generate \
  --domain events --domain triage --domain scoring --domain investigations \
  --domain indicators --domain reporting \
  --layers webapp \
  --config .codegen/.zero-codegen-merged.json \
  --skip-build --no-fail-fast
```

After generate, replace any leftover `@ddd/` imports with `@alertworth/`. Generated stubs may need light syntax fixes (object commas, empty `export type {}`) until the generator hardens.

Handwritten SOC screens live under `src/features/{queue,overflow,policy,kris,investigations}` and call mock hooks until wired to these clients.
