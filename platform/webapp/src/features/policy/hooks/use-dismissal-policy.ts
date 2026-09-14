'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_POLICY } from '@/lib/mock-data';

export function useDismissalPolicy() {
  return useQuery({
    queryKey: ['policy', 'dismissal'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 60));
      return MOCK_POLICY;
    },
  });
}
