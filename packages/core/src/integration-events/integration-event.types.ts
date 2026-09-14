/**
 * Integration event type definitions (hand-maintained contract).
 * Registry entries are generated from OpenAPI `x-integration-events`.
 */

export type IntegrationEventDeliveryMode = 'sync' | 'async';

export interface IntegrationEventTypeDefinition {
  type: string;
  domain: string;
  aggregateType: string;
  description: string;
  defaultDeliveryMode: IntegrationEventDeliveryMode;
}
