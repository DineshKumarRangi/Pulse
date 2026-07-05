# 🏛 Pulse Architecture Decision Records (ADR)

> This document records important architectural and engineering decisions made throughout the development of Pulse.

Each decision includes:
- Context
- Decision
- Alternatives Considered
- Consequences

---

# ADR-001: Monorepo Architecture

**Date:** July 2026

## Context

Pulse is planned to support multiple applications:

- Chrome Extension
- Desktop App
- Backend API
- Web Dashboard

These applications share common models, utilities, and APIs.

## Decision

Use a **pnpm Monorepo**.

## Alternatives Considered

- Multiple Git repositories
- Git submodules

## Why This Decision

- Easier code sharing
- Single dependency management
- Simplified development
- Better scalability
- Easier CI/CD

## Consequences

Positive

- Shared packages
- Easier maintenance
- Faster development

Negative

- Slightly more initial setup

---

# ADR-002: TurboRepo

**Date:** July 2026

## Context

Managing multiple applications requires efficient builds.

## Decision

Use **TurboRepo**.

## Alternatives Considered

- Nx
- Manual scripts

## Why This Decision

- Fast incremental builds
- Excellent pnpm support
- Remote/local caching
- Industry standard

## Consequences

Positive

- Faster development
- Automatic dependency graph

Negative

- Learning curve

---

# ADR-003: React + TypeScript

**Date:** July 2026

## Context

Pulse requires a scalable frontend.

## Decision

Use React with TypeScript.

## Alternatives Considered

- Vanilla JavaScript
- Vue
- Angular

## Why This Decision

- Large ecosystem
- Strong typing
- Excellent tooling
- Component architecture

## Consequences

Positive

- Fewer runtime bugs
- Better autocomplete
- Easier refactoring

Negative

- Slightly steeper learning curve

---

# ADR-004: Chrome Extension First

**Date:** July 2026

## Context

The primary goal is to provide live scores without users switching tabs.

## Decision

Build the Chrome Extension before the desktop application.

## Alternatives Considered

- Desktop-first
- Web dashboard first

## Why This Decision

- Faster MVP
- Easier testing
- Immediate user value
- Faster feedback

## Consequences

Positive

- Faster releases
- Smaller development scope

Negative

- Desktop users wait longer

---

# ADR-005: Shared Package

**Date:** July 2026

## Context

Different applications require common types.

## Decision

Create a shared package.

## Shared Content

- Match
- Team
- Score
- Sport
- Utilities

## Why This Decision

Avoid duplicated code.

## Consequences

Positive

- Single source of truth
- Easier maintenance

Negative

- Requires version coordination

---

# ADR-006: API-First Backend

**Date:** July 2026

## Context

The extension, desktop app, and future web dashboard all require the same data.

## Decision

Build a centralized backend API.

## Alternatives Considered

- Extension directly calling sports APIs
- Separate APIs for each application

## Why This Decision

- One integration point
- Better caching
- Easier authentication
- Supports multiple clients

## Consequences

Positive

- Easier maintenance
- Better scalability

Negative

- Additional server to maintain

---

# ADR-007: Event-Based Architecture

**Date:** July 2026

## Context

Pulse supports multiple sports and esports.

Every sport has different rules, but they all produce events.

Examples:

Football

- Goal
- Red Card
- Half Time

Cricket

- Wicket
- Boundary
- Six

Valorant

- Kill
- Ace
- Spike Plant

## Decision

Model the system around **events**, not sports.

## Why This Decision

Notifications, overlays, timelines, and AI summaries all consume events regardless of the sport.

## Consequences

Positive

- Easy to add new sports
- Unified notification system
- Reusable UI

Negative

- More initial abstraction

---

# ADR-008: Documentation as Code

**Date:** July 2026

## Context

Many projects have outdated documentation.

## Decision

Documentation is updated as part of every sprint.

## Why This Decision

Keeps documentation synchronized with implementation.

## Consequences

Positive

- Reliable documentation
- Easier onboarding
- Better long-term maintenance

---

# Future Decisions

This document will continue to grow as Pulse evolves.