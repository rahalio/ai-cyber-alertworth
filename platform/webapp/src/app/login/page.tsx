'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/auth-context';
import { PrimaryButton } from '@/components/ui';

export default function LoginPage() {
  const { enterShift } = useAuth();
  const router = useRouter();

  function onEnter() {
    enterShift();
    router.replace('/queue');
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="factory-grid" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(224,154,62,0.14),transparent_45%),radial-gradient(ellipse_at_80%_0%,rgba(79,174,140,0.08),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16"
      >
        <p className="font-display text-5xl font-semibold tracking-tight text-brand sm:text-6xl">
          Alertworth
        </p>
        <h1 className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
          Fill the queue to worth, not volume
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-steel">
          Factory floor for scarce analyst minutes. Capacity-capped triage,
          explicit overflow, priced residual risk for the committee.
        </p>
        <div className="mt-10">
          <PrimaryButton type="button" onClick={onEnter} className="px-8 py-3 text-base">
            Enter shift
          </PrimaryButton>
        </div>
      </motion.div>
    </div>
  );
}
