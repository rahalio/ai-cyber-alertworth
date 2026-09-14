/**
 * Scoring Domain Contracts
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
 * @see @alertworth/core/scoring for the source schemas
 */

import { scoringSchemas as coreScoringSchemas } from "@alertworth/core/scoring";
/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
// TODO: Add specific schema exports based on OpenAPI spec
// export const { ResponseMeta, PageInfo } = coreScoringSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const scoringSchemas = coreScoringSchemas;
