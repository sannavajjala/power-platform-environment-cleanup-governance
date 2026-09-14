# Power Platform Environment Cleanup — Second Notification

## Purpose

Use this template when an environment owner has not responded to the initial inactivity review notification.

> **Important:** A lack of response is an escalation trigger. It should not automatically be treated as authorization to delete an environment unless explicitly permitted by the organization's approved governance policy.

---

## Email Template

**Subject:** Second Notice: Action Required — Power Platform Environment Review — [Environment Name]

Hello [Owner Name],

This is a follow-up regarding the Power Platform environment below, which has been identified for governance review based on our organization's environment lifecycle criteria.

We previously requested confirmation regarding whether this environment is still required.

### Environment Details

| Field | Value |
|---|---|
| Environment Name | [Environment Name] |
| Environment ID | [Environment ID] |
| Environment Type | [Environment Type] |
| Last Recorded Activity | [Date] |
| Days Inactive | [Number of Days] |
| Initial Notification Date | [Date] |
| Current Review Status | OWNER RESPONSE PENDING |
| Review / Ticket Reference | [Reference] |

We have not yet received a response to the initial notification.

---

## Action Required

Please respond by:

**[Second Response Due Date]**

Select one of the following:

### KEEP

The environment is still required.

Please provide a brief business justification.

### EXCEPTION REQUEST

The environment requires temporary retention beyond the normal review period.

Please provide:

- Business justification
- Requested exception period
- Business owner
- Expected review date

### NO LONGER REQUIRED

The environment is no longer required and may continue through the cleanup governance process.

This response does not itself authorize deletion.

### OWNERSHIP INCORRECT

You are not the appropriate owner.

Please provide the correct owner if known.

---

## If No Response Is Received

If we do not receive a response by the date above, the environment may be escalated according to the organization's governance process.

Possible next steps may include:

- Business-owner escalation
- Technical-owner escalation
- Governance-team review
- Orphaned-environment review
- Dependency validation
- Exception review
- Pre-cleanup assessment

Before any cleanup action occurs, applicable protection requirements, retention obligations, dependencies, business criticality, recovery requirements, and approval requirements should be evaluated.

Production environments should receive explicit approval before destructive administrative action.

---

Thank you,

[Power Platform Governance Team]  
[Team / Department]  
[Contact Information]  
[Service Request / Governance Portal]

---

## Governance Record

Record the following evidence:

- Initial notification date
- Second notification date
- Owner
- Response deadline
- Response received
- Escalation status
- Business justification
- Exception request
- Ticket/reference
- Reviewer notes

This evidence should be retained with the environment cleanup assessment or the organization's equivalent governance record.

---

## Disclaimer

This template is community-maintained guidance.

Organizations should adapt notification periods, escalation procedures, approval requirements, retention controls, and cleanup procedures to their own governance and compliance requirements.
