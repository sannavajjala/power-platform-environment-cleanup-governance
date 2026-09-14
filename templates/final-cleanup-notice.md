# Power Platform Environment Cleanup — Final Cleanup Notice

## Purpose

Use this template after an environment has completed the required governance review and is approaching an approved cleanup action.

> **Important:** This notice should only be used after applicable ownership, dependency, protection, retention, business-risk, recovery, and approval requirements have been evaluated.

---

## Email Template

**Subject:** Final Notice: Scheduled Power Platform Environment Cleanup — [Environment Name]

Hello [Owner Name],

As part of our Power Platform environment lifecycle governance process, the following environment has completed the applicable cleanup review and is currently scheduled for cleanup.

### Environment Details

| Field | Value |
|---|---|
| Environment Name | [Environment Name] |
| Environment ID | [Environment ID] |
| Environment Type | [Environment Type] |
| Last Recorded Activity | [Date] |
| Days Inactive | [Number of Days] |
| Business Owner | [Owner Name] |
| Cleanup Decision | [Decision] |
| Approved By | [Approver] |
| Planned Cleanup Date | [Date] |
| Review / Change Reference | [Reference] |

---

## Planned Action

The planned administrative action is:

**[Delete / Reset / Disable / Other Approved Action]**

Scheduled date:

**[Planned Cleanup Date and Time]**

The exact action should match the approved governance record and change-management process.

---

## Before Cleanup

The governance review should confirm, as applicable:

- Environment ownership has been reviewed.
- Required owner notifications have been completed.
- Business criticality has been evaluated.
- Power Apps, flows, agents, Dataverse, connections, and other relevant resources have been reviewed.
- Integration and downstream dependencies have been evaluated.
- Protection or exclusion requirements have been checked.
- Retention, legal-hold, or preservation requirements have been checked.
- Required backup/export or recovery preparation has been completed.
- Required business, technical, governance, or change approvals have been obtained.

Production environments should receive explicit approval before destructive administrative action.

---

## If This Environment Must Be Retained

If you believe this environment should **not** proceed with the scheduled cleanup, contact:

**[Power Platform Governance Team / Contact]**

before:

**[Final Response Deadline]**

Include:

- Business justification
- Environment owner
- Reason cleanup should be stopped
- Relevant dependency or business impact
- Requested retention/exception period
- Supporting ticket or documentation, if applicable

A request received after the deadline may be subject to the organization's recovery and change-management procedures.

---

## Governance Evidence

Before performing the cleanup action, record:

- Final notification date
- Final response deadline
- Cleanup decision
- Decision reason
- Approver
- Approval date
- Planned cleanup date
- Backup/export reference
- Change/ticket reference
- Applicable exception status
- Recovery notes

After the administrative action, record:

- Actual cleanup date
- Action performed
- Administrator/operator
- Result
- Audit/change record
- Recovery information
- Final status

---

## Important Governance Principle

**Inactivity triggers review. It does not authorize deletion.**

The final cleanup action should be the result of an approved governance decision rather than an inactivity metric alone.

---

Thank you,

[Power Platform Governance Team]  
[Team / Department]  
[Contact Information]  
[Service Request / Governance Portal]

---

## Disclaimer

This template is community-maintained guidance.

Organizations should validate administrative actions, recovery options, retention requirements, and deletion procedures against current Microsoft documentation and their own governance, security, compliance, legal, records-management, and operational requirements.
