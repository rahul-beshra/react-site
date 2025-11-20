# 🌌 NovaSite – Modern React + Tailwind Starter

NovaSite is a **modern React + Vite + Tailwind CSS** starter kit for building beautiful, fast, and scalable web interfaces.

It includes:

- A polished, responsive UI with **dark mode**
- Multiple pages (Home, Projects, Blog, About)
- Reusable **UI components** and ready-made sections
- Clean, maintainable **file structure**
- Static, deployment-ready build (no backend required)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
- [Customization](#customization)
- [Folder Details](#folder-details)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NovaSite is designed to feel like a **real product starter**, not just a blank boilerplate.

Use it for:

- Personal / developer portfolios  
- Product or SaaS landing pages  
- Minimal documentation-style sites  
- Small marketing or content-driven sites  

The focus is on:

- **Beautiful defaults** – typography, spacing, dark mode, and layout  
- **Sensible architecture** – easy to extend as the project grows  
- **Low friction** – React, Vite, and Tailwind already wired together  

---

## Features

### 🎨 UI & Experience

- Modern, clean design using Tailwind CSS  
- **Dark / Light theme** with:
  - Theme toggle in the navbar  
  - Persistence using `localStorage`  
- Glassmorphism-style cards and sections  
- Fully responsive across desktop, tablet, and mobile  

### 📄 Pages & Sections

**Pages**

- `Home` – Hero, Features, Projects preview, Testimonials, CTA, Contact  
- `Projects` – Filterable project list using static data  
- `Blog` – Blog post previews with date & read-time metadata  
- `About` – Timeline + skills overview  

**Sections**

- `Hero` – Landing hero with primary CTAs  
- `Features` – Highlight main product features  
- `ProjectsPreview` – Spotlight projects on the home page  
- `Testimonials` – Social proof / feedback section  
- `CTA` – Call-to-action strip  
- `ContactSection` – Contact form UI (front-end only, ready for your backend)

### 🧱 Architecture & Code

- React functional components with hooks  
- **React Router** for client-side routing  
- Theme managed via **React Context**  
- Reusable UI primitives:
  - Buttons, Cards, Containers, Inputs, Textareas, Badges, Pills, etc.  
- Static data modules for:
  - Projects, blog posts, testimonials, navigation, timeline  

---

## Tech Stack

- **React 18**  
- **Vite** (dev server & build tool)  
- **Tailwind CSS**  
- **React Router v6**  
- **PostCSS + Autoprefixer**  

---

## Project Structure

```bash
react-site/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
├── jsconfig.json
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── router.jsx
    ├── index.css
    │
    ├── context/
    │   └── ThemeContext.jsx
    │
    ├── hooks/
    │   └── useScrollToHash.js
    │
    ├── data/
    │   ├── navLinks.js
    │   ├── projects.js
    │   ├── blogPosts.js
    │   ├── testimonials.js
    │   └── timeline.js
    │
    ├── layout/
    │   ├── Navbar.jsx
    │   ├── MobileNav.jsx
    │   ├── Footer.jsx
    │   └── ThemeToggle.jsx
    │
    ├── components/
    │   ├── ui/
    │   │   ├── Button.jsx
    │   │   ├── Card.jsx
    │   │   ├── Container.jsx
    │   │   ├── SectionHeader.jsx
    │   │   ├── Input.jsx
    │   │   ├── Textarea.jsx
    │   │   ├── Badge.jsx
    │   │   └── Pill.jsx
    │   │
    │   └── sections/
    │       ├── Hero.jsx
    │       ├── Features.jsx
    │       ├── ProjectsPreview.jsx
    │       ├── Testimonials.jsx
    │       ├── CTA.jsx
    │       └── ContactSection.jsx
    │
    └── pages/
        ├── Home.jsx
        ├── Projects.jsx
        ├── Blog.jsx
        └── About.jsx
```

---

## Getting Started

### Prerequisites

- Node.js  
- npm / yarn / pnpm

### Installation

git clone https://github.com/rahul-beshra/react-site.git
cd react-site  
npm install  

Start dev server:  
npm run dev  

---

## Deployment

### Vercel

vercel  

### Netlify

npm run build  
Upload `/dist`  

### GitHub Pages

Set `base` in `vite.config.js`  
Build and deploy `/dist`  

---

## Customization

Adjust Tailwind config, edit data files, modify UI components, or extend layouts and sections.

---

## Contributing

Contributions are welcome.

---

## License

MIT License.

Made with ❤️ using React, Vite, and Tailwind CSS.
