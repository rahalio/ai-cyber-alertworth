'use client';

import { PageHeader, SecondaryButton } from '@/components/ui';
import { useDismissalPolicy } from '../hooks/use-dismissal-policy';

export function DismissalPolicyLabView() {
  const { data, isLoading } = useDismissalPolicy();

  return (
    <div>
      <PageHeader
        title="Dismissal policy lab"
        subtitle="Publish auto-dismiss classes only when false-dismissal back-test clears the accuracy floor."
      />
      {isLoading || !data ? (
        <p className="text-sm text-steel">Loading policy…</p>
      ) : (
        <div className="overflow-x-auto rounded-md border border-rule">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-panel text-[11px] uppercase tracking-wide text-steel">
              <tr>
                <th className="border-b border-rule px-3 py-2 font-medium">Class</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Version</th>
                <th className="border-b border-rule px-3 py-2 font-medium">FD rate</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Floor</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Owner</th>
                <th className="border-b border-rule px-3 py-2 font-medium">Gate</th>
                <th className="border-b border-rule px-3 py-2 font-medium" />
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b border-rule/80">
                  <td className="px-3 py-2 font-medium text-ink">{row.name}</td>
                  <td className="px-3 py-2 font-mono text-xs text-steel">
                    {row.version}
                  </td>
                  <td className="px-3 py-2 tabular-nums text-ink">
                    {(row.falseDismissRate * 100).toFixed(1)}%
                  </td>
                  <td className="px-3 py-2 tabular-nums text-steel">
                    {(row.accuracyFloor * 100).toFixed(1)}%
                  </td>
                  <td className="px-3 py-2 text-steel">{row.owner}</td>
                  <td className="px-3 py-2">
                    <span
                      className={
                        row.publishable
                          ? 'text-xs uppercase tracking-wide text-minutes'
                          : 'text-xs uppercase tracking-wide text-overflow'
                      }
                    >
                      {row.publishable ? 'Publishable' : 'Blocked'}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <SecondaryButton type="button" disabled={!row.publishable}>
                      Publish
                    </SecondaryButton>
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
