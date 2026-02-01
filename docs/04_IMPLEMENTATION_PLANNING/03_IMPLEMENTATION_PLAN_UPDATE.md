# IMPLEMENTATION PLAN UPDATE RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 04_IMPLEMENTATION_PLANNING (Maintenance)

---

## Purpose

This document defines **how to update IMPLEMENTATION_PLAN.md** as work progresses.

The plan is a living document that tracks progress — it is updated after every TYPE B session but never redesigned during implementation.

---

## When to Use

- **At session end** — update unit status
- **When a unit is blocked** — record the blocker
- **When phase transitions occur** — add new units if needed

---

## What This Does NOT Cover

- ❌ Initial plan generation (see 01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md)
- ❌ How to use the plan (see 02_IMPLEMENTATION_PLAN_USAGE.md)
- ❌ Session control (see 05_SESSION_CONTROL)

---

## Update Types

### Status Updates (Every Session)

After TYPE B session, update unit status:

| Old Status | New Status | Trigger |
|------------|------------|---------|
| Planned | In Progress | Work started but not completed |
| Planned | Completed | Work finished in one session |
| In Progress | Completed | Work finished |
| In Progress | Blocked | Dependency or issue discovered |
| Blocked | In Progress | Blocker resolved |

### Header Update

Always update when modifying:
```markdown
Last Updated: [YYYY-MM-DD]
```

---

## Status Values

### Planned
- Unit has not been started
- Dependencies may or may not be met

### In Progress
- Work has begun but is not complete
- Should include expected completion or remaining work

### Completed
- All work for this unit is done
- Code is functional and tested
- Documentation is updated

### Blocked
- Cannot proceed due to dependency or issue
- Must include blocker explanation

---

## Allowed Updates

### ✅ Status Change
```markdown
Status: Planned → Status: In Progress
```

### ✅ Completion Date
```markdown
Completion Date: 2026-02-01
```

### ✅ Completion Note
```markdown
Notes: Implemented per WORKFLOW.md Section 3
```

### ✅ Blocker Note
```markdown
Status: Blocked
Blocker: Waiting for DATA_SCHEMA clarification on field X
```

---

## Forbidden Updates

### ❌ Adding New Units
Units come from architecture. To add units:
1. Requires architecture change
2. Requires formal change request
3. Cannot be done mid-session

### ❌ Removing Units
Units are never removed:
- If not needed, mark as "Cancelled" with reason
- Do not delete

### ❌ Changing Unit Order
Order is based on dependencies:
- If order seems wrong, verify dependencies
- Do not reorder without architecture review

### ❌ Changing Unit Scope
Scope comes from Foundation docs:
- If scope needs change, update Foundation first
- Do not expand unit scope during implementation

---

## Update Protocol

### Step 1: Identify Changes

At session end, determine:
- Which unit was worked on
- What is the new status
- Were any discoveries made

### Step 2: Update Unit

```markdown
### Unit 3: [Name]
...
Status: Completed
Completion Date: 2026-02-01
Notes: Implemented workflow transitions as specified
```

### Step 3: Update Header

```markdown
Last Updated: 2026-02-01
```

### Step 4: Verify Consistency

- Does status match actual work done?
- Are completion notes accurate?
- Does PROJECT_STATE Section 9 reflect this?

---

## Handling Blockers

When a unit is blocked:

### Immediate Actions
1. Mark status as "Blocked"
2. Document the blocker clearly
3. Identify who can resolve

### Blocker Format
```markdown
Status: Blocked
Blocker: [Clear description of what is blocking]
Owner: [Who needs to resolve this]
Escalation Date: [When to escalate if not resolved]
```

### Resolution
When blocker is cleared:
```markdown
Status: In Progress
Blocker Resolution: [How it was resolved]
```

---

## Multi-Session Units

If a unit spans multiple sessions:

### Session 1
```markdown
Status: In Progress
Started: 2026-02-01
Remaining: [What is left to do]
```

### Session 2
```markdown
Status: Completed
Completion Date: 2026-02-02
Notes: [Summary of all work]
```

---

## Phase Transition Updates

When a phase completes:

1. Verify all phase units are Completed or Cancelled
2. Update plan header with phase status
3. If new phase adds units, they must come from architecture

---

## Common Mistakes

1. **Forgetting to update** — Plan must reflect reality
2. **Vague completion notes** — Future developers need context
3. **Changing scope mid-session** — This is scope creep
4. **Adding units informally** — Units require architecture backing
5. **Ignoring blockers** — These become technical debt

---

## Plan Integrity

The plan must always satisfy:

| Check | Requirement |
|-------|-------------|
| Traceability | Every unit traces to Foundation docs |
| Consistency | Status matches actual work state |
| Completeness | All known work is represented |
| Currency | Last Updated is accurate |

---

## Related Files

- **Generator:** 01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md
- **Usage Guide:** 02_IMPLEMENTATION_PLAN_USAGE.md
- **Session End:** 06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md
