'use client';

import { PageHeader, StubNotice } from '@/components/ui';

export default function PacksPage() {
  return (
    <div>
      <PageHeader
        brandMark
        title="Committee packs"
        subtitle="Board artefact from live residual risk — not open-ticket counts."
      />
      <StubNotice label="Committee pack export" />
    </div>
  );
}
