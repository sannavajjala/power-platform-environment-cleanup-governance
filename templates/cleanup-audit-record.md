# Power Platform Environment Cleanup — Audit Record

## Purpose

Use this record to document the final outcome of a Power Platform environment lifecycle review and any approved cleanup action.

The objective is to maintain evidence of:

- Why the environment was reviewed
- Who was contacted
- What risks and dependencies were evaluated
- Who made the decision
- What administrative action occurred
- What recovery information was retained

> **Core principle: Inactivity triggers governance review. It does not automatically authorize deletion.**

---

## 1. Environment Information

| Field | Value |
|---|---|
| Environment Name | [Environment Name] |
| Environment ID | [Environment ID] |
| Environment Type | [Environment Type] |
| Region | [Region] |
| Business Owner | [Business Owner] |
| Technical Owner | [Technical Owner] |
| Created Date | [Date] |
| Last Recorded Activity | [Date] |
| Days Inactive | [Number] |
| Review Threshold | [Number of Days] |
| Review / Ticket Reference | [Reference] |

---

## 2. Review Trigger

Why was this environment reviewed?

- [ ] Inactivity threshold exceeded
- [ ] Owner no longer valid
- [ ] Environment appears orphaned
- [ ] Project completed
- [ ] Duplicate environment
- [ ] Trial/developer lifecycle review
- [ ] Business request
- [ ] Governance review
- [ ] Other

Details:

[Describe the review trigger.]

---

## 3. Owner Engagement

| Activity | Date / Result |
|---|---|
| Initial Notification | [Date] |
| Second Notification | [Date / N/A] |
| Final Notice | [Date / N/A] |
| Owner Response | [Response] |
| Business Justification | [Summary] |

If ownership changed during the review:

**Validated Owner:** [Name]

---

## 4. Resource Review

Record the relevant resources identified before the decision.

| Resource | Result |
|---|---|
| Power Apps | [Count / Findings] |
| Power Automate Flows | [Count / Findings] |
| Copilot Studio Agents | [Count / Findings] |
| Dataverse | [Yes/No + Findings] |
| Connections | [Findings] |
| Custom Connectors | [Findings] |
| Solutions | [Findings] |
| Other Resources | [Findings] |

---

## 5. Dependency and Risk Review

**Integration dependencies identified?**

[Yes / No]

Details:

[Details]

**Business Criticality:**

[Low / Medium / High / Critical]

**Protected Environment?**

[Yes / No]

**Retention / Legal Hold?**

[Yes / No]

**Exception Requested?**

[Yes / No]

**Exception Reference / Expiration:**

[Reference / Date]

---

## 6. Governance Decision

Final decision:

- [ ] ACTIVE
- [ ] PROTECTED
- [ ] EXCEPTION APPROVED
- [ ] KEEP
- [ ] ELIGIBLE FOR CLEANUP
- [ ] CLEANUP APPROVED
- [ ] CLOSED
- [ ] OTHER

**Decision:**

[Decision]

**Decision Reason:**

[Explain why this decision was made.]

---

## 7. Approval

| Field | Value |
|---|---|
| Business Approver | [Name / N/A] |
| Technical / Governance Approver | [Name] |
| Approval Date | [Date] |
| Change / Ticket | [Reference] |
| Planned Action | [Action] |
| Planned Cleanup Date | [Date] |

For production environments, record the explicit production approval required by the organization's governance process.

---

## 8. Recovery Preparation

Before destructive action:

- [ ] Required backup/export completed
- [ ] Recovery options reviewed
- [ ] Required solutions/configuration preserved
- [ ] Recovery responsibility identified

**Backup / Export Reference:**

[Reference]

**Recovery Notes:**

[Notes]

---

## 9. Administrative Action

Complete this section only if an approved administrative action occurred.

| Field | Value |
|---|---|
| Action Performed | [Delete / Reset / Disable / Other] |
| Actual Action Date | [Date and Time] |
| Performed By | [Administrator] |
| Change / Ticket | [Reference] |
| Result | [Successful / Failed / Partial] |
| Validation Performed | [Details] |

---

## 10. Post-Action Validation

- [ ] Administrative action confirmed
- [ ] Expected result validated
- [ ] Change/ticket updated
- [ ] Audit evidence retained
- [ ] Recovery information retained where applicable
- [ ] Owner/stakeholders notified where required
- [ ] Governance record closed

Validation notes:

[Notes]

---

## 11. Evidence References

Record supporting evidence where applicable:

- Environment inventory:
  [Reference]

- Owner correspondence:
  [Reference]

- Dependency assessment:
  [Reference]

- Exception:
  [Reference]

- Approval:
  [Reference]

- Backup/export:
  [Reference]

- Change record:
  [Reference]

- Other evidence:
  [Reference]

---

## Final Status

**Environment Review Status:**

[Closed / Retained / Protected / Exception Active / Cleaned Up / Other]

**Record Closed By:**

[Name]

**Closure Date:**

[Date]

---

## Governance Principle

A cleanup audit record should allow another reviewer to answer:

> **What was changed, why was it changed, who approved it, what evidence supported the decision, and what recovery considerations were addressed?**

If those questions cannot be answered, the governance record is incomplete.

---

## Disclaimer

This template is community-maintained guidance.

Organizations should adapt evidence retention, approvals, audit requirements, administrative procedures, and recovery documentation to their own governance, security, compliance, legal, records-management, change-management, and operational requirements.
