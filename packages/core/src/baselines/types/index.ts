/**
 * Baselines Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/baselines.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AnomalyDetection = components["schemas"]["AnomalyDetection"];
export type AnomalyDetectionListData = components["schemas"]["AnomalyDetectionListData"];
export type AnomalyId = components["schemas"]["AnomalyId"];
export type AnomalyStatus = components["schemas"]["AnomalyStatus"];
export type AttackPath = components["schemas"]["AttackPath"];
export type AttackPathDecision = components["schemas"]["AttackPathDecision"];
export type AttackPathListData = components["schemas"]["AttackPathListData"];
export type AttackPathStatus = components["schemas"]["AttackPathStatus"];
export type BaselineId = components["schemas"]["BaselineId"];
export type BaselineStatus = components["schemas"]["BaselineStatus"];
export type BehaviourBaseline = components["schemas"]["BehaviourBaseline"];
export type BehaviourBaselineCreate = components["schemas"]["BehaviourBaselineCreate"];
export type BehaviourBaselineListData = components["schemas"]["BehaviourBaselineListData"];
export type PathId = components["schemas"]["PathId"];
export type AttackPathDecisionRequest = components["schemas"]["AttackPathDecisionRequest"];
export type Baseline = operations["listBehaviourBaselines"]["responses"]["200"]["content"]["application/json"]["data"];
export type Anomaly = operations["listAnomalyDetections"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateBehaviourBaselineRequestInput = NonNullable<operations["createBehaviourBaseline"]["requestBody"]>["content"]["application/json"];
export type DecideAttackPathRecommendationRequestInput = NonNullable<operations["decideAttackPathRecommendation"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListBehaviourBaselinesParams = NonNullable<operations["listBehaviourBaselines"]["parameters"]["query"]>;
export type ActivateBehaviourBaselineParams = operations["activateBehaviourBaseline"]["parameters"]["path"];
export type ListAnomalyDetectionsParams = NonNullable<operations["listAnomalyDetections"]["parameters"]["query"]>;
export type ListAttackPathsParams = NonNullable<operations["listAttackPaths"]["parameters"]["query"]>;
export type DecideAttackPathRecommendationParams = operations["decideAttackPathRecommendation"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListBehaviourBaselinesResponse = operations["listBehaviourBaselines"]["responses"]["200"]["content"]["application/json"];
export type CreateBehaviourBaselineResponse = operations["createBehaviourBaseline"]["responses"]["201"]["content"]["application/json"];
export type ActivateBehaviourBaselineResponse = operations["activateBehaviourBaseline"]["responses"]["200"]["content"]["application/json"];
export type ListAnomalyDetectionsResponse = operations["listAnomalyDetections"]["responses"]["200"]["content"]["application/json"];
export type ListAttackPathsResponse = operations["listAttackPaths"]["responses"]["200"]["content"]["application/json"];
export type DecideAttackPathRecommendationResponse = operations["decideAttackPathRecommendation"]["responses"]["200"]["content"]["application/json"];


