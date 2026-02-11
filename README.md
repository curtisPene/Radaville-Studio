# Radaville Studio

A modern portfolio website built with Next.js and Prismic CMS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Prismic
- **Animations**: GSAP
- **Fonts**: Old Standard TT, Inter Tight
- **View Transitions**: next-view-transitions

## Features

- **Dynamic Content**: Powered by Prismic CMS for easy content management
- **Smooth Animations**: GSAP-powered text and page transitions with character flip effects
- **Navigation System**: Modal-based navigation with animated transitions
- **Slice-Based Architecture**: Reusable Prismic slices for flexible page layouts
- **Server/Client Separation**: Optimized data fetching with server components and client state

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=
PRISMIC_ACCESS_TOKEN=
```

## Project Structure

- `app/` - Next.js App Router pages and layout
- `components/` - React components (Header, Navigation, UI)
- `features/` - Feature modules (Navigation modal)
- `hooks/` - Custom hooks (animations, state)
- `lib/` - Utilities and services (Prismic fetching)
- `slices/` - Prismic slice components
- `context/` - React context (Navigation state)

## Key Components

- **TransitionLink**: Links with animated character transitions
- **Navigation**: Full-screen modal with slice content
- **SliceZone**: Dynamic Prismic content renderer
- **Header**: Page header with dynamic styling from CMS

## Build

```bash
npm run build
npm start
```
