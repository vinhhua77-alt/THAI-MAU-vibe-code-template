# 06_END_OF_SESSION

## Purpose

This folder contains prompts for **closing sessions correctly** — updating governance artifacts, enforcing documentation rules, and maintaining audit trails.

Every session MUST be closed with:
- CHANGELOG.md update
- SESSION_SUMMARY file
- PROJECT_STATE.md update
- User Manual review (if user-facing change)

## When to Use

**At the end of EVERY working session.**

This is the final step:
```
... → Execute → END_OF_SESSION_MASTER → Next Day
```

## Who Should Use This

- **Developers** closing their sessions
- **Antigravity** updating governance files
- **Auditors** verifying session compliance

## What NOT to Do

- ❌ Skip end-of-session protocol
- ❌ Leave sessions unclosed
- ❌ Modify locked foundation documents
- ❌ Forget User Manual updates when required

## Typical Mistakes to Avoid

1. **Leaving sessions open** — Always run END_OF_SESSION_MASTER
2. **Skipping User Manual updates** — If user-facing change = YES, update is mandatory
3. **Not updating implementation plan** — Mark units completed/blocked
4. **Rewriting history** — Append-only for CHANGELOG
5. **Missing session summary** — Every session needs a summary file
