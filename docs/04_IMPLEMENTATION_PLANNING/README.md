# 04_IMPLEMENTATION_PLANNING

## Purpose

This folder contains prompts for **creating and using IMPLEMENTATION_PLAN.md** — the execution guide that breaks architecture into buildable units.

The implementation plan:
- Lists implementation units in dependency order
- Helps choose what to build next
- Tracks completion status
- Is NOT a specification (just a guide)

## When to Use

**After PROJECT_STATE.md is initialized.**

This is Stage 4 of the governance workflow:
```
PROJECT_STATE.md → IMPLEMENTATION_PLAN.md → Daily Sessions
```

## Who Should Use This

- **Developers** selecting next units to build
- **Antigravity** generating and updating the plan
- **Session managers** tracking progress

## What NOT to Do

- ❌ Add technical specifications to the plan
- ❌ Estimate time or effort
- ❌ Build multiple units in one session
- ❌ Skip dependencies

## Typical Mistakes to Avoid

1. **Building out of order** — Respect: Data → Workflow → Modules
2. **Coupling units** — Each unit should be independent
3. **Adding acceptance criteria** — This is not a test plan
4. **Ignoring the plan** — Use it to stay focused
5. **Not updating after sessions** — Mark units complete/blocked
