import clsx from 'clsx';

export function WorthScoreChip({
  worth,
  threshold = 50,
}: {
  worth: number;
  threshold?: number;
}) {
  const admit = worth >= threshold;
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-sm px-2 py-0.5 font-mono text-xs font-semibold tabular-nums',
        admit
          ? 'bg-worth/15 text-worth'
          : 'bg-worth-dim/20 text-worth-dim',
      )}
      title={admit ? 'Queue-worthy' : 'Below admit threshold'}
    >
      <span className="text-[10px] uppercase tracking-wide opacity-70">W</span>
      {worth}
    </span>
  );
}
