'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_CAPACITY, MOCK_QUEUE } from '@/lib/mock-data';

/**
 * Placeholder hook — swap body for generated triage/scoring services.
 */
export function useShiftQueue() {
  return useQuery({
    queryKey: ['queue', 'shift'],
    queryFn: async () => {
      // TODO: call generated services once codegen lands
      await new Promise((r) => setTimeout(r, 80));
      return {
        capacity: MOCK_CAPACITY,
        alerts: [...MOCK_QUEUE].sort((a, b) => b.worth - a.worth),
        minutesReturnedSpark: [12, 18, 9, 22, 15, 28, 31],
      };
    },
  });
}
