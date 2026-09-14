'use client';

import { PageHeader, StubNotice } from '@/components/ui';

export default function ControlsPage() {
  return (
    <div>
      <PageHeader
        title="Control tests"
        subtitle="Continuous and change-triggered tests feeding the same residual-risk view as the board."
      />
      <StubNotice label="Control test schedule" />
    </div>
  );
}
