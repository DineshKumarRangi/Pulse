# ⚙️ Pulse Setup Guide

## Overview

This guide explains how to set up the Pulse development environment from scratch.

---

# Prerequisites

Install the following tools before cloning the repository.

## Node.js

Recommended Version

```
v22+
```

---

## pnpm

Install globally

```bash
npm install -g pnpm
```

Verify

```bash
pnpm -v
```

---

## Git

Install Git and configure your GitHub account.

Verify

```bash
git --version
```

---

## Google Chrome

Required for developing and testing the browser extension.

---

# Clone Repository

```bash
git clone https://github.com/DineshKumarRangi/Pulse.git
```

```bash
cd Pulse
```

---

# Install Dependencies

From the project root

```bash
pnpm install
```

This installs dependencies for all workspace packages.

---

# Project Structure

```
pulse/
│
├── apps/
│   └── extension/
│
├── packages/
│   └── shared/
│
├── docs/
│
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

---

# Development

Start the development server

```bash
pnpm dev
```

TurboRepo will start the extension workspace.

---

# Build

Create a production build

```bash
pnpm build
```

---

# Load Extension

1. Open Chrome

```
chrome://extensions
```

2. Enable

```
Developer Mode
```

3. Click

```
Load unpacked
```

4. Select

```
apps/extension/dist
```

The Pulse extension should now appear in Chrome.

---

# Tech Stack

Frontend

- React
- TypeScript
- Vite

Extension

- CRXJS
- Chrome Extension Manifest V3

Monorepo

- TurboRepo
- pnpm Workspace

State Management

- Zustand

Styling

- CSS Modules

Language

- TypeScript

Version Control

- Git
- GitHub

---

# Useful Commands

Install dependencies

```bash
pnpm install
```

Run development server

```bash
pnpm dev
```

Build project

```bash
pnpm build
```

Lint

```bash
pnpm lint
```

Type check

```bash
pnpm typecheck
```

---

# Troubleshooting

## Extension does not load

- Verify the build completed successfully.
- Reload the unpacked extension.
- Check the browser console for errors.

---

## Hot Reload Issues

If Vite Hot Module Reload stops working:

```bash
Ctrl + C
```

Restart the development server

```bash
pnpm dev
```

---

## CSS Module Errors

Ensure component styles follow this structure

```
Component/
├── Component.tsx
├── Component.module.css
└── index.ts
```

---

## TypeScript Errors

Run

```bash
pnpm typecheck
```

before committing changes.

---

# Git Workflow

Check current changes

```bash
git status
```

Stage files

```bash
git add .
```

Commit

```bash
git commit -m "your message"
```

Push

```bash
git push origin main
```

---

# Development Workflow

Every new feature should follow this process.

```
Plan

↓

Design

↓

Implement

↓

Test

↓

Document

↓

Commit

↓

Push
```

Documentation should always be updated before merging a completed sprint.

---

# Current Status

Current Version

```
v0.2.0
```

Current Sprint

```
Sprint 3
```

Completed

- Sprint 1
- Sprint 2

In Progress

- Interactive Features
- Favorites
- Navigation
- Live Sports Integration