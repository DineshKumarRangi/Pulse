# 🛠 Pulse Development Setup

> Last Updated: July 2026

This guide explains how to set up the Pulse development environment from scratch.

---

# System Requirements

Before starting, install the following software.

## Required

- Node.js (v22 or later)
- pnpm (v11 or later)
- Git
- Google Chrome

## Recommended

- Visual Studio Code
- GitHub Desktop
- Postman
- Docker Desktop (Future)

---

# Verify Installation

Run the following commands.

```bash
node -v
pnpm -v
git --version
```

Example

```text
Node.js 22.x.x
pnpm 11.x.x
git 2.xx.x
```

---

# Clone Repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd pulse
```

---

# Install Dependencies

```bash
pnpm install
```

This installs dependencies for every workspace package.

---

# Project Structure

```
pulse/

apps/
    extension/
    api/
    desktop/
    web/

packages/
    shared/
    ui/
    api-client/
    configs/

docs/
```

---

# Development Commands

Run all development servers

```bash
pnpm dev
```

Build every application

```bash
pnpm build
```

Run lint

```bash
pnpm lint
```

Run type checking

```bash
pnpm typecheck
```

---

# Workspace Commands

Run Extension only

```bash
pnpm --filter extension dev
```

Build Extension

```bash
pnpm --filter extension build
```

Build Shared Package

```bash
pnpm --filter @pulse/shared build
```

---

# Chrome Extension Setup

Open

```
chrome://extensions
```

Enable

```
Developer Mode
```

Click

```
Load unpacked
```

Select

```
apps/extension/dist
```

---

# Git Workflow

Check status

```bash
git status
```

Stage changes

```bash
git add .
```

Commit

```bash
git commit -m "feat(extension): add match card"
```

Push

```bash
git push
```

---

# Branch Strategy

Main

```
main
```

Feature branches

```
feature/popup-ui

feature/backend-api

feature/notifications
```

Bug fixes

```
fix/storage

fix/build
```

---

# Recommended VS Code Extensions

- ESLint
- Prettier
- GitLens
- Error Lens
- Path IntelliSense
- Turbo Console Log

---

# Common Problems

## TurboRepo not found

Run

```bash
pnpm install
```

---

## Workspace not detected

Verify

```
pnpm-workspace.yaml
```

contains

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

---

## Extension won't load

Check

- Manifest exists
- Build completed
- Developer Mode enabled

---

## TypeScript errors

Run

```bash
pnpm typecheck
```

Restart VS Code if IntelliSense is out of sync.

---

## Dependency issues

Remove

```
node_modules
pnpm-lock.yaml
```

Then

```bash
pnpm install
```

---

# Development Workflow

Every feature follows this process.

```
Plan

↓

Create Branch

↓

Implement

↓

Test

↓

Update Documentation

↓

Commit

↓

Push

↓

Merge
```

---

# Coding Standards

- Use TypeScript
- Prefer reusable components
- Avoid duplicate logic
- Keep functions focused on one responsibility
- Document important architectural decisions

---

# Support

If you encounter a new setup issue that is not documented here, fix it first, then add the solution to this document so future contributors don't hit the same problem.