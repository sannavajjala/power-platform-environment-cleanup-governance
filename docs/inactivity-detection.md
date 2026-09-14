# Power Platform Environment Inactivity Detection

## Purpose

This document describes how inactivity can be used as a governance signal when reviewing Microsoft Power Platform environments.

> **Inactivity triggers governance review. It does not automatically authorize deletion.**

The purpose of inactivity detection is to identify environments that warrant further investigation—not to determine, by itself, whether an environment is safe to remove.

---

## What Does "Inactive" Mean?

Environment inactivity can be difficult to define because an environment may contain multiple workloads with different usage patterns.

Examples include:

- Power Apps
- Power Automate flows
- Copilot Studio agents
- Dataverse
- Connections
- Custom connectors
- Solutions
- Background processes
- Integrations

An environment that appears inactive from one signal may still support an important workload.

Therefore, organizations should define inactivity according to their own governance requirements and available telemetry.

---

## Detection Model

A useful detection model separates three concepts:

### Signal

Evidence suggests that an environment might no longer be actively required.

Examples:

- No recent observed activity
- Owner account disabled
- Environment associated with a completed project
- Trial or temporary environment
- No active resources detected

### Review Trigger

The signal meets an organization's defined review criteria.

Example:

**Days Inactive >= Organization Review Threshold**

Result:

**REVIEW REQUIRED**

### Governance Decision

Additional evidence determines whether the environment should be:

- Retained
- Protected
- Granted an exception
- Reviewed further
- Considered for cleanup

Detection and decision should remain separate.

---

## Example Review Thresholds

The assessment workbook in this repository includes configurable example thresholds:

| Environment Type | Example Review Threshold |
|---|---:|
| Developer | 60 days |
| Sandbox | 90 days |
| Production | 180 days |
| Trial | 30 days |
| Teams | 60 days |
| Other | 90 days |

These values are **examples only**.

They should be adapted to the organization's:

- Governance policy
- Risk tolerance
- Environment strategy
- Business processes
- Compliance requirements
- Operational requirements

They should not be interpreted as Microsoft-mandated deletion or retention periods.

---

## Threshold Formula

A basic review trigger can be represented as:

**Days Inactive >= Review Threshold → REVIEW REQUIRED**

However, the review trigger should not directly initiate destructive administrative action.

A safer model is:

**Activity Signal → Review Trigger → Governance Assessment → Decision → Approval → Administrative Action**

---

## Environment-Type Considerations

### Developer Environments

Developer environments are often good candidates for periodic lifecycle review because they can accumulate as adoption grows.

Consider:

- Maker still active?
- Environment still required?
- Apps or flows still being developed?
- Copilot Studio agents present?
- Important data present?
- Project still active?

### Sandbox Environments

Sandbox environments may appear inactive while still supporting testing, ALM, integration validation, training, or future releases.

Consider:

- Active release pipeline?
- Testing dependency?
- Integration dependency?
- Project temporarily paused?
- Required test data?

### Production Environments

Production environments require stronger safeguards.

Inactivity alone should never authorize destructive cleanup.

Consider:

- Business criticality
- Seasonal workloads
- Infrequently used applications
- Background automations
- Integrations
- Compliance requirements
- Recovery requirements
- Explicit approval

### Trial / Temporary Environments

Temporary environments may have shorter organizational review cycles, but their actual lifecycle should still be evaluated against current platform behavior and organizational policy.

### Teams-Related Environments

Review dependencies on Microsoft Teams-based solutions and workloads before cleanup.

---

## Missing Activity Data

Missing activity data should not be interpreted as proof of inactivity.

If the last activity date cannot be established:

**INCOMPLETE — REVIEW REQUIRED**

The organization should investigate before making a cleanup decision.

---

## Additional Signals

Inactivity can be combined with other indicators.

Examples:

- Owner no longer exists
- Owner account disabled
- No business owner
- No apps
- No flows
- No agents
- No recent solution changes
- Project closed
- Department no longer exists
- Duplicate environment
- Explicit decommission request

Multiple signals can increase confidence that review is warranted, but they still do not replace governance validation.

---

## False Positives

A mature process should account for environments that look inactive but remain necessary.

Examples include:

- Quarterly applications
- Annual business processes
- Disaster-recovery environments
- Training environments
- Integration environments
- Reference environments
- Seasonal workloads
- Regulatory workloads
- Environments awaiting future releases
- Environments containing dormant but required data

This is why owner and dependency validation are important.

---

## Detection Data Quality

Organizations should document:

- Source of activity data
- Date activity was measured
- What workloads are represented
- Known telemetry limitations
- Whether background activity is included
- Whether user activity and system activity are distinguishable

A precise-looking inactivity number can still be misleading if its underlying telemetry is incomplete.

---

## Recommended Governance Pattern

Use inactivity to create a **review queue**.

Do not use inactivity alone to create a **deletion queue**.

Recommended pattern:

**Inventory → Detect → Review → Validate → Decide → Approve → Act**

This maintains separation between automated detection and accountable decision-making.

---

## Automation Considerations

Automated detection can be valuable at scale.

Organizations may use appropriate Microsoft Power Platform administration capabilities, APIs, connectors, reporting, or other governance systems to identify review candidates.

Automation should record enough evidence to explain:

- Why the environment was flagged
- What threshold was applied
- What activity signal was used
- When the signal was evaluated
- What happened next

---

## Governance Principle

> **The purpose of inactivity detection is to find environments that deserve a question—not environments that automatically deserve deletion.**

---

## Disclaimer

This document provides community-maintained guidance.

Organizations should validate activity signals, environment lifecycle behavior, administrative capabilities, and cleanup operations against current Microsoft documentation and their own governance, security, compliance, legal, records-management, and operational requirements.
