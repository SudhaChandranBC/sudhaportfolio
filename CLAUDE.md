# CLAUDE.md

## Project Overview

This is a **Next.js portfolio website** for Sudha Chandran BC, an iOS Developer at Rakuten Inc, Tokyo. The site features a dark, modern aesthetic with a focus on showcasing professional experience, projects, and skills.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.4
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.19
- **Deployment**: Vercel

## Project Structure

```
app/
├── layout.tsx          # Root layout with Navigation and Footer
├── page.tsx            # Home page with Hero section
├── globals.css         # Global styles, Tailwind imports
├── about/
│   └── page.tsx        # About page with Experience, Skills, Awards
├── contact/
│   └── page.tsx        # Contact page
└── work/
    └── page.tsx        # Projects showcase

components/
├── Navigation.tsx      # Fixed navbar with scroll effects
├── Footer.tsx          # Site footer
└── sections/
    └── Hero.tsx        # Hero section component

public/                 # Static assets
```

## Design System

### Colors
- **Background**: `#0a0a0b` (near-black)
- **Primary/Accent**: `#10b981` (emerald-500)
- **Secondary Accent**: `#3b82f6` (blue-500)
- **Text**: White with neutral-400 for secondary text
- **Borders**: `white/10` (subtle white borders)

### Visual Style
- Dark theme with glassmorphism effects (`backdrop-blur-xl`)
- Custom scrollbar styling
- Hover animations with emerald accent underline
- Smooth transitions (`duration-300`)

## Key Conventions

### Path Aliases
- Use `@/` prefix for imports (e.g., `@/components/Navigation`)

### Component Patterns
- Use `'use client'` for client-side interactivity (theme toggle, scroll effects)
- Server components by default for static content

### Styling Patterns
- Tailwind utility classes
- Custom animations defined in `tailwind.config.ts`:
  - `fade-in`: Fade in animation
  - `slide-up`: Slide up with fade

### Navigation Structure
- Fixed position navbar
- Links: About, Experience, Projects, Skills, Awards, Contact
- Scroll-triggered background blur effect

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Configured for Vercel deployment with:
- Build command: `npm run build`
- Dev command: `npm run dev`
- Framework: Next.js

## Notes for AI Assistants

- Keep the dark aesthetic consistent across new pages
- Use existing emerald/emerald-500 accent color for CTAs and highlights
- Maintain glassmorphism effects with `backdrop-blur` and `bg-white/5`
- Follow the existing animation patterns from tailwind.config.ts
- Test responsive behavior - mobile menu may need implementation
