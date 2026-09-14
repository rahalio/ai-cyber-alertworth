/**
 * Events Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/events.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AssetCriticality = components["schemas"]["AssetCriticality"];
export type EventSource = components["schemas"]["EventSource"];
export type SecurityEvent = components["schemas"]["SecurityEvent"];
export type SecurityEventId = components["schemas"]["SecurityEventId"];
export type SecurityEventIngest = components["schemas"]["SecurityEventIngest"];
export type SecurityEventListData = components["schemas"]["SecurityEventListData"];
export type Event = operations["listSecurityEvents"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IngestSecurityEventRequestInput = NonNullable<operations["ingestSecurityEvent"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSecurityEventsParams = NonNullable<operations["listSecurityEvents"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSecurityEventsResponse = operations["listSecurityEvents"]["responses"]["200"]["content"]["application/json"];
export type IngestSecurityEventResponse = operations["ingestSecurityEvent"]["responses"]["202"]["content"]["application/json"];


