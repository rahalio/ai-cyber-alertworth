'use client';

import Link from 'next/link';
import { WorthScoreChip } from '@/components/worth-score-chip';
import { PageHeader, Panel, SecondaryButton } from '@/components/ui';
import { useInvestigationCase } from '../hooks/use-investigations';

export function InvestigationWorkspaceView({ id }: { id: string }) {
  const { data, isLoading } = useInvestigationCase(id);

  return (
    <div>
      <PageHeader
        title="Case workspace"
        subtitle={
          <Link href="/investigations" className="text-worth hover:underline">
            ← All investigations
          </Link>
        }
      />
      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading case…</p>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
          <Panel>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <WorthScoreChip worth={data.worth} />
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {data.title}
                  </h2>
                </div>
                <p className="mt-2 font-mono text-xs text-steel">{data.id}</p>
              </div>
              <span className="text-xs uppercase tracking-wide text-steel">
                {data.status}
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-rule/80 p-3">
                <p className="text-[10px] uppercase tracking-wide text-steel">
                  Entity graph
                </p>
                <p className="mt-2 text-sm text-steel">Stub — related entities TBD</p>
              </div>
              <div className="rounded-sm border border-rule/80 p-3">
                <p className="text-[10px] uppercase tracking-wide text-steel">
                  Timeline
                </p>
                <p className="mt-2 text-sm text-steel">Stub — SIEM deep links TBD</p>
              </div>
            </div>
          </Panel>
          <Panel className="space-y-3">
            <p className="text-[10px] uppercase tracking-wide text-steel">
              Disposition
            </p>
            <p className="text-sm text-steel">Assignee: {data.assignee}</p>
            <SecondaryButton type="button" className="w-full">
              Escalate
            </SecondaryButton>
            <SecondaryButton type="button" className="w-full">
              Close with disposition
            </SecondaryButton>
            <SecondaryButton type="button" className="w-full">
              Force-queue from dismissed
            </SecondaryButton>
          </Panel>
        </div>
      )}
    </div>
  );
}
