# CHANGELOG RULES

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 06_END_OF_SESSION (Governance)

---

## Purpose

This document defines the **rules for maintaining CHANGELOG.md** — the project's audit trail of all changes.

CHANGELOG.md is:
- Append-only (never delete entries)
- Updated at the end of every TYPE B session
- Required for governance compliance

---

## When to Use

- **At the end of every TYPE B session** (implementation)
- **After code changes** are committed
- **Before closing** a session

---

## What This Does NOT Cover

- ❌ Session summary content (see 03_SESSION_SUMMARY_RULES.md)
- ❌ User Manual updates (see 04_USER_MANUAL_ENFORCEMENT.md)
- ❌ Git commit messages

---

## CHANGELOG Structure

```markdown
# CHANGELOG

All notable changes to this project are documented here.

## [Unreleased]

### Added
- [New feature or capability]

### Changed
- [Modification to existing feature]

### Fixed
- [Bug fix with reference]

### Deprecated
- [Feature being phased out]

### Removed
- [Deleted feature or capability]

### Security
- [Security-related change]

---

## [Version] - YYYY-MM-DD

### Added
- [Description]

### Changed
- [Description]

...
```

---

## Entry Format

### Standard Entry

```markdown
- [Brief description] ([Reference])
```

**Examples:**
```markdown
- Added state transition validation for Order workflow (Unit 3)
- Fixed null check in inventory calculation (Bug #12)
- Changed default timeout from 30s to 60s (Config update)
```

### Entry Requirements

| Element | Requirement |
|---------|-------------|
| Description | Clear, specific, action-oriented |
| Reference | Unit number, bug ID, or context |
| Category | Must be in correct section (Added/Changed/Fixed/etc.) |

---

## Category Definitions

### Added
New features, capabilities, or files:
- New API endpoints
- New business logic
- New documentation

### Changed
Modifications to existing functionality:
- Behavior changes
- Configuration updates
- Performance improvements

### Fixed
Bug fixes:
- Runtime errors resolved
- Logic corrections
- Data handling fixes

### Deprecated
Features being phased out:
- Will be removed in future version
- Users should migrate

### Removed
Deleted features:
- No longer available
- Breaking change if external

### Security
Security-related changes:
- Vulnerability fixes
- Access control updates
- Encryption changes

---

## Update Protocol

### Step 1: Identify Changes

At session end, list all:
- Files created
- Files modified
- Behaviors changed

### Step 2: Categorize

Assign each change to the correct category.

### Step 3: Write Entries

For each change:
```markdown
- [Action verb] [what] [context/reference]
```

### Step 4: Add to Unreleased

New entries go under `[Unreleased]`:
```markdown
## [Unreleased]

### Added
- Implemented order state machine (Unit 4)

### Fixed
- Corrected date calculation in reports (Bug #15)
```

### Step 5: Commit

Include CHANGELOG.md in the session commit.

---

## Versioning

### When to Create a Version

Create a new version entry when:
- Major feature is complete
- Phase milestone is reached
- Release is deployed

### Version Format

```markdown
## [1.2.0] - 2026-02-01

### Added
- [All Added entries from Unreleased]

### Changed
- [All Changed entries from Unreleased]
...
```

### After Versioning

Clear the specific sections under `[Unreleased]` or move entries to the new version.

---

## Forbidden Actions

### ❌ Deleting Entries
CHANGELOG is append-only. If an entry was wrong:
```markdown
- [CORRECTION] Previous entry about X was incorrect: [clarification]
```

### ❌ Vague Entries
```markdown
- Fixed stuff  ❌
- Updated things  ❌
- Bug fixes  ❌
```

### ❌ Missing References
Every entry should trace to a unit, bug, or task.

### ❌ Skipping Sessions
TYPE B sessions MUST have CHANGELOG entries.

---

## Common Mistakes

1. **Bundling entries** — One entry per change
2. **Wrong category** — Bug fix is not "Added"
3. **No reference** — Future readers need context
4. **Passive voice** — Use "Added X" not "X was added"
5. **Too long** — Entries should be one line

---

## Validation Checklist

Before closing session:

| Check | Requirement |
|-------|-------------|
| Entry exists | At least one entry for this session |
| Correct category | Each entry in right section |
| Has reference | Unit/Bug/Task ID included |
| Clear description | Understandable in 6 months |
| Committed | Included in session commit |

---

## Related Files

- **Master Session:** 01_END_OF_SESSION_MASTER.md
- **Session Summary:** 03_SESSION_SUMMARY_RULES.md
- **Project State:** 03_PROJECT_STATE_SETUP/02_PROJECT_STATE_STRUCTURE.md
