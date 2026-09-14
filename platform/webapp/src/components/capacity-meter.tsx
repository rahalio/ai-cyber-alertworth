'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

export function CapacityMeter({
  filled,
  declared,
  shiftLead,
}: {
  filled: number;
  declared: number;
  shiftLead?: string;
}) {
  const pct = declared > 0 ? Math.min(100, (filled / declared) * 100) : 0;
  const breached = filled >= declared;

  return (
    <div
      className="rounded-md border border-rule bg-panel p-4"
      aria-live="polite"
    >
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-steel">
            Shift capacity
          </p>
          <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-ink">
            <span className={breached ? 'text-overflow' : 'text-worth'}>
              {filled}
            </span>
            <span className="text-steel"> / {declared}</span>
          </p>
        </div>
        {shiftLead ? (
          <p className="font-mono text-xs text-steel">Lead: {shiftLead}</p>
        ) : (
          <p className="animate-overflowPulse text-xs font-medium text-overflow">
            Queue locked — no named lead
          </p>
        )}
      </div>
      <div className="h-2 overflow-hidden rounded-sm bg-rule/60">
        <motion.div
          className={clsx(
            'h-full rounded-sm',
            breached ? 'bg-overflow' : 'bg-worth',
          )}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
      <p className="mt-2 text-xs text-steel">
        {breached
          ? 'Capacity breached — overflow is explicit'
          : `${declared - filled} slots open`}
      </p>
    </div>
  );
}
