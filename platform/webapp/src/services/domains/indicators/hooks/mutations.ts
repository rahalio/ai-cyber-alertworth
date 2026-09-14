/**
 * Indicators Mutation Hooks
 *
 * React Query hooks for mutating indicators data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { indicatorsService } from "../indicators.service";
// TODO: Import types
// import type { ... } from "../indicators.api-types";

/**
 * Hook to define a key risk indicator
 *
 * Automatically invalidates indicators queries on success.
 */
export function useGetKri() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return indicatorsService.getKri(data);
    },
    {
      invalidateQueries: [["indicators", "Kri"]],
    }
  );
}

/**
 * Hook to refresh kri evidence
 *
 * Automatically invalidates indicators queries on success.
 */
export function useUpdateRefresh() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return indicatorsService.updateRefresh(data);
    },
    {
      invalidateQueries: [["indicators", "Refresh"]],
    }
  );
}
