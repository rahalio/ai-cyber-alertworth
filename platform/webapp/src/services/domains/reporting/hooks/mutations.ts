/**
 * Reporting Mutation Hooks
 *
 * React Query hooks for mutating reporting data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { reportingService } from "../reporting.service";
// TODO: Import types
// import type { ... } from "../reporting.api-types";

/**
 * Hook to publish residual risk snapshot
 *
 * Automatically invalidates reporting queries on success.
 */
export function useGetSnapshot() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return reportingService.getSnapshot(data);
    },
    {
      invalidateQueries: [["reporting", "Snapshot"]],
    }
  );
}

/**
 * Hook to update cyber risk appetite
 *
 * Automatically invalidates reporting queries on success.
 */
export function useUpdateCyberRiskAppetite() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return reportingService.updateCyberRiskAppetite(data);
    },
    {
      invalidateQueries: [["reporting", "CyberRiskAppetite"]],
    }
  );
}

/**
 * Hook to assemble committee pack
 *
 * Automatically invalidates reporting queries on success.
 */
export function useGetCommitteePack() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return reportingService.getCommitteePack(data);
    },
    {
      invalidateQueries: [["reporting", "CommitteePack"]],
    }
  );
}
