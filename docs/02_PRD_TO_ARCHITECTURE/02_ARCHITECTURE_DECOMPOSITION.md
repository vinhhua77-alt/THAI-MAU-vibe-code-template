ROLE
You are acting as:
1) Product Architect (Ops-first)
2) Data Architect
3) System Architect

You are NOT allowed to invent new features.
You are NOT allowed to change system intent.
You are NOT allowed to optimize beyond the given input.

Your job is to DECOMPOSE and FORMALIZE
an existing "Overall Architecture" into 4 foundation documents.

---

OBJECTIVE

Given an existing "Overall Architecture" document,
generate the following FOUR files:

1) PRODUCT_CORE.md
2) DATA_SCHEMA.md
3) WORKFLOW.md
4) ARCHITECTURE.md (refined, not redesigned)

These documents must be:
- Fully consistent with each other
- Fully aligned with the original architecture
- Free of new ideas, scope, or assumptions

---

INPUT (SOURCE OF TRUTH)

Below is the EXISTING OVERALL ARCHITECTURE.
You must treat it as authoritative.

<PASTE FULL OVERALL_ARCHITECTURE.md HERE>

---

GLOBAL RULES (NON-NEGOTIABLE)

- Do NOT add new modules, features, or scope
- Do NOT remove or weaken any existing capability
- Do NOT assume frontend unless explicitly stated
- Ops-first, audit-first mindset
- Phase 1 = Google Apps Script + Google Sheets
- Phase 2 = Supabase upgrade path ONLY
- Clarify ambiguity, but do NOT invent

When something is unclear:
- Make the MOST conservative interpretation
- Explicitly label it as [AMBIGUOUS] in the document

---

OUTPUT LOCATION (MANDATORY)

You MUST generate the files as if they are saved under:

/docs/tech-manual/

With EXACT filenames:
- /docs/tech-manual/PRODUCT_CORE.md
- /docs/tech-manual/DATA_SCHEMA.md
- /docs/tech-manual/WORKFLOW.md
- /docs/tech-manual/ARCHITECTURE.md

Do NOT change filenames.
Do NOT merge files.
Do NOT output anything else.

---

========================
PART 1 — PRODUCT_CORE.md
========================

Extract and generate PRODUCT_CORE.md with sections:

1. Product Name (derived strictly from architecture)
2. Target Users
3. Core Problem (operational pain this system solves)
4. Core Actions (maximum 3)
5. Core Data (business-level entities, NOT technical tables)
6. Core Decisions Enabled
7. Explicit Out of Scope
8. Success Criteria (operational, measurable)

Rules:
- Max ~1 page
- No technical or implementation details
- Use wording grounded ONLY in the given architecture

---

========================
PART 2 — DATA_SCHEMA.md
========================

From the architecture and implied operations,
derive a DATA_SCHEMA.md.

For EACH sheet/table, define:

- Sheet/Table Name
- Purpose
- Fields table with columns:
  - Field Name
  - Business Meaning
  - Type
  - Required (Y/N)
  - Mutable (Y/N)
  - Validation Rules
  - Notes

Rules:
- Assume Google Sheets as the database (Phase 1)
- Prefer append-only patterns where implied
- Explicitly mark immutable fields
- Include audit/log tables if traceability is implied
- Do NOT optimize for analytics or reporting

---

========================
PART 3 — WORKFLOW.md
========================

Formalize the operational workflow implied by the architecture.

Include:

1. State Definitions
   - State
   - Meaning
   - Entry condition
   - Exit condition

2. Allowed Transitions
   - From → To
   - Conditions

3. Blocked / Invalid Transitions
   - Explicitly list forbidden transitions

4. Mandatory Requirements
   - Data or actions required at each transition
   - Audit or approval requirements if implied

Rules:
- Backend-enforceable only
- No UI assumptions
- Conservative interpretation when unclear

---

========================
PART 4 — ARCHITECTURE.md (REFINED)
========================

Rewrite ARCHITECTURE.md to be clean, explicit, and structured,
WITHOUT changing intent or scope.

Sections:

1. System Overview
2. Design Principles
3. Phase 1 Architecture (Google Apps Script)
   - Responsibilities
   - Module boundaries
   - Data ownership
4. Data Integrity & Audit Strategy
5. Phase 2 Upgrade Path (Supabase)
   - What stays the same
   - What moves
   - What must NOT change
6. Explicit Non-Goals

Rules:
- No speculative features
- No performance claims
- No diagrams needed

---

========================
OUTPUT FORMAT (STRICT)
========================

Output in this exact order:

=== PRODUCT_CORE.md ===
<content>

=== DATA_SCHEMA.md ===
<content>

=== WORKFLOW.md ===
<content>

=== ARCHITECTURE.md ===
<content>

Do NOT:
- Explain reasoning
- Add tutorials
- Write code
- Introduce new ideas
