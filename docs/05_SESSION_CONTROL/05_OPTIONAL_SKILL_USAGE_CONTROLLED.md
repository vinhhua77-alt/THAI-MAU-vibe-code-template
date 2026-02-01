========================
OPTIONAL SKILL USAGE (CONTROLLED)
========================

You MAY use skills declared in the `.agent/` directory
ONLY IF all conditions below are satisfied:

1. The skill directly supports the scoped task
2. The skill does NOT:
   - Add new features
   - Modify locked documents
   - Change business logic semantics
   - Bypass repository rules
3. The skill operates ONLY on:
   - Allowed files
   - Allowed folders
4. If a skill introduces ambiguity or side effects → DO NOT USE IT

Before using any skill, you MUST:
- State the skill name
- State why it is needed
- State which files it will touch

If no skill is strictly required:
- Proceed WITHOUT using any skill
