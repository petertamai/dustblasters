# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DustBlasters is a Next.js project for a carpet cleaning service based in Peterborough. The project focuses on creating marketing materials (specifically A5 leaflets) targeting elderly customers in Peterborough suburbs. The current codebase is a fresh Next.js installation that will be used to develop React-based leaflet designs.

## Key Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linting
npm run lint
```

The development server runs on http://localhost:3000.

## Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **React**: 19.1.0
- **TypeScript**: Fully configured with strict mode
- **Styling**: Tailwind CSS v4 with PostCSS
- **Font**: Currently uses Geist (to be changed to Poppins per requirements)
- **Icons**: Use Lucide React icons per project requirements

## Project Architecture

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage component
│   ├── globals.css     # Global styles
│   └── favicon.ico     # Site icon
```

## Project-Specific Requirements

### Target Audience
- **Primary**: Elderly residents in Peterborough suburbs/villages
- **Key Concerns**: Safety, trust signals, native UK service providers
- **Format**: A5 leaflet design optimized for print

### Design Requirements
- **Font**: Poppins (not the default Geist)
- **Icons**: Lucide React
- **Focus**: Trust, reliability, quality messaging
- **Trust Signals**: Must be prominent and elder-friendly
- **QR Code**: Placeholder required

### Business Context
- **Company**: DustBlasters carpet & upholstery cleaning
- **Location**: Peterborough
- **USP**: 110+ five-star reviews, family-run, British equipment
- **Phone**: 07547593160
- **Key Messages**: Professional, trusted local team, eco-friendly

## Configuration Notes

- TypeScript paths configured with `@/*` alias pointing to `./src/*`
- ESLint configured with Next.js rules
- Tailwind CSS v4 with PostCSS integration
- Target ES2017 with DOM libraries included

## Content Reference

The `brief.md` file contains comprehensive website content and requirements for leaflet design, including customer testimonials, service descriptions, and trust signals to incorporate into the design.