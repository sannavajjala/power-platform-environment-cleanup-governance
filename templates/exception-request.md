# Power Platform Environment Cleanup — Exception Request

## Purpose

Use this template when an environment has met the organization's cleanup review criteria but has a valid business, technical, compliance, project, or operational reason to remain available temporarily.

> An exception postpones or modifies the normal cleanup process. It should not create permanent exemption without periodic review.

---

## Environment Information

| Field | Value |
|---|---|
| Environment Name | [Environment Name] |
| Environment ID | [Environment ID] |
| Environment Type | [Environment Type] |
| Business Owner | [Business Owner] |
| Technical Owner | [Technical Owner] |
| Last Recorded Activity | [Date] |
| Days Inactive | [Number] |
| Review / Ticket Reference | [Reference] |

---

## Exception Request

**Requested by:**  
[Name]

**Request date:**  
[Date]

**Requested exception expiration date:**  
[Date]

**Business justification:**

[Describe why the environment must be retained.]

---

## Reason for Exception

Select the applicable reason:

- [ ] Active project or development work
- [ ] Planned future deployment
- [ ] Business-critical dependency
- [ ] Integration dependency
- [ ] Testing or validation requirement
- [ ] Migration activity
- [ ] Seasonal or infrequent business process
- [ ] Compliance or retention requirement
- [ ] Investigation or legal requirement
- [ ] Recovery requirement
- [ ] Other

If Other:

[Provide explanation]

---

## Workloads and Dependencies

Identify resources that require the environment to remain available:

- [ ] Power Apps
- [ ] Power Automate flows
- [ ] Copilot Studio agents
- [ ] Dataverse
- [ ] Connections
- [ ] Custom connectors
- [ ] Integrations
- [ ] Solutions
- [ ] Other

Dependency details:

[Describe relevant workloads, systems, integrations, or business processes.]

---

## Business Impact

What would happen if the environment were cleaned up?

[Describe business, technical, operational, financial, or compliance impact.]

---

## Exception Period

Exceptions should normally have a defined review date.

**Exception Start Date:**  
[Date]

**Exception Expiration / Review Date:**  
[Date]

**Expected environment disposition after expiration:**

- [ ] Return to normal cleanup review
- [ ] Expected to become active
- [ ] Expected to move to another environment
- [ ] Expected to be decommissioned
- [ ] Requires another governance review

---

## Compensating Controls

If the environment remains inactive during the exception period, identify any controls that should remain in place.

Examples:

- Restricted sharing
- Owner validation
- Periodic review
- Connection review
- Access review
- Monitoring
- Data protection
- Reduced permissions

Controls:

[Describe applicable controls.]

---

## Approval

**Decision:**

- [ ] APPROVED
- [ ] APPROVED WITH CONDITIONS
- [ ] REJECTED
- [ ] ADDITIONAL INFORMATION REQUIRED

**Decision reason:**

[Reason]

**Approved / Reviewed By:**  
[Name]

**Approval Date:**  
[Date]

**Next Review Date:**  
[Date]

---

## Governance Record

Record the exception in the Environment Cleanup Assessment or equivalent governance system.

At minimum capture:

- Environment
- Owner
- Exception reason
- Request date
- Approver
- Decision
- Approval date
- Expiration/review date
- Supporting ticket
- Conditions
- Notes

Expired exceptions should return to the governance review process rather than remaining indefinitely exempt.

---

## Governance Principle

> **Exceptions should be explicit, justified, time-bound, approved, and reviewable.**

An exception is not the same as permanent protection.

---

## Disclaimer

This template is community-maintained guidance.

Organizations should adapt exception criteria, approval requirements, review periods, and escalation procedures to their own governance, security, compliance, legal, records-management, and operational requirements.
