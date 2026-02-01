# 02_PRD_TO_ARCHITECTURE

## Purpose

This folder contains prompts for the **Architecture Phase** — converting validated PRD into technical architecture and the Foundation 4 documents:

1. PRODUCT_CORE.md
2. DATA_SCHEMA.md
3. WORKFLOW.md
4. ARCHITECTURE.md

These documents become **locked and immutable** once approved.

## When to Use

**After PRD is finalized and validated.**

This is Stage 2 of the governance workflow:
```
PRD → OVERALL_ARCHITECTURE → Foundation 4 Docs → PROJECT_STATE
```

## Who Should Use This

- **Technical leads** formalizing system design
- **Antigravity** generating structured architecture documents
- **Reviewers** validating architecture alignment

## What NOT to Do

- ❌ Add features not in the PRD
- ❌ Make UI assumptions unless explicitly stated
- ❌ Optimize for performance before correctness
- ❌ Skip the decomposition step

## Typical Mistakes to Avoid

1. **Inventing capabilities** — Only derive from PRD
2. **Jumping to code** — Architecture must be locked first
3. **Merging foundation documents** — Each must be separate and complete
4. **Ignoring the phase boundary** — Phase 1 = AppScript; Phase 2 = Supabase upgrade
5. **Not marking ambiguities** — Use [AMBIGUOUS] tag explicitly
