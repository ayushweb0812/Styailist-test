# Styailist Landing Page

A modern, high-performance landing page for **Styailist AI**, showcasing its capability to match shoppers with the perfect products from your catalogue instantly.

## Tech Stack

- **React 19**
- **Vite** — blazing fast frontend build tool
- **TanStack Start & Router** — routing and app foundation
- **Tailwind CSS v4** — utility-first styling with modern features
- **Framer Motion** — fluid, performant animations
- **Radix UI** — accessible, unstyled UI primitives
- **Lucide React** — consistent, clean icon set

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v22+ recommended) and `npm` or `bun` installed.

### Installation

1. Navigate to the project directory:

   ```bash
   cd "Style Showcase (1)"
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Running Locally

Start the Vite development server:

```bash
npm run dev
# or
bun run dev
```

Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`).

### Production Build

To build the app for production:

```bash
npm run build
```

To preview the built app:

```bash
npm run preview
```

---

## Project Structure

```
Style Showcase (1)/
├── src/
│   ├── assets/           # Images, fonts, and static assets
│   ├── components/
│   │   ├── site/         # Core landing page sections (Hero, Nav, Struggles, etc.)
│   │   └── ui/           # Reusable UI components (Radix + Tailwind)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions (e.g., class merging)
│   ├── routes/           # TanStack file-based routing
│   │   ├── __root.tsx    # Root layout template
│   │   └── index.tsx     # Main landing page assembling site components
│   └── styles.css        # Global CSS and Tailwind directives
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind themes and utilities
└── components.json       # UI component configuration
```

## Features & Highlights

- **Dynamic Typography:** Uses high-impact display fonts paired with clean sans-serif body text.
- **Scroll Animations:** Integrated `framer-motion` for buttery smooth reveal effects as the user scrolls down the page.
- **Glowing Elements:** Custom neon shadows and blur effects that match the Styailist AI brand identity.
- **Modular Sections:** The landing page is split into distinct components (`Hero`, `Struggles`, `Problem`, `HowItWorks`, `Pricing`) allowing for easy maintenance and A/B testing.