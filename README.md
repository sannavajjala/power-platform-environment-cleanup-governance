# Power Platform Environment Cleanup Governance

This repository documents a practical process for identifying inactive Microsoft Power Platform environments and managing cleanup through a controlled governance workflow.

## Purpose

Power Platform environments can grow quickly across an organization. Without regular review, inactive environments may create unnecessary administrative overhead, security exposure, and governance gaps.

This process helps admins:

- Identify inactive environments
- Validate ownership
- Notify makers or business owners
- Review exceptions
- Approve cleanup
- Track deletion or retention decisions

## Process Flow

1. Collect environment inventory from Power Platform Admin Center or CoE Starter Kit.
2. Identify environments with no meaningful activity in the last 60–90 days.
3. Exclude production, managed, or business-critical environments.
4. Contact the environment owner.
5. Wait for owner response.
6. Approve one of the following:
   - Retain
   - Archive
   - Delete
7. Document the final decision.
8. Report cleanup results.

## Recommended Criteria

An environment may be considered inactive if:

- No apps have been launched recently
- No flows have run recently
- No makers have modified assets
- No business owner is actively using it
- No active support or production dependency exists

## Governance Considerations

Before deleting an environment, confirm:

- Business owner approval
- No active apps or flows
- No production dependency
- No compliance or retention requirement
- Backup or export completed if needed

## Suggested Roles

| Role | Responsibility |
|---|---|
| Power Platform Admin | Runs inventory and cleanup process |
| Environment Owner | Confirms retain/delete decision |
| Business Owner | Approves business impact |
| Security/Compliance | Reviews exceptions |
| CoE Team | Tracks governance reporting |

## Artifacts

- Environment cleanup checklist
- Owner notification template
- Decision log template
- Cleanup process diagram

## Future Enhancements

- Automate inactive environment detection
- Send owner notifications through Power Automate
- Store decisions in Dataverse
- Build Power BI dashboard for cleanup tracking
- Integrate approval workflow
