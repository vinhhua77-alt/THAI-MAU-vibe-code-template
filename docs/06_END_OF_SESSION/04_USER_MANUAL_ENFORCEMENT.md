# USER MANUAL ENFORCEMENT RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 06_END_OF_SESSION (Governance Gate)

---

## Purpose

This document defines **when and how User Manual updates are required** following implementation work.

The User Manual is the **operational truth** — it tells users how to use the system. When the system changes in user-facing ways, the manual MUST be updated.

---

## When to Use

- **At the end of every TYPE B session** — check if update is required
- **Before closing** any session that touched user-facing behavior
- **Mandatory gate** — session fails if update is missed

---

## What This Does NOT Cover

- ❌ Role-based manual updates (see 05_ROLE_BASED_USER_MANUAL_UPDATE.md)
- ❌ Session summary content (see 03_SESSION_SUMMARY_RULES.md)
- ❌ User Manual structure template

---

## Core Rule

> **If USER-FACING CHANGE = YES, User Manual update is MANDATORY.**

No exceptions. Session is marked FAIL if this is violated.

---

## Definition: User-Facing Change

A change is **user-facing** if it affects:

| Category | Examples |
|----------|----------|
| **Actions** | What a user can or cannot do |
| **Timing** | When a user can or cannot act |
| **Sequence** | The order of steps in a workflow |
| **Conditions** | Requirements for success or failure |
| **Visibility** | What users see (states, statuses, messages) |
| **Meaning** | How users interpret information |

### User-Facing: YES

```
- New field added to a form users fill out
- State transition rules changed
- Validation error message updated
- New action button added
- Workflow step order changed
- Required field changed to optional
```

### User-Facing: NO

```
- Internal refactoring with same behavior
- Performance optimization
- Code cleanup
- Backend-only logic change
- Database index added
- Logging improvements
```

---

## User Manual Structure

The User Manual lives at `/docs/user-manual/` and contains:

| File | Purpose |
|------|---------|
| README.md | Manual overview and navigation |
| OVERVIEW.md | System purpose and core concepts |
| DAILY_OPERATIONS.md | How to perform daily tasks |
| STATES_AND_RULES.md | Business rules and state definitions |
| EXCEPTIONS_AND_ERRORS.md | Error handling and troubleshooting |
| FAQ.md | Frequently asked questions |

---

## Update Protocol

### Step 1: Determine Impact

At session end, answer:
- **What changed?** (list specific changes)
- **Who is affected?** (which users/roles)
- **How does behavior differ?** (before vs after)

### Step 2: Identify Files

Map changes to User Manual files:

| Change Type | Update File |
|-------------|-------------|
| New workflow step | DAILY_OPERATIONS.md |
| New state or rule | STATES_AND_RULES.md |
| New error condition | EXCEPTIONS_AND_ERRORS.md |
| Common question | FAQ.md |
| Core concept | OVERVIEW.md |

### Step 3: Write Updates

Update the relevant sections:
- Use consistent language with existing content
- Match WORKFLOW.md terminology exactly
- Keep it business-readable (no technical jargon)

### Step 4: Version Increment

Update the manual header:
```markdown
**Version:** [X.Y] → [X.Y+1] or [X+1.0]
**Status:** UPDATED
**Last Modified:** YYYY-MM-DD
```

### Step 5: Record in Session Summary

```markdown
## User-Facing Change

**Impact:** Yes

**Changes:**
- Updated DAILY_OPERATIONS.md with new order flow
- Added FAQ entry for common error

**Manual Version:** 1.2 → 1.3
```

---

## Update Standards

### Language
- Write for the end user, not developers
- Use terms from PRODUCT_CORE.md
- Avoid technical implementation details

### Consistency
- Match WORKFLOW.md terminology exactly
- Use same terms throughout the manual
- Cross-reference related sections

### Completeness
- Cover the "what," "when," and "why"
- Include examples where helpful
- Address edge cases users might encounter

---

## Enforcement Gate

### At Session End

The END_OF_SESSION_MASTER prompt verifies:

```
IF session touched code AND User-Facing Change = YES
THEN User Manual update is REQUIRED
```

### Failure Conditions

Session is marked **FAIL** if:
- User-facing change occurred AND
- No User Manual files were updated AND
- No explicit exemption was declared

### Valid Exemptions

Exemption is valid ONLY if:
- Change is genuinely not user-facing
- Exemption is documented in SESSION_SUMMARY
- Technical Lead approves (for edge cases)

---

## Common Mistakes

1. **Assuming internal = not user-facing** — Trace the impact
2. **Updating only tech manual** — User Manual is separate
3. **Forgetting version increment** — This is mandatory
4. **Technical language in user manual** — Write for business users
5. **Skipping the check** — This gate cannot be bypassed

---

## Verification Checklist

Before closing session with user-facing change:

| Check | Requirement |
|-------|-------------|
| Files identified | Know which manual files to update |
| Changes written | Updates are complete and clear |
| Version incremented | Header updated with new version |
| Session summary | User-facing change documented |
| Committed | Manual changes in session commit |

---

## Related Files

- **Role-Based:** 05_ROLE_BASED_USER_MANUAL_UPDATE.md
- **Session Master:** 01_END_OF_SESSION_MASTER.md
- **Session Summary:** 03_SESSION_SUMMARY_RULES.md
