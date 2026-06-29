# Roamly - Travel Itinerary Sharing Platform Foundation

Roamly is a travel itinerary sharing platform where users can discover, create, save, remix, and review real user-generated trips. It is **not** a booking platform. The focus is on day-wise schedules, honest budgets, reality checks, and places people regret missing.

---

## 🚀 Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Database:** MongoDB & Mongoose
- **Authentication:** NextAuth / Auth.js
- **Icons:** Lucide React

---

## 📁 Directory Structure
```text
roamly/
  app/                      # Next.js pages & API routes
    layout.tsx              # Root layout with global navbar/footer
    page.tsx                # Landing page
    globals.css             # Tailwind v4 custom styles & color variables
    explore/                # Browse & filter itineraries
    create/                 # Multi-step creation wizard
    dashboard/              # Personal traveler stats, bookmarks, drafts
    itinerary/[id]/         # Detailed day schedules & reality checks
    profile/[id]/           # Public user traveler bios & badges
    collections/            # Curator folder lists
    login/ & register/      # Form shells
    api/                    # REST endpoints mapping to Mongoose schemas
  components/               # Reusable UI component blocks
    layout/                 # Global Container, Navbar, Footer
    home/                   # Hero, featured listings, and category rows
    itinerary/              # Timelines, budget charts, and comment streams
    explore/                # Search bar & filter sidebars
    create/                 # Multi-step creation panels
    dashboard/              # Tab view list containers
    profile/                # Stats, headers, and badge collections
    shared/                 # Custom Button, Badge, Card UI blocks
  lib/                      # Cached db connectors & configuration constants
  models/                   # Mongoose schemas (User, Itinerary, Comment, etc.)
  types/                    # Core TypeScript models
  data/                     # Rich mock itineraries and destinations
  hooks/                    # Custom React hooks (useAuth, useBookmarks, etc.)
  public/                   # SVG logos & media placeholders
```

---

## 🛠️ Getting Started

### 1. Set Up Environment Variables
Copy `.env.example` to `.env.local` inside the `roamly` directory:
```bash
cp .env.example .env.local
```
Fill out the variables with your local MongoDB connection string, next-auth secrets, and Cloudinary API credentials.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📣 Architectural Features
1. **Unfiltered Reality Checks:** Warns other travelers of crowd peaks, weather realities, safety tips, and hidden pricing traps.
2. **Travel Regret Tracking:** Curates sights travelers skipped or rushed, helping others prioritize.
3. **Mongoose Database Connection:** Ready-to-go connection manager in `lib/db.ts` utilizing connection caching to prevent resource leaks during local hot-reloads.
4. **Custom Tailwind v4 Theme:** Custom sand, orange, teal, and deep-navy properties configured inside `app/globals.css` to deliver a premium travel startup aesthetic.
