# 🌐 Pulse API Documentation

## Overview

Pulse follows a service-based architecture where all external data is accessed through a dedicated service layer.

The user interface never communicates directly with external APIs.

```
Sports API
     │
     ▼
API Service
     │
     ▼
Normalization Layer
     │
     ▼
Zustand Store
     │
     ▼
React Components
```

---

# Current Status

## Sprint 2

Current data source:

- Mock Match Service

Location

```
src/services/mock/matches.ts
```

The application currently renders mock data while the frontend architecture is being completed.

---

# Data Model

Current Match model

```ts
interface Match {
  id: string;

  sport: string;

  league: string;

  homeTeam: string;
  awayTeam: string;

  homeScore: number;
  awayScore: number;

  status: "LIVE" | "FINISHED" | "UPCOMING";

  minute?: string;
}
```

All future API responses will be normalized into this model before entering the application state.

---

# Service Layer

Current

```
services/
└── mock/
    └── matches.ts
```

Future

```
services/
├── football/
├── cricket/
├── basketball/
├── esports/
└── mock/
```

Each sport will have its own service responsible for fetching and transforming data.

---

# State Flow

```
Mock Data
     │
     ▼
Match Store (Zustand)
     │
     ▼
Pages
     │
     ▼
Components
```

Future

```
Sports APIs
      │
      ▼
Service Layer
      │
      ▼
Normalization
      │
      ▼
Match Store
      │
      ▼
React UI
```

---

# Planned API Endpoints

## Football

- Live Matches
- Match Details
- Team Information
- League Standings

---

## Cricket

- Live Matches
- Scorecards
- Player Statistics

---

## Basketball

- Live Games
- Team Statistics
- League Standings

---

## Esports

Supported titles:

- Valorant
- Counter-Strike 2
- League of Legends
- Dota 2

---

# Planned Features

- Automatic refresh
- Background synchronization
- API response caching
- Retry mechanism
- Error handling
- Offline fallback

---

# Design Principles

## Single Source of Truth

The Zustand store is the only place where application state is stored.

---

## API Independence

UI components must never depend on a specific API provider.

Changing providers should only require updating the service layer.

---

## Data Normalization

Different sports APIs return different response formats.

Each service will normalize its responses into Pulse's shared models before updating the store.

---

# Future Work

Sprint 3

- Select sports API provider
- Implement Football service
- Connect Match Store to live data
- Automatic polling
- Error handling