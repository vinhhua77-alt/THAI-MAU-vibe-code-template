# PROMPT USAGE RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Last Updated:** 2026-02-01  
**Authority:** Governance Standard

---

## 1. What a Prompt Is (and Is Not)

### What a Prompt IS

A prompt in this repository is a **governance-controlled instruction set** designed to:
- Guide AI behavior safely within defined scope
- Enforce business rules and audit requirements
- Produce traceable, repeatable outputs
- Prevent scope creep and unauthorized changes

### What a Prompt IS NOT

- ❌ A suggestion or recommendation
- ❌ A template to modify freely
- ❌ A starting point for creative interpretation
- ❌ Optional guidance

**Rule:** Prompts are EXECUTABLE GOVERNANCE. Treat them as you would company policy.

---

## 2. Prompt Execution Order Rules

### Mandatory Sequence

Prompts MUST be executed in the following order. Skipping steps is prohibited.

#### Phase: Setup (Once per project)
```
1. 00_READ_FIRST → Orientation
2. 01_IDEA_TO_PRD → Discovery + PRD
3. 02_PRD_TO_ARCHITECTURE → Architecture + Foundation 4
4. 03_PROJECT_STATE_SETUP → One-time PROJECT_STATE init
5. 04_IMPLEMENTATION_PLANNING → One-time plan generation
```

#### Phase: Daily Operations (Every session)
```
1. 05_SESSION_CONTROL/00_DAILY_AUTO_START → Orientation + Lock
2. 05_SESSION_CONTROL/01_AUTO_SUGGEST_UNIT → Select Unit
3. 05_SESSION_CONTROL/02-04_GENERATE_PROMPT → Create Execution Prompt
4. → Execute in Antigravity
5. 06_END_OF_SESSION/01_END_OF_SESSION_MASTER → Close Session
```

### Order Violations

If you attempt to:
- Run implementation before architecture → **BLOCKED**
- Skip session start → **BLOCKED**
- Leave session unclosed → **NEXT SESSION BLOCKED**

---

## 3. Forbidden Behaviors

The following actions are **PROHIBITED** when using prompts:

### Content Modifications
- ❌ Changing ROLE sections
- ❌ Altering GLOBAL RULES
- ❌ Removing constraints or gates
- ❌ Adding scope to OUTPUT sections

### Execution Violations
- ❌ Mixing session types (A/B/C in one session)
- ❌ Executing without session lock
- ❌ Skipping fail-safe checks
- ❌ Using prompts out of sequence

### Output Manipulation
- ❌ Suppressing required outputs (CHANGELOG, summaries)
- ❌ Modifying locked documents
- ❌ Rewriting history in append-only files
- ❌ Skipping User Manual updates when required

---

## 4. Role Separation (ChatGPT vs Antigravity)

### ChatGPT Role

ChatGPT is the **Strategist and Prompt Generator**:
- ✅ Brainstorming and discussions
- ✅ PRD consolidation
- ✅ Generating execution prompts
- ✅ Context recall and memory
- ❌ **NEVER writes code directly**

### Antigravity Role

Antigravity is the **Implementation Agent**:
- ✅ Executing code within locked scope
- ✅ Building per execution prompt
- ✅ Updating governance artifacts
- ❌ **NEVER decides scope or strategy**

### Handoff Protocol

```
ChatGPT generates → Execution Prompt → Paste to Antigravity → Execute
```

**Rule:** ChatGPT designs; Antigravity builds. Never reverse this.

---

## 5. Session Discipline Rules

### Session Types

Every session MUST be classified as exactly ONE type:

| Type | Purpose | Code Allowed | Docs Allowed |
|------|---------|--------------|--------------|
| **A** | Architecture / Documentation | ❌ No | ✅ Yes |
| **B** | Implementation | ✅ Yes | ✅ Yes (updates) |
| **C** | Summary / Wrap-up | ❌ No | ✅ Yes (summary only) |

### Session Lifecycle

1. **START** — Run orientation, classify, lock
2. **EXECUTE** — Work within locked scope only
3. **CLOSE** — Run end-of-session, update artifacts

### Session Lock

No execution is permitted until:
```
FINAL STATUS = "SESSION LOCKED — READY FOR TASK EXECUTION"
```

If status is BLOCKED → Resolve issues before proceeding.

---

## 6. Common Failure Cases

### Failure: Unclosed Session

**Symptom:** Next session is blocked by fail-safe  
**Cause:** Previous session not properly closed  
**Fix:** Run END_OF_SESSION_MASTER for previous session

### Failure: Scope Violation

**Symptom:** SESSION BLOCKED warning  
**Cause:** Requested action not in Allowed Actions  
**Fix:** Review PROJECT_STATE.md, adjust request to allowed scope

### Failure: Missing User Manual Update

**Symptom:** Session marked as FAIL  
**Cause:** User-facing change without manual update  
**Fix:** Update relevant files under /docs/user-manual/

### Failure: Wrong Session Type

**Symptom:** Mixed outputs, governance violations  
**Cause:** Not classifying session before starting  
**Fix:** Always run session classification first

### Failure: Using Antigravity Directly

**Symptom:** Scope creep, unpredictable outputs  
**Cause:** Not generating execution prompt via ChatGPT  
**Fix:** Use GENERATE_EXECUTION_PROMPT prompts

---

## 7. Enforcement & Consequences

### Enforcement Mechanisms

1. **Fail-Safe Guard** — Blocks new sessions if previous is unclosed
2. **Session Lock** — Prevents execution without scope confirmation
3. **Mandatory Outputs** — Sessions fail if required artifacts missing
4. **Scope Validation** — Checks against PROJECT_STATE.md

### Consequences of Violation

| Violation | Consequence |
|-----------|-------------|
| Skipped session start | Session outputs invalid |
| Unclosed session | Next session blocked |
| Modified locked docs | Requires governance review |
| Missing changelog | Session marked incomplete |
| User Manual not updated | Session marked FAIL |

### Recovery Protocol

When violations occur:
1. STOP current work
2. Identify missing artifacts
3. Complete required outputs
4. Run fail-safe check
5. Resume with proper session start

---

## Summary

**Governance Principles:**

1. **Order matters** — Follow the sequence
2. **Lock before execute** — Session lock is mandatory
3. **Close every session** — No orphaned work
4. **Separate concerns** — ChatGPT strategizes; Antigravity builds
5. **Document everything** — If it changed, write it down
6. **Fail safe** — When in doubt, STOP and ask

---

**This document is the law. Follow it.**
