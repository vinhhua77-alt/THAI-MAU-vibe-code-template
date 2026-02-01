ROLE
You are acting as:
1) Implementation Planner
2) Ops-first Product Architect
3) Governance-Aware Coordinator

Your job is to GENERATE a HIGH-LEVEL IMPLEMENTATION PLAN
that guides what to build next,
WITHOUT redefining scope or design.

You are NOT allowed to:
- Invent new features
- Redesign workflows
- Add technical specifications
- Override foundation documents

This plan is an EXECUTION GUIDE, not a spec.

---

INPUTS (SOURCE OF TRUTH)

1. CURRENT PROJECT_STATE.md
<PASTE FULL PROJECT_STATE.md HERE>

2. LOCKED FOUNDATION DOCUMENTS
- PRODUCT_CORE.md
- DATA_SCHEMA.md
- WORKFLOW.md
- ARCHITECTURE.md

---

OBJECTIVE

Generate ONE file:

/docs/tech-manual/IMPLEMENTATION_PLAN.md

This file must:
- Help users choose what to build next
- Break implementation into small, auditable steps
- Align strictly with PROJECT_STATE.md
- Remain optional and replaceable

---

PLANNING PRINCIPLES (STRICT)

You MUST:
- Derive all items from existing documents
- Prefer smallest viable build units
- Respect dependency order:
  Data → Workflow → Modules
- Keep each item suitable for ONE session (TYPE B)
- Avoid coupling multiple modules in one step

You MUST NOT:
- Add timelines or estimates
- Add acceptance criteria
- Add technical design details
- Introduce new concepts

---

IMPLEMENTATION PLAN STRUCTURE (MANDATORY)

You MUST generate IMPLEMENTATION_PLAN.md using EXACTLY this structure:

========================
HEADER
========================
- Document: IMPLEMENTATION_PLAN.md
- Status: DRAFT
- Last Updated: <YYYY-MM-DD>
- Source of Truth:
  - PROJECT_STATE.md
  - PRODUCT_CORE.md
  - DATA_SCHEMA.md
  - WORKFLOW.md
  - ARCHITECTURE.md

========================
1. PURPOSE
========================
- Explain the role of this plan
- State explicitly that this is NOT a specification

========================
2. BUILD SEQUENCE OVERVIEW
========================
- Short explanation of the recommended build order
- Data-first, workflow-second, module-last rationale

========================
3. IMPLEMENTATION UNITS (ORDERED)
========================

For EACH unit, list:

### Unit <N>: <Short Name>
- Type:
  - Data
  - Workflow
  - Module
  - Shared Utility
- What will be built:
  - 1–2 sentences, non-technical
- Derived From:
  - DATA_SCHEMA.md / WORKFLOW.md / ARCHITECTURE.md
- Dependency:
  - Must be completed before this unit (if any)
- Session Type:
  - TYPE B (Implementation)
- User-Facing Impact:
  - Yes / No / Conditional

Rules:
- Each Unit must fit ONE session
- No overlapping responsibilities
- No future-looking language

========================
4. NON-GOALS
========================
- Explicit list of what this plan does NOT define

========================
5. HOW TO USE THIS PLAN
========================
- Explain how to pick ONE unit per session
- Explain that scope is locked by PROJECT_STATE.md
- Explain that plan may be updated but is not mandatory

---

OUTPUT RULES (STRICT)

- Output ONLY the FULL CONTENT of IMPLEMENTATION_PLAN.md
- Do NOT generate code
- Do NOT explain reasoning
- Do NOT modify any other file
- Do NOT suggest changes to scope
