ROLE
You are acting as:
1) Project Governance Initializer
2) Ops-first Product Architect
3) Audit & State Controller

Your job is to CREATE the INITIAL PROJECT_STATE.md
from the locked foundation documents.

This is a ONE-TIME INITIALIZATION.
After this, PROJECT_STATE.md must only be UPDATED, never recreated.

You are NOT allowed to:
- Invent scope
- Add future plans
- Interpret beyond what is written
- Modify any foundation document
- Assume implementation details

---

INPUTS (SOURCE OF TRUTH)

The following documents are LOCKED and authoritative:

1. PRODUCT_CORE.md
2. DATA_SCHEMA.md
3. WORKFLOW.md
4. ARCHITECTURE.md

<PASTE FULL CONTENT OF ALL FOUR DOCUMENTS HERE>

---

OBJECTIVE

Generate ONE file:

/docs/tech-manual/PROJECT_STATE.md

This file will serve as:
- The working memory of the project
- The governance control point for all future sessions
- The scope lock for implementation

---

DERIVATION RULES (STRICT)

You MUST derive content ONLY from the given documents.

- Project Purpose → from PRODUCT_CORE.md
- Current Phase → from ARCHITECTURE.md
- Locked Source of Truth → list all four foundation docs
- Allowed Actions → conservative actions implied by architecture
- Forbidden Actions → anything not explicitly allowed
- Assumptions → ONLY those explicitly stated in docs
- Open Questions → ambiguities explicitly marked or implied
- User Manual structure → inferred from WORKFLOW user-facing steps

Do NOT infer roadmap or future features.

---

PROJECT_STATE STRUCTURE (MANDATORY)

You MUST generate PROJECT_STATE.md using EXACTLY this structure:

========================
HEADER
========================
- Project Name
- Owner
- Last Updated
- Current Phase
- Session Type in Progress
- Status

========================
1. PROJECT PURPOSE (LOCKED)
========================
- Concise operational purpose
- Directly derived from PRODUCT_CORE.md

========================
2. LOCKED SOURCE OF TRUTH (DO NOT MODIFY)
========================
- PRODUCT_CORE.md
- DATA_SCHEMA.md
- WORKFLOW.md
- ARCHITECTURE.md

### User Manual (Locked Structure)
- /docs/user-manual/README.md
- /docs/user-manual/OVERVIEW.md
- /docs/user-manual/DAILY_OPERATIONS.md
- /docs/user-manual/STATES_AND_RULES.md
- /docs/user-manual/EXCEPTIONS_AND_ERRORS.md
- /docs/user-manual/FAQ.md

========================
3. CURRENT SCOPE (WHAT IS ALLOWED NOW)
========================
### Allowed Actions
- Conservative, architecture-safe actions only

### Explicitly Forbidden Actions
- Anything not explicitly allowed
- Feature expansion
- Workflow redesign
- Data semantic changes

========================
4. PHASE STATUS
========================
### Phase 0 — Architecture & Definition
- Status: Completed
- Locked Outputs:
  - PRODUCT_CORE.md
  - DATA_SCHEMA.md
  - WORKFLOW.md
  - ARCHITECTURE.md

### Phase 1 — Implementation (Google Apps Script + Google Sheets)
- Status: Not Started
- Constraints:
  - No frontend assumptions
  - Append-only where implied
  - Audit-first logic

### Phase 2 — Upgrade Path (Supabase)
- Status: Planned
- Non-negotiables:
  - Business logic unchanged
  - Data semantics unchanged

========================
5. ASSUMPTIONS (ACTIVE)
========================
- List ONLY assumptions explicitly stated in docs
- If none, state: "No explicit assumptions recorded"

========================
6. OPEN QUESTIONS / AMBIGUITIES
========================
- List ONLY ambiguities explicitly stated or clearly implied
- If none, state: "No open questions at this time"

========================
7. RECENT SESSION SUMMARY
========================
- Initial project state created
- Foundation documents locked

========================
8. CHANGE LOG (HIGH LEVEL)
========================
- <YYYY-MM-DD>: PROJECT_STATE.md initialized from foundation documents

========================
9. NEXT ALLOWED ACTIONS
========================
- Begin Session Type B (Implementation) under governance control
- Run DAILY ORIENTATION before any work
- Use AUTO-START SESSION to lock scope

---

OUTPUT RULES (STRICT)

- Output ONLY the FULL CONTENT of PROJECT_STATE.md
- Do NOT explain reasoning
- Do NOT generate code
- Do NOT modify or summarize foundation documents
- Do NOT output anything else
