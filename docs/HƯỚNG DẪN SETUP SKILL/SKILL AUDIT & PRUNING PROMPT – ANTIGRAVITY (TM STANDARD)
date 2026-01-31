viêt prompt để antigravity kiểm tra các skill của Antigravity trong thư mục .agent để chỉ lọc và giữ lại các skill phù hợp với Thái Mậu hoặc [[App chuẩn bị xây]], để tránh tốn token
=> đưa vào ngày trong đoạn chat khi chúng ta xong RPD

VÍ DỤ

ROLE:
You are ANTIGRAVITY acting as a Skill Auditor & Runtime Optimizer.

OBJECTIVE:
Audit all skills located in the `.agent` directory.
Filter, classify, and retain ONLY skills that are relevant to:
- Thái Mậu Group
- F&B / QSR operations
- The TM_OPERATION_APP being built

PRIMARY GOAL:
Reduce runtime token usage while increasing decision accuracy.

==================================================
PROJECT CONTEXT (IMMUTABLE)
==================================================

Business Domain:
- F&B / QSR
- Multi-store operations
- Real-world ops, not theoretical systems

Target Application:
- Internal Operation & Intelligence App
- Focus areas:
  - Store operations
  - Shift logs
  - Inventory & waste
  - Ops reports
  - Analytics & decision support

Tech Stack:
- Supabase Postgres
- Node.js / Express
- React
- Automation (n8n, App Script)

==================================================
SKILL EVALUATION CRITERIA
==================================================

For EACH skill in `.agent`, evaluate against ALL criteria below:

1. DOMAIN FIT
- Directly useful for F&B / QSR ops
- OR useful for building the target app
- Otherwise → LOW PRIORITY or REMOVE

2. EXECUTION VALUE
- Produces actionable output (schema, logic, rule, automation)
- NOT abstract, philosophical, or tutorial-only

3. TOKEN EFFICIENCY
- High signal-to-token ratio
- Minimal verbosity
- Deterministic structure

4. REUSABILITY
- Can be reused across multiple features
- Not a one-off or demo-only skill

5. ALIGNMENT
- Aligns with:
  - AI-FIRST principle
  - Ops > Tech elegance
  - Real deployment constraints

==================================================
CLASSIFICATION RULE
==================================================

Classify each skill into ONE category only:

A. CORE_KEEP
- Must keep
- Frequently used
- Load by default

B. CONTEXTUAL_KEEP
- Useful in specific cases
- Load only when task explicitly matches

C. ARCHIVE
- Not needed for this project
- Do NOT load at runtime
- Safe to keep for reference only

D. REMOVE
- Irrelevant, redundant, or wasteful
- Should be deleted to reduce token load

==================================================
OUTPUT REQUIREMENTS (STRICT)
==================================================

Your output MUST include:

1. SUMMARY
- Total skills scanned
- Count per category (A / B / C / D)

2. SKILL TABLE
For EACH skill:
- Skill name
- Purpose (1 line)
- Category (A/B/C/D)
- Reason (concise, factual)

3. RECOMMENDED RUNTIME POLICY
- Which categories are auto-loaded
- Which require explicit trigger
- Which are excluded entirely

4. FINAL ACTION LIST
- Skills to keep active
- Skills to archive
- Skills to remove

==================================================
GUARDRAILS
==================================================

- Do NOT rewrite or improve skills
- Do NOT invent missing metadata
- Judge only based on current content
- Be strict: when in doubt, demote (not promote)

==================================================
SUCCESS CONDITION
==================================================

This task is SUCCESSFUL only if:
- Runtime skill set is minimal but sufficient
- No irrelevant skills remain auto-loadable
- Token usage is reduced without losing core capability
