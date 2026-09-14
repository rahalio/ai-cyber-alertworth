# Alertworth — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### CISO / Head of security operations

- As a CISO, I want residual cyber risk reported against appetite with evidence freshness visible, so that the audit committee stops equating open-ticket counts with security posture.
- As a CISO, I want to see analyst minutes returned by automated triage each week against a pre-change baseline, so that I can justify the operating model to the CIO without claiming headcount reduction the paper does not promise.
- As a CISO, I want dismissal-policy accuracy back-tested and owned, so that when an incident occurs I can show what the system was allowed to ignore and why.

### SOC manager / shift lead

- As a SOC manager, I want the queue capped to my declared shift capacity, so that analysts are not measured on clearing an infinite backlog.
- As a shift lead, I want overflow handled as an explicit decision — defer, auto-contain, or hand to MDR — so that silence is never the default when volume spikes.
- As a shift lead, I want each queued alert to show economic score, attack type, frequency, and prior disposition, so that Tier-1 work starts from cleansing the source already named rather than from raw severity.

### Tier-1 / Tier-2 analyst

- As a Tier-1 analyst, I want first-level cleansing applied before my queue fills, so that I spend time on alerts worth investigating rather than on signature noise adversaries already game.
- As a Tier-2 analyst, I want historical context and related entities on the case, so that targeted investigation uses current and historical data as the paper describes without a separate data-science request.
- As an analyst, I want to challenge an auto-dismissal and force an alert into the queue, so that automation remains subordinate to accountable human judgement.

### Cyber risk / GRC analyst

- As a cyber risk analyst, I want KRIs collected and visualised automatically with threshold breaches, so that integrated monitoring is not a monthly spreadsheet exercise.
- As a GRC analyst, I want continuous control-test results to feed residual risk, so that the board pack and the control environment tell the same story.
- As a GRC analyst, I want a KRI to degrade when evidence expires, so that we cannot report green on stale telemetry.

### Platform administrator / privacy officer

- As a privacy officer, I want insider-threat baselines to declare population, purpose, and lawful basis before activation, so that behavioural monitoring does not outrun policy.
- As a platform administrator, I want every automated containment action logged with actor, policy version, and override, so that incident reconstruction and external audit can follow the chain.
- As a platform administrator, I want the queue to refuse to open a shift without a named accountable lead, so that accountability redesign is enforced rather than laminated.
