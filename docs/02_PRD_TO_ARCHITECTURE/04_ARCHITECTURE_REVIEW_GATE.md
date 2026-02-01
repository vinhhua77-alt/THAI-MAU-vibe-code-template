# ARCHITECTURE REVIEW GATE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 02_PRD_TO_ARCHITECTURE (Final Gate)

---

## Purpose

This document provides the **architecture validation checklist** to ensure that:
- Architecture is complete and consistent
- Foundation 4 documents are aligned with each other
- Architecture traces back to the approved PRD
- System is ready for implementation

This is a **GATE** — architecture cannot be locked until this review passes.

---

## When to Use

- **After** Foundation 4 documents are generated
- **Before** locking documents (03_FOUNDATION_DOCS_LOCK.md)
- **Before** generating PROJECT_STATE.md

---

## What This Does NOT Cover

- ❌ PRD validation (see 01_IDEA_TO_PRD/03_PRD_REVIEW_CHECK.md)
- ❌ Implementation planning (see 04_IMPLEMENTATION_PLANNING)
- ❌ Technical implementation details

---

## Architecture Review Checklist

### Section 1: Document Completeness

| Item | Document | Requirement | Pass? |
|------|----------|-------------|-------|
| 1.1 | PRODUCT_CORE.md | Has all 8 required sections | ☐ |
| 1.2 | DATA_SCHEMA.md | All entities have complete field definitions | ☐ |
| 1.3 | WORKFLOW.md | All states have entry/exit conditions | ☐ |
| 1.4 | ARCHITECTURE.md | Phase 1 and Phase 2 boundaries are clear | ☐ |

### Section 2: Cross-Document Consistency

| Item | Check | Pass? |
|------|-------|-------|
| 2.1 | Every PRODUCT_CORE action has a corresponding WORKFLOW | ☐ |
| 2.2 | Every WORKFLOW state uses only DATA_SCHEMA fields | ☐ |
| 2.3 | Every DATA_SCHEMA entity is referenced in WORKFLOW or ARCHITECTURE | ☐ |
| 2.4 | ARCHITECTURE modules cover all WORKFLOW operations | ☐ |
| 2.5 | No orphaned entities or states exist | ☐ |

### Section 3: PRD Traceability

| Item | Requirement | Pass? |
|------|-------------|-------|
| 3.1 | Every PRD requirement is addressed in architecture | ☐ |
| 3.2 | Out-of-Scope items are truly excluded | ☐ |
| 3.3 | No architecture feature exceeds PRD scope | ☐ |
| 3.4 | Success criteria can be measured with defined data | ☐ |

### Section 4: Governance Compliance

| Item | Requirement | Pass? |
|------|-------------|-------|
| 4.1 | No [AMBIGUOUS] tags remain unresolved | ☐ |
| 4.2 | No [CONFLICT] tags remain unresolved | ☐ |
| 4.3 | Audit trail requirements are specified | ☐ |
| 4.4 | Phase boundary is respected (no Phase 2 in Phase 1) | ☐ |

### Section 5: Ops-First Validation

| Item | Requirement | Pass? |
|------|-------------|-------|
| 5.1 | Data model supports audit/traceability | ☐ |
| 5.2 | Workflow prevents invalid state transitions | ☐ |
| 5.3 | No UI assumptions unless explicitly stated | ☐ |
| 5.4 | Error states and edge cases are considered | ☐ |

---

## Review Outcomes

### ✅ PASS — Proceed to Lock

All checklist items are satisfied. The architecture is ready for:
- 03_FOUNDATION_DOCS_LOCK.md (lock ceremony)
- 03_PROJECT_STATE_SETUP (initialization)

### ⚠️ CONDITIONAL PASS — Minor Issues

Some items need clarification but do not block:
- Document the open items explicitly
- Add [AMBIGUOUS] tags where needed
- Proceed with acknowledgment of gaps

### ❌ FAIL — Return to Decomposition

Critical issues prevent proceeding:
- Inconsistencies between Foundation 4 documents
- Missing coverage of PRD requirements
- Unresolvable conflicts

**Action:** Return to 02_ARCHITECTURE_DECOMPOSITION.md and regenerate.

---

## Common Mistakes

1. **Skipping cross-reference check** — Most bugs come from inconsistencies
2. **Assuming completeness** — Every section must be explicitly verified
3. **Ignoring orphaned entities** — Data without workflows becomes technical debt
4. **Premature optimization** — Architecture is for correctness, not performance
5. **UI assumptions** — Unless PRD says "UI", assume backend-only

---

## Reviewer Notes

### Questions to Ask

1. "Can I trace every code module back to a WORKFLOW state?"
2. "Can I trace every WORKFLOW state to a DATA_SCHEMA entity?"
3. "Can I trace every DATA_SCHEMA field to a business requirement?"
4. "If I delete this entity/state/module, what breaks?"

### Red Flags

- "We'll figure this out during implementation" — ❌ NOT ALLOWED
- "This is probably what they meant" — ❌ Mark as [AMBIGUOUS]
- "Let's add this feature just in case" — ❌ Scope creep

---

## Related Files

- **Upstream:** 02_ARCHITECTURE_DECOMPOSITION.md
- **Downstream:** 03_FOUNDATION_DOCS_LOCK.md
- **Reference:** 01_IDEA_TO_PRD/03_PRD_REVIEW_CHECK.md

---

## Review Sign-off

| Role | Name | Date | Status |
|------|------|------|--------|
| Technical Lead | | | ☐ Approved |
| Project Owner | | | ☐ Approved |

---

**Gate Status:** ☐ PASS / ☐ CONDITIONAL / ☐ FAIL
