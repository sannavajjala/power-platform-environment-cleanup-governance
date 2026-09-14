# Power Platform Environment Cleanup Review Checklist

## Purpose

Use this checklist before approving cleanup of a Microsoft Power Platform environment.

> **Core principle: Inactivity triggers governance review. It does not automatically authorize deletion.**

An environment should proceed to cleanup only after applicable ownership, workload, dependency, business-risk, protection, retention, recovery, and approval requirements have been evaluated.

---

## 1. Environment Identification

- [ ] Environment name recorded
- [ ] Environment ID recorded
- [ ] Environment type confirmed
- [ ] Region recorded
- [ ] Created date recorded
- [ ] Last activity date reviewed
- [ ] Days inactive calculated
- [ ] Applicable review threshold identified
- [ ] Review/ticket reference created

---

## 2. Ownership Review

- [ ] Business owner identified
- [ ] Technical owner identified, where applicable
- [ ] Owner identity validated
- [ ] Initial owner notification sent
- [ ] Owner response recorded
- [ ] Second notification sent if required
- [ ] Incorrect or orphaned ownership escalated
- [ ] Business justification captured when environment is retained

If ownership cannot be established, follow the organization's orphaned-environment escalation process rather than assuming the environment can be deleted.

---

## 3. Workload Inventory

Review resources that could be affected by cleanup.

- [ ] Power Apps reviewed
- [ ] Power Automate flows reviewed
- [ ] Copilot Studio agents reviewed
- [ ] Dataverse presence reviewed
- [ ] Dataverse data requirements reviewed
- [ ] Connections reviewed
- [ ] Custom connectors reviewed
- [ ] Solutions/components reviewed where applicable
- [ ] Other environment resources reviewed

---

## 4. Dependency Review

- [ ] Integration dependencies evaluated
- [ ] Downstream systems evaluated
- [ ] Upstream systems evaluated
- [ ] Scheduled or background processes considered
- [ ] Service accounts/connections reviewed
- [ ] Cross-environment dependencies considered
- [ ] Business processes dependent on the environment identified

Any unresolved dependency should prevent automatic cleanup approval.

---

## 5. Business Risk

- [ ] Business criticality classified
- [ ] Business impact of cleanup evaluated
- [ ] Production status considered
- [ ] Active project or migration dependency checked
- [ ] Temporary inactivity considered
- [ ] Seasonal or infrequently used workload considered

High or critical business impact should receive additional review.

---

## 6. Protection and Exclusions

Confirm whether the environment is protected from normal cleanup processing.

- [ ] Protected-environment status checked
- [ ] Formal exclusion checked
- [ ] Exception status checked
- [ ] Exception expiration date reviewed
- [ ] Regulatory/compliance requirement considered
- [ ] Retention requirement checked
- [ ] Legal hold/preservation requirement checked

A protected environment or applicable retention/legal hold should block cleanup until appropriately cleared.

---

## 7. Environment-Type Safeguards

### Developer / Trial / Teams

- [ ] Applicable lifecycle policy reviewed
- [ ] Owner requirements evaluated
- [ ] Required data/resources preserved where necessary

### Sandbox

- [ ] Testing or project dependencies reviewed
- [ ] ALM/deployment dependencies reviewed
- [ ] Required data/configuration preserved where necessary

### Production

- [ ] Explicit production review completed
- [ ] Business owner approval obtained
- [ ] Technical/governance approval obtained
- [ ] Change-management requirements completed
- [ ] Recovery plan documented

> Production inactivity alone must never authorize destructive cleanup.

---

## 8. Recovery Preparation

Before destructive administrative action:

- [ ] Required backup/export completed
- [ ] Backup/export reference recorded
- [ ] Recovery options reviewed
- [ ] Recovery responsibility identified
- [ ] Recovery notes documented
- [ ] Required configuration or solution artifacts preserved

Recovery capabilities and timelines should be validated against current Microsoft documentation before cleanup.

---

## 9. Cleanup Decision

Record one appropriate governance decision:

- [ ] ACTIVE
- [ ] REVIEW REQUIRED
- [ ] OWNER RESPONSE PENDING
- [ ] EXCEPTION REQUESTED
- [ ] PROTECTED
- [ ] ELIGIBLE FOR CLEANUP
- [ ] CLEANUP APPROVED
- [ ] CLOSED

Decision:

**[Decision]**

Decision reason:

**[Reason]**

---

## 10. Approval

If cleanup is recommended:

- [ ] Required business approval obtained
- [ ] Required technical/governance approval obtained
- [ ] Production approval obtained where applicable
- [ ] Change/ticket reference recorded
- [ ] Planned cleanup date recorded
- [ ] Final cleanup notice sent where required

Approved by:

**[Approver]**

Approval date:

**[Date]**

---

## 11. Post-Cleanup Evidence

After the approved action:

- [ ] Actual cleanup date recorded
- [ ] Administrative action recorded
- [ ] Operator/administrator recorded
- [ ] Result validated
- [ ] Change/ticket updated
- [ ] Recovery information retained
- [ ] Audit record completed
- [ ] Governance record closed

---

## Final Gate

Before cleanup, confirm:

**Ownership + Dependencies + Business Risk + Protection + Retention + Recovery + Approval**

have all been evaluated.

If a material question remains unresolved:

> **STOP — additional governance review is required.**

---

## Disclaimer

This checklist is community-maintained guidance.

Organizations should adapt it to their own Power Platform governance, security, compliance, legal, records-management, change-management, and operational requirements and validate destructive administrative actions against current Microsoft documentation.
