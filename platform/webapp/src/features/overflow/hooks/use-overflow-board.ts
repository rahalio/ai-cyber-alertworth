'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_OVERFLOW } from '@/lib/mock-data';

export function useOverflowBoard() {
  return useQuery({
    queryKey: ['overflow', 'board'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 60));
      return MOCK_OVERFLOW;
    },
  });
}
