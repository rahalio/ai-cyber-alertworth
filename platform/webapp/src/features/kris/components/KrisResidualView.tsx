'use client';

import { FreshnessBadge } from '@/components/freshness-badge';
import { PageHeader, Panel } from '@/components/ui';
import { useKrisBoard } from '../hooks/use-kris-board';

export function KrisResidualView() {
  const { data, isLoading } = useKrisBoard();

  return (
    <div>
      <PageHeader
        brandMark
        title="KRIs / residual risk"
        subtitle="Residual cyber risk vs appetite. KRIs degrade when evidence is stale — never paint green on thin data."
      />
      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading KRIs…</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {data.map((kri) => (
            <Panel key={kri.id} className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-ink">{kri.name}</p>
                <FreshnessBadge
                  freshnessHours={kri.freshnessHours}
                  freshThresholdHours={kri.freshThresholdHours}
                />
              </div>
              <p className="font-display text-xl font-semibold text-ink">
                {kri.value}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span
                  className={
                    kri.residual === 'breach'
                      ? 'uppercase tracking-wide text-overflow'
                      : 'uppercase tracking-wide text-minutes'
                  }
                >
                  {kri.residual === 'breach' ? 'Appetite breach' : 'Within appetite'}
                </span>
                <span className="text-steel">{kri.owner}</span>
              </div>
            </Panel>
          ))}
        </div>
      )}
    </div>
  );
}
