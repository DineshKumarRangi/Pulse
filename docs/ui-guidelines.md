# 🎨 Pulse UI Guidelines

## Overview

Pulse follows a clean, modern, and sports-focused design language.

The primary goals are:

- Fast information scanning
- Minimal visual clutter
- Consistent spacing
- Reusable components
- Dark-first experience
- Responsive Chrome Extension popup

---

# Design Principles

## Simplicity

Every screen should prioritize the most important information.

Example:

- League
- Teams
- Score
- Match Status

Everything else is secondary.

---

## Consistency

Spacing, typography, colors, and components should remain consistent across the application.

No component should introduce its own design language.

---

## Reusability

Every UI element should be reusable.

Current reusable components:

- Button
- Card
- Badge

Current feature components:

- MatchCard
- LeagueSection
- Header

Future components:

- Bottom Navigation
- Search Bar
- Team Logo
- Live Indicator
- Notification Card

---

# Theme

## Primary

```
#2563EB
```

## Primary Hover

```
#1D4ED8
```

## Success

```
#22C55E
```

## Warning

```
#F59E0B
```

## Danger

```
#EF4444
```

## Background

```
#0F172A
```

## Surface

```
#1E293B
```

## Border

```
#334155
```

---

# Typography

| Type | Size | Weight |
|------|------|--------|
| Heading | 24px | 700 |
| Title | 18px | 600 |
| Subtitle | 16px | 500 |
| Body | 14px | 400 |
| Caption | 12px | 400 |

---

# Border Radius

| Token | Value |
|--------|-------|
| Small | 8px |
| Medium | 12px |
| Large | 16px |
| Full | 9999px |

---

# Spacing

| Token | Value |
|--------|-------|
| XS | 4px |
| SM | 8px |
| MD | 12px |
| LG | 16px |
| XL | 20px |
| 2XL | 24px |
| 3XL | 32px |
| 4XL | 40px |
| 5XL | 48px |

---

# Shadows

Small

```
0 2px 6px rgba(0,0,0,.15)
```

Medium

```
0 6px 20px rgba(0,0,0,.25)
```

---

# CSS Strategy

Pulse uses **CSS Modules**.

Reasons:

- Scoped styles
- No global conflicts
- Better maintainability
- Easier component reuse

Each component should have:

```
Component/
├── Component.tsx
├── Component.module.css
└── index.ts
```

---

# Component Guidelines

## UI Components

Reusable and independent.

Examples:

- Button
- Card
- Badge

These should not contain sports-specific logic.

---

## Feature Components

Domain-specific components.

Examples:

- MatchCard
- LeagueSection
- Header

These may use application state and business models.

---

# Layout Guidelines

Application hierarchy:

```
Header

↓

Page

↓

League Section

↓

Match Card

↓

Actions
```

---

# Accessibility

Every interactive element should:

- Be keyboard accessible
- Include meaningful labels
- Have visible hover and focus states
- Maintain sufficient color contrast

---

# Future Improvements

- Lucide React icons
- Light theme
- Responsive layouts
- Animation system
- Skeleton loading states
- Team logos
- Sport-specific icons