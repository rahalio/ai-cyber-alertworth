'use client';

import { PageHeader, StubNotice } from '@/components/ui';

export default function AttackPathsPage() {
  return (
    <div>
      <PageHeader
        title="Attack paths"
        subtitle="Explainable path ranking: asset criticality, likely path, recommended control."
      />
      <StubNotice label="Attack path board" />
    </div>
  );
}
