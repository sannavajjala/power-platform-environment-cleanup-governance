# Power Platform Environment Cleanup Governance

A community-maintained governance toolkit for identifying, reviewing, approving, and documenting cleanup decisions for Microsoft Power Platform environments.

> **Core principle: Inactivity triggers governance review. It does not automatically authorize deletion.**

This project provides practical governance guidance, decision frameworks, templates, and assessment tools for organizations managing inactive, abandoned, orphaned, or potentially unnecessary Power Platform environments.

The goal is not simply to find old environments.

The goal is to determine whether an environment can be safely cleaned up while considering ownership, business criticality, dependencies, protection requirements, retention obligations, approvals, and recovery.

---

## Why This Project Exists

As Power Platform adoption grows, organizations can accumulate large numbers of environments across:

- Development
- Sandbox
- Production
- Developer
- Trial
- Microsoft Teams
- Departmental and project workloads

Some environments remain active and business-critical.

Others become abandoned, ownerless, unused, duplicated, or no longer necessary.

However:

**Inactive does not mean safe to delete.**

An apparently inactive environment might still contain:

- Power Apps
- Power Automate flows
- Copilot Studio agents
- Dataverse data
- Connections and custom connectors
- Integration dependencies
- Business-critical applications
- Compliance or retention requirements
- Components referenced by other solutions or systems

This toolkit introduces a structured governance process before cleanup decisions are made.

---

## Governance Lifecycle

The recommended lifecycle is:

```text
Environment Inventory
        ↓
Inactivity Detection
        ↓
Protection / Exclusion Review
        ↓
Owner Identification
        ↓
Owner Notification
        ↓
Dependency & Business Risk Review
        ↓
Decision
   ┌────────┼─────────┐
   ↓        ↓         ↓
 Keep    Exception   Cleanup
                      ↓
             Pre-Cleanup Validation
                      ↓
                   Approval
                      ↓
                   Cleanup
                      ↓
                Audit Record
