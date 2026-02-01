# ROLE-BASED USER MANUAL UPDATE RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 06_END_OF_SESSION (Conditional)

---

## Purpose

This document defines **when and how Role-Based User Manuals are updated** — specialized documentation for different user roles.

Role-based manuals exist because different users:
- See different views
- Have different permissions
- Follow different workflows
- Need different instructions

---

## When to Use

- **After** determining user-facing change in base User Manual
- **Only if** the change affects roles differently
- **In addition to** (not instead of) base User Manual update

---

## What This Does NOT Cover

- ❌ Base User Manual rules (see 04_USER_MANUAL_ENFORCEMENT.md)
- ❌ Role definition in PRODUCT_CORE.md
- ❌ Permission configuration

---

## Role Manual Structure

Role-based manuals live at `/docs/user-manual/roles/`:

| File | Role | Focus |
|------|------|-------|
| STAFF.md | Frontline staff | Daily task execution |
| LEADER.md | Shift/Store leaders | Supervision and approvals |
| OPS.md | Operations managers | Reporting and oversight |
| ADMIN.md | System administrators | Configuration and maintenance |

---

## When Role Update is Required

Role-based update is triggered when:

### Condition 1: User-Facing Change = YES
(Already determined per 04_USER_MANUAL_ENFORCEMENT.md)

### Condition 2: Role-Specific Difference

The change affects roles differently:

| Scenario | Example |
|----------|---------|
| **Different actions** | Staff can create; Leader can approve |
| **Different visibility** | Staff sees own data; Leader sees team data |
| **Different sequence** | Staff initiates; Ops completes |
| **Different rules** | Different validation per role |
| **Different permissions** | Some roles cannot access feature |

---

## When Role Update is NOT Required

Do NOT update role manuals if:
- Change affects all roles identically
- Change is purely technical (no UI/UX impact)
- Base User Manual update is sufficient

In this case, explicitly state:
```markdown
"No role-based manual update required — change applies uniformly to all roles."
```

---

## Update Protocol

### Step 1: Identify Affected Roles

For each user-facing change, ask:
- Which roles interact with this feature?
- Does the interaction differ by role?
- What does each role need to know?

### Step 2: Map to Role Files

| Change Impact | Update |
|---------------|--------|
| Staff workflow changed | STAFF.md |
| Leader approval added | LEADER.md |
| Ops reporting changed | OPS.md |
| Admin config changed | ADMIN.md |

### Step 3: Write Role-Specific Content

For each affected role file:

```markdown
## [Feature/Area] Updates

### What Changed
[Describe from THIS role's perspective]

### Your New Actions
[Step-by-step for THIS role]

### What You Cannot Do
[Limitations specific to THIS role]
```

### Step 4: Maintain Alignment

Role manuals MUST align with:
- Base User Manual (same terminology)
- WORKFLOW.md (same state definitions)
- Each other (no contradictions)

---

## Content Standards

### DO

- Write from the role's perspective ("You can...")
- Reference base User Manual for shared content
- Focus on role-specific differences
- Use consistent terminology

### DON'T

- Duplicate full base User Manual content
- Include information irrelevant to the role
- Contradict other role manuals
- Use technical implementation language

---

## Cross-Reference Format

When content is shared with base manual:
```markdown
See [User Manual - Daily Operations](../DAILY_OPERATIONS.md) for full workflow.

**Leader-specific notes:**
- You have approval authority at Step 3
- You can view all team submissions
```

---

## Alignment Verification

Before completing:

### Check 1: Base Manual Consistency
- Role manual uses same terms as base manual
- Links to base manual are correct
- No contradictory instructions

### Check 2: Role Separation
- Each role's responsibilities are clear
- No overlapping instructions
- Permissions boundaries are respected

### Check 3: Workflow Coverage
- Role's part in workflow is documented
- Handoffs to other roles are clear
- Edge cases are addressed

---

## Update Declaration

In SESSION_SUMMARY, document:

```markdown
## Role-Based Manual Updates

**Roles Affected:**
- LEADER.md — Added approval workflow for new feature
- STAFF.md — Updated task creation instructions

**Roles Not Affected:**
- OPS.md — No change to ops view
- ADMIN.md — No configuration changes
```

---

## Common Mistakes

1. **Duplicating content** — Reference, don't copy
2. **Updating wrong role** — Verify who is actually affected
3. **Contradicting base manual** — Alignment is mandatory
4. **Ignoring role separation** — Each role has distinct needs
5. **Skipping when required** — This is a governance gate

---

## Exemption Declaration

If role-based update is NOT needed, explicitly document:
```markdown
**Role-Based Update Required:** No

**Reason:** Change applies uniformly to all roles. 
Base User Manual update is sufficient.
```

---

## Validation Checklist

When updating role manuals:

| Check | Requirement |
|-------|-------------|
| Correct roles identified | Only affected roles updated |
| Content is role-specific | Not duplicating base manual |
| Aligned with base | Same terms, no contradictions |
| Aligned with workflow | Matches WORKFLOW.md |
| Documented in summary | Session summary records updates |

---

## Related Files

- **Base Manual Rules:** 04_USER_MANUAL_ENFORCEMENT.md
- **Session Master:** 01_END_OF_SESSION_MASTER.md
- **Workflow Reference:** /docs/tech-manual/WORKFLOW.md
