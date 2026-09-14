/**
 * Events Query Hooks
 *
 * React Query hooks for fetching events data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { eventsService } from "../events.service";

/**
 * Hook to list security events
 *
 * Query key: ["events", "Event", ]
 */
export function useEvent(params?: Record<string, any>) {
  return useTenantQuery(
    ["events", "Event", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return eventsService.getEvent(params, signal);
    }
  );
}
