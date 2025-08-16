# TW-Mini-App

A modern React + TypeScript mini-application for Warzone tournaments.

## Project Structure

```
TW-Mini-App/
├── README.md
└── warzone-tournaments-miniapp/
    └── apps/
        └── frontend/           # React + TypeScript + Vite application
            ├── public/         # Static assets
            ├── src/            # Source code
            │   ├── assets/     # Application assets
            │   ├── App.tsx     # Main application component
            │   ├── main.tsx    # Application entry point
            │   └── index.css   # Global styles with Tailwind CSS
            ├── package.json    # Dependencies and scripts
            ├── vite.config.ts  # Vite configuration
            ├── tailwind.config.ts # Tailwind CSS configuration
            └── tsconfig.json   # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
cd warzone-tournaments-miniapp/apps/frontend
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Features

- Modern React with hooks
- TypeScript for type safety
- Hot module replacement (HMR)
- Optimized production builds
- Responsive design with Tailwind CSS
- Dark mode support
- Component-based architecture