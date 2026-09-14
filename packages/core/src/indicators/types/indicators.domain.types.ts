/**
 * Indicators Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/indicators.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EvidenceRecord = components["schemas"]["EvidenceRecord"];
export type FreshnessState = components["schemas"]["FreshnessState"];
export type KeyRiskIndicator = components["schemas"]["KeyRiskIndicator"];
export type KeyRiskIndicatorCreate = components["schemas"]["KeyRiskIndicatorCreate"];
export type KeyRiskIndicatorListData = components["schemas"]["KeyRiskIndicatorListData"];
export type KriId = components["schemas"]["KriId"];
export type Kri = operations["listKeyRiskIndicators"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type DefineKeyRiskIndicatorRequestInput = NonNullable<operations["defineKeyRiskIndicator"]["requestBody"]>["content"]["application/json"];
export type RefreshKeyRiskIndicatorRequestInput = NonNullable<operations["refreshKeyRiskIndicator"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListKeyRiskIndicatorsParams = NonNullable<operations["listKeyRiskIndicators"]["parameters"]["query"]>;
export type RefreshKeyRiskIndicatorParams = operations["refreshKeyRiskIndicator"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListKeyRiskIndicatorsResponse = operations["listKeyRiskIndicators"]["responses"]["200"]["content"]["application/json"];
export type DefineKeyRiskIndicatorResponse = operations["defineKeyRiskIndicator"]["responses"]["201"]["content"]["application/json"];
export type RefreshKeyRiskIndicatorResponse = operations["refreshKeyRiskIndicator"]["responses"]["200"]["content"]["application/json"];


