# VERCEL QA GUIDE

**Version:** 1.0  
**Status:** ACTIVE  
**Workflow Stage:** 07_PLATFORM_AND_SKILLS (Platform Setup)

---

## Purpose

This document provides **governance-safe Vercel deployment workflows** for projects using the Thái Mậu development system.

Vercel is the deployment platform for frontend and serverless functions. Proper usage ensures:
- Safe deployments
- Environment separation
- Preview for review
- Rollback capability

---

## When to Use

- **Project setup** — Initial Vercel configuration
- **Feature development** — Preview deployments
- **Releases** — Production deployments
- **Troubleshooting** — Deployment issues

---

## What This Does NOT Cover

- ❌ GitHub workflows (see 03_GITHUB_QA.md)
- ❌ Database deployments (see 05_SUPABASE_QA.md)
- ❌ Detailed Vercel API configuration

---

## Project Setup

### Initial Connection

1. Log in to Vercel Dashboard
2. Click "New Project"
3. Import from GitHub
4. Select repository
5. Configure:
   - Framework Preset: (Auto-detect or select)
   - Root Directory: (Usually `.` or `/`)
   - Build Command: (e.g., `npm run build`)
   - Output Directory: (e.g., `dist` or `.next`)

### Environment Configuration

| Environment | Branch | Purpose |
|-------------|--------|---------|
| Production | `main` | Live users |
| Preview | Feature branches | Testing before merge |
| Development | `develop` | Integration testing |

---

## Environment Variables

### Setup

1. Go to Project Settings → Environment Variables
2. Add variables for each environment

### Variable Scopes

| Scope | Available In |
|-------|--------------|
| Production | Production deployments only |
| Preview | Preview deployments only |
| Development | Local development |
| All | All environments |

### Naming Convention

```
# API Keys
API_KEY_EXTERNAL=xxx

# Database
DATABASE_URL=xxx

# Feature Flags
FEATURE_NEW_CHECKOUT=true
```

### Security Rules

- ❌ Never commit secrets to repository
- ✅ Use Vercel environment variables
- ✅ Use `.env.local` for local development
- ✅ Add `.env.local` to `.gitignore`

---

## Deployment Workflow

### Preview Deployments

Automatic for every push:
```
Push to feature branch → Vercel creates preview URL
```

Preview URL format:
```
https://<project>-<hash>-<team>.vercel.app
```

### Production Deployments

Triggered by merge to main:
```
Merge PR to main → Vercel deploys to production
```

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy production
vercel --prod
```

---

## Domain Configuration

### Custom Domain Setup

1. Go to Project Settings → Domains
2. Add domain: `example.com`
3. Add subdomain: `app.example.com`

### DNS Records

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |
| CNAME | app | cname.vercel-dns.com |

### SSL

- Automatically provisioned
- Auto-renews
- Force HTTPS enabled

---

## Pre-Deployment Checklist

Before deploying to production:

| Check | Requirement |
|-------|-------------|
| Tests pass | All tests green |
| Preview tested | Manually verified |
| Env vars set | Production values configured |
| CHANGELOG updated | Version documented |
| Build succeeds | No build errors |

---

## Rollback Process

### Via Dashboard

1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Via CLI

```bash
vercel rollback
```

### Rollback Triggers

Roll back if:
- Critical bug discovered
- Performance degradation
- Security vulnerability
- Feature breaks existing users

---

## Monitoring

### Build Logs

Access via:
- Deployment → Logs
- Real-time during build

### Function Logs

For serverless functions:
- Deployment → Functions
- Select function → Logs

### Error Tracking

Recommended integrations:
- Sentry
- LogRocket
- Vercel Analytics

---

## Serverless Functions

### Location

```
/api/
  ├── index.js        → /api
  ├── users.js        → /api/users
  └── orders/
      └── [id].js     → /api/orders/123
```

### Configuration

In `vercel.json`:
```json
{
  "functions": {
    "api/**/*.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

### Best Practices

- Keep functions small
- Use environment variables
- Handle errors gracefully
- Set appropriate timeouts

---

## Common Mistakes

1. **Committing `.env`** — Use Vercel env vars instead
2. **Skipping preview test** — Always verify before merge
3. **Wrong env scope** — Verify Production vs Preview
4. **Large bundle size** — Monitor and optimize
5. **No rollback plan** — Know how to roll back

---

## Troubleshooting

### Build Failures

1. Check build logs
2. Verify dependencies in package.json
3. Check Node.js version compatibility
4. Verify environment variables

### 404 Errors

1. Check routing configuration
2. Verify file locations
3. Check `vercel.json` rewrites

### Environment Variable Issues

1. Verify variable exists in Vercel
2. Check scope (Production/Preview)
3. Redeploy after adding variables

---

## Governance Integration

### Deployment Records

After production deployment, document in SESSION_SUMMARY:
```markdown
## Deployment

- URL: https://example.com
- Version: 1.2.0
- Deployment ID: xxx
- Deployed: 2026-02-01 14:00
```

### Deployment Approval

For critical deployments:
1. PR reviewed and approved
2. Preview tested by stakeholder
3. Deployment announced to team

---

## Related Files

- **GitHub:** 03_GITHUB_QA.md
- **Supabase:** 05_SUPABASE_QA.md
- **Session End:** 06_END_OF_SESSION/01_END_OF_SESSION_MASTER.md
