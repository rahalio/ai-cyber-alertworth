'use client';

import { InvestigationWorkspaceView } from '@/features/investigations';

export default function InvestigationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <InvestigationWorkspaceView id={params.id} />;
}
