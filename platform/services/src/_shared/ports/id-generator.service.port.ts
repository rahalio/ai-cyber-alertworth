/**
 * IdGeneratorService Port — Alertworth domain prefixes.
 */

import type { DomainCode } from '@alertworth/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  evtId(): string;
  scrId(): string;
  trgId(): string;
  invId(): string;
  bslId(): string;
  ctlId(): string;
  indId(): string;
  rptId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
