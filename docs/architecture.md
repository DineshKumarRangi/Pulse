# 🏗 Pulse System Architecture

> Last Updated: July 2026

---

# Overview

Pulse is a cross-platform application that delivers real-time sports and esports updates through multiple clients.

Instead of each application implementing its own logic, Pulse follows a shared architecture where all clients communicate with a centralized backend.

---

# High-Level Architecture

```
                    Sports APIs
        (Football, Cricket, Esports)

                    │
                    ▼

          ┌───────────────────────┐
          │     Pulse Backend      │
          │  Express + TypeScript  │
          └───────────┬────────────┘
                      │
          REST API / WebSocket
                      │
     ┌────────────────┼────────────────┐
     │                │                │
     ▼                ▼                ▼
Chrome Extension   Desktop App   Web Dashboard
     │
     ▼
 Shared Packages
```

---

# Project Structure

```
pulse/

├── apps/
│   ├── extension/
│   ├── api/
│   ├── desktop/
│   └── web/
│
├── packages/
│   ├── shared/
│   ├── ui/
│   ├── api-client/
│   └── configs/
│
├── docs/
│
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

---

# Applications

## Extension

Purpose

Provides quick access to live scores through Chrome.

Responsibilities

- Display popup UI
- Store user preferences
- Show notifications
- Background updates
- Browser overlay

---

## API

Purpose

Central communication layer.

Responsibilities

- Receive sports data
- Normalize APIs
- Cache responses
- Authenticate users
- Broadcast updates

---

## Desktop

Purpose

Always-on-top companion application.

Responsibilities

- Floating widget
- Desktop notifications
- Global shortcuts

---

## Web

Purpose

Future dashboard.

Responsibilities

- Detailed statistics
- Match history
- User settings
- Account management

---

# Shared Packages

## shared

Contains

- Types
- Interfaces
- Utilities
- Constants

Used by every application.

---

## ui

Reusable components.

Examples

- MatchCard
- Header
- Buttons
- LiveBadge

---

## api-client

Responsible for

- API requests
- WebSocket communication
- Authentication

---

## configs

Contains

- TypeScript configuration
- ESLint configuration
- Prettier configuration

---

# Extension Architecture

```
User

↓

Popup UI

↓

Background Service Worker

↓

Storage

↓

Backend API
```

---

## Popup

Responsibilities

- Display matches
- Settings
- Refresh
- Search

---

## Background

Responsibilities

- Fetch updates
- Cache scores
- Notifications
- Sync storage

---

## Content Script

Future

Injects floating widgets into webpages.

---

# Backend Architecture

```
Sports APIs

↓

Providers

↓

Normalization Layer

↓

Services

↓

REST API

↓

Extension
```

---

# Data Flow

```
Sports Provider

↓

Backend

↓

Cache

↓

REST API

↓

Background Worker

↓

Popup

↓

User
```

---

# Domain Model

Core entities

```
Sport

↓

Tournament

↓

Match

↓

Team

↓

Score

↓

Event
```

Every feature is built around these entities.

---

# Design Principles

## Single Responsibility

Each module has one responsibility.

---

## Shared Logic

Business logic is shared whenever possible.

---

## API First

Clients never communicate directly with sports providers.

Only the backend integrates external APIs.

---

## Event Driven

Pulse reacts to events.

Examples

- Goal
- Wicket
- Kill
- Race Finished

---

# Technology Stack

Frontend

- React
- TypeScript
- Vite
- CRXJS

Backend

- Express
- Node.js

Monorepo

- pnpm
- TurboRepo

Future

- PostgreSQL
- Redis
- Docker
- GitHub Actions

---

# Future Architecture

```
           AI Summary Engine

                   ▲

Backend ← Redis → PostgreSQL

     ▲

Sports APIs

     ▲

Extension

Desktop

Web

Mobile
```

---

# Development Philosophy

Every new feature should follow:

1. Architecture
2. Shared Types
3. Backend
4. UI
5. Testing
6. Documentation

No feature should bypass this workflow.

---

# Conclusion

Pulse is designed as a scalable platform rather than a single application.

The architecture prioritizes:

- Reusability
- Scalability
- Maintainability
- Performance
- Cross-platform compatibility