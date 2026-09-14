/**
 * Reporting Query Hooks
 *
 * React Query hooks for fetching reporting data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { reportingService } from "../reporting.service";

/**
 * Hook to list residual risk snapshots
 *
 * Query key: ["reporting", "Snapshot", ]
 */
export function useSnapshot(params?: Record<string, any>) {
  return useTenantQuery(
    ["reporting", "Snapshot", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return reportingService.getSnapshot(params, signal);
    }
  );
}

/**
 * Hook to get cyber risk appetite
 *
 * Query key: ["reporting", "CyberRiskAppetite", ]
 */
export function useCyberRiskAppetite(params?: Record<string, any>) {
  return useTenantQuery(
    ["reporting", "CyberRiskAppetite", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return reportingService.getCyberRiskAppetite(params, signal);
    }
  );
}
