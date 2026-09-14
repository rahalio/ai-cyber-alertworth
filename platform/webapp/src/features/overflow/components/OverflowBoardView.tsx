'use client';

import { WorthScoreChip } from '@/components/worth-score-chip';
import { PageHeader, SecondaryButton } from '@/components/ui';
import { useOverflowBoard } from '../hooks/use-overflow-board';

const ROUTE_LABEL = {
  defer: 'Defer',
  'auto-contain': 'Auto-contain',
  mdr: 'MDR escalate',
} as const;

export function OverflowBoardView() {
  const { data, isLoading } = useOverflowBoard();

  return (
    <div>
      <PageHeader
        title="Overflow board"
        subtitle="Explicit defer / auto-contain / MDR when capacity breaches — never silent drop."
      />
      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading overflow…</p>
      ) : data.length === 0 ? (
        <p className="rounded-md border border-rule bg-panel px-4 py-6 text-sm text-minutes">
          Within capacity — overflow empty.
        </p>
      ) : (
        <div className="space-y-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-overflow/40 bg-panel px-4 py-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <WorthScoreChip worth={item.worth} />
                  <span className="font-medium text-ink">{item.title}</span>
                </div>
                <p className="mt-1 font-mono text-[11px] text-steel">{item.id}</p>
                <p className="mt-1 text-xs text-steel">{item.note}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {(['defer', 'auto-contain', 'mdr'] as const).map((route) => (
                  <SecondaryButton
                    key={route}
                    type="button"
                    className={
                      item.suggestedRoute === route
                        ? 'border-overflow text-overflow'
                        : ''
                    }
                  >
                    {ROUTE_LABEL[route]}
                  </SecondaryButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
