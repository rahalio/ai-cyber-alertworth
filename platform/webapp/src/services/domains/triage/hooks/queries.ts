/**
 * Triage Query Hooks
 *
 * React Query hooks for fetching triage data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { triageService } from "../triage.service";

/**
 * Hook to list triage shifts
 *
 * Query key: ["triage", "Shift", ]
 */
export function useShift(params?: Record<string, any>) {
  return useTenantQuery(
    ["triage", "Shift", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return triageService.getShift(params, signal);
    }
  );
}

/**
 * Hook to list capacity-capped triage queue
 *
 * Query key: ["triage", "Queue", ]
 */
export function useQueue(params?: Record<string, any>) {
  return useTenantQuery(
    ["triage", "Queue", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return triageService.getQueue(params, signal);
    }
  );
}
