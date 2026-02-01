# 03_PROJECT_STATE_SETUP

## Purpose

This folder contains prompts for **initializing and maintaining PROJECT_STATE.md** — the working memory of the entire project.

PROJECT_STATE.md:
- Tracks current phase and scope
- Lists locked source-of-truth documents
- Records allowed and forbidden actions
- Maintains session history

## When to Use

**Once — after Foundation 4 documents are locked.**

This is Stage 3 of the governance workflow:
```
Foundation 4 Docs → PROJECT_STATE.md (one-time init) → Implementation
```

## Who Should Use This

- **Project leads** initializing new projects
- **Antigravity** generating the initial state file
- **Session managers** understanding update rules

## What NOT to Do

- ❌ Recreate PROJECT_STATE.md — it is initialized ONCE
- ❌ Modify locked sections manually
- ❌ Add roadmap or future features
- ❌ Invent scope beyond foundation documents

## Typical Mistakes to Avoid

1. **Reinitializing mid-project** — Only UPDATE, never recreate
2. **Adding assumptions not in foundation docs** — Derive strictly from documents
3. **Skipping open questions** — Ambiguities must be recorded
4. **Not following update protocol** — End-of-session must update PROJECT_STATE
5. **Losing history** — Change log is append-only
