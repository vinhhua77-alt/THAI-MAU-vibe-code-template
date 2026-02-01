# 07_PLATFORM_AND_SKILLS

## Purpose

This folder contains prompts for **platform-specific guidance** and **skill management** — setting up tools, optimizing agent capabilities, and configuring external services.

Topics covered:
- Antigravity orientation
- Skill audit and pruning
- GitHub, Vercel, Supabase, n8n setup

## When to Use

**During project setup or when integrating new platforms.**

- First session: Run Antigravity Orientation
- After PRD: Run Skill Audit
- Platform integration: Use relevant QA guides

## Who Should Use This

- **Technical leads** setting up infrastructure
- **Antigravity** during initial configuration
- **DevOps** integrating external services

## What NOT to Do

- ❌ Run skill audit before project context is defined
- ❌ Push to production databases during development
- ❌ Skip orientation when starting new repos
- ❌ Use all skills by default (use only what's needed)

## Typical Mistakes to Avoid

1. **Skipping orientation** — Antigravity needs context to work correctly
2. **Loading unnecessary skills** — More skills = more token usage
3. **Pushing to Supabase prod early** — Feature branch first, prod after review
4. **Not linking projects properly** — Supabase link ≠ Supabase push
5. **Ignoring platform-specific rules** — Each platform has its own workflow
