/**
 * Investigations Query Hooks
 *
 * React Query hooks for fetching investigations data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { investigationsService } from "../investigations.service";

/**
 * Hook to list investigation cases
 *
 * Query key: ["investigations", "Investigation", ]
 */
export function useInvestigation(params?: Record<string, any>) {
  return useTenantQuery(
    ["investigations", "Investigation", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return investigationsService.getInvestigation(params, signal);
    }
  );
}
