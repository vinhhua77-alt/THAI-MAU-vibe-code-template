# N8N QA GUIDE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 07_PLATFORM_AND_SKILLS (Platform Setup)

---

## Purpose

This document provides **governance-safe n8n automation workflows** for projects using the Thái Mậu development system.

n8n is the workflow automation platform. Proper usage ensures:
- Reliable automation
- Auditable processes
- Error handling
- Integration consistency

---

## When to Use

- **Automation setup** — Initial n8n configuration
- **Workflow development** — Creating new automations
- **Integration** — Connecting external services
- **Troubleshooting** — Debugging automation issues

---

## What This Does NOT Cover

- ❌ Application development (see main development workflow)
- ❌ Database design (see 05_SUPABASE_QA.md)
- ❌ n8n hosting and infrastructure

---

## Core Concepts

### Workflow

A sequence of connected nodes that perform automation tasks:
```
Trigger → Action → Action → ... → Output
```

### Nodes

| Type | Purpose | Examples |
|------|---------|----------|
| **Trigger** | Starts workflow | Webhook, Cron, Event |
| **Action** | Performs task | HTTP, Database, Email |
| **Logic** | Controls flow | IF, Switch, Loop |
| **Output** | Delivers result | Response, Notification |

### Execution

Each workflow run is an execution with:
- Status: Success / Error
- Data: Input and output
- Logs: Execution details

---

## Workflow Standards

### Naming Convention

```
[Domain]_[Action]_[Version]

Examples:
Order_SyncToSheet_v1
Inventory_AlertLowStock_v2
Report_DailySummary_v1
```

### Description Requirements

Every workflow MUST have:
```
## Purpose
[What this workflow does]

## Trigger
[What starts this workflow]

## Dependencies
[External services required]

## Failure Handling
[What happens on error]

## Last Updated
[Date and reason]
```

---

## Development Workflow

### Step 1: Design

Before building, document:
- What triggers the workflow?
- What data is needed?
- What actions are performed?
- What is the expected output?
- How are errors handled?

### Step 2: Build in Development

1. Create workflow in dev environment
2. Use test credentials
3. Build incrementally, test each node
4. Add error handling

### Step 3: Test

| Test Type | Verify |
|-----------|--------|
| Happy path | Normal data works |
| Edge cases | Empty, null, special characters |
| Error cases | Service down, bad data |
| Load | Multiple executions |

### Step 4: Deploy to Production

1. Export workflow JSON
2. Import to production
3. Update credentials to production
4. Activate workflow
5. Monitor initial executions

---

## Error Handling

### Built-in Options

```
Settings → Error Workflow → Select error handler
```

### Error Handler Workflow

Every project should have:
```
Error_Handler_Master
  → Captures all errors
  → Logs to database/sheet
  → Sends Slack/Email notification
  → Includes workflow name, error, timestamp
```

### Retry Strategy

For transient errors:
```
Settings → Retry on Fail → Yes
Retry Count: 3
Retry Interval: 5 minutes
```

---

## Credential Management

### Naming Convention

```
[Service]_[Environment]_[Description]

Examples:
Google_Prod_Sheets
Supabase_Dev_MainDB
Slack_Prod_OpsChannel
```

### Security Rules

- ❌ Never share credentials between environments
- ❌ Never hardcode secrets in workflows
- ✅ Use n8n credential system
- ✅ Rotate credentials periodically
- ✅ Limit credential access by role

---

## Integration Patterns

### Webhook Pattern

```
Webhook Trigger → Validate Input → Process → HTTP Response
```

- Always validate incoming data
- Return appropriate status codes
- Log all webhook calls

### Scheduled Pattern

```
Cron Trigger → Fetch Data → Process → Store/Notify
```

- Use appropriate schedule frequency
- Handle timezone correctly
- Account for execution duration

### Event Pattern

```
Database Change → Transform → External Action
```

- Ensure idempotency
- Handle duplicate events
- Log event processing

---

## Monitoring

### Execution Dashboard

Check regularly:
- Success rate
- Execution duration
- Error patterns

### Alerting

Set up alerts for:
- Workflow failures (after retries)
- Unusual execution patterns
- Long-running executions

### Log Retention

Configure based on needs:
- Error logs: 30+ days
- Success logs: 7 days minimum
- Audit-critical: As required

---

## Version Control

### Export/Import

```bash
# Export workflow
n8n export:workflow --id=123 --output=workflows/Order_SyncToSheet_v1.json

# Import workflow
n8n import:workflow --input=workflows/Order_SyncToSheet_v1.json
```

### Git Integration

Store workflow JSON in repository:
```
/automations/
  ├── workflows/
  │   ├── Order_SyncToSheet_v1.json
  │   └── Report_DailySummary_v1.json
  └── README.md
```

### Change Documentation

When updating workflow:
1. Increment version in name
2. Update description
3. Export new JSON
4. Commit to repository
5. Document in CHANGELOG

---

## Common Mistakes

1. **No error handling** — Always have error workflow
2. **Hardcoded values** — Use variables and credentials
3. **No documentation** — Every workflow needs description
4. **Skipping test** — Test before production
5. **No version control** — Export and commit JSON

---

## Troubleshooting

### Execution Fails

1. Check execution logs
2. Verify credentials are valid
3. Check external service status
4. Validate input data format

### Webhook Not Receiving

1. Verify webhook URL is correct
2. Check firewall/network settings
3. Verify webhook is active
4. Test with simple request

### Slow Execution

1. Identify slow nodes
2. Check external service latency
3. Optimize data processing
4. Consider splitting workflow

---

## Governance Integration

### Documentation

For each production workflow, document in tech manual:
```markdown
## Workflow: Order_SyncToSheet_v1

**Purpose:** Sync new orders to Google Sheet for reporting
**Trigger:** Webhook from application
**Frequency:** On-demand
**Owner:** [Name]
**Last Updated:** 2026-02-01
```

### Change Process

1. Design change
2. Test in development
3. Document changes
4. Deploy to production
5. Update documentation

---

## Related Files

- **Supabase:** 05_SUPABASE_QA.md
- **GitHub:** 03_GITHUB_QA.md
- **Vercel:** 04_VERCEL_QA.md
