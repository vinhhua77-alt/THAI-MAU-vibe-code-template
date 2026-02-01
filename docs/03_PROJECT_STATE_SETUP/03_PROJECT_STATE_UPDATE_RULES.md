# PROJECT_STATE UPDATE RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 03_PROJECT_STATE_SETUP (Governance)

---

## Purpose

This document defines the **rules for updating PROJECT_STATE.md** after initial generation.

PROJECT_STATE.md is updated frequently but NEVER recreated. These rules ensure:
- Consistency across sessions
- Audit trail integrity
- Governance compliance

---

## When to Use

- **At the end of every session** (via END_OF_SESSION_MASTER)
- **When phase transitions occur**
- **When resolving disputes about state**

---

## What This Does NOT Cover

- ❌ Initial generation (see 01_AUTO_GENERATE_PROJECT_STATE.md)
- ❌ Structure definition (see 02_PROJECT_STATE_STRUCTURE.md)
- ❌ Daily session start (see 05_SESSION_CONTROL)

---

## Core Principle

> **PROJECT_STATE.md is UPDATED, never RECREATED.**

Once initialized, the file evolves through controlled updates only.

---

## Update Classification

### Always Update (Every Session)

| Section | Update Trigger |
|---------|----------------|
| Header: Last Updated | Every session |
| Header: Session Type in Progress | Start/end of session |
| Section 7: Recent Session Summary | End of session |
| Section 8: Change Log | End of session |
| Section 9: Next Allowed Actions | End of session |

### Conditional Update

| Section | Update Trigger |
|---------|----------------|
| Section 3: Current Scope | Phase transition or scope change approval |
| Section 4: Phase Status | Phase completion or transition |
| Section 5: Assumptions | New assumption discovered |
| Section 6: Open Questions | New question or resolution |

### Never Update (Locked)

| Section | Reason |
|---------|--------|
| Section 1: Project Purpose | Locked at generation |
| Section 2: Locked Source of Truth | Locked at generation (version changes only) |

---

## Session Update Protocol

### At Session Start

```markdown
Session Type in Progress: [A / B / C]
```

### At Session End

1. **Update Header**
   ```markdown
   Last Updated: [YYYY-MM-DD]
   Session Type in Progress: None
   ```

2. **Update Section 7**
   ```markdown
   ## 7. RECENT SESSION SUMMARY
   
   **Last Session:** [YYYY-MM-DD]
   **Type:** [A / B / C]
   **What was done:**
   - [Brief description of work completed]
   
   **User-facing change:** [Yes / No]
   ```

3. **Append to Section 8**
   ```markdown
   | YYYY-MM-DD | [One-line session description] |
   ```

4. **Update Section 9**
   ```markdown
   ## 9. NEXT ALLOWED ACTIONS
   
   - [Updated based on what was completed]
   ```

---

## Phase Transition Protocol

When a phase completes:

1. **Update Section 4**
   - Change current phase status to "Completed"
   - Change next phase status to "In Progress"

2. **Update Section 3**
   - Adjust Allowed Actions for new phase
   - Add any new phase-specific constraints

3. **Record in Section 8**
   ```markdown
   | YYYY-MM-DD | Phase 1 completed, Phase 2 started |
   ```

---

## Scope Change Protocol

If a formal scope change is approved:

1. **Document the change request** (see 02_PRD_TO_ARCHITECTURE/03_FOUNDATION_DOCS_LOCK.md)

2. **Update Section 2** (version only)
   ```markdown
   - WORKFLOW.md (v1.1, updated YYYY-MM-DD)
   ```

3. **Update Section 3** if allowed actions change

4. **Record in Section 8**
   ```markdown
   | YYYY-MM-DD | Scope change: [description] approved |
   ```

---

## Open Question Protocol

### Adding a Question

```markdown
| Q[N] | [Question text] | [Owner] | Open |
```

### Resolving a Question

```markdown
| Q[N] | [Question text] | [Owner] | Resolved ([date]) |
```

Questions are never deleted — resolution is marked.

---

## Forbidden Updates

The following changes are **PROHIBITED**:

1. ❌ Deleting entries from Change Log (Section 8)
2. ❌ Modifying Project Purpose (Section 1)
3. ❌ Removing locked documents from Section 2
4. ❌ Backdating updates
5. ❌ Changing status without completing required outputs

---

## Update Validation

Before saving any update, verify:

| Check | Requirement |
|-------|-------------|
| Date consistency | Last Updated matches today |
| Change log entry | New entry exists for this session |
| Session summary | Section 7 reflects actual work |
| Cross-reference | If plan updated, Section 9 matches |

---

## Common Mistakes

1. **Forgetting to clear Session Type** — Must be "None" between sessions
2. **Vague change log entries** — "Updated stuff" is not acceptable
3. **Editing locked sections** — These require formal change process
4. **Inconsistent dates** — All dates in one update must match
5. **Missing user-facing declaration** — Section 7 must state Yes or No

---

## Emergency Recovery

If PROJECT_STATE.md becomes corrupted or inconsistent:

1. **STOP** all work
2. **Compare** with last known good version in Git
3. **Restore** from Git if necessary
4. **Document** the recovery in Change Log
5. **Resume** with extra verification

---

## Related Files

- **Structure Reference:** 02_PROJECT_STATE_STRUCTURE.md
- **Initial Generation:** 01_AUTO_GENERATE_PROJECT_STATE.md
- **Session End:** 06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md
