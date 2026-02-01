# PRD REVIEW CHECKLIST

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 01_IDEA_TO_PRD (Final Gate)

---

## Purpose

This document provides a **structured review checklist** to validate that a PRD (Product Requirement Document) is complete, consistent, and ready for architecture design.

This is a **GATE** — the PRD cannot proceed to architecture until this review passes.

---

## When to Use

- **After** PRD.md has been drafted
- **Before** moving to 02_PRD_TO_ARCHITECTURE
- **Mandatory** for all new products and major features

---

## What This Does NOT Cover

- ❌ Architecture validation (see 04_ARCHITECTURE_REVIEW_GATE.md)
- ❌ Technical feasibility assessment
- ❌ Implementation planning
- ❌ Project timeline or resource allocation

---

## Review Checklist

### Section 1: Completeness Check

| Item | Requirement | Pass? |
|------|-------------|-------|
| 1.1 | Product Overview section exists and is clear | ☐ |
| 1.2 | Problem Statement explicitly states operational pain | ☐ |
| 1.3 | Target Users & Roles are identified | ☐ |
| 1.4 | At least 3 In-Scope Requirements are listed | ☐ |
| 1.5 | Out-of-Scope section explicitly states what is excluded | ☐ |
| 1.6 | Assumptions & Constraints are documented | ☐ |
| 1.7 | Success Criteria are observable and measurable | ☐ |

### Section 2: Consistency Check

| Item | Requirement | Pass? |
|------|-------------|-------|
| 2.1 | All requirements trace to Problem Statement | ☐ |
| 2.2 | No conflicting requirements exist | ☐ |
| 2.3 | Scope boundaries are clear and respected | ☐ |
| 2.4 | Language is business-oriented, not technical | ☐ |
| 2.5 | No assumptions are hidden in requirements | ☐ |

### Section 3: Governance Check

| Item | Requirement | Pass? |
|------|-------------|-------|
| 3.1 | All [CONFLICT] tags have been resolved or escalated | ☐ |
| 3.2 | All [AMBIGUOUS] tags have been clarified or accepted | ☐ |
| 3.3 | Stakeholder sign-off is documented (if required) | ☐ |
| 3.4 | Version and date are recorded | ☐ |

---

## Review Outcomes

### ✅ PASS — Proceed to Architecture

All checklist items are satisfied. The PRD is ready for:
- 02_PRD_TO_ARCHITECTURE/01_OVERALL_ARCHITECTURE_GENERATOR.md

### ⚠️ CONDITIONAL PASS — Minor Issues

Some items need clarification but do not block progress:
- Document the open items
- Proceed with explicit acknowledgment of gaps
- Revisit during architecture review

### ❌ FAIL — Return to Discovery

Critical issues prevent proceeding:
- Missing sections that cannot be inferred
- Unresolved conflicts between requirements
- Scope is unclear or unbounded

**Action:** Return to 01_IDEA_TO_PRD discussion prompts.

---

## Common Mistakes

1. **Rushing the review** — Take time to read every section
2. **Assuming clarity** — If you need to guess, it's [AMBIGUOUS]
3. **Skipping Out-of-Scope** — This section prevents scope creep later
4. **Ignoring conflicts** — Unresolved conflicts become architecture problems
5. **Technical language** — PRD must be readable by non-technical stakeholders

---

## Related Files

- **Upstream:** 01_EXPERT_GUIDED_DISCUSSION_NON_TECH.md, 02_EXPERT_GUIDED_IDEATION_TO_PRD_FINAL.md
- **Downstream:** 02_PRD_TO_ARCHITECTURE/01_OVERALL_ARCHITECTURE_GENERATOR.md
- **Reference:** 04_PRD_FINAL_TEMPLATE.md

---

## Reviewer Sign-off

| Role | Name | Date | Status |
|------|------|------|--------|
| Business Owner | | | ☐ Approved |
| Product Lead | | | ☐ Approved |
| Technical Lead | | | ☐ Reviewed |

---

**Gate Status:** ☐ PASS / ☐ CONDITIONAL / ☐ FAIL
