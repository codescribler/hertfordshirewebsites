# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Git Operations
- This project uses git with the main branch being `master`
- There are helper scripts for git setup: `setup-git.bat` and `setup-git.ps1`

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom component library
- **Database**: Supabase (PostgreSQL)
- **Analytics**: Vercel Analytics + Google Analytics
- **Deployment**: Likely Vercel (based on presence of Vercel Analytics)

### Project Structure

#### Core Directories
- `/app` - Next.js App Router pages and API routes
  - Dynamic routing for services and locations
  - API webhook forwarder at `/api/webhook-forwarder`
- `/components` - React components organized by feature
  - `/analytics` - Analytics tracking components
  - `/home` - Homepage sections (Hero, Services, Testimonials, etc.)
  - `/layout` - Header and Footer
  - `/schema` - SEO structured data components
  - `/services` - Service page templates
  - `/locations` - Location page templates
  - `/ui` - Reusable UI components (Button, Container, Section)
- `/lib` - Core utilities and data
  - `services.ts` - Service definitions and business logic
  - `locations.ts` - Location/geographic data
  - `service-locations.ts` - Service-location mapping
  - `supabase.ts` - Database client
  - `types.ts` - TypeScript type definitions
- `/public` - Static assets (images, PDFs, robots.txt, sitemap.xml)

### Routing Pattern

The site uses a sophisticated dynamic routing structure:
- `/services/[service]/[location]/page.tsx` - Service pages with optional location
- `/locations/[location]/page.tsx` - Location-specific pages
- Service redirects configured for British spelling (optimisation vs optimization)

### Key Business Features
1. **Multi-location SEO**: Programmatic generation of location-specific service pages
2. **Service Packages**: Three tiers (Herts Essentials, Professional, Growth)
3. **Lead Generation**: Contact forms, discovery calls, ROI calculator
4. **Content Marketing**: Blog posts, resource guides, downloadable checklists
5. **Local Business Schema**: Structured data for local SEO

### Database Schema
- Supabase tables defined in `supabase-schema.sql`
- Schema updates tracked in `supabase-schema-update.sql`

### Important Configuration
- ESLint errors are ignored during builds (see next.config.mjs)
- Images optimized with AVIF/WebP formats
- Comprehensive redirect rules for location/service variations

## Development Notes

### When Working with Services
- Service data is centralized in `/lib/services.ts`
- Each service has: slug, title, description, features, benefits, FAQs, and pricing
- Service pages use templates from `/components/services/`

### When Working with Locations
- Location data is in `/lib/locations.ts`
- Locations include nearby areas for SEO purposes
- Dynamic generation of location-specific content

### SEO Considerations
- Schema markup components in `/components/schema/`
- Meta tags configured in layout.tsx
- Local business structured data
- British spelling variants handled via redirects

### Form Handling
- Contact forms integrate with backend (likely Supabase)
- Google CAPTCHA implemented for spam protection
- Discovery call scheduling functionality