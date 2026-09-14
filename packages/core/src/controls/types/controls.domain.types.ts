/**
 * Controls Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/controls.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ControlOutcome = components["schemas"]["ControlOutcome"];
export type ControlSchedule = components["schemas"]["ControlSchedule"];
export type ControlTest = components["schemas"]["ControlTest"];
export type ControlTestCreate = components["schemas"]["ControlTestCreate"];
export type ControlTestListData = components["schemas"]["ControlTestListData"];
export type ControlTestResult = components["schemas"]["ControlTestResult"];
export type ControlTestStatus = components["schemas"]["ControlTestStatus"];
export type TestId = components["schemas"]["TestId"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ScheduleControlTestRequestInput = NonNullable<operations["scheduleControlTest"]["requestBody"]>["content"]["application/json"];
export type RecordControlTestResultRequestInput = NonNullable<operations["recordControlTestResult"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListControlTestsParams = NonNullable<operations["listControlTests"]["parameters"]["query"]>;
export type RecordControlTestResultParams = operations["recordControlTestResult"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListControlTestsResponse = operations["listControlTests"]["responses"]["200"]["content"]["application/json"];
export type ScheduleControlTestResponse = operations["scheduleControlTest"]["responses"]["201"]["content"]["application/json"];
export type RecordControlTestResultResponse = operations["recordControlTestResult"]["responses"]["201"]["content"]["application/json"];


