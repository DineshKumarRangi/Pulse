# 🎨 Pulse UI Guidelines

> Last Updated: July 2026

This document defines the design language for Pulse.

The goal is to create a modern, clean, fast, and consistent user experience across the Chrome Extension, Desktop App, and Web Dashboard.

---

# Design Principles

Pulse UI follows five principles.

- Minimal
- Fast
- Readable
- Consistent
- Accessible

The interface should never distract users from the information they want.

---

# Design Style

Inspired by

- Arc Browser
- Raycast
- Linear
- Notion
- GitHub

Characteristics

- Rounded corners
- Soft shadows
- Smooth animations
- High contrast
- Compact layout

---

# Color Palette

## Primary

```
Blue
#2563EB
```

Used for

- Primary buttons
- Active tabs
- Links

---

## Success

```
Green
#22C55E
```

Used for

- Live indicator
- Positive changes
- Success messages

---

## Warning

```
Orange
#F59E0B
```

Used for

- Match about to begin
- Warning messages

---

## Danger

```
Red
#EF4444
```

Used for

- Errors
- Critical notifications

---

## Background

Light

```
#FFFFFF
```

Dark

```
#0F172A
```

---

## Surface

Light

```
#F8FAFC
```

Dark

```
#1E293B
```

---

## Text

Primary

```
#0F172A
```

Secondary

```
#64748B
```

---

# Typography

Font

```
Inter
```

Fallback

```
sans-serif
```

---

# Font Sizes

| Element | Size |
|----------|------|
| Hero | 32px |
| Heading | 24px |
| Title | 20px |
| Subtitle | 16px |
| Body | 14px |
| Caption | 12px |

---

# Font Weight

| Weight | Usage |
|----------|------|
| 700 | Headings |
| 600 | Titles |
| 500 | Buttons |
| 400 | Body |

---

# Spacing System

Use an 8px spacing system.

```
4px
8px
16px
24px
32px
40px
48px
64px
```

Avoid arbitrary spacing values whenever possible.

---

# Border Radius

| Component | Radius |
|-----------|---------|
| Button | 10px |
| Card | 14px |
| Popup | 18px |
| Modal | 20px |

---

# Shadows

Small

```
0 2px 8px rgba(0,0,0,.08)
```

Medium

```
0 8px 24px rgba(0,0,0,.12)
```

Large

```
0 16px 48px rgba(0,0,0,.18)
```

---

# Buttons

## Primary

Blue background

White text

Rounded corners

---

## Secondary

Gray background

Dark text

---

## Ghost

Transparent

Hover effect only

---

## Icon Button

Square

Centered icon

40x40 pixels

---

# Cards

Cards should include

- Rounded corners
- Soft shadow
- Internal padding
- Hover animation

Example

```
┌────────────────────────┐
│ Arsenal vs Chelsea     │
│ 2 - 1                  │
│ 74'                    │
└────────────────────────┘
```

---

# Match Card

Contains

- Team logos
- Team names
- Score
- Match status
- Tournament

Optional

- Time
- Venue

---

# Icons

Use

- Lucide React

Avoid mixing icon libraries.

---

# Animations

Duration

```
150ms
```

Default

```
ease-out
```

Examples

- Hover
- Fade
- Scale
- Slide

Avoid long animations.

---

# Loading States

Use skeleton loaders instead of spinners whenever possible.

Example

```
████████████

████████████

████████████
```

---

# Empty States

Always explain what the user should do next.

Example

```
No live matches.

Check back later or refresh.
```

---

# Notifications

Use concise messages.

Good

```
⚽ Goal!

Arsenal 2-1 Chelsea
```

Avoid long paragraphs.

---

# Responsive Design

Extension Popup

```
360px × 600px
```

Desktop

Adaptive

Web

Responsive

---

# Accessibility

- Keyboard navigation
- Focus indicators
- Minimum contrast ratio
- Click targets ≥ 44px
- Meaningful labels

---

# Theme Support

Themes

- Light
- Dark
- System

Future

- OLED
- High Contrast

---

# Future UI Components

- Match Card
- Tournament Card
- Notification Toast
- Sidebar
- Floating Widget
- Search Bar
- Tabs
- Statistics Panel

---

# UI Checklist

Before merging a feature, verify:

- Consistent spacing
- Correct typography
- Correct colors
- Responsive layout
- Accessible controls
- Smooth animations
- Reusable components

---

# Conclusion

Every new screen should follow these guidelines to ensure Pulse feels like a single, polished product regardless of platform.