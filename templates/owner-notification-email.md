# Power Platform Environment Cleanup — Owner Notification

## Purpose

Use this template to notify an environment owner that a Power Platform environment has met the organization's inactivity review criteria.

> **Important:** This notification indicates that the environment requires governance review. It does not mean the environment has automatically been approved for deletion.

---

## Email Template

**Subject:** Action Required: Power Platform Environment Inactivity Review — [Environment Name]

Hello [Owner Name],

As part of our Power Platform environment lifecycle governance process, the following environment has been identified for review based on our organization's inactivity criteria.

### Environment Details

| Field | Value |
|---|---|
| Environment Name | [Environment Name] |
| Environment ID | [Environment ID] |
| Environment Type | [Developer / Sandbox / Production / Trial / Teams / Other] |
| Last Recorded Activity | [Date] |
| Days Inactive | [Number of Days] |
| Review Threshold | [Number of Days] |
| Business Owner | [Owner Name] |
| Review / Ticket Reference | [Reference] |

Crossing the inactivity threshold does **not** automatically mean that the environment will be deleted.

We are requesting confirmation of whether this environment is still required.

### Please select the appropriate response

**KEEP — Environment is still required**

Provide a brief business justification and, where applicable, the expected period of continued use.

**EXCEPTION REQUEST — Environment requires temporary retention**

Provide the business reason and requested exception period.

**NO LONGER REQUIRED — Environment may proceed through cleanup review**

This authorizes the governance team to continue the cleanup assessment. It does not by itself authorize deletion.

**OWNERSHIP INCORRECT — I am not the appropriate owner**

Please provide the correct owner if known.

---

## Response Required

Please respond by:

**[Response Due Date]**

If we do not receive a response, the environment may proceed to the next stage of the organization's governance review and escalation process.

A lack of response should **not** be treated as automatic authorization to delete an environment unless explicitly permitted by your organization's approved governance policy.

Before any cleanup action, applicable protection requirements, dependencies, business criticality, retention requirements, approvals, and recovery considerations should be evaluated.

---

Thank you,

[Power Platform Governance Team]  
[Team / Department]  
[Contact Information]  
[Service Request / Governance Portal]

---

## Governance Record

When this notification is sent, record the following in the Environment Cleanup Assessment or equivalent governance system:

- Notification date
- Environment owner
- Response due date
- Owner response
- Business justification
- Exception request, if applicable
- Review/ticket reference
- Reviewer notes

This creates evidence that owner engagement occurred before a cleanup decision was made.

---

## Implementation Notes

Organizations should customize:

- Inactivity thresholds
- Response periods
- Escalation procedures
- Approval requirements
- Exception periods
- Contact information
- Records-management requirements

Do not present example inactivity thresholds in this toolkit as Microsoft-mandated deletion or retention periods.

---

## Disclaimer

This template is community-maintained guidance and should be adapted to your organization's governance, security, compliance, legal, records-management, and operational requirements.
