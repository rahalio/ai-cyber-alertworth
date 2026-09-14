import clsx from 'clsx';
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export function PageHeader({
  title,
  subtitle,
  actions,
  brandMark,
}: {
  title: string;
  subtitle?: ReactNode;
  actions?: ReactNode;
  brandMark?: boolean;
}) {
  return (
    <div className="mb-5 animate-fadeUp">
      {brandMark ? (
        <p className="mb-1 font-display text-sm font-semibold tracking-tight text-brand">
          Alertworth
        </p>
      ) : null}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-1 max-w-2xl text-sm text-steel">{subtitle}</p>
          ) : null}
        </div>
        {actions}
      </div>
    </div>
  );
}

export function Panel({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={clsx('rounded-md border border-rule bg-panel p-4', className)}
      {...rest}
    >
      {children}
    </section>
  );
}

export function PrimaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-sm bg-worth px-4 py-2 text-sm font-semibold text-bg transition hover:opacity-90 disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export function SecondaryButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-sm border border-rule bg-panel px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-rule/40 disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export function StubNotice({ label }: { label: string }) {
  return (
    <Panel>
      <p className="text-sm text-steel">
        {label} — scaffold only. Wire to generated domain services when ready.
      </p>
    </Panel>
  );
}
