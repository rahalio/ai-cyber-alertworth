'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_KRIS } from '@/lib/mock-data';

export function useKrisBoard() {
  return useQuery({
    queryKey: ['kris', 'board'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 60));
      return MOCK_KRIS;
    },
  });
}
