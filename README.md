# Radaville Studio

A high-end portfolio site for Radaville Studio, an interior design and creative agency. Designed with a focus on refined typography, fluid scroll-driven animations, and a cinematic presentation of work.

## Tech Stack

- **Next.js 16** (App Router)
- **GSAP** + ScrollTrigger — scroll-driven and entrance animations
- **Prismic** — headless CMS
- **Lenis** — smooth scroll
- **Tailwind CSS v4**
- **TypeScript**

## Animation Architecture

Animations follow an imperative handle pattern — each section exposes an `AnimationController` through `useImperativeHandle`, coordinated by a page-level orchestrator context. This keeps animation logic co-located with components while allowing sequenced, controlled entrance choreography across the page.

Scroll-triggered effects use GSAP `ScrollTrigger` with scrub for precise scroll-bound playback.

## Getting Started

```bash
npm install
npm run dev
```
