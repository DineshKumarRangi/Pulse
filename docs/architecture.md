# 🏗️ Pulse Architecture

## Overview

Pulse is built using a modular, scalable architecture designed to support multiple clients (Chrome Extension, Web App, Desktop App, and Mobile App) while sharing common business logic.

The project follows a layered architecture:

```
                 Sports APIs (Future)
                        │
                        ▼
                 Services Layer
                        │
                        ▼
              Zustand State Stores
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
      Pages                       Background Tasks
        │
        ▼
   Feature Components
        │
        ▼
   Reusable UI Components
```

---

# Project Structure

```
pulse/
│
├── apps/
│   └── extension/
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   ├── layout/
│       │   │   ├── league/
│       │   │   └── match/
│       │   │
│       │   ├── pages/
│       │   │   └── Home/
│       │   │
│       │   ├── services/
│       │   │   └── mock/
│       │   │
│       │   ├── store/
│       │   │
│       │   ├── styles/
│       │   │
│       │   ├── hooks/
│       │   │
│       │   ├── types/
│       │   │
│       │   ├── App.tsx
│       │   └── main.tsx
│       │
│       └── public/
│
├── packages/
│   └── shared/
│
└── docs/
```

---

# Layer Responsibilities

## UI Components

Reusable presentation components.

Current components:

- Button
- Card
- Badge

These components are generic and independent of sports logic.

---

## Feature Components

Components responsible for sports-specific UI.

Current components:

- MatchCard
- LeagueSection
- Header

Future components:

- MatchTimeline
- MatchStats
- PlayerCard
- TeamLogo
- NotificationCard

---

## Pages

Pages compose feature components into complete screens.

Current pages:

- Home

Future pages:

- Favorites
- Live
- Settings
- Search

---

## Services

Responsible for providing application data.

Current:

- Mock Match Service

Future:

- Football API
- Cricket API
- Basketball API
- Esports API

The UI never communicates directly with external APIs.

---

## State Management

Pulse uses **Zustand** for application state management.

Current Stores

- Match Store
- Favorite Store

Planned Stores

- Notification Store
- Settings Store
- User Store

Separating stores keeps each feature focused and avoids a single monolithic global store.

---

## Shared Types

Shared models are stored in:

```
src/types/
```

Current models:

- Match

These models are shared between services, stores, and UI components.

---

# Current Data Flow

```
Mock Match Service
        │
        ▼
   Match Store
        │
        ▼
     Home Page
        │
        ▼
  League Section
        │
        ▼
    Match Card
```

---

# Future Data Flow

```
Sports APIs
      │
      ▼
API Services
      │
      ▼
Normalization Layer
      │
      ▼
Zustand Stores
      │
      ▼
Pages
      │
      ▼
Components
```

---

# Design Principles

Pulse follows the following architectural principles:

### Separation of Concerns

Each layer has a single responsibility.

### Reusability

UI components are reusable across multiple pages.

### Scalability

New sports, APIs, and features can be added without restructuring the application.

### Maintainability

Business logic is separated from UI rendering.

### Type Safety

TypeScript models define contracts between all application layers.

---

# Current Status

## Sprint 1 ✅

Completed

- Project setup
- Monorepo
- Extension foundation
- Shared package

---

## Sprint 2 ✅

Completed

- Design system
- CSS Modules
- UI library
- MatchCard
- LeagueSection
- Header
- Home Page
- Zustand integration
- Match Store
- Favorite Store foundation

---

## Sprint 3 🚧

In Progress

- Favorites
- Bottom Navigation
- Chrome Storage
- Live Sports APIs