/**
 * Triage Mutation Hooks
 *
 * React Query hooks for mutating triage data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { triageService } from "../triage.service";
// TODO: Import types
// import type { ... } from "../triage.api-types";

/**
 * Hook to open a triage shift
 *
 * Automatically invalidates triage queries on success.
 */
export function useGetShift() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return triageService.getShift(data);
    },
    {
      invalidateQueries: [["triage", "Shift"]],
    }
  );
}

/**
 * Hook to admit alert to triage queue
 *
 * Automatically invalidates triage queries on success.
 */
export function useGetAdmit() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return triageService.getAdmit(data);
    },
    {
      invalidateQueries: [["triage", "Admit"]],
    }
  );
}

/**
 * Hook to route overflow explicitly
 *
 * Automatically invalidates triage queries on success.
 */
export function useGetOverflow() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return triageService.getOverflow(data);
    },
    {
      invalidateQueries: [["triage", "Overflow"]],
    }
  );
}

/**
 * Hook to execute containment action
 *
 * Automatically invalidates triage queries on success.
 */
export function useCreateContainmentAction() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return triageService.createContainmentAction(data);
    },
    {
      invalidateQueries: [["triage", "ContainmentAction"]],
    }
  );
}

/**
 * Hook to override containment action
 *
 * Automatically invalidates triage queries on success.
 */
export function useGetOverride() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return triageService.getOverride(data);
    },
    {
      invalidateQueries: [["triage", "Override"]],
    }
  );
}
