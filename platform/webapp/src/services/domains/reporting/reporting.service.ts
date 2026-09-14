/**
 * Reporting Service
 *
 * API client for reporting domain.
 * Uses ApiResponse<T> pattern - response.data is already T.
 *
 * TODO(client): Migrate all endpoints to typed client when generated.
 * Currently using apiClient.get/post() as temporary fallback.
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";
import { getEffectiveOrgId } from "@/services/shared/infrastructure/tenant-state";
import { validateApiResponse, formatValidationError } from "@/services/shared/contracts";
// TODO: Import schemas from contracts
// import { ... } from "./contracts";
// TODO: Import types from api-types
// import type { ... } from "./reporting.api-types";

// ============================================================================
// Response Type Definitions (for API responses)
// ============================================================================

const rawReportingService = {
  /**
   * List residual risk snapshots
   */
  async getSnapshot(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const orgId = getEffectiveOrgId();
    if (!orgId) {
      throw new Error("Organization ID is required");
    }

    const url = `/orgs/${orgId}//v1/residual-risk/snapshots` + (params ? `?${new URLSearchParams(params).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Publish residual risk snapshot
   */
  async getSnapshot_2(data?: any, signal?: AbortSignal): Promise<any> {
    const orgId = getEffectiveOrgId();
    if (!orgId) {
      throw new Error("Organization ID is required");
    }

    const url = `/orgs/${orgId}//v1/residual-risk/snapshots`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Get cyber risk appetite
   */
  async getCyberRiskAppetite(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const orgId = getEffectiveOrgId();
    if (!orgId) {
      throw new Error("Organization ID is required");
    }

    const url = `/orgs/${orgId}//v1/cyber-risk-appetite` + (params ? `?${new URLSearchParams(params).toString()}` : '');

    // TODO(client): migrate when generated
    const response = await apiClient.get<any>(url, {

      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Update cyber risk appetite
   */
  async updateCyberRiskAppetite(data?: any, signal?: AbortSignal): Promise<any> {
    const orgId = getEffectiveOrgId();
    if (!orgId) {
      throw new Error("Organization ID is required");
    }

    const url = `/orgs/${orgId}//v1/cyber-risk-appetite`;

    // TODO(client): migrate when generated
    const response = await apiClient.put<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  },

  /**
   * Assemble committee pack
   */
  async getCommitteePack(data?: any, signal?: AbortSignal): Promise<any> {
    const orgId = getEffectiveOrgId();
    if (!orgId) {
      throw new Error("Organization ID is required");
    }

    const url = `/orgs/${orgId}//v1/committee-packs`;

    // TODO(client): migrate when generated
    const response = await apiClient.post<any>(url, {
      body: data,
      signal,
    });

    // TODO: Validate response with Zod schema
    // const validation = validateApiResponse(
    //   ResponseSchema,
    //   response
    // );

    return response.data;
  }
};

// Wrap service with error handling and logging
export const reportingService = makeService(rawReportingService, "reporting");
