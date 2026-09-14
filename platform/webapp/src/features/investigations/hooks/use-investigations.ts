'use client';

import { useQuery } from '@tanstack/react-query';
import { MOCK_CASES } from '@/lib/mock-data';

export function useInvestigationsList() {
  return useQuery({
    queryKey: ['investigations', 'list'],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 60));
      return MOCK_CASES;
    },
  });
}

export function useInvestigationCase(id: string) {
  return useQuery({
    queryKey: ['investigations', id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 60));
      return (
        MOCK_CASES.find((c) => c.id === id) ?? {
          id,
          title: `Case ${id}`,
          worth: 0,
          status: 'open' as const,
          assignee: 'Unassigned',
          openedAt: new Date().toISOString(),
        }
      );
    },
  });
}
