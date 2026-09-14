/**
 * Events Mutation Hooks
 *
 * React Query hooks for mutating events data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { eventsService } from "../events.service";
// TODO: Import types
// import type { ... } from "../events.api-types";

/**
 * Hook to ingest a security event
 *
 * Automatically invalidates events queries on success.
 */
export function useGetEvent() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return eventsService.getEvent(data);
    },
    {
      invalidateQueries: [["events", "Event"]],
    }
  );
}
