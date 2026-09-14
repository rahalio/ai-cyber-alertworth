import clsx from 'clsx';

export function FreshnessBadge({
  freshnessHours,
  freshThresholdHours,
}: {
  freshnessHours: number;
  freshThresholdHours: number;
}) {
  const fresh = freshnessHours <= freshThresholdHours;
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide',
        fresh
          ? 'bg-fresh/15 text-fresh'
          : 'animate-degrade bg-stale/15 text-stale',
      )}
    >
      {fresh ? 'Fresh' : 'Stale'} · {freshnessHours}h
    </span>
  );
}
