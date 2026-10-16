# Rohit Jangir Portfolio — Frontend (FE) Setup & Developer Manual

> **Project:** Rohit Jangir Official Portfolio & Corporate Ventures Frontend  
> **Target Audience:** Beginner to Advanced Developers, DevOps & System Administrators  
> **Tech Stack:** React 18, TypeScript, Vite 5, Tailwind CSS, React Router v6, Lucide Icons  
> **Documentation Version:** v1.0.0 (Production Release) — October 2026  
> **PDF Documentation:** [`Rohit_Portfolio_Frontend_Documentation.pdf`](./Rohit_Portfolio_Frontend_Documentation.pdf)

---

## Table of Contents

1. [Document Overview & Executive Summary](#1-document-overview--executive-summary)
2. [Required Software, Tools & Official Download Guide](#2-required-software-tools--official-download-guide)
3. [Step-by-Step Installation for macOS, Windows & Linux](#3-step-by-step-installation-for-macos-windows--linux)
4. [Project Download / Clone & Terminal Navigation](#4-project-download--clone--terminal-navigation)
5. [Project Architecture & Complete Folder Structure](#5-project-architecture--complete-folder-structure)
6. [Configuration & Environment Variables (.env)](#6-configuration--environment-variables-env)
7. [Dependencies & Package Installation](#7-dependencies--package-installation)
8. [Running the Project (Development Server)](#8-running-the-project-development-server)
9. [Database Setup, API Configuration & Testing](#9-database-setup-api-configuration--testing)
10. [Build & Production Setup](#10-build--production-setup)
11. [Production Deployment Instructions](#11-production-deployment-instructions)
12. [Common Errors & Troubleshooting Solutions](#12-common-errors--troubleshooting-solutions)
13. [Comprehensive Troubleshooting & Clean Reinstall](#13-comprehensive-troubleshooting--clean-reinstall)
14. [Final Quality Assurance Verification Checklist](#14-final-quality-assurance-verification-checklist)
15. [Developer Maintenance & Extension Guidelines](#15-developer-maintenance--extension-guidelines)

---

## 1. Document Overview & Executive Summary

The **Rohit Jangir Portfolio & Corporate Platform** frontend application is an enterprise-grade, high-performance Single Page Application (SPA). It is built with **React 18**, **TypeScript**, **Vite 5**, and **Tailwind CSS**.

The platform showcases the business ventures, investments, mentorship offerings, and case studies of **Rohit Jangir**, including:
* **Aronix Web Tech**: Digital technology solutions, software engineering, and web development.
* **Aaru Mobility**: Sustainable mobility and fleet operations.
* **Aaru Developers**: Real estate and commercial infrastructure development.
* **Aaru Care Foundation**: Philanthropic and community relief initiatives.

This guide provides a complete **zero-to-advanced, step-by-step setup manual** so that any developer—regardless of experience level—can install, configure, develop, test, and deploy the application without hurdles.

---

## 2. Required Software, Tools & Official Download Guide

To run and contribute to the frontend codebase, install the following official tools:

| Software / Tool | Recommended Version | Google Search Query | Official Download Link | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Node.js & npm** | v18.x or v20.x LTS | `download nodejs lts` | [nodejs.org/en/download](https://nodejs.org/en/download) | JavaScript runtime & package manager |
| **Git SCM** | v2.40+ or latest | `download git scm` | [git-scm.com/downloads](https://git-scm.com/downloads) | Source control to clone and version code |
| **Visual Studio Code** | Latest Stable | `download vs code` | [code.visualstudio.com](https://code.visualstudio.com/) | Recommended IDE with TypeScript tooling |
| **Google Chrome** | Latest Stable | `download google chrome` | [google.com/chrome](https://www.google.com/chrome/) | Browser with mobile viewport emulation |
| **Postman** (Optional) | Latest Desktop | `download postman` | [postman.com/downloads](https://www.postman.com/downloads/) | Standalone HTTP API testing tool |

### Recommended VS Code Extensions:
* **Tailwind CSS IntelliSense** (by Tailwind Labs): Class autocomplete and linting.
* **ESLint** (by Microsoft): Code style checks and hook violation warnings.
* **Prettier - Code formatter**: Automatic formatting on save.
* **PostCSS Language Support**: Syntax highlighting for custom CSS directives.

---

## 3. Step-by-Step Installation for macOS, Windows & Linux

### A. macOS
1. Visit [nodejs.org](https://nodejs.org) and download the **macOS Installer (`.pkg`)** for Apple Silicon (`arm64`) or Intel.
2. Double-click the downloaded `.pkg` file and follow the installer wizard.
3. Open **Terminal** (`Cmd + Space` -> type `Terminal`) and verify:
   ```bash
   node -v
   npm -v
   git --version
   ```

### B. Windows
1. Download the **Windows Installer (`.msi`) 64-bit** from [nodejs.org](https://nodejs.org).
2. Run the `.msi` wizard. Under **Custom Setup**, ensure **"Add to PATH"** is selected.
3. Download Git for Windows from [git-scm.com](https://git-scm.com). Run the installer and choose "Git from the command line and also from 3rd-party software".
4. Open **PowerShell** (`Win + R` -> type `powershell`) and verify:
   ```powershell
   node -v
   npm -v
   git --version
   ```

### C. Linux (Ubuntu / Debian)
Run these commands in your bash terminal:
```bash
# 1. Update package lists and install curl & git
sudo apt update && sudo apt install -y curl git

# 2. Add NodeSource repository for Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# 3. Install Node.js
sudo apt install -y nodejs

# 4. Verify installation
node -v && npm -v && git --version
```

---

## 4. Project Download / Clone & Terminal Navigation

### Step 1: Open Terminal & Choose Directory
```bash
# Navigate to your preferred workspace (e.g. Desktop)
cd ~/Desktop
```

### Step 2: Clone Repository
```bash
# Clone the project repository
git clone https://github.com/Aronixwebtech001/Rohit_Portfolio_FE.git

# Enter the project directory
cd Rohit_Portfolio_FE
```

### Step 3: Open in VS Code
```bash
# Launch VS Code with the current directory as workspace
code .
```

---

## 5. Project Architecture & Complete Folder Structure

```
Rohit_Portfolio_FE/
├── index.html                   # HTML entry point (SEO metadata, typography links, viewport)
├── package.json                 # Dependencies, project scripts, and package manifests
├── package-lock.json            # Exact dependency version lock file
├── vite.config.ts               # Vite bundler configuration & React plugin
├── tailwind.config.js           # Design system tokens (colors: navy, accent; custom fonts & keyframes)
├── postcss.config.js            # PostCSS configuration with Tailwind and Autoprefixer
├── tsconfig.json                # TypeScript project configuration
├── tsconfig.app.json            # Application-level TypeScript strict options
├── public/                      # Static unbundled assets (icons.svg, favicon)
└── src/
    ├── main.tsx                 # React DOM mount point (renders App in #root)
    ├── App.tsx                  # Client-side router declarations (React Router v6)
    ├── index.css                # Global CSS, Tailwind directives, reveal animations & mobile touch rules
    ├── assets/                  # Bundled assets (brand images, portraits, responsive cutouts)
    ├── components/              # Modular component hierarchy:
    │   ├── Home/                # HeroSection, PartnerLogos, WhyChooseUs, PartnershipsSection,
    │   │                        # CaseStudiesSection, TestimonialsSection
    │   ├── About/               # ProfileHero, BioSection, MediaImpactSection, QuoteBanner,
    │   │                        # JourneyTimeline, ExpertiseSection
    │   ├── Ventures/            # VenturesHero, VenturesDiagram, PortfolioStats, MissionVision
    │   ├── Investor/            # InvestorHero, InvestmentThesis, HowToInvest, InvestorForm
    │   ├── Mentorship/          # MentorshipHero, TopicsSection, MentorshipCalendar, PricingPackages
    │   ├── Pitch/               # PitchHero, WhatILookFor, PitchForm
    │   ├── CaseStudy/           # CaseStudyHero, StatsSection, ClientLogosGrid, FAQSection
    │   ├── Resources/           # ResourcesHero, ArticlesGrid
    │   └── shared/              # Navbar, Footer, Layout, ScrollReveal, ConnectModal, Button
    ├── features/                # Domain-specific API client services:
    │   ├── investor/            # api.investor.ts (POST /investors), types.investor.ts
    │   ├── pitch/               # api.pitch.ts (POST /pitch/submit), types.pitch.ts
    │   └── subscribe/           # api.subscribe.ts (POST /subscribe), types.subscribe.ts
    ├── lib/
    │   └── api.ts               # Generic fetch wrapper with baseUrl & error parsing
    ├── pages/                   # Top-level page views mapped in App.tsx
    └── types/                   # Shared TypeScript interfaces & types
```

---

## 6. Configuration & Environment Variables (.env)

Vite uses `.env` files. Only variables with the `VITE_` prefix are bundled into client-side code.

### Step 1: Create `.env`
In the project root (`Rohit_Portfolio_FE/`), create a `.env` file:
```bash
# macOS / Linux
cp .env.example .env 2>/dev/null || touch .env

# Windows (PowerShell)
if (!(Test-Path .env)) { New-Item -ItemType File -Name .env }
```

### Step 2: Configure Keys
```env
# Backend API Base URL
VITE_API_URL=http://localhost:5000/api/v1

# Environment Mode
VITE_APP_ENV=development

# Cloudinary Assets Base
VITE_CLOUDINARY_BASE=https://res.cloudinary.com/dqfuozgjq
```

---

## 7. Dependencies & Package Installation

Execute the installation inside the project root:
```bash
# Where to run: inside Rohit_Portfolio_FE/
npm install
```

### Core Dependencies Overview:
* `react` & `react-dom` (`^18.3.1`): Virtual DOM UI engine.
* `react-router-dom` (`^6.26.2`): Client-side routing across 12+ pages.
* `lucide-react` (`^1.33.0`): Clean vector icons.
* `react-countup` (`^6.5.3`): Animated statistics counters.
* `react-intersection-observer` (`^11.0.1`): Scroll detection for smooth reveal effects.
* `vite` (`^5.4.2`): Instant dev server with ES module HMR and Rollup bundler.
* `tailwindcss` (`^3.4.10`): Utility CSS framework.
* `typescript` (`^5.5.4`): Strict compile-time type safety.

---

## 8. Running the Project (Development Server)

Start the local development server:
```bash
npm run dev
```

### Expected Output:
```
  VITE v5.4.2  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Development Server Commands:
* **Open in browser:** Visit `http://localhost:5173`
* **Test on mobile phone over Wi-Fi:** `npm run dev -- --host`
* **Specify custom port:** `npm run dev -- --port 3000`
* **Stop server:** Press `Ctrl + C`

---

## 9. Database Setup, API Configuration & Testing

### Architecture
The frontend application connects to a backend REST API using the fetch wrapper in `src/lib/api.ts`. Database operations (MongoDB / PostgreSQL) are handled by the backend server.

### Available REST Endpoints:
1. **Investor Application:** `POST /investors` (`src/features/investor/api.investor.ts`)
2. **Pitch Submission:** `POST /pitch/submit` (`src/features/pitch/api.pitch.ts`)
3. **Newsletter Subscription:** `POST /subscribe` (`src/features/subscribe/api.subscribe.ts`)

### Terminal API Verification (cURL):
```bash
# 1. Test Investor Application
curl -X POST "http://localhost:5000/api/v1/investors" \
     -H "Content-Type: application/json" \
     -d '{"name":"Jane Doe","email":"jane@investor.com","ticketSize":"$100K-$250K","message":"Interested in mobility."}'

# 2. Test Pitch Submission
curl -X POST "http://localhost:5000/api/v1/pitch/submit" \
     -H "Content-Type: application/json" \
     -d '{"founderName":"John Smith","email":"john@startup.com","startupName":"Aaru Logistics","stage":"Seed"}'

# 3. Test Newsletter Subscription
curl -X POST "http://localhost:5000/api/v1/subscribe" \
     -H "Content-Type: application/json" \
     -d '{"email":"subscriber@example.com"}'
```

---

## 10. Build & Production Setup

Compile the project into minified static assets:
```bash
# Type check and build bundle
npm run build
```

The compiled output is saved in the `dist/` directory.

### Preview Production Build Locally:
```bash
npm run preview
```
Opens a local preview server on `http://localhost:4173`.

---

## 11. Production Deployment Instructions

### A. Vercel Deployment (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) -> **Add New Project** -> Select repository.
3. Settings: Framework = **Vite**, Build Command = `npm run build`, Output Directory = `dist`.
4. Add Environment Variable: `VITE_API_URL` = `<your-production-backend-url>`.
5. Click **Deploy**.

### B. Netlify Deployment
Create `public/_redirects`:
```
/*    /index.html   200
```
Deploy via Netlify Dashboard or CLI: `netlify deploy --prod --dir=dist`.

### C. Ubuntu / Nginx Web Server
Upload `dist/` to `/var/www/rohit-portfolio/` and use this server block:
```nginx
server {
    listen 80;
    server_name rohitjangir.com www.rohitjangir.com;
    root /var/www/rohit-portfolio;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 12. Common Errors & Troubleshooting Solutions

| Error / Symptom | Root Cause | Step-by-Step Solution |
| :--- | :--- | :--- |
| `Port 5173 is in use` | Another Vite process is already running. | Vite will automatically use 5174. To kill process: `lsof -i :5173` then `kill -9 <PID>`. |
| `VITE_API_URL is undefined` | Missing `.env` file or dev server was not restarted. | Create `.env`, verify variable starts with `VITE_`, and restart server (`npm run dev`). |
| `Cannot find module ...` | Dependencies not installed. | Run `npm install` in project root directory. |
| `CORS Error: No Access-Control-Allow-Origin` | Backend server not allowing frontend origin. | In backend CORS middleware, add `http://localhost:5173` to `allow_origins`. |
| `404 Not Found on page refresh` | Server attempting to serve subroute as directory. | Add SPA fallback rewrite rule (`try_files $uri $uri/ /index.html;`). |
| `Horizontal scroll on mobile` | Offscreen animation translations. | Already solved: `index.css` applies `overflow-x: clip` and maps mobile reveals to `translateY`. |

---

## 13. Comprehensive Troubleshooting & Clean Reinstall

If you ever experience corrupted modules or stale build caches:
```bash
# 1. Stop development server (Ctrl + C)

# 2. Delete dependencies, locks, and caches
rm -rf node_modules package-lock.json dist .vite

# 3. Force clean npm cache
npm cache clean --force

# 4. Reinstall all packages fresh
npm install

# 5. Verify build compiles cleanly
npm run build

# 6. Start development server
npm run dev
```

---

## 14. Final Quality Assurance Verification Checklist

- [x] **Node.js Environment:** Node &ge; v18.0.0 and npm &ge; 9.0.0 verified.
- [x] **Dev Server Launch:** `npm run dev` boots cleanly with zero terminal errors.
- [x] **Client-Side Routing:** Home, About, Ventures, Investor, Mentorship, Pitch, CaseStudy, Resources routes navigate without full page reloads.
- [x] **Video Playback:** "Why we're the right choice" video streams instantly at 1.9MB with streaming poster frame.
- [x] **Responsive Carousel:** Case Studies carousel displays 1 card on mobile with bottom arrows/dots and touch swipe support.
- [x] **Card Spacing:** Partnerships section white card top padding is spacious (48px) with clean breathing room.
- [x] **Quote Banner:** About page quote banner displays Rohit's portrait centered in the background with crisp left-aligned text.
- [x] **Zero Horizontal Scroll:** Mobile viewports (375px, 390px, 414px) have strictly vertical scrolling.
- [x] **Production Build:** `npm run build` compiles with 0 errors in under 5 seconds.

---

## 15. Developer Maintenance & Extension Guidelines

### Adding a New Page:
1. Create page component: `src/pages/NewPage.tsx`.
2. Register route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation links in `src/components/shared/Navbar.tsx` and `Footer.tsx`.

### Updating Brand Design Tokens:
All theme tokens are defined in `tailwind.config.js`:
```javascript
colors: {
  navy: { DEFAULT: "#1C323A", dark: "#0F1B21", light: "#2a4b56" },
  accent: { DEFAULT: "#485E68", dark: "#3A4B53" },
  cream: "#F9FBFB",
  card: "#EDF0F0",
  gold: "#D4A643",
}
```

---

**Documentation Maintained by:** Aronix Web Tech Engineering Team  
**Official Website:** [https://aronixwebtech.com/](https://aronixwebtech.com/)  
**Support:** contact@aronixwebtech.com
