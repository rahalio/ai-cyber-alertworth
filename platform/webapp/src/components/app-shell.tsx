'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import { useAuth } from '@/contexts/auth-context';
import { SideNav } from '@/components/side-nav';

function Brand({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <Link href="/queue" className="flex flex-col gap-0.5">
      <span
        className={clsx(
          'font-display font-semibold tracking-tight text-brand',
          size === 'lg' ? 'text-3xl' : 'text-xl',
        )}
      >
        Alertworth
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-worth">
        Worth, not volume
      </span>
    </Link>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const { ready, authenticated, operator, signOut } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (!authenticated && pathname !== '/login') {
      router.replace('/login');
    }
  }, [ready, authenticated, pathname, router]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  if (!ready) {
    return (
      <div className="grid min-h-screen place-items-center text-steel">
        Loading…
      </div>
    );
  }

  if (pathname === '/login') {
    return <>{children}</>;
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <div className="factory-grid" aria-hidden />

      <div className="relative z-10 flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col overflow-y-auto border-e border-rule bg-panel/90 lg:flex">
          <div className="border-b border-rule px-4 py-5">
            <Brand />
          </div>
          <SideNav testId="primary-nav" />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-rule bg-panel/95 backdrop-blur">
            <div className="flex items-center justify-between gap-3 px-4 py-2">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-sm border border-rule px-2.5 py-1 text-sm text-steel lg:hidden"
                  aria-expanded={drawerOpen}
                  aria-label="Menu"
                  onClick={() => setDrawerOpen((v) => !v)}
                >
                  ☰
                </button>
                <div className="lg:hidden">
                  <Brand />
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-steel">
                <span className="hidden font-mono text-xs sm:inline">
                  {operator?.displayName ?? 'Operator'}
                </span>
                <button
                  type="button"
                  className="rounded-sm border border-rule px-2.5 py-1 text-xs font-medium text-ink hover:bg-rule/50"
                  onClick={() => {
                    signOut();
                    router.replace('/login');
                  }}
                >
                  End shift
                </button>
              </div>
            </div>
          </header>

          {drawerOpen ? (
            <div className="border-b border-rule bg-panel px-2 py-3 lg:hidden">
              <SideNav />
            </div>
          ) : null}

          <main id="main" className="flex-1 px-4 py-5 sm:px-5 lg:px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
