'use client';

import { PageHeader, StubNotice } from '@/components/ui';

export default function AdminPage() {
  return (
    <div>
      <PageHeader
        title="Admin"
        subtitle="Named owners for queue, dismissal policy, KRIs; refuse shift without lead. Containment action log."
      />
      <StubNotice label="Accountability admin + containment log" />
    </div>
  );
}
