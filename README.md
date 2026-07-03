# ⚡ Pulse

> **One place for every score. Every sport. Everywhere.**

Pulse is a modern cross-platform application that provides **real-time sports and esports scores** through a Chrome extension, desktop companion, and web dashboard.

Instead of switching between multiple websites or apps, Pulse keeps live scores, match events, and notifications accessible wherever you are.

---

## ✨ Vision

The goal of Pulse is to become the **universal sports companion** for fans by bringing live updates directly to their workflow.

Whether you're coding, studying, working, or browsing, Pulse keeps you informed without interrupting your activity.

---

## 🚀 Features (Planned)

- ⚽ Live Football Scores
- 🏏 Cricket Matches
- 🏀 Basketball
- 🏎 Formula 1
- 🎮 Esports (Valorant, CS2, LoL, Dota 2)
- 🔔 Real-time Notifications
- 📊 Match Statistics
- 📌 Floating Browser Overlay
- 🖥 Desktop Companion
- 🤖 AI Match Summaries

---

# 🏗 Architecture

```
                   Sports APIs
                        │
                        ▼
                Pulse Backend API
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
     Chrome Extension         Desktop App
            │                       │
            └───────────┬───────────┘
                        ▼
                 Shared Packages
```

---

# 📁 Project Structure

```
pulse/
│
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
├── pnpm-workspace.yaml
└── package.json
```

---

# 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CRXJS

### Backend

- Express
- Node.js

### Monorepo

- pnpm Workspace
- TurboRepo

### Styling

- Tailwind CSS *(coming soon)*

### State Management

- Zustand *(planned)*

---

# 📅 Development Roadmap

### ✅ Sprint 1

- Monorepo
- TurboRepo
- React
- Chrome Extension Setup

### 🚧 Sprint 2

- Popup UI
- Design System
- Mock Match Data

### Upcoming

- Backend API
- Live Sports APIs
- Notifications
- Browser Overlay
- Desktop Companion

---

# 🚀 Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
pnpm install
```

Run development

```bash
pnpm dev
```

Build

```bash
pnpm build
```

---

# 📚 Documentation

Additional documentation is available inside the `docs/` directory.

- Architecture
- Roadmap
- Engineering Decisions
- API Documentation
- UI Guidelines

---

# 🤝 Contributing

This project is currently under active development.

Contribution guidelines will be added in a future release.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Dinesh Kumar Rangi**

Building **Pulse** to make following sports effortless.
