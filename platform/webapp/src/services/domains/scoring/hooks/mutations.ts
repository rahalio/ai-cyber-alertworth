/**
 * Scoring Mutation Hooks
 *
 * React Query hooks for mutating scoring data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { scoringService } from "../scoring.service";
// TODO: Import types
// import type { ... } from "../scoring.api-types";

/**
 * Hook to create dismissal policy
 *
 * Automatically invalidates scoring queries on success.
 */
export function useCreateDismissalPolicy() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return scoringService.createDismissalPolicy(data);
    },
    {
      invalidateQueries: [["scoring", "DismissalPolicy"]],
    }
  );
}

/**
 * Hook to approve dismissal policy
 *
 * Automatically invalidates scoring queries on success.
 */
export function useCreateApprove() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return scoringService.createApprove(data);
    },
    {
      invalidateQueries: [["scoring", "Approve"]],
    }
  );
}

/**
 * Hook to run dismissal back-test
 *
 * Automatically invalidates scoring queries on success.
 */
export function useCreateBackTest() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return scoringService.createBackTest(data);
    },
    {
      invalidateQueries: [["scoring", "BackTest"]],
    }
  );
}
