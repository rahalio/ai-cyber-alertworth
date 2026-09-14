/**
 * Postman-collection 1:1 Vitest tests for reporting (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  cursor: "",
  limit: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / reporting (1:1 generated)", () => {

  it("listResidualRiskSnapshots", async () => {
    const url = sub("{{baseUrl}}/v1/residual-risk/snapshots?cursor={{cursor}}&limit={{limit}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("publishResidualRiskSnapshot", async () => {
    const url = sub("{{baseUrl}}/v1/residual-risk/snapshots");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"asOf\": \"\",\n  \"audience\": \"operations\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("getCyberRiskAppetite", async () => {
    const url = sub("{{baseUrl}}/v1/cyber-risk-appetite");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateCyberRiskAppetite", async () => {
    const url = sub("{{baseUrl}}/v1/cyber-risk-appetite");
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"id\": \"\",\n  \"version\": \"\",\n  \"narrative\": \"\",\n  \"thresholds\": null,\n  \"approvedBy\": \"\",\n  \"approvedAt\": \"\",\n  \"createdAt\": \"\",\n  \"updatedAt\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['cyberRiskAppetiteId'] = j.data.id;
  });

  it("assembleCommitteePack", async () => {
    const url = sub("{{baseUrl}}/v1/committee-packs");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"snapshotId\": \"newman_snapshotId\",\n  \"committee\": \"audit_risk\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
