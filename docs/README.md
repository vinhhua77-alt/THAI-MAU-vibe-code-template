# Thái Mậu - Prompt Library

**Version:** 2.0  
**Restructured:** 2026-02-01  
**Status:** Production-Ready

---

## 📚 Overview

This directory contains the complete **Prompt Engineering Library** for the Thái Mậu development ecosystem. All prompts follow the **Vibe Code Standard** and are designed to work seamlessly with **Antigravity AI** and **ChatGPT** agents.

---

## 🗂️ Directory Structure

### **00_READ_FIRST** - Orientation & Quick Start
Start here if you're new to the system.

| File | Purpose |
|------|---------|
| `00_OVERVIEW_SYSTEM.md` | Complete system overview and workflow |
| `01_ONE_PAGE_CHEAT_SHEET.md` | Quick reference for daily operations |
| `02_NEWBIE_GUIDE.md` | Antigravity orientation for new users |
| `03_FAQ_COMMON.md` | Common questions and troubleshooting |

### **01_IDEA_TO_PRD** - Discovery & Requirements
Transform ideas into structured Product Requirement Documents.

| File | Purpose |
|------|---------|
| `01_EXPERT_GUIDED_DISCUSSION_NON_TECH.md` | Non-technical brainstorming with stakeholders |
| `02_EXPERT_GUIDED_IDEATION_TO_PRD_FINAL.md` | Build final PRD from discovery |
| `03_PRD_REVIEW_CHECK.md` | PRD review and validation gate ⚠️ *Placeholder* |
| `04_PRD_FINAL_TEMPLATE.md` | Standardized PRD format ⚠️ *Placeholder* |

### **02_PRD_TO_ARCHITECTURE** - Architecture Design
Convert PRD into technical architecture and Foundation 4 documents.

| File | Purpose |
|------|---------|
| `01_OVERALL_ARCHITECTURE_GENERATOR.md` | Generate OVERALL_ARCHITECTURE.md from PRD |
| `02_ARCHITECTURE_DECOMPOSITION.md` | Decompose architecture into Foundation 4 |
| `03_FOUNDATION_DOCS_LOCK.md` | Lock and version Foundation docs ⚠️ *Placeholder* |
| `04_ARCHITECTURE_REVIEW_GATE.md` | Architecture validation gate ⚠️ *Placeholder* |

### **03_PROJECT_STATE_SETUP** - Working Memory Initialization
Create and manage PROJECT_STATE.md for session memory.

| File | Purpose |
|------|---------|
| `01_AUTO_GENERATE_PROJECT_STATE.md` | Generate initial PROJECT_STATE.md |
| `02_PROJECT_STATE_STRUCTURE.md` | Canonical structure definition ⚠️ *Placeholder* |
| `03_PROJECT_STATE_UPDATE_RULES.md` | Update governance rules ⚠️ *Placeholder* |

### **04_IMPLEMENTATION_PLANNING** - Execution Planning
Break down architecture into actionable implementation units.

| File | Purpose |
|------|---------|
| `01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md` | Generate IMPLEMENTATION_PLAN.md |
| `02_IMPLEMENTATION_PLAN_USAGE.md` | How to use implementation plans ⚠️ *Placeholder* |
| `03_IMPLEMENTATION_PLAN_UPDATE.md` | Plan update governance ⚠️ *Placeholder* |

### **05_SESSION_CONTROL** - Daily Development Operations
Prompts for starting sessions, generating execution context, and handling common tasks.

| File | Purpose |
|------|---------|
| `00_DAILY_AUTO_START_ENHANCED.md` | Daily session startup with orientation |
| `01_AUTO_SUGGEST_UNIT_AND_START.md` | Auto-select next unit from implementation plan |
| `02_GENERATE_EXECUTION_PROMPT.md` | Generate Antigravity execution prompts |
| `03_BUG_REPORT_TO_EXECUTION.md` | Convert bug reports to execution prompts |
| `04_REFACTOR_TO_EXECUTION.md` | Convert refactor requests to execution prompts |
| `05_OPTIONAL_SKILL_USAGE_CONTROLLED.md` | Controlled skill activation rules |
| `06_FAIL_SAFE_GUARD.md` | Session compliance and safety enforcer |

### **06_END_OF_SESSION** - Session Closure & Documentation
End-of-session protocols for maintaining audit trails and documentation.

| File | Purpose |
|------|---------|
| `01_END_OF_SESSION_MASTER.md` | Master end-of-session governance protocol |
| `02_CHANGELOG_RULES.md` | Changelog format and update rules ⚠️ *Placeholder* |
| `03_SESSION_SUMMARY_RULES.md` | Session summary requirements ⚠️ *Placeholder* |
| `04_USER_MANUAL_ENFORCEMENT.md` | User manual update enforcement ⚠️ *Placeholder* |
| `05_ROLE_BASED_USER_MANUAL_UPDATE.md` | Role-specific manual updates ⚠️ *Placeholder* |

### **07_PLATFORM_AND_SKILLS** - Platform Setup & Q&A
Platform-specific guidance for GitHub, Vercel, Supabase, and n8n.

| File | Purpose |
|------|---------|
| `01_ANTIGRAVITY_ORIENTATION.md` | Comprehensive Antigravity orientation |
| `02_SKILL_AUDIT_AND_PRUNING.md` | Skill audit and optimization protocol |
| `03_GITHUB_QA.md` | GitHub setup and workflow Q&A ⚠️ *Placeholder* |
| `04_VERCEL_QA.md` | Vercel deployment Q&A ⚠️ *Placeholder* |
| `05_SUPABASE_QA.md` | Supabase configuration guide |
| `06_N8N_QA.md` | n8n automation Q&A ⚠️ *Placeholder* |

### **99_UNSORTED_REVIEW** - App-Building Prompts (Under Review)
Specialized prompts for building new applications from scratch.

| File | Purpose |
|------|---------|
| `AUTO_CLASSIFY_SESSION_TYPE.md` | Session classification logic |
| `BUILD_DECISION.md` | Decision engine building prompts |
| `CHAT_GPT_REMIND_MEMORY.md` | ChatGPT memory reminder format |
| `CLONE_ANTIGRAVITY_KIT.md` | Antigravity kit cloning instructions |
| `DECISION_GOVERNANCE_SUITE.md` | Decision governance framework |
| `GENERATE_RULE_CATALOG.md` | Rule catalog generation (60+ rules) |
| `VIBE_CODE_TEMPLATE.md` | Vibe Code template setup |

---

## 🚀 Quick Start Workflow

### **Phase 0: Orientation (First Time)**
1. Read `00_READ_FIRST/02_NEWBIE_GUIDE.md`
2. Review `00_READ_FIRST/00_OVERVIEW_SYSTEM.md`

### **Phase 1: Discovery → PRD**
1. Run `01_IDEA_TO_PRD/01_EXPERT_GUIDED_DISCUSSION_NON_TECH.md`
2. Run `01_IDEA_TO_PRD/02_EXPERT_GUIDED_IDEATION_TO_PRD_FINAL.md`

### **Phase 2: Architecture Design**
1. Run `02_PRD_TO_ARCHITECTURE/01_OVERALL_ARCHITECTURE_GENERATOR.md`
2. Run `02_PRD_TO_ARCHITECTURE/02_ARCHITECTURE_DECOMPOSITION.md`

### **Phase 3: Project Setup**
1. Run `03_PROJECT_STATE_SETUP/01_AUTO_GENERATE_PROJECT_STATE.md` (one-time)
2. Run `04_IMPLEMENTATION_PLANNING/01_AUTO_GENERATE_IMPLEMENTATION_PLAN.md` (one-time)

### **Phase 4: Daily Development**

#### **Session Start:**
1. Open `PROJECT_STATE.md`
2. Run `05_SESSION_CONTROL/00_DAILY_AUTO_START_ENHANCED.md`
3. Run `05_SESSION_CONTROL/01_AUTO_SUGGEST_UNIT_AND_START.md`
4. Run `05_SESSION_CONTROL/02_GENERATE_EXECUTION_PROMPT.md`

#### **Session End:**
1. Run `06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md`

---

## ⚠️ Placeholder Files

Files marked with ⚠️ *Placeholder* contain "TO BE CREATED" headers. These documents are part of the governance roadmap and will be authored as part of the documentation initiative.

**Total Placeholders:** 12 files

---

## 📦 Archive Reference

Original directory structure has been preserved in place under:
- `0. PROMP SETUP CHƯƠNG TRÌNH/`
- `2. PROMPT - QUAN TRỌNG KHI BUILD APP/`
- `3. PROMPT CHẠY MỖI SESSION/`
- `4. PROMPT LÀM VIỆC VỚI CHATGPT/`
- `A. HƯỚNG DẪN SETUP SKILL - github - Vercel - supabase - n8n/`

**Note:** Original files can be deleted after verification that all migrations are successful.

---

## 🔗 Related Documentation

- **Foundation 4 Pattern:** See Knowledge Items on "Vibe Code Standard"
- **Project State Protocol:** See `03_PROJECT_STATE_SETUP/`
- **Implementation Plan Usage:** See `04_IMPLEMENTATION_PLANNING/`
- **Skill Optimization:** See `07_PLATFORM_AND_SKILLS/02_SKILL_AUDIT_AND_PRUNING.md`

---

## 📝 Migration Notes

**Restructured:** 2026-02-01  
**Migration Type:** File reorganization only  
**Content Changes:** None (100% content preservation)  
**Conflicts Resolved:** 4 (by user confirmation)  
**Placeholders Created:** 12

### Conflict Resolutions:
1. ✅ `B. IT - EXPERT-GUIDED IDEATION → PRD FINAL.md` → Brainstorming stage
2. ✅ `1.1 RPD BRAINSTORM (OPS-FIRST)` → PRD building stage
3. ✅ `1.2.1 OVERALL ARCHITECTURE.md` → Canonical architecture version
4. ✅ `3/1. DAILY AUTO-START SESSION` → Current daily start protocol
5. ✅ Duplicate `GENERATE ANTIGRAVITY EXECUTION PROMPT.md` → Merged to canonical

---

**Maintained by:** Thái Mậu Development Standards Team  
**Questions?** See `00_READ_FIRST/03_FAQ_COMMON.md`
