# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 digital marketing website for "Bird" - a marketing and development studio. The site is built with TypeScript, Tailwind CSS, and Framer Motion animations, featuring custom UI components and interactive demos.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Structure

### Core Framework
- **Next.js 14** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** with custom animations and configurations
- **Framer Motion** for complex animations and transitions

### Component Architecture

**UI Components (`/components/ui/`)**
- Base UI components following shadcn/ui patterns
- Custom components like FloatingNavBar, shooting-stars, sparkles
- Reusable button, card, and tab components

**Magic UI Components (`/components/magicui/`)**
- Animated components for visual effects (animated-beam, blur-fade, box-reveal)
- Advanced animation components using Framer Motion
- Word animations (word-fade-in, word-pull-up)

**Demo Components (`/components/demos/`)**
- Showcase components that demonstrate Magic UI capabilities
- Each demo wraps a Magic UI component with specific configurations

### Page Structure
- **App Router**: Uses the new Next.js 13+ app directory structure
- **Route Segments**: `/hero`, `/meeting`, `/pricing`, `/showcase`, `/videos`
- **Layout**: Global layout in `app/layout.tsx` with Space Grotesk font and Vercel Analytics

### Key Features
- **Multi-language content**: Spanish language marketing site
- **Scroll-based interactions**: Uses react-scroll for smooth navigation
- **Calendly integration**: For meeting scheduling
- **Responsive design**: Mobile-first approach with breakpoint-specific layouts
- **Custom animations**: Tailwind animations for shimmer, shine, and scroll effects

### Data Management
- **Static data**: Centralized in `/data/index.ts` for navigation items
- **Services data**: Hardcoded in main page component for marketing services

### Styling Approach
- **Tailwind CSS**: Utility-first with custom theme extensions
- **CSS Variables**: For consistent color theming
- **Animation system**: Custom keyframes and animations in tailwind.config.ts
- **Component variants**: Using class-variance-authority for component styling

### Assets Organization
- **Images**: Static assets in `/public/images/` and `/public/icons/`
- **Logo**: Brand assets in `/public/logo/`
- **Videos**: MP4 files for background animations

## Development Patterns

### Component Patterns
- Use "use client" directive for client-side interactivity
- Ref forwarding for animated components
- TypeScript interfaces for component props
- Framer Motion for complex animations

### Animation System
- Custom Tailwind animations defined in config
- Framer Motion for component-level animations
- SVG-based animated beams and effects
- Scroll-based velocity animations

### Navigation System
- Floating navigation with scroll detection
- Smooth scrolling between sections using react-scroll
- Mobile-responsive hamburger menu
- Mixed routing (Next.js routes + scroll anchors)

## File Locations

- **Main page**: `app/page.tsx` - Landing page with all marketing sections
- **Global styles**: `app/globals.css` - Tailwind imports and custom styles
- **Configuration**: `tailwind.config.ts`, `next.config.mjs`, `tsconfig.json`
- **Utilities**: `lib/utils.ts` - Common utility functions
- **Types**: `next-env.d.ts` - Next.js type definitions