# SESSION SUMMARY RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 06_END_OF_SESSION (Governance)

---

## Purpose

This document defines the **rules for creating SESSION_SUMMARY files** — detailed records of what was accomplished in each session.

Session summaries:
- Provide context for future sessions
- Enable audit and review
- Capture decisions and discoveries

---

## When to Use

- **At the end of every session** (all types: A, B, C)
- **Before closing** the session
- **Required** for governance compliance

---

## What This Does NOT Cover

- ❌ CHANGELOG updates (see 02_CHANGELOG_RULES.md)
- ❌ User Manual updates (see 04_USER_MANUAL_ENFORCEMENT.md)
- ❌ PROJECT_STATE updates (see 03_PROJECT_STATE_SETUP)

---

## File Naming

```
/docs/tech-manual/SESSION_SUMMARY_YYYY-MM-DD.md
```

**Examples:**
- SESSION_SUMMARY_2026-02-01.md
- SESSION_SUMMARY_2026-02-02.md

If multiple sessions occur on the same day:
```
SESSION_SUMMARY_2026-02-01_A.md
SESSION_SUMMARY_2026-02-01_B.md
```

---

## Session Summary Structure

```markdown
# SESSION SUMMARY

**Date:** YYYY-MM-DD
**Session Type:** [A / B / C]
**Duration:** [Approximate hours]
**Operator:** [Who ran the session]

---

## Session Objective

[What was the goal of this session?]

---

## Work Completed

### [Category 1]
- [Specific accomplishment]
- [Specific accomplishment]

### [Category 2]
- [Specific accomplishment]

---

## Files Touched

| File | Action | Notes |
|------|--------|-------|
| [path/to/file] | Created / Modified / Reviewed | [Brief note] |

---

## Decisions Made

| Decision | Rationale | Impact |
|----------|-----------|--------|
| [What was decided] | [Why] | [What this affects] |

---

## Discoveries / Notes

- [Any unexpected findings]
- [Technical observations]
- [Things to remember]

---

## User-Facing Change

**Impact:** [Yes / No]

[If Yes, describe what users will experience differently]

---

## Open Items

| Item | Owner | Priority |
|------|-------|----------|
| [What remains] | [Who resolves] | [High/Medium/Low] |

---

## Next Session Recommendations

- [Suggested next steps]
- [What should happen next]

---

## Session Status

**Completed Successfully:** [Yes / No]
**Blockers Encountered:** [Yes / No - describe if yes]
```

---

## Section Guidelines

### Session Objective
- One sentence stating what was attempted
- Should match the session start declaration

### Work Completed
- Bulleted list of accomplishments
- Grouped by category (Code, Docs, Config, etc.)
- Specific and verifiable

### Files Touched
- Every file created, modified, or reviewed
- Include the action type
- Brief context for each

### Decisions Made
- Any choices that affect future work
- Include rationale — "why" matters
- Note what is impacted

### Discoveries / Notes
- Unexpected findings during work
- Technical observations for future reference
- Context that might be lost otherwise

### User-Facing Change
- Required for trigger User Manual enforcement
- Must explicitly state Yes or No
- If Yes, describe what changes

### Open Items
- Anything not completed
- Must have an owner
- Used for next session planning

---

## Quality Standards

### Good Summary
```markdown
## Work Completed

### Code
- Implemented order state transitions per WORKFLOW.md Section 4
- Added validation for required fields in order creation

### Documentation
- Updated tech manual with state machine diagram
```

### Bad Summary
```markdown
## Work Completed
- Did some coding
- Fixed things
- Updated docs
```

---

## Required vs Optional Sections

### Required (Every Session)
- Session Objective
- Work Completed
- Files Touched
- User-Facing Change
- Session Status

### Optional (When Applicable)
- Decisions Made — only if decisions occurred
- Discoveries / Notes — only if discoveries found
- Open Items — only if items remain
- Next Session Recommendations — if specific recommendations exist

---

## Common Mistakes

1. **Vague descriptions** — "Did stuff" tells future you nothing
2. **Missing files** — Every touched file must be listed
3. **Skipping User-Facing** — This triggers User Manual enforcement
4. **No rationale** — Decisions without "why" are incomplete
5. **Ignoring open items** — These become forgotten work

---

## Session Type Variations

### TYPE A (Architecture/Documentation)
- Focus on: Documents produced
- Files: Mostly .md files
- User-Facing: Usually No

### TYPE B (Implementation)
- Focus on: Code written, features built
- Files: Code files + potential docs
- User-Facing: Often Yes

### TYPE C (Summary/Wrap-up)
- Focus on: State consolidation
- Files: Governance files
- User-Facing: Always No

---

## Validation Checklist

Before closing session:

| Check | Requirement |
|-------|-------------|
| File created | SESSION_SUMMARY_YYYY-MM-DD.md exists |
| All sections complete | Required sections are filled |
| Files listed | All touched files documented |
| User-facing stated | Explicitly Yes or No |
| Status recorded | Session marked complete or blocked |

---

## Related Files

- **Master Session:** 01_END_OF_SESSION_MASTER.md
- **CHANGELOG:** 02_CHANGELOG_RULES.md
- **User Manual:** 04_USER_MANUAL_ENFORCEMENT.md
