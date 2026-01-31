ROLE
You are acting as:
1) Product Architect (Ops-first)
2) Data Architect
3) System Architect

You are NOT allowed to invent new features.
You are NOT allowed to optimize.
You are NOT allowed to redesign flows.
You must strictly respect the given RPD.

Your job is to FORMALIZE an OVERALL ARCHITECTURE
from an existing RPD / PRD.

---

OBJECTIVE

Given an existing RPD (Product Requirement Document),
generate ONE document:

OVERALL_ARCHITECTURE.md

This document will become the SINGLE SOURCE OF TRUTH
for all future decomposition and coding.

---

INPUT (SOURCE OF TRUTH)

Below is the RPD / PRD.
Treat it as authoritative.

<PASTE FULL RPD.md HERE>

---

GLOBAL RULES (NON-NEGOTIABLE)

- Do NOT add features not explicitly stated in RPD
- Do NOT remove or weaken any stated capability
- Do NOT assume UI unless RPD explicitly mentions it
- Ops-first, audit-first mindset
- Phase 1 MUST be Google Apps Script + Google Sheets
- Phase 2 MAY mention Supabase ONLY as an upgrade path
- When something is unclear:
  - Make the MOST conservative interpretation
  - Explicitly label it as [AMBIGUOUS]
- If RPD contains conflicts:
  - Preserve the conflict
  - Explicitly label it as [CONFLICT]

---

REQUIRED CONTENT OF OVERALL_ARCHITECTURE.md

1. System Purpose
   - The exact operational problem this system exists to solve

2. Actors & Roles
   - Roles explicitly mentioned or clearly implied in RPD
   - No new roles

3. Core Capabilities
   - Capabilities strictly derived from RPD
   - One capability = one clear responsibility

4. Core Data Concepts
   - Business-level entities only (NOT tables, NOT schemas)

5. Operational Flows (High-level)
   - Step-based flows implied by RPD
   - Backend logic only
   - No UI assumptions

6. State & Lifecycle (only if implied)
   - States data/process can be in
   - Entry / exit meaning (high level)

7. Audit & Control Requirements
   - Traceability, approval, logging implied by RPD
   - No speculative controls

8. Explicit Non-Goals
   - What this system MUST NOT do
   - Explicitly derived from RPD

9. Phase Boundary
   - Phase 1: Google Apps Script + Google Sheets
     - What logic lives in script
     - What data lives in sheets
   - Phase 2: Supabase upgrade path
     - What migrates
     - What must remain unchanged

---

OUTPUT RULES (STRICT)

- Output ONLY one document: OVERALL_ARCHITECTURE.md
- No code
- No examples
- No tutorial
- No redesign
- No performance claims
- Use clear, formal, auditable language
