/**
 * Scoring Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/scoring.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Alert = components["schemas"]["Alert"];
export type AlertDisposition = components["schemas"]["AlertDisposition"];
export type AlertId = components["schemas"]["AlertId"];
export type AlertListData = components["schemas"]["AlertListData"];
export type DismissalBackTest = components["schemas"]["DismissalBackTest"];
export type DismissalPolicy = components["schemas"]["DismissalPolicy"];
export type DismissalPolicyCreate = components["schemas"]["DismissalPolicyCreate"];
export type DismissalPolicyListData = components["schemas"]["DismissalPolicyListData"];
export type EconomicScore = components["schemas"]["EconomicScore"];
export type PolicyId = components["schemas"]["PolicyId"];
export type PolicyStatus = components["schemas"]["PolicyStatus"];
export type DismissalBackTestRequest = components["schemas"]["DismissalBackTestRequest"];
export type DismissalPolicyApproveRequest = components["schemas"]["DismissalPolicyApproveRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateDismissalPolicyRequestInput = NonNullable<operations["createDismissalPolicy"]["requestBody"]>["content"]["application/json"];
export type ApproveDismissalPolicyRequestInput = NonNullable<operations["approveDismissalPolicy"]["requestBody"]>["content"]["application/json"];
export type RunDismissalBackTestRequestInput = NonNullable<operations["runDismissalBackTest"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAlertsParams = NonNullable<operations["listAlerts"]["parameters"]["query"]>;
export type GetAlertEconomicScoreParams = operations["getAlertEconomicScore"]["parameters"]["path"];
export type ApproveDismissalPolicyParams = operations["approveDismissalPolicy"]["parameters"]["path"];
export type RunDismissalBackTestParams = operations["runDismissalBackTest"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAlertsResponse = operations["listAlerts"]["responses"]["200"]["content"]["application/json"];
export type GetAlertEconomicScoreResponse = operations["getAlertEconomicScore"]["responses"]["200"]["content"]["application/json"];
export type ListDismissalPoliciesResponse = operations["listDismissalPolicies"]["responses"]["200"]["content"]["application/json"];
export type CreateDismissalPolicyResponse = operations["createDismissalPolicy"]["responses"]["201"]["content"]["application/json"];
export type ApproveDismissalPolicyResponse = operations["approveDismissalPolicy"]["responses"]["200"]["content"]["application/json"];
export type RunDismissalBackTestResponse = operations["runDismissalBackTest"]["responses"]["200"]["content"]["application/json"];


