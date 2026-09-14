'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV = [
  { href: '/queue', label: 'Shift queue' },
  { href: '/overflow', label: 'Overflow' },
  { href: '/investigations', label: 'Investigations' },
  { href: '/policy', label: 'Dismissal policy' },
  { href: '/baselines', label: 'Baselines' },
  { href: '/attack-paths', label: 'Attack paths' },
  { href: '/controls', label: 'Control tests' },
  { href: '/kris', label: 'KRIs / residual risk' },
  { href: '/packs', label: 'Committee packs' },
  { href: '/admin', label: 'Admin' },
] as const;

export function SideNav({ testId }: { testId?: string }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-0.5 px-2 pb-6" data-testid={testId}>
      {NAV.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'rounded-sm px-3 py-1.5 text-[13px] font-medium transition',
              active
                ? 'bg-worth/15 text-worth'
                : 'text-steel hover:bg-rule/40 hover:text-ink',
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
