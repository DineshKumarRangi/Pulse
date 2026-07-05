# 🌐 Pulse API Documentation

> Last Updated: July 2026

This document defines the REST API and WebSocket communication used by Pulse.

---

# API Information

Base URL (Development)

```
http://localhost:3000/api
```

Base URL (Production)

```
https://api.pulse.app
```

Current Version

```
v1
```

---

# Response Format

Every response follows the same structure.

Success

```json
{
  "success": true,
  "data": {}
}
```

Failure

```json
{
  "success": false,
  "message": "Something went wrong."
}
```

---

# Health Check

## GET

```
/health
```

Purpose

Verify that the backend is running.

Response

```json
{
  "status": "ok",
  "version": "0.1.0"
}
```

---

# Live Matches

## GET

```
/matches/live
```

Purpose

Returns all currently live matches.

Response

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "sport": "football",
      "tournament": "Premier League",
      "homeTeam": {
        "name": "Arsenal"
      },
      "awayTeam": {
        "name": "Chelsea"
      },
      "score": {
        "home": 2,
        "away": 1
      },
      "status": "LIVE",
      "minute": 74
    }
  ]
}
```

---

# Upcoming Matches

## GET

```
/matches/upcoming
```

Purpose

Returns scheduled matches.

---

# Finished Matches

## GET

```
/matches/finished
```

Purpose

Returns completed matches.

---

# Match Details

## GET

```
/matches/:id
```

Purpose

Returns detailed match information.

Example

```
/matches/123
```

Response

```json
{
  "success": true,
  "data": {
    "id": "123",
    "sport": "football",
    "events": []
  }
}
```

---

# Match Events

## GET

```
/matches/:id/events
```

Purpose

Returns timeline events.

Example

```json
[
  {
    "minute": 14,
    "type": "GOAL",
    "team": "Arsenal"
  }
]
```

---

# Supported Sports

## GET

```
/sports
```

Response

```json
[
    "football",
    "cricket",
    "basketball",
    "formula1",
    "valorant",
    "cs2",
    "lol",
    "dota2"
]
```

---

# User Settings

## GET

```
/settings
```

Returns

- Favorite teams
- Favorite sports
- Theme
- Notifications

---

## PUT

```
/settings
```

Updates user settings.

---

# Notifications

## GET

```
/notifications
```

Returns notification history.

---

# Search

## GET

```
/search?q=arsenal
```

Searches

- Teams
- Players
- Tournaments

---

# WebSocket

Endpoint

```
ws://localhost:3000
```

Purpose

Real-time updates.

---

## Event

```
match:update
```

Example

```json
{
    "id":"1",
    "score":{
        "home":2,
        "away":2
    }
}
```

---

## Event

```
goal
```

Example

```json
{
    "team":"Arsenal",
    "minute":81
}
```

---

## Event

```
match:start
```

---

## Event

```
match:end
```

---

# HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# Error Response

```json
{
    "success":false,
    "message":"Match not found."
}
```

---

# Authentication

Current Version

No authentication.

Future

JWT Authentication

OAuth

Google Login

GitHub Login

---

# Rate Limiting

Future

100 requests/minute

---

# API Versioning

Current

```
v1
```

Future

```
v2
```

Breaking changes will only occur in new versions.

---

# Future Endpoints

```
/players

/teams

/tournaments

/rankings

/statistics

/highlights

/ai-summary

/bookmarks
```

---

# API Principles

- RESTful
- Predictable responses
- Consistent error handling
- Versioned endpoints
- Typed responses
- Fast (<200ms average)

---

# Backend Workflow

```
Sports APIs

↓

Normalize Data

↓

Cache

↓

REST API

↓

WebSocket

↓

Extension
```

---

# Notes

This document serves as the contract between the frontend and backend.

Any breaking API changes must be reflected here before implementation.