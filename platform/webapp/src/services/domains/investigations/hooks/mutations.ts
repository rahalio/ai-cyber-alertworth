/**
 * Investigations Mutation Hooks
 *
 * React Query hooks for mutating investigations data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { investigationsService } from "../investigations.service";
// TODO: Import types
// import type { ... } from "../investigations.api-types";

/**
 * Hook to open an investigation case
 *
 * Automatically invalidates investigations queries on success.
 */
export function useGetInvestigation() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return investigationsService.getInvestigation(data);
    },
    {
      invalidateQueries: [["investigations", "Investigation"]],
    }
  );
}

/**
 * Hook to record investigation disposition
 *
 * Automatically invalidates investigations queries on success.
 */
export function useGetDisposition() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return investigationsService.getDisposition(data);
    },
    {
      invalidateQueries: [["investigations", "Disposition"]],
    }
  );
}

/**
 * Hook to challenge auto-dismissal into queue
 *
 * Automatically invalidates investigations queries on success.
 */
export function useGetChallengeDismissal() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return investigationsService.getChallengeDismissal(data);
    },
    {
      invalidateQueries: [["investigations", "ChallengeDismissal"]],
    }
  );
}
