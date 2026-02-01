# GITHUB QA GUIDE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 07_PLATFORM_AND_SKILLS (Platform Setup)

---

## Purpose

This document provides **governance-safe GitHub workflows** for projects using the Thái Mậu development system.

GitHub is the version control and collaboration platform. Proper usage ensures:
- Audit trail integrity
- Change traceability
- Team coordination
- Deployment safety

---

## When to Use

- **Project setup** — Initial repository configuration
- **Daily development** — Commit and branch workflows
- **Collaboration** — Pull request and review processes
- **Deployment** — Release and tagging

---

## What This Does NOT Cover

- ❌ Deployment procedures (see 07_PLATFORM_AND_SKILLS/04_VERCEL_QA.md)
- ❌ Database migrations (see 05_SUPABASE_QA.md)
- ❌ CI/CD pipeline configuration

---

## Repository Setup

### Initial Configuration

```bash
# Clone template repository
git clone <template-repo-url> <project-name>
cd <project-name>

# Remove template origin
git remote remove origin

# Add new project origin
git remote add origin <new-repo-url>

# Initial push
git push -u origin main
```

### Required Files

Ensure these exist in repository root:

| File | Purpose |
|------|---------|
| README.md | Project overview |
| CHANGELOG.md | Change history |
| .gitignore | Ignored files |
| .env.example | Environment template |

### Branch Protection

Configure on GitHub:
- **main branch:**
  - Require pull request before merging
  - Require status checks to pass
  - Require conversation resolution
  - Do not allow force push

---

## Branch Strategy

### Branch Types

| Branch | Purpose | Naming |
|--------|---------|--------|
| **main** | Production-ready code | `main` |
| **develop** | Integration branch | `develop` |
| **feature** | New features | `feature/<name>` |
| **fix** | Bug fixes | `fix/<issue-number>` |
| **release** | Release preparation | `release/<version>` |

### Naming Conventions

```
feature/order-state-machine
feature/unit-4-inventory-logic
fix/123-null-date-crash
release/1.2.0
```

### Branch Lifecycle

```
main ← develop ← feature/x
         ↑
      feature/y
```

1. Create feature branch from `develop`
2. Work on feature
3. PR to `develop`
4. When ready, PR `develop` → `main`

---

## Commit Standards

### Commit Message Format

```
<type>(<scope>): <description>

[Optional body]

[Optional footer]
```

### Types

| Type | Use When |
|------|----------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no logic change |
| `refactor` | Code change, no feature/fix |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Examples

```bash
feat(order): add state transition validation
fix(inventory): correct null check in calculation
docs(readme): update setup instructions
chore: end-of-session update
refactor(api): extract validation logic
```

### Session Commits

At session end:
```bash
git add .
git commit -m "chore: end-of-session update"
git push origin <branch>
```

---

## Pull Request Process

### Creating a PR

1. Push feature branch
2. Create PR on GitHub
3. Fill PR template:

```markdown
## Description
[What changed and why]

## Related Unit/Issue
Unit X / Issue #Y

## Type of Change
- [ ] Feature
- [ ] Bug fix
- [ ] Documentation
- [ ] Refactor

## Checklist
- [ ] Code follows project style
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] CHANGELOG updated
- [ ] No console.log left
```

### Review Guidelines

Reviewers should verify:
- Code matches WORKFLOW.md specifications
- No scope creep beyond the unit
- CHANGELOG entry exists
- Tests cover new logic

### Merge Strategy

- **Squash and merge** — For feature branches
- **Merge commit** — For release branches
- **Never force push** — To protected branches

---

## Release Process

### Version Tags

```bash
# After merging to main
git checkout main
git pull origin main
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0
```

### Version Format

```
v<major>.<minor>.<patch>

v1.0.0 — Initial release
v1.1.0 — New feature
v1.1.1 — Bug fix
v2.0.0 — Breaking change
```

### Release Checklist

| Check | Requirement |
|-------|-------------|
| All PRs merged | No pending feature PRs |
| Tests passing | CI green on main |
| CHANGELOG updated | Version section created |
| Tag created | Matches version |

---

## Common Mistakes

1. **Committing to main** — Always use branches
2. **Vague commit messages** — Be specific
3. **Large PRs** — One unit per PR
4. **Skipping CHANGELOG** — Required for TYPE B sessions
5. **Force pushing** — Never on protected branches

---

## Troubleshooting

### Merge Conflicts

```bash
# Update your branch
git fetch origin
git merge origin/develop

# Resolve conflicts
# Edit conflicting files
git add <resolved-files>
git commit -m "resolve merge conflicts"
```

### Undo Last Commit (unpushed)

```bash
git reset --soft HEAD~1
```

### Recover Deleted Branch

```bash
# Find the commit
git reflog

# Recreate branch
git checkout -b <branch-name> <commit-sha>
```

---

## Related Files

- **Vercel Deployment:** 04_VERCEL_QA.md
- **Supabase Migrations:** 05_SUPABASE_QA.md
- **Session End:** 06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md
