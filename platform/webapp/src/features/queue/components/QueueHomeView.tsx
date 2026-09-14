'use client';

import Link from 'next/link';
import { CapacityMeter } from '@/components/capacity-meter';
import { WorthScoreChip } from '@/components/worth-score-chip';
import { PageHeader, SecondaryButton } from '@/components/ui';
import { useShiftQueue } from '../hooks/use-shift-queue';

function money(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
}

export function QueueHomeView() {
  const { data, isLoading } = useShiftQueue();

  return (
    <div>
      <PageHeader
        brandMark
        title="Shift queue"
        subtitle="Fill human triage to declared capacity by worth, not volume."
        actions={
          <div className="flex gap-2">
            <SecondaryButton type="button">Challenge dismiss</SecondaryButton>
            <SecondaryButton type="button">End shift</SecondaryButton>
          </div>
        }
      />

      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading queue…</p>
      ) : (
        <div className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
            <CapacityMeter
              filled={data.capacity.filled}
              declared={data.capacity.declared}
              shiftLead={data.capacity.shiftLead}
            />
            <div className="rounded-md border border-rule bg-panel p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel">
                Minutes returned
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-minutes">
                {data.minutesReturnedSpark.reduce((a, b) => a + b, 0)}
                <span className="text-sm font-normal text-steel"> min</span>
              </p>
              <div className="mt-3 flex h-8 items-end gap-1">
                {data.minutesReturnedSpark.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-minutes/70"
                    style={{ height: `${(v / 35) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto rounded-md border border-rule">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead className="bg-panel text-[11px] uppercase tracking-wide text-steel">
                <tr>
                  <th className="border-b border-rule px-3 py-2 font-medium">Worth</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Alert</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Loss if ignored</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Effort</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Attack</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Freq</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Prior</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">Legacy sev</th>
                  <th className="border-b border-rule px-3 py-2 font-medium">State</th>
                </tr>
              </thead>
              <tbody>
                {data.alerts.map((row) => (
                  <tr
                    key={row.id}
                    className="animate-admit border-b border-rule/80 hover:bg-panel/80"
                  >
                    <td className="px-3 py-2">
                      <WorthScoreChip worth={row.worth} />
                    </td>
                    <td className="px-3 py-2">
                      <Link
                        href={`/investigations/case_${row.id.slice(-4)}`}
                        className="font-medium text-ink hover:text-worth"
                      >
                        {row.title}
                      </Link>
                      <div className="font-mono text-[11px] text-steel">{row.id}</div>
                    </td>
                    <td className="px-3 py-2 tabular-nums text-ink">
                      {money(row.lossIfIgnored)}
                    </td>
                    <td className="px-3 py-2 tabular-nums text-steel">
                      {row.effortMinutes}m
                    </td>
                    <td className="px-3 py-2 text-steel">{row.attackType}</td>
                    <td className="px-3 py-2 text-steel">{row.frequency}</td>
                    <td className="px-3 py-2 text-steel">{row.priorDisposition}</td>
                    <td className="px-3 py-2 text-steel">{row.legacySeverity}</td>
                    <td className="px-3 py-2">
                      <span className="text-xs uppercase tracking-wide text-steel">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
