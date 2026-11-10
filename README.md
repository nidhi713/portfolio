# 🚀 Modern Developer Portfolio

A high-performance, dark-mode personal developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed for full-stack engineers and architects to showcase deployed applications, core technical skills, and client satisfaction metrics.

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## ✨ Features

- **Dark Mode & Glassmorphism Aesthetic:** Modern `#0a0a0c` dark theme with `backdrop-blur-xl` frosted cards and glowing accent halos.
- **Dynamic Typewriter Headline:** Interactive rotating roles on the Hero section with realistic typewriter micro-interaction.
- **Decoupled Data Architecture:** Projects and skills are completely decoupled into `src/data/projects.js` and `src/data/skills.js` for instant updates.
- **Filterable Showcase Grid:** Sort projects by categories (AI/ML, Full-Stack, Frontend, Backend, DevOps) with direct Live Demo and GitHub buttons.
- **Animated Skill Matrix:** Category cards with scroll-triggered proficiency bars that fill progressively with colored glows.
- **Interactive Contact Form:** Client-side validation with real-time error states, character counter, and instant visual feedback.
- **Fully Responsive:** Smooth navigation on mobile, tablet, and widescreen displays with a glass mobile navigation drawer.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Bundler:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter & JetBrains Mono (via Google Fonts)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm, yarn, or pnpm

### Installation

1. Clone or navigate into the repository:
   ```bash
   cd my-portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

   Open your browser to `http://localhost:5173`.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
my-portfolio-site/
├── public/                 # Static assets (favicon, resume placeholder)
├── src/
│   ├── components/         # Modular UI Components (Navbar, Hero, Projects, Skills, Contact, Footer)
│   ├── data/               # Decoupled project and skill data files
│   ├── styles/             # Global CSS and Tailwind definitions
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application mount point
├── index.html              # HTML template & font links
├── tailwind.config.js      # Tailwind design system extensions
├── vite.config.js          # Vite build configuration
├── COMPONENTS.md           # Comprehensive component documentation
└── README.md
```

---

## 📝 Customization

See the detailed component guide in [`COMPONENTS.md`](./COMPONENTS.md) for step-by-step instructions on updating projects, skills, branding, and setting up contact form backend integrations (e.g. Resend, EmailJS, or Formspree).

---

## 📄 License

This project is licensed under the MIT License - feel free to customize and use it for your own personal portfolio!
