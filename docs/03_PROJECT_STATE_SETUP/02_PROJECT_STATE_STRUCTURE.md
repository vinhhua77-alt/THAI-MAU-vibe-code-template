# PROJECT_STATE STRUCTURE REFERENCE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 03_PROJECT_STATE_SETUP (Reference)

---

## Purpose

This document defines the **exact structure and meaning** of every section in PROJECT_STATE.md.

PROJECT_STATE.md is the **working memory** of the project — the single file that:
- Tracks current project phase
- Records what is allowed and forbidden
- Maintains session history
- Links to all source-of-truth documents

---

## When to Use

- **When generating** PROJECT_STATE.md for the first time
- **When updating** PROJECT_STATE.md after sessions
- **When resolving disputes** about project scope

---

## What This Does NOT Cover

- ❌ How to generate PROJECT_STATE.md (see 01_AUTO_GENERATE_PROJECT_STATE.md)
- ❌ Update rules and protocols (see 03_PROJECT_STATE_UPDATE_RULES.md)
- ❌ Session control (see 05_SESSION_CONTROL)

---

## PROJECT_STATE.md Structure

### Header Section

```markdown
# PROJECT_STATE

**Project Name:** [Name]
**Owner:** [Name/Role]
**Last Updated:** [YYYY-MM-DD]
**Current Phase:** [Phase 0 / Phase 1 / Phase 2]
**Session Type in Progress:** [None / A / B / C]
**Status:** [Active / Blocked / On Hold]
```

**Rules:**
- Last Updated MUST change with every session
- Session Type shows current session OR "None" if between sessions
- Status is normally "Active"

---

### Section 1: Project Purpose (LOCKED)

```markdown
## 1. PROJECT PURPOSE (LOCKED)

[1-2 paragraph statement of what this project exists to do,
derived directly from PRODUCT_CORE.md]
```

**Rules:**
- This section is **LOCKED** after initial generation
- Changes require formal change request
- Must trace directly to PRODUCT_CORE.md

---

### Section 2: Locked Source of Truth

```markdown
## 2. LOCKED SOURCE OF TRUTH (DO NOT MODIFY)

### Foundation Documents
- PRODUCT_CORE.md (v1.0, locked YYYY-MM-DD)
- DATA_SCHEMA.md (v1.0, locked YYYY-MM-DD)
- WORKFLOW.md (v1.0, locked YYYY-MM-DD)
- ARCHITECTURE.md (v1.0, locked YYYY-MM-DD)

### User Manual
- /docs/user-manual/README.md
- /docs/user-manual/OVERVIEW.md
- /docs/user-manual/DAILY_OPERATIONS.md
- /docs/user-manual/STATES_AND_RULES.md
- /docs/user-manual/EXCEPTIONS_AND_ERRORS.md
- /docs/user-manual/FAQ.md
```

**Rules:**
- Lists ALL source-of-truth files
- Version and lock date must be shown
- User Manual structure is fixed

---

### Section 3: Current Scope

```markdown
## 3. CURRENT SCOPE (WHAT IS ALLOWED NOW)

### Allowed Actions
- [Action 1]
- [Action 2]
- [Action 3]

### Explicitly Forbidden Actions
- Feature expansion beyond PRD scope
- Workflow redesign
- Data semantic changes
- Locked document modifications
```

**Rules:**
- Allowed Actions are derived from ARCHITECTURE.md
- Forbidden Actions are default plus any project-specific items
- This is the SCOPE BOUNDARY for all sessions

---

### Section 4: Phase Status

```markdown
## 4. PHASE STATUS

### Phase 0 — Architecture & Definition
- Status: Completed
- Locked Outputs: [list Foundation 4]

### Phase 1 — Implementation
- Status: [Not Started / In Progress / Completed]
- Constraints: [list constraints]

### Phase 2 — Upgrade Path
- Status: Planned
- Non-negotiables: [list]
```

**Rules:**
- Only ONE phase can be "In Progress"
- Phase transitions require formal declaration
- Constraints come from ARCHITECTURE.md

---

### Section 5: Active Assumptions

```markdown
## 5. ASSUMPTIONS (ACTIVE)

- [Assumption 1]
- [Assumption 2]

OR

No explicit assumptions recorded.
```

**Rules:**
- Only assumptions from Foundation docs appear here
- If no assumptions, explicitly state "None recorded"

---

### Section 6: Open Questions

```markdown
## 6. OPEN QUESTIONS / AMBIGUITIES

| ID | Question | Owner | Status |
|----|----------|-------|--------|
| Q1 | [Question] | [Who] | [Open/Resolved] |

OR

No open questions at this time.
```

**Rules:**
- All [AMBIGUOUS] items from architecture become open questions
- Questions must have an owner
- Resolved questions move to "Resolved" but remain visible

---

### Section 7: Recent Session Summary

```markdown
## 7. RECENT SESSION SUMMARY

**Last Session:** [YYYY-MM-DD]
**Type:** [A / B / C]
**What was done:**
- [Brief description]

**User-facing change:** [Yes / No]
```

**Rules:**
- Updated at end of EVERY session
- Brief — details are in SESSION_SUMMARY files

---

### Section 8: Change Log

```markdown
## 8. CHANGE LOG (HIGH LEVEL)

| Date | Description |
|------|-------------|
| YYYY-MM-DD | PROJECT_STATE.md initialized |
| YYYY-MM-DD | [Session description] |
```

**Rules:**
- Append-only — never delete entries
- One line per session max
- Links to SESSION_SUMMARY for details

---

### Section 9: Next Allowed Actions

```markdown
## 9. NEXT ALLOWED ACTIONS

- [Action 1 — what can be done next]
- [Action 2 — alternative option]
```

**Rules:**
- Derived from IMPLEMENTATION_PLAN.md or Phase status
- Must reference valid implementation units
- Updates after each session

---

## Common Mistakes

1. **Editing locked sections** — Sections 1 and 2 are immutable
2. **Skipping session updates** — Section 7 must update every session
3. **Vague change log** — Entries must be traceable
4. **Missing scope boundaries** — Section 3 prevents scope creep
5. **Stale next actions** — Section 9 must reflect current plan

---

## Related Files

- **Generator:** 01_AUTO_GENERATE_PROJECT_STATE.md
- **Update Rules:** 03_PROJECT_STATE_UPDATE_RULES.md
- **Session Control:** 05_SESSION_CONTROL/00_DAILY_AUTO_START_ENHANCED.md
