# IMPLEMENTATION PLAN USAGE GUIDE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 04_IMPLEMENTATION_PLANNING (Usage)

---

## Purpose

This document explains **how to use IMPLEMENTATION_PLAN.md** during daily development work.

The implementation plan is an **execution guide** — it helps you:
- Choose what to build next
- Understand dependencies
- Stay within scope
- Track progress

---

## When to Use

- **At session start** — to select an implementation unit
- **When asked "what's next?"** — reference the plan
- **When updating progress** — mark units complete

---

## What This Does NOT Cover

- ❌ How to generate the plan (see 01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md)
- ❌ How to update the plan (see 03_IMPLEMENTATION_PLAN_UPDATE.md)
- ❌ Session control protocols (see 05_SESSION_CONTROL)

---

## Understanding the Plan Structure

### Implementation Units

The plan is organized into **units** — discrete pieces of work:

```markdown
### Unit 1: [Name]
- Type: [Data / Workflow / Module / Utility]
- What will be built: [Description]
- Derived From: [Source document]
- Dependency: [What must be done first]
- Session Type: TYPE B
- User-Facing Impact: [Yes / No / Conditional]
- Status: [Planned / In Progress / Completed / Blocked]
```

### Build Sequence

Units are ordered by dependency:
1. **Data** — Schema and storage structures
2. **Workflow** — State machines and business rules
3. **Modules** — Feature implementations
4. **Utilities** — Supporting functions

**Rule:** Never build out of order unless dependencies are resolved.

---

## Selecting a Unit

### Step 1: Check Status

Only select units with status:
- **Planned** — Ready to start
- **In Progress** — Continue previous work

Do NOT select:
- **Completed** — Already done
- **Blocked** — Dependencies not met

### Step 2: Check Dependencies

Verify all dependencies are "Completed":
```markdown
Dependency: Unit 2 (Completed ✓)
```

If dependency is not completed:
- Select the dependency first
- Or choose a unit without dependencies

### Step 3: Verify Scope

Confirm the unit fits in ONE session:
- Can be completed in 2-4 hours
- Does not touch unrelated modules
- Has clear completion criteria

### Step 4: Declare Selection

In the session start prompt:
```
I will work on: Unit [N]: [Name]
```

---

## During Development

### Stay In Scope

Each unit defines exactly:
- What files can be touched
- What logic can be added
- What behavior should result

**If you discover work outside the unit:**
- STOP
- Note the discovery
- Address in a separate unit

### Reference Source Documents

Every unit traces to Foundation docs:
```markdown
Derived From: DATA_SCHEMA.md, Section 3
```

Use this to verify your implementation matches spec.

### User-Facing Impact

If **User-Facing Impact: Yes**:
- User Manual update will be required at session end
- Plan time for documentation

---

## After Completion

### Mark Status

Update the unit status:
```markdown
Status: Completed
Completion Date: YYYY-MM-DD
```

### Add Completion Note

Brief note about what was done:
```markdown
Notes: Implemented state transition logic per WORKFLOW.md
```

### Update Next Actions

Verify PROJECT_STATE.md Section 9 reflects completion:
```markdown
## 9. NEXT ALLOWED ACTIONS
- Unit 4: [Now unlocked by Unit 3 completion]
```

---

## Common Questions

### "What if a unit is too big?"

If you cannot complete a unit in one session:
- Complete as much as possible
- Mark status as "In Progress"
- Document what remains
- Continue in next session

### "What if I find a bug while building?"

If the bug is:
- **In current unit** — Fix it as part of this work
- **In different unit** — Log it, fix separately

### "What if the plan is wrong?"

If the plan contradicts Foundation docs:
- Foundation docs win
- Mark the plan item as needing update
- Proceed based on Foundation docs

---

## Anti-Patterns to Avoid

1. **Cherry-picking units** — Respect the order
2. **Bundling units** — One unit per session
3. **Scope creep** — "While I'm here, I'll also..." NO
4. **Skipping documentation** — Plan updates are mandatory
5. **Ignoring dependencies** — They exist for a reason

---

## Related Files

- **Generator:** 01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md
- **Update Rules:** 03_IMPLEMENTATION_PLAN_UPDATE.md
- **Session Start:** 05_SESSION_CONTROL/01_AUTO_SUGGEST_UNIT_AND_START.md
- **Session End:** 06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md
