import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from pdf_builder_core import (
    NumberedCanvas, create_styles, build_banner, make_callout, make_code_box,
    PRIMARY_NAVY, PRIMARY_NAVY_DARK, ACCENT_SLATE, ACCENT_GOLD,
    BORDER_COLOR, BG_LIGHT, TEXT_DARK, TEXT_MUTED
)

def build_pdf(filename="Rohit_Portfolio_Frontend_Documentation.pdf"):
    styles = create_styles()
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )
    story = []

    # ═════════════════════════════════════════════════════════════════════════
    # COVER / HEADER BANNER
    # ═════════════════════════════════════════════════════════════════════════
    story.append(build_banner(styles))
    story.append(Spacer(1, 14))

    # ═════════════════════════════════════════════════════════════════════════
    # 1. DOCUMENT OVERVIEW & EXECUTIVE SUMMARY
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("1. Document Overview & Executive Summary", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "Welcome to the official developer and administrator setup guide for the <b>Rohit Jangir Portfolio &amp; Corporate Platform</b> frontend application. "
        "This project is a modern, high-performance, responsive Single Page Application (SPA) engineered with <b>React 18</b>, <b>TypeScript</b>, "
        "<b>Vite 5</b>, and <b>Tailwind CSS</b>.",
        styles['Body']
    ))
    story.append(Paragraph(
        "The web application showcases the entrepreneurial ventures, investment portfolio, mentorship initiatives, and case studies of <b>Rohit Jangir</b>, "
        "including companies such as Aronix Web Tech, Aaru Mobility, Aaru Developers, and the Aaru Care Foundation. "
        "This manual is formatted as an end-to-end <b>zero-to-advanced, step-by-step developer guide</b>. "
        "Whether you are setting up the project on a brand-new computer or preparing for a production deployment on cloud infrastructure, "
        "every required tool, terminal command, configuration file, and verification procedure is documented below.",
        styles['Body']
    ))
    story.append(make_callout(
        "Every terminal command in this guide specifies exactly <b>what it does</b> and <b>in which directory to execute it</b>. "
        "Always verify prerequisites before running the project commands.",
        styles, title="KEY INSTRUCTION:"
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 2. REQUIRED SOFTWARE, TOOLS & GOOGLE SEARCH DOWNLOAD GUIDE
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("2. Required Software, Tools & Official Download Guide", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "To build and run the frontend application, the following tools must be installed on your development machine. "
        "Follow the search instructions below to download the official installers from Google or your search engine of choice:",
        styles['Body']
    ))

    tools_data = [
        [
            Paragraph("<b>Software / Tool</b>", styles['TableHeader']),
            Paragraph("<b>Recommended Version</b>", styles['TableHeader']),
            Paragraph("<b>Google Search Query</b>", styles['TableHeader']),
            Paragraph("<b>Official Download URL &amp; Purpose</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<b>Node.js &amp; npm</b>", styles['TableCell']),
            Paragraph("v18.x or v20.x LTS<br/>(v20+ recommended)", styles['TableCell']),
            Paragraph("<code>download nodejs lts</code>", styles['TableCellCode']),
            Paragraph("<b>nodejs.org/en/download</b><br/>JavaScript runtime &amp; Node Package Manager to run Vite &amp; install packages.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Git SCM</b>", styles['TableCell']),
            Paragraph("v2.40+ or latest", styles['TableCell']),
            Paragraph("<code>download git scm</code>", styles['TableCellCode']),
            Paragraph("<b>git-scm.com/downloads</b><br/>Source control management tool to clone and version the codebase.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Visual Studio Code</b>", styles['TableCell']),
            Paragraph("Latest Stable", styles['TableCell']),
            Paragraph("<code>download vs code</code>", styles['TableCellCode']),
            Paragraph("<b>code.visualstudio.com</b><br/>Recommended Integrated Development Environment (IDE) with TypeScript support.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Web Browser</b>", styles['TableCell']),
            Paragraph("Chrome / Firefox / Edge", styles['TableCell']),
            Paragraph("<code>download google chrome</code>", styles['TableCellCode']),
            Paragraph("<b>google.com/chrome</b><br/>Modern browser equipped with DevTools for inspecting mobile viewports and network calls.", styles['TableCell'])
        ],
        [
            Paragraph("<b>Postman (Optional)</b>", styles['TableCell']),
            Paragraph("Latest Desktop App", styles['TableCell']),
            Paragraph("<code>download postman</code>", styles['TableCellCode']),
            Paragraph("<b>postman.com/downloads</b><br/>API testing tool to verify backend contact and pitch endpoints independently.", styles['TableCell'])
        ]
    ]

    tools_table = Table(tools_data, colWidths=[90, 85, 120, 209])
    tools_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(tools_table)
    story.append(Spacer(1, 10))

    story.append(Paragraph("<b>Recommended VS Code Extensions:</b>", styles['BodyBold']))
    story.append(Paragraph("• <b>Tailwind CSS IntelliSense</b> (by Tailwind Labs): Provides autocomplete, syntax highlighting, and class linting.", styles['BulletText']))
    story.append(Paragraph("• <b>ESLint</b> (by Microsoft): Displays code quality warnings and catches React hook bugs in real time.", styles['BulletText']))
    story.append(Paragraph("• <b>Prettier - Code formatter</b>: Ensures consistent formatting across all TypeScript and CSS files.", styles['BulletText']))
    story.append(Paragraph("• <b>PostCSS Language Support</b>: Syntax highlighting for custom CSS directives such as <code>@tailwind</code>.", styles['BulletText']))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 3. INSTALLATION STEPS FOR ALL OPERATING SYSTEMS
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("3. Step-by-Step Installation for macOS, Windows & Linux", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))

    story.append(Paragraph("<b>A. macOS Installation:</b>", styles['SectionH2']))
    story.append(Paragraph("1. Download the macOS installer (<code>.pkg</code>) from <b>nodejs.org</b> or install via Homebrew.", styles['BulletText']))
    story.append(Paragraph("2. Double-click the <code>.pkg</code> file and follow the on-screen prompts to complete installation.", styles['BulletText']))
    story.append(Paragraph("3. Open <b>Terminal</b> (press <code>Cmd + Space</code>, type <code>Terminal</code>, press Enter) and verify:", styles['BulletText']))
    story.append(make_code_box("node -v\nnpm -v\ngit --version", styles))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>B. Windows Installation:</b>", styles['SectionH2']))
    story.append(Paragraph("1. Download the Windows Installer (<code>.msi</code>) 64-bit from <b>nodejs.org</b>.", styles['BulletText']))
    story.append(Paragraph("2. Run the installer. On the 'Custom Setup' screen, ensure <b>'Add to PATH'</b> is checked.", styles['BulletText']))
    story.append(Paragraph("3. Download Git from <b>git-scm.com</b> and install using default recommended settings.", styles['BulletText']))
    story.append(Paragraph("4. Open <b>PowerShell</b> or <b>Command Prompt</b> (Win + R, type <code>powershell</code>) and verify:", styles['BulletText']))
    story.append(make_code_box("node -v\nnpm -v\ngit --version", styles))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>C. Linux (Ubuntu / Debian) Installation:</b>", styles['SectionH2']))
    story.append(Paragraph("Run the following commands in your bash terminal to install Node.js 20 LTS via NodeSource:", styles['Body']))
    story.append(make_code_box(
        "# Update package indices\nsudo apt update && sudo apt install -y curl git\n\n"
        "# Add NodeSource repository for Node.js 20 LTS\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\n\n"
        "# Install Node.js & npm\nsudo apt install -y nodejs\n\n"
        "# Verify installation\nnode -v && npm -v && git --version",
        styles
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 4. PROJECT CLONING & TERMINAL NAVIGATION
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("4. Project Download / Clone & Terminal Navigation", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "Follow these exact steps to clone the project from GitHub/GitLab to your local computer:",
        styles['Body']
    ))

    story.append(Paragraph("<b>Step 1: Choose or Create Your Working Directory</b>", styles['BodyBold']))
    story.append(Paragraph("Open your terminal and navigate to where you store projects (e.g. Desktop or Projects):", styles['Body']))
    story.append(make_code_box(
        "# Navigate to your Desktop folder\ncd ~/Desktop\n\n"
        "# Or create a dedicated development directory\nmkdir -p ~/Projects && cd ~/Projects",
        styles
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Step 2: Clone the Repository</b>", styles['BodyBold']))
    story.append(Paragraph("Run the <code>git clone</code> command with the repository URL:", styles['Body']))
    story.append(make_code_box(
        "# Clone the repository to your machine\ngit clone https://github.com/Aronixwebtech001/Rohit_Portfolio_FE.git\n\n"
        "# Enter the cloned project folder\ncd Rohit_Portfolio_FE",
        styles
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Step 3: Open in Visual Studio Code</b>", styles['BodyBold']))
    story.append(Paragraph("Launch VS Code directly inside the project root folder:", styles['Body']))
    story.append(make_code_box("code .", styles))
    story.append(Paragraph(
        "<i>Explanation:</i> The <code>code .</code> command tells VS Code to open the current working directory as your workspace.",
        styles['Body']
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 5. FOLDER STRUCTURE & ARCHITECTURE
    # ═════════════════════════════════════════════════════════════════════════
    story.append(PageBreak())
    story.append(Paragraph("5. Project Architecture & Complete Folder Structure", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "The project follows a clean, modular React component architecture structured around domain-specific pages and reusable shared components:",
        styles['Body']
    ))

    story.append(Paragraph("<b>5.1 Root Configuration &amp; Build Manifests:</b>", styles['SectionH2']))
    folder_tree_root = (
        "Rohit_Portfolio_FE/\n"
        "├── index.html                   # HTML entry point (SEO meta, fonts, viewport config)\n"
        "├── package.json                 # Project dependencies, scripts, and package metadata\n"
        "├── package-lock.json            # Deterministic dependency lock file\n"
        "├── vite.config.ts               # Vite configuration and React plugin setup\n"
        "├── tailwind.config.js           # Tailwind CSS design system tokens (colors, fonts, keyframes)\n"
        "├── postcss.config.js            # PostCSS configuration with Tailwind and Autoprefixer\n"
        "├── tsconfig.json                # Master TypeScript project configuration\n"
        "├── tsconfig.app.json            # Application-level TypeScript strict compiler options\n"
        "├── public/                      # Static unbundled public assets (favicon, icons.svg)\n"
        "└── src/                         # React source code root (detailed below)"
    )
    story.append(make_code_box(folder_tree_root, styles))
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>5.2 Source Code (<code>src/</code>) Architecture:</b>", styles['SectionH2']))
    folder_tree_src = (
        "src/\n"
        "├── main.tsx                     # React root mount point (renders App in #root)\n"
        "├── App.tsx                      # React Router configuration & route declarations\n"
        "├── index.css                    # Global CSS, Tailwind directives, reveal animations & touch rules\n"
        "├── assets/                      # Bundled assets (branded images, portraits, responsive cutouts)\n"
        "├── components/\n"
        "│   ├── Home/                    # HeroSection, PartnerLogos, WhyChooseUs, Partnerships, CaseStudies\n"
        "│   ├── About/                   # ProfileHero, BioSection, MediaImpactSection, QuoteBanner, Journey\n"
        "│   ├── Ventures/                # VenturesHero, VenturesDiagram, PortfolioStats, MissionVision\n"
        "│   ├── Investor/                # InvestorHero, InvestmentThesis, HowToInvest, InvestorForm\n"
        "│   ├── Mentorship/              # MentorshipHero, TopicsSection, MentorshipCalendar, Pricing\n"
        "│   ├── Pitch/                   # PitchHero, WhatILookFor, PitchForm\n"
        "│   ├── CaseStudy/               # CaseStudyHero, StatsSection, ClientLogosGrid, FAQSection\n"
        "│   ├── Resources/               # ResourcesHero, ArticlesGrid\n"
        "│   └── shared/                  # Navbar, Footer, Layout, ScrollReveal, ConnectModal, Button\n"
        "├── features/                    # Feature API client modules:\n"
        "│   ├── investor/                # api.investor.ts (POST /investors), types.investor.ts\n"
        "│   ├── pitch/                   # api.pitch.ts (POST /pitch/submit), types.pitch.ts\n"
        "│   └── subscribe/               # api.subscribe.ts (POST /subscribe), types.subscribe.ts\n"
        "├── lib/\n"
        "│   └── api.ts                   # Generic fetch wrapper with baseUrl & error parsing\n"
        "├── pages/                       # Top-level route components mapped in App.tsx\n"
        "└── types/                       # Global TypeScript type definitions"
    )
    story.append(make_code_box(folder_tree_src, styles))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 6. CONFIGURATION & ENVIRONMENT VARIABLES (.env)
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("6. Configuration & Environment Variables (.env)", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "Vite utilizes standard <code>.env</code> files for environment variables. "
        "<b>Important Vite Rule:</b> To prevent accidentally leaking private credentials to the client browser, "
        "only variables prefixed with <code>VITE_</code> are exposed to your React code via <code>import.meta.env</code>.",
        styles['Body']
    ))

    story.append(Paragraph("<b>Step 1: Create Your Local <code>.env</code> File</b>", styles['BodyBold']))
    story.append(Paragraph("In the project root directory (<code>Rohit_Portfolio_FE</code>), create a new <code>.env</code> file:", styles['Body']))
    story.append(make_code_box(
        "# macOS / Linux\ncp .env.example .env 2>/dev/null || touch .env\n\n"
        "# Windows (PowerShell)\nif (!(Test-Path .env)) { New-Item -ItemType File -Name .env }",
        styles
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Step 2: Add Configuration Keys</b>", styles['BodyBold']))
    story.append(Paragraph("Open <code>.env</code> in your code editor and populate the required keys:", styles['Body']))
    story.append(make_code_box(
        "# API Backend Base URL (FastAPI / Express / Node.js backend)\n"
        "VITE_API_URL=http://localhost:5000/api/v1\n\n"
        "# Application Environment Flag\n"
        "VITE_APP_ENV=development\n\n"
        "# Cloudinary Assets CDN URL (Already configured for streaming video & images)\n"
        "VITE_CLOUDINARY_BASE=https://res.cloudinary.com/dqfuozgjq",
        styles
    ))
    story.append(Spacer(1, 6))

    env_table_data = [
        [
            Paragraph("<b>Variable Key</b>", styles['TableHeader']),
            Paragraph("<b>Default / Development Value</b>", styles['TableHeader']),
            Paragraph("<b>Purpose &amp; Where Used</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<code>VITE_API_URL</code>", styles['TableCellCode']),
            Paragraph("<code>http://localhost:5000/api/v1</code>", styles['TableCellCode']),
            Paragraph("Backend API root. Read in <code>src/lib/api.ts</code> to prefix all REST endpoints.", styles['TableCell'])
        ],
        [
            Paragraph("<code>VITE_APP_ENV</code>", styles['TableCellCode']),
            Paragraph("<code>development</code>", styles['TableCellCode']),
            Paragraph("Toggles debug logs and dev tooling between dev and production modes.", styles['TableCell'])
        ],
        [
            Paragraph("<code>VITE_CLOUDINARY_BASE</code>", styles['TableCellCode']),
            Paragraph("<code>https://res.cloudinary.com/dqfuozgjq</code>", styles['TableCellCode']),
            Paragraph("Cloudinary CDN root hosting videos and images with <code>q_auto,w_900</code> compression.", styles['TableCell'])
        ]
    ]
    env_table = Table(env_table_data, colWidths=[140, 160, 204])
    env_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(env_table)
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 7. DEPENDENCIES & PACKAGES INSTALLATION
    # ═════════════════════════════════════════════════════════════════════════
    story.append(PageBreak())
    story.append(Paragraph("7. Dependencies & Packages Installation", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "All project dependencies are declared in <code>package.json</code>. "
        "Run the following command in the project root directory to download and install all libraries into <code>node_modules/</code>:",
        styles['Body']
    ))
    story.append(make_code_box(
        "# Execute inside: /Users/.../Desktop/Rohit_Portfolio_FE\nnpm install",
        styles
    ))
    story.append(Paragraph(
        "<i>What this does:</i> <code>npm install</code> reads <code>package-lock.json</code> to ensure exact matching package versions "
        "are resolved and installed into your local <code>node_modules/</code> folder.",
        styles['Body']
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Breakdown of Key Dependencies:</b>", styles['BodyBold']))
    pkg_data = [
        [
            Paragraph("<b>Package Name</b>", styles['TableHeader']),
            Paragraph("<b>Version</b>", styles['TableHeader']),
            Paragraph("<b>Role in Application</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<code>react</code> &amp; <code>react-dom</code>", styles['TableCellCode']),
            Paragraph("^18.3.1", styles['TableCell']),
            Paragraph("The core UI library and DOM renderer for component hierarchy, hooks, and Virtual DOM.", styles['TableCell'])
        ],
        [
            Paragraph("<code>react-router-dom</code>", styles['TableCellCode']),
            Paragraph("^6.26.2", styles['TableCell']),
            Paragraph("Client-side SPA router providing declarative navigation without full page refreshes.", styles['TableCell'])
        ],
        [
            Paragraph("<code>lucide-react</code>", styles['TableCellCode']),
            Paragraph("^1.33.0", styles['TableCell']),
            Paragraph("High-performance vector SVG icons (e.g. ChevronDown, Menu, X, ArrowRight).", styles['TableCell'])
        ],
        [
            Paragraph("<code>react-countup</code>", styles['TableCellCode']),
            Paragraph("^6.5.3", styles['TableCell']),
            Paragraph("Smooth animated numerical counters used in venture statistics and impact metrics.", styles['TableCell'])
        ],
        [
            Paragraph("<code>react-intersection-observer</code>", styles['TableCellCode']),
            Paragraph("^11.0.1", styles['TableCell']),
            Paragraph("Tracks element viewport visibility to trigger scroll-reveal animations.", styles['TableCell'])
        ],
        [
            Paragraph("<code>vite</code>", styles['TableCellCode']),
            Paragraph("^5.4.2", styles['TableCell']),
            Paragraph("Next-generation frontend tooling providing lightning-fast HMR and Rollup production builds.", styles['TableCell'])
        ],
        [
            Paragraph("<code>tailwindcss</code> &amp; <code>autoprefixer</code>", styles['TableCellCode']),
            Paragraph("^3.4.10", styles['TableCell']),
            Paragraph("Utility-first styling framework configured with luxury theme tokens and vendor prefixing.", styles['TableCell'])
        ],
        [
            Paragraph("<code>typescript</code>", styles['TableCellCode']),
            Paragraph("^5.5.4", styles['TableCell']),
            Paragraph("Type safety, autocompletion, interface enforcement, and compile-time error detection.", styles['TableCell'])
        ]
    ]
    pkg_table = Table(pkg_data, colWidths=[140, 70, 294])
    pkg_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(pkg_table)
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 8. RUNNING THE PROJECT (DEVELOPMENT)
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("8. How to Run the Project (Development Server)", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "To start the Vite local development server with Instant Hot Module Replacement (HMR):",
        styles['Body']
    ))
    story.append(make_code_box(
        "# Run in project root: Rohit_Portfolio_FE/\nnpm run dev",
        styles
    ))
    story.append(Paragraph(
        "Once started, Vite will output the local network URL in your terminal:",
        styles['Body']
    ))
    story.append(make_code_box(
        "  VITE v5.4.2  ready in 240 ms\n\n"
        "  ➜  Local:   http://localhost:5173/\n"
        "  ➜  Network: use --host to expose\n"
        "  ➜  press h + enter to show help",
        styles
    ))
    story.append(Paragraph(
        "Open your browser and navigate to <b>http://localhost:5173</b> (or the port indicated in your terminal).",
        styles['Body']
    ))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Advanced Development Options:</b>", styles['BodyBold']))
    story.append(Paragraph("• <b>Test on Mobile Phones over Wi-Fi:</b> Run <code>npm run dev -- --host</code>. Vite will output an IP address (e.g. <code>http://192.168.1.15:5173</code>) that you can open on your mobile phone or tablet.", styles['BulletText']))
    story.append(Paragraph("• <b>Specify a Custom Port:</b> Run <code>npm run dev -- --port 3000</code> if port 5173 is already in use by another application.", styles['BulletText']))
    story.append(Paragraph("• <b>Stop the Dev Server:</b> Press <code>Ctrl + C</code> in your terminal window.", styles['BulletText']))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 9. DATABASE SETUP & API INTEGRATION TESTING
    # ═════════════════════════════════════════════════════════════════════════
    story.append(PageBreak())
    story.append(Paragraph("9. Database Setup, API Configuration & Testing", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "<b>Frontend Database Architecture:</b> As a modern client-side Single Page Application, the frontend does not connect "
        "directly to a database (such as MongoDB or PostgreSQL) for security reasons. Instead, the frontend communicates with the "
        "backend REST API via secure HTTP endpoints defined in <code>src/lib/api.ts</code>. The backend server manages the database connection.",
        styles['Body']
    ))
    story.append(Spacer(1, 4))

    story.append(Paragraph("<b>Frontend API Modules &amp; Endpoints:</b>", styles['BodyBold']))
    api_data = [
        [
            Paragraph("<b>Feature Form</b>", styles['TableHeader']),
            Paragraph("<b>File Location</b>", styles['TableHeader']),
            Paragraph("<b>HTTP Method &amp; Endpoint</b>", styles['TableHeader']),
            Paragraph("<b>Payload Fields</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<b>Investor Form</b>", styles['TableCell']),
            Paragraph("<code>src/features/investor/<br/>api.investor.ts</code>", styles['TableCellCode']),
            Paragraph("<b>POST</b> <code>/investors</code>", styles['TableCellCode']),
            Paragraph("<code>name, email, phone, ticketSize, investmentFocus, message</code>", styles['TableCell'])
        ],
        [
            Paragraph("<b>Pitch Submission</b>", styles['TableCell']),
            Paragraph("<code>src/features/pitch/<br/>api.pitch.ts</code>", styles['TableCellCode']),
            Paragraph("<b>POST</b> <code>/pitch/submit</code>", styles['TableCellCode']),
            Paragraph("<code>founderName, email, startupName, stage, pitchDeckUrl, message</code>", styles['TableCell'])
        ],
        [
            Paragraph("<b>Newsletter Subscription</b>", styles['TableCell']),
            Paragraph("<code>src/features/subscribe/<br/>api.subscribe.ts</code>", styles['TableCellCode']),
            Paragraph("<b>POST</b> <code>/subscribe</code>", styles['TableCellCode']),
            Paragraph("<code>email</code>", styles['TableCell'])
        ],
        [
            Paragraph("<b>Quick Connect Modal</b>", styles['TableCell']),
            Paragraph("<code>src/components/shared/<br/>ConnectModal.tsx</code>", styles['TableCellCode']),
            Paragraph("<b>POST</b> <code>/connect</code>", styles['TableCellCode']),
            Paragraph("<code>name, email, purpose, message</code>", styles['TableCell'])
        ]
    ]
    api_table = Table(api_data, colWidths=[95, 115, 115, 179])
    api_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(api_table)
    story.append(Spacer(1, 8))

    story.append(Paragraph("<b>Testing API Endpoints with cURL Commands:</b>", styles['BodyBold']))
    story.append(Paragraph("You can verify backend API connectivity directly from your terminal using these exact commands:", styles['Body']))
    story.append(make_code_box(
        "# 1. Test Investor Application Submission\n"
        "curl -X POST \"http://localhost:5000/api/v1/investors\" \\\n"
        "     -H \"Content-Type: application/json\" \\\n"
        "     -d '{\"name\":\"Jane Doe\",\"email\":\"jane@investor.com\",\"ticketSize\":\"$100K-$250K\",\"message\":\"Interested in mobility portfolio.\"}'\n\n"
        "# 2. Test Pitch Submission\n"
        "curl -X POST \"http://localhost:5000/api/v1/pitch/submit\" \\\n"
        "     -H \"Content-Type: application/json\" \\\n"
        "     -d '{\"founderName\":\"John Smith\",\"email\":\"john@startup.com\",\"startupName\":\"NextGen AI\",\"stage\":\"Seed\"}'\n\n"
        "# 3. Test Newsletter Subscription\n"
        "curl -X POST \"http://localhost:5000/api/v1/subscribe\" \\\n"
        "     -H \"Content-Type: application/json\" \\\n"
        "     -d '{\"email\":\"subscriber@example.com\"}'",
        styles
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 10. PRODUCTION BUILD & VERIFICATION
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("10. Build & Production Setup", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "Before deploying to production, compile the application into static, minified production assets:",
        styles['Body']
    ))
    story.append(make_code_box(
        "# Run in project root: Rohit_Portfolio_FE/\nnpm run build",
        styles
    ))
    story.append(Paragraph(
        "<b>What happens during <code>npm run build</code>:</b>",
        styles['BodyBold']
    ))
    story.append(Paragraph("1. <b>TypeScript Type Checking:</b> Executes <code>tsc -b</code>. Checks every component and feature for strict type compliance.", styles['BulletText']))
    story.append(Paragraph("2. <b>Vite Rollup Bundling:</b> Packages all TSX, CSS, and media imports into high-performance chunks.", styles['BulletText']))
    story.append(Paragraph("3. <b>Asset Optimization:</b> Generates content-hashed filenames for immutable browser caching (e.g. <code>index-CbMISFpc.js</code>).", styles['BulletText']))
    story.append(Paragraph("4. <b>Output Generation:</b> Writes all compiled files into the standalone <code>dist/</code> folder.", styles['BulletText']))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>Previewing the Production Build Locally:</b>", styles['BodyBold']))
    story.append(Paragraph("Verify that the compiled build works exactly as expected before deploying:", styles['Body']))
    story.append(make_code_box(
        "# Starts a local static web server serving the dist/ folder\nnpm run preview",
        styles
    ))
    story.append(Paragraph("Open <b>http://localhost:4173</b> to test the production bundle in your browser.", styles['Body']))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 11. DEPLOYMENT INSTRUCTIONS (VERCEL, NETLIFY, CLOUDFLARE, NGINX)
    # ═════════════════════════════════════════════════════════════════════════
    story.append(PageBreak())
    story.append(Paragraph("11. Production Deployment Instructions", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "The compiled <code>dist/</code> directory can be deployed to any modern cloud platform or traditional web server. "
        "Because this application uses <b>React Router</b> client-side routing, your server must rewrite all page requests to <code>/index.html</code>.",
        styles['Body']
    ))

    story.append(Paragraph("<b>A. Deploy to Vercel (Recommended):</b>", styles['SectionH2']))
    story.append(Paragraph("1. Push your repository to GitHub or GitLab.", styles['BulletText']))
    story.append(Paragraph("2. Log into <b>vercel.com</b>, click <b>'Add New Project'</b>, and select your repository.", styles['BulletText']))
    story.append(Paragraph("3. Configure Build Settings: Framework Preset = <b>Vite</b>, Build Command = <code>npm run build</code>, Output Directory = <code>dist</code>.", styles['BulletText']))
    story.append(Paragraph("4. Add Environment Variable: <code>VITE_API_URL</code> with your live backend production URL.", styles['BulletText']))
    story.append(Paragraph("5. Click <b>Deploy</b>. Vercel automatically configures SPA routing and SSL.", styles['BulletText']))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>B. Deploy to Netlify:</b>", styles['SectionH2']))
    story.append(Paragraph("Create a file named <code>public/_redirects</code> containing the following single rule:", styles['Body']))
    story.append(make_code_box("/*    /index.html   200", styles))
    story.append(Paragraph("Connect your Git repo on <b>netlify.com</b> with build command <code>npm run build</code> and publish directory <code>dist</code>.", styles['Body']))
    story.append(Spacer(1, 6))

    story.append(Paragraph("<b>C. Deploy to Ubuntu / Nginx Web Server:</b>", styles['SectionH2']))
    story.append(Paragraph("Upload the contents of <code>dist/</code> to <code>/var/www/rohit-portfolio/</code> and use this Nginx configuration:", styles['Body']))
    story.append(make_code_box(
        "server {\n"
        "    listen 80;\n"
        "    server_name rohitjangir.com www.rohitjangir.com;\n"
        "    root /var/www/rohit-portfolio;\n"
        "    index index.html;\n\n"
        "    # Enable gzip compression for lightning-fast loads\n"
        "    gzip on;\n"
        "    gzip_types text/plain text/css application/json application/javascript text/xml image/svg+xml;\n\n"
        "    # Essential SPA Rewrite Rule\n"
        "    location / {\n"
        "        try_files $uri $uri/ /index.html;\n"
        "    }\n\n"
        "    # Cache static assets for 1 year\n"
        "    location ~* \\.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg|mp4)$ {\n"
        "        expires 1y;\n"
        "        add_header Cache-Control \"public, max-age=31536000, immutable\";\n"
        "    }\n"
        "}",
        styles
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 12. COMMON ERRORS & STEP-BY-STEP SOLUTIONS
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("12. Common Errors & Troubleshooting Solutions", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))

    error_data = [
        [
            Paragraph("<b>Error / Symptom</b>", styles['TableHeader']),
            Paragraph("<b>Root Cause</b>", styles['TableHeader']),
            Paragraph("<b>Step-by-Step Solution</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<code>Port 5173 is in use</code>", styles['TableCellCode']),
            Paragraph("Another terminal instance of Vite or Node is already running on port 5173.", styles['TableCell']),
            Paragraph("Vite automatically falls back to 5174. To free 5173: run <code>lsof -i :5173</code> followed by <code>kill -9 &lt;PID&gt;</code>.", styles['TableCell'])
        ],
        [
            Paragraph("<code>VITE_API_URL is undefined</code>", styles['TableCellCode']),
            Paragraph("Missing <code>.env</code> file or Vite dev server was not restarted after editing <code>.env</code>.", styles['TableCell']),
            Paragraph("Create <code>.env</code> in the project root, ensure the variable starts with <code>VITE_</code>, and restart Vite (<code>npm run dev</code>).", styles['TableCell'])
        ],
        [
            Paragraph("<code>Cannot find module or type declaration</code>", styles['TableCellCode']),
            Paragraph("Packages have not been installed into <code>node_modules/</code>.", styles['TableCell']),
            Paragraph("Run <code>npm install</code> in the project root. If persistent, delete <code>node_modules</code> and reinstall.", styles['TableCell'])
        ],
        [
            Paragraph("<code>CORS Policy: No Access-Control header</code>", styles['TableCellCode']),
            Paragraph("The backend server does not allow cross-origin requests from the frontend port.", styles['TableCell']),
            Paragraph("In backend (FastAPI/Express), add <code>http://localhost:5173</code> to <code>CORSMiddleware</code> <code>allow_origins</code>.", styles['TableCell'])
        ],
        [
            Paragraph("<code>404 Not Found on page refresh</code>", styles['TableCellCode']),
            Paragraph("Web server (Nginx/Netlify) is treating client route (e.g. <code>/about</code>) as a physical directory.", styles['TableCell']),
            Paragraph("Add fallback rewrite rule: <code>try_files $uri $uri/ /index.html;</code> (Nginx) or <code>/* /index.html 200</code> (Netlify).", styles['TableCell'])
        ],
        [
            Paragraph("<code>Horizontal scrollbar / screen jitter on mobile</code>", styles['TableCellCode']),
            Paragraph("Elements with <code>translateX</code> animation or fixed widths wider than viewport.", styles['TableCell']),
            Paragraph("Already resolved! <code>index.css</code> enforces <code>overflow-x: clip</code> and maps horizontal reveals to <code>translateY</code> on &le;768px.", styles['TableCell'])
        ]
    ]

    error_table = Table(error_data, colWidths=[120, 150, 234])
    error_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(error_table)
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 13. COMPREHENSIVE TROUBLESHOOTING & MAINTENANCE
    # ═════════════════════════════════════════════════════════════════════════
    story.append(PageBreak())
    story.append(Paragraph("13. Comprehensive Troubleshooting & Clean Reinstall", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "If you encounter anomalous behavior, corrupted dependencies, or stale build caches, perform a complete clean reinstall using these commands:",
        styles['Body']
    ))
    story.append(make_code_box(
        "# 1. Stop any running Vite processes (Ctrl + C)\n\n"
        "# 2. Remove dependencies and build cache\n"
        "rm -rf node_modules package-lock.json dist .vite\n\n"
        "# 3. Clear npm global cache\n"
        "npm cache clean --force\n\n"
        "# 4. Reinstall all dependencies fresh\n"
        "npm install\n\n"
        "# 5. Test clean build\n"
        "npm run build\n\n"
        "# 6. Launch development server\n"
        "npm run dev",
        styles
    ))
    story.append(Spacer(1, 12))

    # ═════════════════════════════════════════════════════════════════════════
    # 14. SYSTEM VERIFICATION CHECKLIST
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("14. Final System Verification Checklist", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "Use this quality assurance checklist to verify that your development and production setup is 100% operational:",
        styles['Body']
    ))

    checklist_data = [
        [
            Paragraph("<b>Verification Item</b>", styles['TableHeader']),
            Paragraph("<b>Inspection Action</b>", styles['TableHeader']),
            Paragraph("<b>Expected Status</b>", styles['TableHeader'])
        ],
        [
            Paragraph("<b>1. Node &amp; npm Version</b>", styles['TableCell']),
            Paragraph("Run <code>node -v &amp;&amp; npm -v</code> in terminal.", styles['TableCell']),
            Paragraph("Node &ge; v18.0.0, npm &ge; 9.0.0", styles['TableCell'])
        ],
        [
            Paragraph("<b>2. Development Server</b>", styles['TableCell']),
            Paragraph("Run <code>npm run dev</code> and open <code>http://localhost:5173</code>.", styles['TableCell']),
            Paragraph("Instant load, no terminal errors, HMR active", styles['TableCell'])
        ],
        [
            Paragraph("<b>3. Navigation &amp; Routing</b>", styles['TableCell']),
            Paragraph("Click Home, About, Ventures, Investor, Mentorship, Pitch links.", styles['TableCell']),
            Paragraph("Smooth client-side routing, URL updates cleanly", styles['TableCell'])
        ],
        [
            Paragraph("<b>4. Video Playback</b>", styles['TableCell']),
            Paragraph("Inspect 'Why we're the right choice' video on Home page.", styles['TableCell']),
            Paragraph("Autoplays muted, sharp poster, 1.9MB payload", styles['TableCell'])
        ],
        [
            Paragraph("<b>5. Case Studies Carousel</b>", styles['TableCell']),
            Paragraph("Test on phone screen (&lt; 640px) and tablet (&lt; 1024px).", styles['TableCell']),
            Paragraph("Cards full width, bottom arrows &amp; dots, swipe active", styles['TableCell'])
        ],
        [
            Paragraph("<b>6. Partnerships Section</b>", styles['TableCell']),
            Paragraph("Inspect top padding of 'Partnerships' white card.", styles['TableCell']),
            Paragraph("48px top space, heading has elegant breathing room", styles['TableCell'])
        ],
        [
            Paragraph("<b>7. Quote Banner (About)</b>", styles['TableCell']),
            Paragraph("Inspect About page quote banner on mobile.", styles['TableCell']),
            Paragraph("Rohit's portrait centered in background, no text-justify", styles['TableCell'])
        ],
        [
            Paragraph("<b>8. Zero Horizontal Scroll</b>", styles['TableCell']),
            Paragraph("Scroll horizontally on mobile viewports (375px &amp; 414px).", styles['TableCell']),
            Paragraph("Page strictly vertical, zero horizontal overflow", styles['TableCell'])
        ],
        [
            Paragraph("<b>9. Production Build</b>", styles['TableCell']),
            Paragraph("Run <code>npm run build</code> in terminal.", styles['TableCell']),
            Paragraph("Exits with code 0 in &lt; 5s, creates <code>dist/</code> folder", styles['TableCell'])
        ]
    ]

    checklist_table = Table(checklist_data, colWidths=[120, 230, 154])
    checklist_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 4.5),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, BG_LIGHT])
    ]))
    story.append(checklist_table)
    story.append(Spacer(1, 14))

    # ═════════════════════════════════════════════════════════════════════════
    # 15. DEVELOPER MAINTENANCE & EXTENSION GUIDELINES
    # ═════════════════════════════════════════════════════════════════════════
    story.append(Paragraph("15. Developer Maintenance & Extension Guidelines", styles['SectionH1']))
    story.append(HRFlowable(width="100%", thickness=1, color=BORDER_COLOR, spaceAfter=8))
    story.append(Paragraph(
        "<b>Adding a New Page / Route:</b><br/>"
        "1. Create a new component in <code>src/pages/NewPage.tsx</code>.<br/>"
        "2. In <code>src/App.tsx</code>, import the page and declare a new route inside <code>&lt;Routes&gt;</code>:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;<code>&lt;Route path=\"/new-page\" element={&lt;NewPage /&gt;} /&gt;</code>.<br/>"
        "3. Add a navigation link in <code>src/components/shared/Navbar.tsx</code> and <code>Footer.tsx</code>.",
        styles['Body']
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "<b>Modifying Color Tokens &amp; Theme:</b><br/>"
        "All brand colors are centralized in <code>tailwind.config.js</code> under <code>theme.extend.colors</code>. "
        "Updating values for <code>navy</code>, <code>accent</code>, <code>cream</code>, or <code>card</code> propagates "
        "consistently across every component in the project.",
        styles['Body']
    ))
    story.append(Spacer(1, 10))

    # ── Final Sign-Off ────────────────────────────────────────────────────────
    story.append(make_callout(
        "<b>Documentation Maintained by:</b> Aronix Web Tech Engineering Team<br/>"
        "<b>Official Website:</b> <font color='#1C323A'><u>https://aronixwebtech.com/</u></font><br/>"
        "<b>Project Repository:</b> <font color='#1C323A'><u>https://github.com/Aronixwebtech001/Rohit_Portfolio_FE</u></font><br/>"
        "<b>Inquiries &amp; Support:</b> contact@aronixwebtech.com",
        styles, title="DOCUMENTATION METADATA & SUPPORT:"
    ))

    # Build document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated PDF: {filename}")

if __name__ == "__main__":
    out_pdf = sys.argv[1] if len(sys.argv) > 1 else "Rohit_Portfolio_Frontend_Documentation.pdf"
    build_pdf(out_pdf)
