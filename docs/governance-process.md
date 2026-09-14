# Power Platform Environment Cleanup Governance Process

## Purpose

This document defines a structured governance process for reviewing inactive, abandoned, orphaned, or potentially unnecessary Microsoft Power Platform environments.

The objective is to support responsible environment lifecycle management while reducing the risk of deleting environments that still contain important applications, automations, agents, data, integrations, or business dependencies.

> **Core principle: Inactivity triggers governance review. It does not automatically authorize deletion.**

---

## Governance Lifecycle

The recommended lifecycle is:

**Inventory → Detect → Protect/Exclude → Identify Owner → Notify → Review → Decide → Validate → Approve → Cleanup → Audit**

Each stage introduces a governance checkpoint before destructive administrative action can occur.

---

## 1. Inventory

Establish an inventory of Power Platform environments in scope for lifecycle governance.

Capture information such as:

- Environment name and ID
- Environment type
- Region
- Created date
- Last activity
- Business owner
- Technical owner
- Power Apps
- Power Automate flows
- Copilot Studio agents
- Dataverse
- Connections
- Custom connectors
- Known integrations

The inventory becomes the foundation for subsequent review.

---

## 2. Detect Review Candidates

Evaluate environments against the organization's lifecycle criteria.

Possible signals include:

- Inactivity threshold exceeded
- Owner account no longer valid
- Environment appears orphaned
- Trial or temporary environment
- Completed project
- Duplicate environment
- Business-requested decommissioning

Crossing an inactivity threshold should result in:

**REVIEW REQUIRED**

not:

**DELETE**

---

## 3. Apply Protection and Exclusion Rules

Before contacting owners or considering cleanup, determine whether the environment requires special handling.

Examples include:

- Production environments
- Business-critical environments
- Environments under legal hold
- Retention requirements
- Regulatory requirements
- Active migrations
- Approved exceptions
- Shared integration environments
- Environments explicitly protected by governance policy

Protected environments should not proceed through normal automated cleanup processing.

---

## 4. Identify and Validate Ownership

Determine the accountable owner.

Where applicable, identify:

- Business owner
- Technical owner
- Environment creator
- Application owners
- Department or business unit

Ownership should be validated rather than assumed.

If the recorded owner is no longer valid, follow the organization's orphaned-resource escalation process.

---

## 5. Notify the Owner

Use the owner notification template to request confirmation.

The owner should be able to indicate that the environment:

- Is still required
- Requires an exception
- Is no longer required
- Has an incorrect owner

Record the notification date and response deadline.

---

## 6. Escalate When Necessary

If no response is received, issue the second notification according to organizational policy.

Continued non-response can trigger escalation to:

- Business management
- Technical ownership
- Platform governance
- Application governance
- Department leadership
- Orphaned-resource review

> Non-response should not automatically be interpreted as permission to delete unless explicitly allowed by an approved organizational policy.

---

## 7. Perform the Cleanup Review

Use the Cleanup Review Checklist and Environment Cleanup Assessment.

Evaluate:

- Ownership
- Workloads
- Business criticality
- Integration dependencies
- Protection status
- Retention/legal hold
- Environment type
- Exception status
- Recovery requirements

The review should establish whether sufficient evidence exists to make a cleanup decision.

---

## 8. Process Exceptions

If an environment remains necessary despite meeting cleanup review criteria, document an exception.

Exceptions should be:

**Explicit + Justified + Time-Bound + Approved + Reviewable**

An exception should include an expiration or next-review date.

Expired exceptions should return to the normal governance review process.

---

## 9. Make the Governance Decision

Possible decisions include:

- ACTIVE
- REVIEW REQUIRED
- OWNER RESPONSE PENDING
- EXCEPTION REQUESTED
- PROTECTED
- ELIGIBLE FOR CLEANUP
- CLEANUP APPROVED
- CLOSED

The decision and its justification should be recorded.

---

## 10. Validate Before Cleanup

Before destructive administrative action, verify that:

- Required owners were contacted
- Dependencies were reviewed
- Business impact was evaluated
- Protection requirements were checked
- Retention/legal-hold requirements were checked
- Required backup/export was completed
- Recovery considerations were documented
- Required approvals were obtained
- Change/ticket requirements were completed

If a material question remains unresolved:

> **STOP — additional governance review is required.**

---

## 11. Obtain Approval

Cleanup authorization should correspond to the risk of the environment.

Production and other high-impact environments should receive explicit approval according to organizational policy.

Record:

- Approver
- Approval date
- Decision
- Planned action
- Planned cleanup date
- Change/ticket reference

---

## 12. Issue Final Notice

Where required, send the Final Cleanup Notice.

The notice should identify:

- Environment
- Planned action
- Planned date
- Decision
- Approver
- Final response deadline
- Governance/change reference

This provides a final opportunity to identify previously unknown business impact.

---

## 13. Perform the Approved Administrative Action

Perform only the action authorized by the governance decision.

Examples may include:

- Delete
- Reset
- Disable
- Other approved administrative action

The administrator should verify current Microsoft documentation and organizational procedures before performing destructive operations.

---

## 14. Validate the Result

After the action:

- Confirm the expected result
- Update the change/ticket
- Record the operator
- Record the actual action date
- Notify stakeholders where required
- Retain recovery information
- Document unexpected outcomes

---

## 15. Complete the Audit Record

Use the Cleanup Audit Record to document the lifecycle decision.

The record should answer:

> **What was changed, why was it changed, who approved it, what evidence supported the decision, and what recovery considerations were addressed?**

The governance record can then be closed.

---

# Governance Gates

A mature cleanup process should contain multiple gates rather than a single inactivity rule.

### Gate 1 — Activity

Does the environment meet review criteria?

### Gate 2 — Protection

Is the environment protected, excluded, or subject to retention?

### Gate 3 — Ownership

Has accountable ownership been validated?

### Gate 4 — Dependencies

Could cleanup affect applications, automations, agents, data, integrations, or business processes?

### Gate 5 — Business Risk

What is the business impact?

### Gate 6 — Recovery

Is appropriate recovery preparation complete?

### Gate 7 — Approval

Has the required authority approved the action?

Only after the applicable gates have been satisfied should destructive cleanup proceed.

---

# Automation Principle

Organizations may automate inventory, detection, notifications, escalation, approvals, evidence collection, and administrative actions.

However:

> **Automation should implement governance — not replace governance.**

The safest architecture separates:

**Detection → Decision → Administrative Action**

rather than allowing an inactivity metric to directly trigger destructive action.

---

# Supporting Artifacts

This repository includes:

- Environment Cleanup Assessment
- Cleanup Review Checklist
- Owner Notification
- Second Notification
- Final Cleanup Notice
- Exception Request
- Cleanup Audit Record

Together, these artifacts provide a reusable environment lifecycle governance process.

---

## Disclaimer

This project provides community-maintained guidance.

Organizations should validate administrative operations against current Microsoft documentation and adapt the process to their own governance, security, compliance, legal, records-management, change-management, and operational requirements.
