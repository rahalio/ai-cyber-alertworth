/**
 * Triage Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/triage.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ActionId = components["schemas"]["ActionId"];
export type AlertId = components["schemas"]["AlertId"];
export type ContainmentAction = components["schemas"]["ContainmentAction"];
export type ContainmentActionCreate = components["schemas"]["ContainmentActionCreate"];
export type ContainmentActionType = components["schemas"]["ContainmentActionType"];
export type ContainmentStatus = components["schemas"]["ContainmentStatus"];
export type OverflowAction = components["schemas"]["OverflowAction"];
export type OverflowRoute = components["schemas"]["OverflowRoute"];
export type OverflowRouteCreate = components["schemas"]["OverflowRouteCreate"];
export type OverflowRouteId = components["schemas"]["OverflowRouteId"];
export type QueuedAlert = components["schemas"]["QueuedAlert"];
export type QueuedAlertId = components["schemas"]["QueuedAlertId"];
export type QueuedAlertListData = components["schemas"]["QueuedAlertListData"];
export type ShiftId = components["schemas"]["ShiftId"];
export type ShiftStatus = components["schemas"]["ShiftStatus"];
export type TriageShift = components["schemas"]["TriageShift"];
export type TriageShiftCreate = components["schemas"]["TriageShiftCreate"];
export type TriageShiftListData = components["schemas"]["TriageShiftListData"];
export type AdmitAlertRequest = components["schemas"]["AdmitAlertRequest"];
export type ContainmentOverrideRequest = components["schemas"]["ContainmentOverrideRequest"];
export type Shift = operations["listTriageShifts"]["responses"]["200"]["content"]["application/json"]["data"];
export type Queue = operations["listTriageQueue"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenTriageShiftRequestInput = NonNullable<operations["openTriageShift"]["requestBody"]>["content"]["application/json"];
export type AdmitAlertToQueueRequestInput = NonNullable<operations["admitAlertToQueue"]["requestBody"]>["content"]["application/json"];
export type RouteOverflowRequestInput = NonNullable<operations["routeOverflow"]["requestBody"]>["content"]["application/json"];
export type ExecuteContainmentActionRequestInput = NonNullable<operations["executeContainmentAction"]["requestBody"]>["content"]["application/json"];
export type OverrideContainmentActionRequestInput = NonNullable<operations["overrideContainmentAction"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListTriageShiftsParams = NonNullable<operations["listTriageShifts"]["parameters"]["query"]>;
export type ListTriageQueueParams = NonNullable<operations["listTriageQueue"]["parameters"]["query"]>;
export type OverrideContainmentActionParams = operations["overrideContainmentAction"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListTriageShiftsResponse = operations["listTriageShifts"]["responses"]["200"]["content"]["application/json"];
export type OpenTriageShiftResponse = operations["openTriageShift"]["responses"]["201"]["content"]["application/json"];
export type ListTriageQueueResponse = operations["listTriageQueue"]["responses"]["200"]["content"]["application/json"];
export type AdmitAlertToQueueResponse = operations["admitAlertToQueue"]["responses"]["201"]["content"]["application/json"];
export type RouteOverflowResponse = operations["routeOverflow"]["responses"]["201"]["content"]["application/json"];
export type ExecuteContainmentActionResponse = operations["executeContainmentAction"]["responses"]["202"]["content"]["application/json"];
export type OverrideContainmentActionResponse = operations["overrideContainmentAction"]["responses"]["200"]["content"]["application/json"];


