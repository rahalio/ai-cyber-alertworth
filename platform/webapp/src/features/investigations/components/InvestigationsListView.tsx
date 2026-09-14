'use client';

import Link from 'next/link';
import { WorthScoreChip } from '@/components/worth-score-chip';
import { PageHeader } from '@/components/ui';
import { useInvestigationsList } from '../hooks/use-investigations';

export function InvestigationsListView() {
  const { data, isLoading } = useInvestigationsList();

  return (
    <div>
      <PageHeader
        title="Investigations"
        subtitle="Cases opened from worth-first queue claims and hunter escalations."
      />
      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading cases…</p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-rule">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-panel text-[11px] uppercase tracking-wide text-steel">
              <tr>
                <th className="border-b border-rule px-3 py-2 font-medium">Case</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Worth</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Status</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Assignee</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Opened</th>
              </tr>
            </thead>
            <tbody>
              {data.map((c) => (
                <tr key={c.id} className="border-b border-rule/80 hover:bg-panel/80">
                  <td className="px-3 py-2">
                    <Link
                      href={`/investigations/${c.id}`}
                      className="font-medium text-ink hover:text-worth"
                    >
                      {c.title}
                    </Link>
                    <div className="font-mono text-[11px] text-steel">{c.id}</div>
                  </td>
                  <td className="px-3 py-2">
                    <WorthScoreChip worth={c.worth} />
                  </td>
                  <td className="px-3 py-2 text-xs uppercase tracking-wide text-steel">
                    {c.status}
                  </td>
                  <td className="px-3 py-2 text-steel">{c.assignee}</td>
                  <td className="px-3 py-2 font-mono text-xs text-steel">
                    {c.openedAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
