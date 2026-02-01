# PRD FINAL TEMPLATE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 01_IDEA_TO_PRD (Output Format)

---

## Purpose

This document defines the **canonical structure** for all Product Requirement Documents (PRD) in the Thái Mậu ecosystem.

All PRDs must follow this template exactly to ensure:
- Consistency across projects
- Traceability to architecture
- Governance compliance

---

## When to Use

- **When finalizing** any PRD for architecture handoff
- **As a reference** while drafting requirements
- **For validation** against 03_PRD_REVIEW_CHECK.md

---

## What This Does NOT Cover

- ❌ How to conduct discovery sessions (see 01_EXPERT_GUIDED prompts)
- ❌ How to validate PRD (see 03_PRD_REVIEW_CHECK.md)
- ❌ Architecture design (see 02_PRD_TO_ARCHITECTURE)

---

## PRD Template Structure

```markdown
# PRD: [PRODUCT NAME]

**Version:** [X.Y]
**Status:** [DRAFT | REVIEW | LOCKED]
**Author:** [Name]
**Date:** [YYYY-MM-DD]
**Stakeholders:** [List key stakeholders]

---

## 1. PRODUCT OVERVIEW

### 1.1 Product Name
[Official name of the product/feature]

### 1.2 Purpose
[1-2 sentences describing what this product does and why it exists]

### 1.3 Business Context
[Why is this being built now? What business need does it address?]

---

## 2. PROBLEM STATEMENT

### 2.1 Operational Pain
[Describe the specific operational problem this solves]

### 2.2 Who Experiences the Pain
[List the roles/users affected]

### 2.3 Consequences if Not Solved
[What happens in 3-6 months if this is not addressed?]

---

## 3. TARGET USERS & ROLES

### 3.1 Primary Users
| Role | Responsibility | Key Actions |
|------|----------------|-------------|
| [Role 1] | [What they do] | [What they need to do in this system] |
| [Role 2] | ... | ... |

### 3.2 Secondary Users
[Users who interact occasionally or have limited access]

---

## 4. IN-SCOPE REQUIREMENTS

### REQ-01: [Requirement Title]
- **Description:** [Clear statement of what is required]
- **Source:** [Who requested this / which discussion]
- **Priority:** [Must Have / Should Have / Nice to Have]
- **Constraints:** [Any limitations or conditions]

### REQ-02: [Requirement Title]
...

---

## 5. OUT-OF-SCOPE (EXPLICIT)

The following are explicitly NOT included in this version:

- [Item 1 - and why it's excluded]
- [Item 2 - and why it's excluded]
- [Item 3 - and why it's excluded]

---

## 6. ASSUMPTIONS & CONSTRAINTS

### 6.1 Business Assumptions
- [Assumption 1]
- [Assumption 2]

### 6.2 Technical Constraints
- [Constraint 1]
- [Constraint 2]

### 6.3 Phase Constraints
- Phase 1: [What is included in Phase 1]
- Phase 2: [What is deferred to Phase 2]

---

## 7. OPEN QUESTIONS

| ID | Question | Owner | Status |
|----|----------|-------|--------|
| Q1 | [Unresolved question] | [Who decides] | [Open/Resolved] |

---

## 8. SUCCESS CRITERIA

How will we know this product is successful?

| Criterion | Measurement | Target |
|-----------|-------------|--------|
| [Criterion 1] | [How to measure] | [Success threshold] |

---

## 9. CHANGE LOG

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| [Date] | 1.0 | [Name] | Initial version |

---

## 10. APPROVAL

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Business Owner | | | |
| Product Lead | | | |
```

---

## Field Guidelines

### Status Values
- **DRAFT:** Still being written, not ready for review
- **REVIEW:** Ready for stakeholder review
- **LOCKED:** Approved and frozen for architecture

### Priority Values
- **Must Have:** Cannot ship without this
- **Should Have:** Important but not blocking
- **Nice to Have:** Will consider if time permits

### Handling Conflicts
If stakeholders disagree, add:
```
[CONFLICT]: [Description of the conflict]
Resolution: [How it was resolved OR "Pending escalation"]
```

### Handling Ambiguity
If something is unclear, add:
```
[AMBIGUOUS]: [What is unclear]
Conservative Interpretation: [Safest assumption]
```

---

## Common Mistakes

1. **Skipping Out-of-Scope** — This is NOT optional; it prevents scope creep
2. **Vague success criteria** — "Users will be happy" is not measurable
3. **Technical language** — Business stakeholders must understand every word
4. **Missing stakeholders** — Include everyone who has approval authority
5. **Empty Open Questions** — If there are no questions, you haven't thought deeply enough

---

## Related Files

- **Upstream:** 01_EXPERT_GUIDED_DISCUSSION_NON_TECH.md
- **Validation:** 03_PRD_REVIEW_CHECK.md
- **Downstream:** 02_PRD_TO_ARCHITECTURE/01_OVERALL_ARCHITECTURE_GENERATOR.md
