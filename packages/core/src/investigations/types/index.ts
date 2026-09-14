/**
 * Investigations Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/investigations.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AlertId = components["schemas"]["AlertId"];
export type CaseId = components["schemas"]["CaseId"];
export type CaseStatus = components["schemas"]["CaseStatus"];
export type Disposition = components["schemas"]["Disposition"];
export type DispositionCreate = components["schemas"]["DispositionCreate"];
export type InvestigationCase = components["schemas"]["InvestigationCase"];
export type InvestigationCaseCreate = components["schemas"]["InvestigationCaseCreate"];
export type InvestigationCaseListData = components["schemas"]["InvestigationCaseListData"];
export type QueuedAlert = components["schemas"]["QueuedAlert"];
export type QueuedAlertId = components["schemas"]["QueuedAlertId"];
export type ShiftId = components["schemas"]["ShiftId"];
export type ChallengeDismissalRequest = components["schemas"]["ChallengeDismissalRequest"];
export type Investigation = operations["listInvestigations"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenInvestigationRequestInput = NonNullable<operations["openInvestigation"]["requestBody"]>["content"]["application/json"];
export type DisposeInvestigationRequestInput = NonNullable<operations["disposeInvestigation"]["requestBody"]>["content"]["application/json"];
export type ChallengeAutoDismissalRequestInput = NonNullable<operations["challengeAutoDismissal"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListInvestigationsParams = NonNullable<operations["listInvestigations"]["parameters"]["query"]>;
export type DisposeInvestigationParams = operations["disposeInvestigation"]["parameters"]["path"];
export type ChallengeAutoDismissalParams = operations["challengeAutoDismissal"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListInvestigationsResponse = operations["listInvestigations"]["responses"]["200"]["content"]["application/json"];
export type OpenInvestigationResponse = operations["openInvestigation"]["responses"]["201"]["content"]["application/json"];
export type DisposeInvestigationResponse = operations["disposeInvestigation"]["responses"]["200"]["content"]["application/json"];
export type ChallengeAutoDismissalResponse = operations["challengeAutoDismissal"]["responses"]["201"]["content"]["application/json"];


