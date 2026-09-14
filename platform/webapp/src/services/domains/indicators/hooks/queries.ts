/**
 * Indicators Query Hooks
 *
 * React Query hooks for fetching indicators data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { indicatorsService } from "../indicators.service";

/**
 * Hook to list key risk indicators
 *
 * Query key: ["indicators", "Kri", ]
 */
export function useKri(params?: Record<string, any>) {
  return useTenantQuery(
    ["indicators", "Kri", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return indicatorsService.getKri(params, signal);
    }
  );
}
