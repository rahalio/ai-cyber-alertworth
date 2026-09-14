/**
 * Events Domain Contracts
 *
 * Re-exports Zod schemas from @alertworth/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @alertworth/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @alertworth/core/events for the source schemas
 */

import { eventsSchemas as coreEventsSchemas } from "@alertworth/core/events";
/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
// TODO: Add specific schema exports based on OpenAPI spec
// export const { ResponseMeta, PageInfo } = coreEventsSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const eventsSchemas = coreEventsSchemas;
