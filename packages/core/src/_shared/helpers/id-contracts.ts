/**
 * ID Contracts — Alertworth
 *
 * Format: {prefix}_{ulid} (lowercase Crockford base32 ULID).
 */

export const DOMAIN_PREFIX_MAP = {
  tenant: 'tnt',
  auth: 'aut',
  apiKey: 'key',
  identity: 'idn',
  events: 'evt',
  scoring: 'scr',
  triage: 'trg',
  investigations: 'inv',
  baselines: 'bsl',
  controls: 'ctl',
  indicators: 'ind',
  reporting: 'rpt',
  // resource-level prefixes used in OpenAPI id patterns
  alert: 'alt',
  policy: 'pol',
  shift: 'sft',
  queuedAlert: 'que',
  overflow: 'ovf',
  case: 'cse',
  anomaly: 'anm',
  attackPath: 'ath',
  kri: 'kri',
  residualSnapshot: 'rrs',
  appetite: 'cra',
  committeePack: 'pck',
  containment: 'act',
} as const;

export type DomainCode = keyof typeof DOMAIN_PREFIX_MAP;
export type DomainPrefix = (typeof DOMAIN_PREFIX_MAP)[DomainCode];

export function isValidDomainId(value: string): boolean {
  if (!value || typeof value !== 'string') return false;
  const normalized = value.toLowerCase();
  const idRegex = /^[a-z]{3}_[0-9a-hjkmnp-tv-z]{26}$/;
  return idRegex.test(normalized);
}

export function extractDomainFromId(id: string): DomainCode | null {
  if (!id || typeof id !== 'string') return null;
  const normalized = id.toLowerCase();
  if (!isValidDomainId(normalized)) return null;
  const prefix = normalized.substring(0, 3);
  const entry = Object.entries(DOMAIN_PREFIX_MAP).find(
    ([_, domainPrefix]) => domainPrefix === prefix
  );
  return entry ? (entry[0] as DomainCode) : null;
}
