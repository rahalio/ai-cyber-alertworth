'use client';

import { PageHeader, StubNotice } from '@/components/ui';

export default function BaselinesPage() {
  return (
    <div>
      <PageHeader
        title="Behaviour baselines"
        subtitle="Activate anomalous/insider detections only after population, purpose, and lawful basis are recorded."
      />
      <StubNotice label="Baselines board" />
    </div>
  );
}
