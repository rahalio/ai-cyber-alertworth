export type QueueAlert = {
  id: string;
  title: string;
  worth: number;
  lossIfIgnored: number;
  effortMinutes: number;
  attackType: string;
  frequency: string;
  priorDisposition: string;
  legacySeverity: string;
  status: 'queued' | 'claimed';
};

export type OverflowItem = {
  id: string;
  title: string;
  worth: number;
  suggestedRoute: 'defer' | 'auto-contain' | 'mdr';
  note: string;
};

export type InvestigationCase = {
  id: string;
  title: string;
  worth: number;
  status: 'open' | 'escalated' | 'closed';
  assignee: string;
  openedAt: string;
};

export type PolicyClass = {
  id: string;
  name: string;
  version: string;
  falseDismissRate: number;
  accuracyFloor: number;
  owner: string;
  publishable: boolean;
};

export type KriTile = {
  id: string;
  name: string;
  value: string;
  residual: 'within' | 'breach';
  freshnessHours: number;
  freshThresholdHours: number;
  owner: string;
};

export const MOCK_CAPACITY = { filled: 14, declared: 18, shiftLead: 'M. Chen' };

export const MOCK_QUEUE: QueueAlert[] = [
  {
    id: 'evt_8f2a91',
    title: 'Privileged token reuse — finance SAP',
    worth: 92,
    lossIfIgnored: 1_250_000,
    effortMinutes: 35,
    attackType: 'Credential abuse',
    frequency: 'Rare',
    priorDisposition: 'TP',
    legacySeverity: 'High',
    status: 'queued',
  },
  {
    id: 'evt_3c10be',
    title: 'Lateral SMB to crown-jewel DC',
    worth: 87,
    lossIfIgnored: 980_000,
    effortMinutes: 45,
    attackType: 'Lateral movement',
    frequency: 'Occasional',
    priorDisposition: 'TP',
    legacySeverity: 'Critical',
    status: 'queued',
  },
  {
    id: 'evt_a91d02',
    title: 'Impossible travel — exec identity',
    worth: 71,
    lossIfIgnored: 420_000,
    effortMinutes: 25,
    attackType: 'Identity',
    frequency: 'Weekly',
    priorDisposition: 'FP-heavy',
    legacySeverity: 'Medium',
    status: 'claimed',
  },
  {
    id: 'evt_55b0c4',
    title: 'Unsigned binary in build agent',
    worth: 64,
    lossIfIgnored: 310_000,
    effortMinutes: 40,
    attackType: 'Supply chain',
    frequency: 'Monthly',
    priorDisposition: 'Unknown',
    legacySeverity: 'High',
    status: 'queued',
  },
  {
    id: 'evt_0de77a',
    title: 'DNS tunneling candidate — lab VLAN',
    worth: 41,
    lossIfIgnored: 85_000,
    effortMinutes: 50,
    attackType: 'C2',
    frequency: 'Daily',
    priorDisposition: 'FP',
    legacySeverity: 'Low',
    status: 'queued',
  },
];

export const MOCK_OVERFLOW: OverflowItem[] = [
  {
    id: 'evt_bb12ef',
    title: 'Mass failed VPN from known ASN',
    worth: 58,
    suggestedRoute: 'defer',
    note: 'Capacity breach — hold to next shift',
  },
  {
    id: 'evt_91aa00',
    title: 'EDR quarantine candidate — endpoint farm',
    worth: 76,
    suggestedRoute: 'auto-contain',
    note: 'Policy v3.2 allows contain with override log',
  },
  {
    id: 'evt_77c901',
    title: 'OT historian anomalous write',
    worth: 89,
    suggestedRoute: 'mdr',
    note: 'Escalate to MDR — plant window open',
  },
];

export const MOCK_CASES: InvestigationCase[] = [
  {
    id: 'case_1042',
    title: 'Privileged token reuse — finance SAP',
    worth: 92,
    status: 'open',
    assignee: 'A. Okonkwo',
    openedAt: '2026-09-14T06:12:00Z',
  },
  {
    id: 'case_1038',
    title: 'Impossible travel — exec identity',
    worth: 71,
    status: 'escalated',
    assignee: 'R. Singh',
    openedAt: '2026-09-14T04:40:00Z',
  },
  {
    id: 'case_1021',
    title: 'Unsigned binary in build agent',
    worth: 64,
    status: 'closed',
    assignee: 'A. Okonkwo',
    openedAt: '2026-09-13T18:05:00Z',
  },
];

export const MOCK_POLICY: PolicyClass[] = [
  {
    id: 'cls_noise_scan',
    name: 'Internet noise / scanner',
    version: 'pol_v3.2',
    falseDismissRate: 0.018,
    accuracyFloor: 0.03,
    owner: 'Shift policy board',
    publishable: true,
  },
  {
    id: 'cls_lab_dns',
    name: 'Lab VLAN DNS anomalies',
    version: 'pol_v3.1',
    falseDismissRate: 0.041,
    accuracyFloor: 0.03,
    owner: 'Threat hunting',
    publishable: false,
  },
  {
    id: 'cls_vpn_asn',
    name: 'Known-bad ASN VPN fails',
    version: 'pol_v3.2',
    falseDismissRate: 0.022,
    accuracyFloor: 0.03,
    owner: 'Identity ops',
    publishable: true,
  },
];

export const MOCK_KRIS: KriTile[] = [
  {
    id: 'kri_residual',
    name: 'Residual cyber risk vs appetite',
    value: '1.18× appetite',
    residual: 'breach',
    freshnessHours: 6,
    freshThresholdHours: 24,
    owner: 'Cyber risk',
  },
  {
    id: 'kri_minutes',
    name: 'Analyst minutes returned (QTD)',
    value: '1,840 min',
    residual: 'within',
    freshnessHours: 2,
    freshThresholdHours: 12,
    owner: 'SOC manager',
  },
  {
    id: 'kri_dismiss',
    name: 'Dismissal accuracy (published classes)',
    value: '97.8% TP retained',
    residual: 'within',
    freshnessHours: 30,
    freshThresholdHours: 24,
    owner: 'Policy board',
  },
  {
    id: 'kri_control',
    name: 'Failed control tests open',
    value: '3 linked',
    residual: 'breach',
    freshnessHours: 48,
    freshThresholdHours: 24,
    owner: 'GRC',
  },
];
