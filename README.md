# 🎓 Nova Academy — Interactive Virtual Learning Platform

A state-of-the-art, high-converting, and responsive modern web application built with **React 19**, **Tailwind CSS**, and **Vite**. **Nova Academy** reimagines Indian virtual education by replacing passive video lectures with collaborative multi-user whiteboards, interactive code & science simulations, peer breakout pods, and a 24/7 Socratic AI mentor aligned with **NEP 2020** and the **DPDP Act 2023**.

---

## 📑 Table of Contents

- [Key Features & Highlights](#-key-features--highlights)
- [Design System & Themes](#-design-system--themes)
- [Page Architecture & Components](#-page-architecture--components)
  - [1. Navigation Bar](#1-navigation-bar-navbarjsx)
  - [2. Hero Section & Live Simulator](#2-hero-section--live-classroom-simulator-herojsx)
  - [3. Interactive Academic Partners Explorer](#3-interactive-academic-partners-explorer)
  - [4. About & Narrative Comparison](#4-about--narrative-comparison-aboutjsx)
  - [5. Features & Subject Tracks](#5-features--subject-tracks-featuresjsx)
  - [6. How It Works](#6-how-it-works-howitworksjsx)
  - [7. Student & Educator Testimonials](#7-student--educator-testimonials-testimonialsjsx)
  - [8. Tuition & Pricing Calculator](#8-tuition--pricing-calculator-pricingjsx)
  - [9. Complete Footer](#9-complete-footer-footerjsx)
- [Interactive Modals](#-interactive-modals)
  - [Authentication Suite (Login / Sign Up / Forgot Password)](#authentication-suite-authmodaljsx)
  - [Live Classroom Simulator Demo Modal](#live-classroom-simulator-demo-modal-demomodaljsx)
  - [Digital Student Pass Generation](#digital-student-pass-generation-openaccountmodaljsx)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [Scripts & Build](#-scripts--build)
- [Security, Compliance & Indian Standards](#-security-compliance--indian-standards)
- [License](#-license)

---

## ✨ Key Features & Highlights

- 🇮🇳 **Complete Indian Academic Localization**: Customized for CBSE, ICSE, State Boards, IIT-JEE (Main & Advanced), NEET, KVPY/NTSE, and Indian Mathematical Olympiads (PRMO/RMO/INMO).
- 🌗 **Seamless Dark & Light Themes**: Instant toggle with root HTML class switching and persistent `localStorage` synchronization.
- 🎨 **Modern Glassmorphic Aesthetics**: Curated color palettes (Midnight Slate `#0B0F19`, Amber Gold `#F59E0B`, Royal Violet `#8B5CF6`, Emerald `#10B981`) with ambient blurs, gradient text, and micro-interactions.
- 💎 **100% Pure Vector UI (Zero Raster Images)**: All diagrams, whiteboard curves, physics vector engines, memory arrays, and studio feeds are rendered in pure React & SVG vectors.
- 📐 **Harmonized Spacing & Typography**: Tuned vertical rhythm (`py-12 md:py-16`) eliminating dead space across all viewport sizes.
- ⚡ **Interactive Stationary Partner Explorer**: Touch-friendly academic partner showcase (DPS R.K. Puram, Kota Olympiad Hub, KVS Network, NPS Bengaluru, IIT Bombay Alumni Hub, Khan Academy India) displaying real-time metrics and co-curriculum tags.
- 🔬 **Live Classroom Simulator**: Integrated multi-mode virtual workspace with Calculus graphing, Python binary search memory debugger, Keplerian orbital physics mechanics, live "Raise Hand" queue, and an interactive pop quiz rewarding XP.
- 🔐 **Complete Authentication Suite**: Modal-based Login, Sign Up (with real-time password strength meter & role selection), and Forgot Password recovery workflows.
- 🪪 **Digital Student ID Pass Generator**: 3-step onboarding that generates a personalized digital student pass with unique ID (`NOVA-IND-9942`) and starter XP.
- 📞 **Comprehensive Indian Contact & Social Footer**: Direct support email (`support@novaacademy.in`), all-India toll-free hotline (`+91 1800 258 7890`), Bengaluru campus address, 6 brand-colored social channels, and official GSTIN details.

---

## 🌓 Design System & Themes

Nova Academy supports both **Dark Mode** (default) and **Light Mode**:

| Theme | Background | Primary Card / Surface | Primary Text | Accent Colors |
| :--- | :--- | :--- | :--- | :--- |
| **Dark Mode** | `#0B0F19` (Midnight Slate) | `rgba(17, 24, 39, 0.75)` | `#F8FAFC` (Slate 50) | Amber 400 (`#FBBF24`), Violet 400 (`#A78BFA`), Emerald 400 (`#34D399`) |
| **Light Mode** | `#F8FAFC` (Clean Slate) | `#FFFFFF` (Pure White) | `#0F172A` (Slate 900) | Amber 600 (`#D97706`), Violet 600 (`#7C3AED`), Emerald 600 (`#059669`) |

* **Theme Persistence**: Synced in real-time to `localStorage.getItem('nova_theme')`.
* **Glassmorphism**: Backdrop blur utilities (`backdrop-blur-md`, `backdrop-blur-xl`) with theme-adaptive borders (`border-white/10` vs `border-black/10`).
* **Micro-Animations**: Hover card lifts, button sheens, radar pings, soundwave bars, and pulsing live beacons.

---

## 🏛️ Page Architecture & Components

### 1. Navigation Bar (`Navbar.jsx`)
- **Sticky Glassmorphic Header**: Smooth transition from transparent to backdrop blur upon scrolling.
- **Brand Identity**: Custom graduation cap emblem with live cohort enrollment status badge.
- **Navigation Links**: Quick jump anchors to `#about`, `#features`, `#how-it-works`, `#testimonials`, and `#pricing`.
- **Theme Switcher**: One-click Sun/Moon toggle with smooth rotation transition.
- **Action Triggers**: "Try Demo Class" button and "Log In" trigger.
- **Mobile Menu Drawer**: Full collapsible menu optimized for one-thumb mobile interaction.

---

### 2. Hero Section & Live Classroom Simulator (`Hero.jsx`)
- **Impactful Headline**: *"Where Curiosity Meets Classroom Magic"* with responsive typography and quantified proof pills.
- **Trust Badges**: `NEP 2020 & DPDP Act Certified Safe` • `No Payment Needed (Free Starter Pass)` • `350k+ Active Students Across India`.
- **Infinite Live Marquee Ticker**: Real-time broadcasts highlighting student achievements across Delhi, Kota, Bengaluru, and Mumbai.
- **Interactive Live Classroom Simulator**:
  - **Room #304**: Class 12 CBSE & JEE Advanced Vectors (*Senior Faculty: Prof. Rajesh Verma - Bengaluru Studio*).
  - **Switchable Interactive Workspace Tabs**:
    - 📐 **Calculus Whiteboard**: Dynamic tangent curve with live slope computation ($f'(x) = 2x$) and SECANT/TANGENT SVG visualization.
    - 💻 **Python Code Lab**: Live syntax-highlighted code editor with binary search trace, $O(\log n)$ algorithmic complexity notes, and interactive 10-block memory array visualizer.
    - 🪐 **Physics Orbital Lab**: Keplerian orbital velocity simulation ($v = \sqrt{GM/r}$).
    - 📸 **HD Studio View**: Multi-tile video feed with active speaker waveforms and peer study status indicators.
  - **Classroom Interactions**:
    - **Raise Hand Queue**: Interactive toggle button updating the live participant queue.
    - **Interactive Pop Quiz**: In-class test on power rule derivatives with instant answer evaluation and +50 XP reward.
    - **Moderated Chat Stream**: Real-time student messaging feed featuring student discussions and automated Nova Socratic AI hints.

---

### 3. Interactive Academic Partners Explorer
- Displays top academic partner institutions and Olympiad hubs across India:
  - 🏛️ **DPS R.K. Puram**: CBSE & JEE Foundation Hub (*99.8% Board & JEE Pass Rate*).
  - 🎯 **Kota Olympiad Hub**: IIT-JEE & NEET Physics Labs (*38,000+ JEE Problems Solved*).
  - 📚 **Kendriya Vidyalaya Network (KVS)**: Foundational Mastery & AI (*100% NCERT Exemplar Sync*).
  - 💻 **NPS Bengaluru STEM Guild**: Algorithmic Coding & Olympiads (*Top 5 National INMO Pods*).
  - ⚙️ **IIT Bombay STEM Alumni Hub**: Computational Physics & AI (*15,000+ Capstone Projects*).
  - 🌐 **Khan Academy India**: NEP 2020 Bilingual Mastery in English & Hindi.
- **Touch / Hover State**: Instantly expands the selected institution to reveal co-curriculum specializations, verified metrics, and accreditation tags.

---

### 4. About & Narrative Comparison (`About.jsx`)
- **Narrative**: *Rethinking Education for the Indian Generation*.
- **Quantified Metric Cards**:
  - `94%` Course Completion Rate (vs. 12% industry MOOC average).
  - `350,000+` Active Indian Learners across Delhi, Bengaluru, Mumbai, Kota, Hyderabad, Pune, and 40+ cities.
  - `6,500+` Certified Master Teachers (IIT/NIT alumni and senior CBSE/ICSE faculties).
  - `4.9 / 5.0` Parent & Student Rating based on 48,000+ verified reviews.
- **Comparison Matrix**: Side-by-side architectural breakdown contrasting legacy passive video apps (Zoom/Google Meet/generic video recording sites) with Nova Academy's active, collaborative learning ecosystem.

---

### 5. Features & Subject Tracks (`Features.jsx`)
- **6 Core Platform Pillars**:
  1. *Ultra-HD Live Video & Infinite Collaborative Whiteboard (<50ms latency)*
  2. *Nova AI Socratic Homework Companion (Hint-based tutoring without answer leakage)*
  3. *Gamified Skill Trees & Daily Study Streaks (3.2x longer study engagement)*
  4. *Dynamic Breakout Pods & Peer Study Lounges (1-click pod dispatch)*
  5. *Live In-Class Trivia, Polls & Lightning Quizzes (100% active participation)*
  6. *Teacher Command Center & Automated Rubrics (8.5+ hours saved weekly)*
- **Interactive AI Companion Workspace Preview**:
  - Live 92-day streak tracker and progress milestone bar.
  - Interactive skill tree breakdown for Class 12 CBSE & JEE Math and Algorithms.
  - Socratic dialogue scenario solving terminal velocity with an interactive SVG forces vector diagram ($F_g = F_d$).

---

### 6. How It Works (`HowItWorks.jsx`)
- **3-Step Academic Roadmap**:
  - **Step 01**: Choose Your Subject Track or Join via School Code (Class 6-12, JEE/NEET, NTSE).
  - **Step 02**: Dive into Live Interactive Classes, Multi-User Boards & Breakout Pods.
  - **Step 03**: Master Concepts, Earn Badges & Accelerate Your Academic Future.
- Interactive step visualizer cards featuring verified study streak passports and certified course completion diplomas.

---

### 7. Student & Educator Testimonials (`Testimonials.jsx`)
- Filterable feedback tabs: **All Reviews**, **Students**, **Teachers**, **Parents**.
- Verified review cards with quantified outcome badges:
  - 🎓 **Aarav Sharma** (*DPS R.K. Puram, New Delhi*): Mock score jumped from 140 to 248 in JEE Advanced.
  - 👨‍🏫 **Dr. Rajesh Kulkarni** (*Senior Master Faculty, Bengaluru / ex-Kota*): 10 hours saved weekly on evaluation.
  - 👩‍👧 **Sunita Deshmukh** (*Parent, South Mumbai*): 95+ day consistent study streak for Class 10 & 12 board preparations.

---

### 8. Tuition & Pricing Calculator (`Pricing.jsx`)
- **Interactive Billing Toggle**: Annual (save 20%) vs. Monthly in **Indian Rupees (₹ INR)**.
- **3 Comprehensive Tiers**:
  - **Explorer Pass** (`₹0` / Free Forever): Public masterclasses, community lounges, basic Socratic AI tutor. No credit card or UPI required.
  - **Pro Learner Pass** (`₹799/mo` billed annually / `₹999/mo` monthly): Unlimited live classes (CBSE, ICSE, JEE, NEET), 24/7 AI homework companion, certified diplomas.
  - **Educator & Coaching Pass** (`₹2,499/mo` billed annually / `₹2,999/mo` monthly): Up to 150 students per session, AI grading assistant, parent WhatsApp digests, GST invoice.
- **Coaching & School Partnership Banner**: Custom student seat bundles and teacher training.
- **Interactive FAQ Accordion**: Common questions addressing NEP 2020 alignment, DPDP Act 2023 compliance, and Socratic tutoring methodology.

---

### 9. Complete Footer (`Footer.jsx`)
- **Contact Information Bar**:
  - Direct Support Email: `support@novaacademy.in` (average response time < 5 mins).
  - National Academic Helpline: `+91 1800 258 7890` (Mon–Sat 9:00 AM – 8:00 PM IST).
  - India Campus & Innovation Lab: *Salarpuria Softzone, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103, India*.
- **Official Social Channels**: Scalable SVG icons with custom brand hover colors (𝕏 / Twitter, GitHub, Discord, YouTube, LinkedIn, Instagram).
- **4 Categorized Useful Link Columns**: Subject Tracks, Platform Features, For Educators, Trust & Company.
- **Newsletter Subscription**: *"The Nova Study Spark"* with interactive "Joined!" feedback state.
- **Compliance Badges**: NEP 2020 Aligned, DPDP Act 2023 Certified, ISO 27001 & SOC-2.
- **Bottom Status Bar**: Legal entity notice (*Nova Academy India Pvt. Ltd.*), registered GSTIN (`29AAACN8842K1Z5`), live 99.99% uptime status, and modal triggers.

---

## 🖥️ Interactive Modals

### Authentication Suite (`AuthModal.jsx`)
Accessible from the navigation bar, footer links, and call-to-action buttons:
1. **Student & Educator Log In**:
   - Email (`student@school.ac.in`) and Password inputs with show/hide password toggle.
   - "Remember Me" checkbox and "Forgot Password" mode switcher.
   - Quick SSO options: Google Workspace & School SSO.
2. **Account Sign Up**:
   - Role selection tabs: **Student / Learner**, **Educator**, **Parent**.
   - Full Name, Email, Password with dynamic **Password Strength Meter** (Weak / Good / Strong).
   - DPDP Act 2023 and NEP 2020 consent compliance checkbox.
3. **Forgot Password Recovery**:
   - Password reset workflow with email dispatch and 15-minute verification token simulation.

### Live Classroom Simulator Demo Modal (`DemoModal.jsx`)
A full-screen interactive preview experience offering 3 modes:
- **Mode 1: Live Interactive Whiteboard**: Tangent line derivation for Class 12 CBSE & JEE Advanced with instructor audio note.
- **Mode 2: Socratic AI Tutor Sandbox**: Select problem types across Quadratic Factoring, Newton's Laws of Motion, or Python Memoization to experience step-by-step hint guidance.
- **Mode 3: Live Quiz Arena**: Speed trivia rounds with live score counter (+50 XP) and detailed conceptual explanations.

### Digital Student Pass Generation (`OpenAccountModal.jsx`)
A 3-step student onboarding flow:
1. **Step 1: Student Profile**: Full Name, Email, Academic Level (*Class 6-8*, *Class 9-10*, *Class 11-12 CBSE+JEE/NEET*, *Dropper Batch*, *Engineering*).
2. **Step 2: Study Tracks & Goals**: Select target subjects (*JEE Mathematics, Python & Code, NEET Physics, NTSE Foundation, INMO Olympiad*).
3. **Step 3: Instant Digital Pass**: Generates a stylized digital student ID card with custom avatar, unique student badge number (`NOVA-IND-9942`), and +500 XP bonus.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Optimized inline SVGs for third-party brands
- **Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & Inter
- **State Management**: React Hooks (`useState`, `useEffect`, `useMemo`) + LocalStorage API
- **Error Handling**: React `ErrorBoundary` wrapper protecting against blank screens

---

## 📁 Directory Structure

```text
Landing Page/
├── index.html                   # HTML entry point with Plus Jakarta Sans fonts & SEO meta
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind theme tokens, dark mode class setup
├── vite.config.js               # Vite configuration
├── README.md                    # Project documentation
├── public/                      # Static assets & favicon
└── src/
    ├── main.jsx                 # Application DOM root mount with React ErrorBoundary
    ├── App.jsx                  # Main application orchestrator & theme state
    ├── index.css                # Global design system, glassmorphism, animations
    ├── data/
    │   └── landingData.js       # Centralized Indian content, schools, reviews, INR pricing
    └── components/
        ├── Navbar.jsx           # Glassmorphic header with theme toggle
        ├── Hero.jsx             # Hero section & live interactive classroom simulator
        ├── About.jsx            # Platform narrative and comparison matrix
        ├── Features.jsx         # 6 core learning features with category tabs & AI workspace
        ├── HowItWorks.jsx       # 3-step student onboarding roadmap
        ├── Testimonials.jsx     # Quantified Indian student, teacher, and parent reviews
        ├── Pricing.jsx          # INR tuition pricing calculator & FAQ accordion
        ├── Footer.jsx           # Bengaluru address, helpline, GSTIN, and Indian legal links
        ├── AuthModal.jsx        # Login, Signup, and Forgot Password modal (DPDP Act)
        ├── DemoModal.jsx        # Interactive classroom simulator modal
        └── OpenAccountModal.jsx # 3-step digital student pass generation modal
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18.x or higher)
- npm or yarn

### Installation
Clone the repository and install dependencies:

```bash
cd "Landing Page"
npm install
```

### Running Locally
Start the development server:

```bash
npm run dev
```

Open your browser at **`http://localhost:5173/`** to explore the application.

---

## 📦 Scripts & Build

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run preview` | Locally serves the production build from `dist/` for verification. |

---

## 🛡️ Security, Compliance & Indian Standards

- **NEP 2020 Aligned**: Curriculum mapped to National Education Policy competency and experiential learning frameworks.
- **DPDP Act 2023 Compliant**: Adheres to India's Digital Personal Data Protection Act; student data is encrypted and never sold or monetized.
- **Indian Cloud Hosting**: Fully hosted on Tier-4 Indian data centers with SSL encryption and ISO 27001 data governance.
- **Socratic AI Guarantee**: Proprietary tutoring model calibrated to guide students through inquiries rather than outputting unchecked answers.
- **Accessibility (a11y)**: Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`), keyboard navigation for modals, and descriptive `aria-label` attributes on all interactive elements.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

&copy; 2026 Nova Academy India Pvt. Ltd. (CIN: U72900KA2024PTC184201). All rights reserved.
