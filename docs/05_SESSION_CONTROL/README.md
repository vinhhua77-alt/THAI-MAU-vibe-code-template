# 05_SESSION_CONTROL

## Purpose

This folder contains prompts for **daily development operations** — starting sessions, generating execution prompts, and controlling scope.

These prompts enforce:
- Session gating and validation
- Scope locking before execution
- Proper handoff to Antigravity
- Safety checks and fail-safes

## When to Use

**Every working session.**

Daily workflow:
```
1. 00_DAILY_AUTO_START_ENHANCED.md (orient + lock)
2. 01_AUTO_SUGGEST_UNIT_AND_START.md (select unit)
3. 02/03/04_GENERATE_EXECUTION_PROMPT.md (create Antigravity prompt)
4. → Execute in Antigravity
5. → Run END_OF_SESSION
```

## Who Should Use This

- **Developers** starting each session
- **ChatGPT** generating execution prompts
- **Antigravity** receiving the generated prompts

## What NOT to Do

- ❌ Skip the session start protocol
- ❌ Execute without session lock confirmation
- ❌ Use Antigravity directly without an execution prompt
- ❌ Ignore fail-safe warnings

## Typical Mistakes to Avoid

1. **Skipping orientation** — Always start with AUTO_START
2. **Mixing session types** — A, B, or C — never mix
3. **Building without scope lock** — Wait for "SESSION LOCKED" confirmation
4. **Ignoring blocked status** — Fix issues before proceeding
5. **Using skills without declaration** — Always declare skill usage
