/**
 * Scoring Query Hooks
 *
 * React Query hooks for fetching scoring data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { scoringService } from "../scoring.service";

/**
 * Hook to list alerts with economic scores
 *
 * Query key: ["scoring", "Alert", ]
 */
export function useAlert(params?: Record<string, any>) {
  return useTenantQuery(
    ["scoring", "Alert", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return scoringService.getAlert(params, signal);
    }
  );
}

/**
 * Hook to get alert economic score
 *
 * Query key: ["scoring", "Score", alertId]
 */
export function useScore(alertId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["scoring", "Score", alertId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return scoringService.getScore(alertId, params, signal);
    },
    {
      enabled: !!alertId
    }
  );
}

/**
 * Hook to list dismissal policies
 *
 * Query key: ["scoring", "DismissalPolicy", ]
 */
export function useDismissalPolicy(params?: Record<string, any>) {
  return useTenantQuery(
    ["scoring", "DismissalPolicy", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return scoringService.getDismissalPolicy(params, signal);
    }
  );
}
