# Alertworth (`ai-cyber-alertworth`)

Detection-economics operating system for Canadian enterprise SOCs. Scores alerts by expected loss if ignored versus analyst effort, fills a capacity-capped triage queue, and reports residual cyber risk only as high as detection evidence is fresh.

Package scope: **`@alertworth/*`**

Product docs: [PRODUCT.md](./PRODUCT.md) · [USER_STORIES.md](./USER_STORIES.md) · [WEBAPP.md](./WEBAPP.md)

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ OpenAPI (one YAML per domain)                              ports↑        impl↑              HTTP↑
                                                                              platform/webapp (SOC console)
```

OpenAPI domains: `identity` (auth blueprint) + `events`, `scoring`, `triage`, `investigations`, `baselines`, `controls`, `indicators`, `reporting`.

## Quick start

```bash
pnpm install
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api   # http://127.0.0.1:4000
pnpm dev:web   # http://127.0.0.1:3000
# Demo key: X-API-Key: alertworth_demo_local_dev_key
```

Optional Dynamo Local:

```bash
docker compose up -d
TABLE_NAME=alertworth-core-local AWS_ENDPOINT_URL=http://localhost:8000 node scripts/ensure-dynamo-table.mjs
```

## Codegen rules

1. **New domain** → full multi-layer generate once (Mode A): `pnpm codegen:domains`
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B): `pnpm codegen:core`
3. Keep envelopes (`{ data, meta }`), nested DI, and identity middleware intact.

Config: `.codegen/.zero-codegen-merged.json`  
Tool: `PYTHONPATH=.codegen/codegen/src python3 -m zero_codegen.cli.main`

See `.cursor/skills/` and [docs/CODEGEN.md](docs/CODEGEN.md).
