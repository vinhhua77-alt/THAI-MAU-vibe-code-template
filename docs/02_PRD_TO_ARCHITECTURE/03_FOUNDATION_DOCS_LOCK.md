# FOUNDATION DOCS LOCK PROTOCOL

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 02_PRD_TO_ARCHITECTURE (Gate)

---

## Purpose

This document defines the **protocol for locking Foundation 4 documents** — the immutable source of truth for all implementation work.

Once locked, these documents:
- Cannot be modified without formal change request
- Become the authoritative reference for all code
- Are version-controlled and auditable

---

## Foundation 4 Documents

| Document | Location | Purpose |
|----------|----------|---------|
| **PRODUCT_CORE.md** | /docs/tech-manual/ | Business intent, users, core actions |
| **DATA_SCHEMA.md** | /docs/tech-manual/ | Data structure, fields, mutability |
| **WORKFLOW.md** | /docs/tech-manual/ | States, transitions, rules |
| **ARCHITECTURE.md** | /docs/tech-manual/ | System design, phase boundaries |

---

## When to Use

- **After** all Foundation 4 documents are generated from Architecture Decomposition
- **Before** generating PROJECT_STATE.md
- **Mandatory** — no implementation begins without locked documents

---

## What This Does NOT Cover

- ❌ How to generate the documents (see 02_ARCHITECTURE_DECOMPOSITION.md)
- ❌ Architecture review (see 04_ARCHITECTURE_REVIEW_GATE.md)
- ❌ How to change locked documents (see Change Request Protocol below)

---

## Lock Checklist

### Pre-Lock Verification

Before locking, verify ALL items:

| Item | Requirement | Pass? |
|------|-------------|-------|
| 1 | PRODUCT_CORE.md exists and is complete | ☐ |
| 2 | DATA_SCHEMA.md exists with all tables/fields defined | ☐ |
| 3 | WORKFLOW.md exists with states and transitions | ☐ |
| 4 | ARCHITECTURE.md exists with phase boundaries | ☐ |
| 5 | All four documents are mutually consistent | ☐ |
| 6 | No [AMBIGUOUS] or [CONFLICT] tags remain unresolved | ☐ |
| 7 | Documents trace back to approved PRD | ☐ |

### Lock Declaration

Once verified, add this header to EACH document:

```markdown
---
DOCUMENT STATUS: LOCKED
LOCKED DATE: [YYYY-MM-DD]
LOCKED BY: [Name/Role]
VERSION: 1.0
CHANGE POLICY: Formal change request required
---
```

---

## Lock Ceremony

### Step 1: Verification
Run the Pre-Lock Checklist above.

### Step 2: Cross-Reference Check
Verify that:
- DATA_SCHEMA fields match WORKFLOW data requirements
- WORKFLOW states align with PRODUCT_CORE actions
- ARCHITECTURE modules cover all WORKFLOW operations

### Step 3: Lock Header
Add the lock header to all four documents.

### Step 4: Commit
```
git commit -m "chore: lock Foundation 4 documents v1.0"
```

### Step 5: Proceed
Continue to 03_PROJECT_STATE_SETUP.

---

## Change Request Protocol

### When Changes Are Needed

If implementation reveals that a locked document must change:

1. **STOP** current implementation
2. **Document** the required change and rationale
3. **Escalate** to project owner
4. **Await** formal approval

### Change Request Format

```markdown
## FOUNDATION DOC CHANGE REQUEST

**Requested By:** [Name]
**Date:** [YYYY-MM-DD]
**Document:** [Which of the 4]
**Section:** [Specific section]

### Current Content
[What it says now]

### Proposed Change
[What it should say]

### Rationale
[Why this change is necessary]

### Impact Assessment
- Affected code: [List]
- Affected workflows: [List]
- Risk level: [Low/Medium/High]

### Approval
- [ ] Project Owner
- [ ] Technical Lead
```

### After Approval

1. Update the document
2. Increment version number
3. Update LOCKED DATE
4. Add change to document's change log
5. Update PROJECT_STATE.md to reflect the change
6. Commit with clear message

---

## Common Mistakes

1. **Locking incomplete documents** — Every section must be filled
2. **Locking with unresolved conflicts** — These become implementation blockers
3. **Modifying locked docs without process** — This breaks traceability
4. **Not committing the lock** — Git is the audit trail
5. **Skipping cross-reference check** — Inconsistencies cause bugs

---

## Related Files

- **Upstream:** 02_ARCHITECTURE_DECOMPOSITION.md
- **Parallel:** 04_ARCHITECTURE_REVIEW_GATE.md
- **Downstream:** 03_PROJECT_STATE_SETUP/01_AUTO_GENERATE_PROJECT_STATE.md

---

## Lock Status Summary

| Document | Version | Locked | Date | By |
|----------|---------|--------|------|----|
| PRODUCT_CORE.md | | ☐ | | |
| DATA_SCHEMA.md | | ☐ | | |
| WORKFLOW.md | | ☐ | | |
| ARCHITECTURE.md | | ☐ | | |

---

**All Documents Locked:** ☐ YES / ☐ NO
