# 📘 Portfolio Site — Component Documentation

> **Stack:** React 18 · Vite 5 · Tailwind CSS 3 · Lucide React  
> **Theme:** Dark mode (`#0a0a0c`) · Glassmorphism · Cyan / Purple / Pink / Green accents  
> **Status:** Production build ✅ PASSING (1478 modules, 0 errors)

---

## Quick Reference

| Component | File | Key Features |
|---|---|---|
| **App** | [`src/App.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/App.jsx) | Root layout, noise texture overlay, semantic `<main>` wrapper |
| **Navbar** | [`src/components/Navbar.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Navbar.jsx) | Scroll-reactive glass blur, active section tracking, mobile slide-down drawer |
| **Hero** | [`src/components/Hero.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Hero.jsx) | Typewriter role animation, 4 stats, 3-layer radial glow bg, dot grid, CTA buttons |
| **Projects** | [`src/components/Projects.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Projects.jsx) | Category filter tabs, `IntersectionObserver` scroll entry, 3-col responsive grid |
| **ProjectCard** | Inside `Projects.jsx` | Hover-lift card (`scale-102`), Live Demo + GitHub buttons, metrics chips, tech tags |
| **Skills** | [`src/components/Skills.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Skills.jsx) | 4-category grid, computed proficiency average, bottom 32-tag cloud |
| **SkillCategory** | Inside `Skills.jsx` | Category card with emoji icon, skill count badge, per-category color theme |
| **SkillBar** | Inside `Skills.jsx` | Atomic animated progress bar (0→N% width transition, glowing thumb) |
| **Contact** | [`src/components/Contact.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Contact.jsx) | Validated form (live feedback), success animation, availability pill, social cards |
| **Footer** | [`src/components/Footer.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Footer.jsx) | Brand mark, dynamic year, 4 social buttons, back-to-top smooth scroll |
| **Projects Data** | [`src/data/projects.js`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/data/projects.js) | 6 sample projects + `categories` filter array |
| **Skills Data** | [`src/data/skills.js`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/data/skills.js) | 32 skills + `categoryColors` token map |
| **Globals CSS** | [`src/styles/globals.css`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/styles/globals.css) | Custom scrollbar, selection color, `.glass-card`, `.btn-primary`, `.input-field` |

---

## Detailed Component Breakdown

---

### 1. `App.jsx` — Root Layout

**Path:** `src/App.jsx`

#### Responsibilities
- Sets global dark background `#0a0a0c`
- Applies an inline SVG fractal-noise texture overlay at `2.5%` opacity for a subtle film grain look across the whole site
- Composes all components in visual and semantic reading order
- Sets `overflow-x-hidden` on the root container to prevent any horizontal scroll jitter during animations

#### Noise Overlay Snippet
```jsx
<div
  className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
  style={{
    backgroundImage: `url("data:image/svg+xml,...feTurbulence type='fractalNoise'...")`,
  }}
/>
```
`pointer-events-none` guarantees it never intercepts clicks or touch events.

---

### 2. `Navbar.jsx` — Navigation

**Path:** `src/components/Navbar.jsx`

#### State
- `scrolled` (`boolean`): True when `window.scrollY > 20`. Switches navbar from `bg-transparent` to `bg-[#0a0a0c]/80 backdrop-blur-xl border-b shadow-lg`.
- `mobileOpen` (`boolean`): Toggles the slide-down mobile menu drawer.
- `activeSection` (`string`): The section ID currently scrolled to (`'about'`, `'projects'`, `'skills'`, or `'contact'`).

#### Active Section Detection
```javascript
const onScroll = () => {
  setScrolled(window.scrollY > 20)
  const sections = ['about', 'projects', 'skills', 'contact']
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      setActiveSection(id)
      break
    }
  }
}
```
Checks sections in reverse order so the lowest visible section wins.

#### Nav Items Array
```javascript
const navItems = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]
```

---

### 3. `Hero.jsx` — Landing Section

**Path:** `src/components/Hero.jsx`  
**Anchor:** `#about`

#### Responsibilities
- High-impact introduction with typewriter text animation
- Displays current availability status pill with an animated pinging indicator
- Renders 4 primary performance/credibility stats
- Provides primary action CTAs (Projects, Contact, Resume download)
- Multi-layer glow background with radial dot grid

#### Typewriter Hook
Cycles through `roles = ['Full-Stack Engineer', 'UI/UX Architect', 'AI Integration Specialist', 'Open Source Contributor']`:
- **Typing speed:** 60ms/char
- **Pause at end of word:** 2000ms
- **Deleting speed:** 35ms/char
- **Blinking cursor:** Inline `w-0.5 h-6 bg-[#00d4ff] animate-pulse`

#### Stats Grid
```javascript
const stats = [
  { value: '5+',   label: 'Years Experience'    },
  { value: '40+',  label: 'Projects Shipped'    },
  { value: '12k+', label: 'GitHub Stars'        },
  { value: '99%',  label: 'Client Satisfaction' },
]
```
Rendered in a 4-column `.glass-card` responsive grid with gradient numbers.

---

### 4. `Projects.jsx` & `ProjectCard` — Project Showcase

**Path:** `src/components/Projects.jsx`  
**Anchor:** `#projects`

#### Responsibilities
- Drives the core portfolio grid from decoupled `src/data/projects.js`
- Category filter tabs (`All`, `AI/ML`, `Full-Stack`, `Frontend`, `Backend`, `DevOps`)
- Scroll-triggered entry animation using `IntersectionObserver`
- Responsive 3-column card grid (1 col mobile, 2 cols sm, 3 cols lg)

#### `ProjectCard` Anatomy
Each card represents a single project with:
1. **Preview Container (`h-44`):**
   - Per-project accent background tint
   - Linear-gradient 24px dot-grid overlay
   - Year stamp (top-left, monospace)
   - "★ Featured" badge (top-right, if `project.featured === true`)
   - Category badge (bottom-left)
   - Centered `<Zap>` icon with `group-hover:scale-110` animation
2. **Content Area:**
   - Title (hover color changes to project accent)
   - 3-line clamped description
   - Metrics pills (`metrics[]`) in monospace
   - Tech stack tags (`tags[]`) rendered as `.tech-badge` chips
3. **Card Actions:**
   - **Live Demo button:** Gradient-bordered, accent text, opens `project.liveUrl` in new tab
   - **Source button:** Ghost glass button with GitHub icon, opens `project.githubUrl` in new tab

#### Color Theming (`colorMap`)
Each project specifies a `color` (`cyan` | `purple` | `pink` | `green`). The card dynamically applies matching border colors, text tints, and hover glow halos.

---

### 5. `Skills.jsx`, `SkillCategory` & `SkillBar` — Skills Matrix

**Path:** `src/components/Skills.jsx`  
**Anchor:** `#skills`

#### Responsibilities
- Visual breakdown of 32 technical competencies across 4 domains
- Dynamically computes total skills count and overall average proficiency percentage
- Animated progress bars that fill smoothly when scrolled into view
- Full tag cloud at the bottom of the section

#### Skill Categories
1. **Frontend** (Cyan `#00d4ff`, emoji ⚛️): React, Next.js, TypeScript, Tailwind, Framer Motion, Vite, WebGL/Three.js, Storybook
2. **Backend** (Purple `#7c3aed`, emoji ⚙️): Node.js, FastAPI, Go, PostgreSQL, Redis, GraphQL, tRPC, WebSockets
3. **AI / ML** (Pink `#ec4899`, emoji 🤖): OpenAI API, LangChain, Stable Diffusion, PyTorch, Hugging Face, Vector DBs, Prompt Engineering, RAG Pipelines
4. **Cloud / DevOps** (Green `#10b981`, emoji ☁️): AWS, Vercel/Netlify, Docker, Kubernetes, Terraform, GitHub Actions, Datadog/Grafana, Cloudflare Workers

#### `SkillBar` Fill Logic
```javascript
width: visible ? `${level}%` : '0%'
// Transitions over 1000ms ease-out with a 200ms delay
// Adds a glowing box-shadow matching the category accent when visible
```

---

### 6. `Contact.jsx` — Contact & Socials

**Path:** `src/components/Contact.jsx`  
**Anchor:** `#contact`

#### Responsibilities
- Two-column section: Left panel for availability info & direct social links; right panel for interactive form
- Full client-side validation with real-time error states
- Animated loading and success confirmation states

#### Validation Rules
- **Name:** Minimum 2 characters
- **Email:** Standard email regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`
- **Subject:** Minimum 4 characters
- **Message:** Minimum 20 characters (live character counter shows `length/20`)

#### Visual Feedback
- Red border + error icon when a touched field fails validation
- Subtle green border when a touched field passes validation
- Submit button shows a spinning `<Loader2>` while `status === 'sending'`
- Upon success, form replaces itself with a green checkmark card for 5 seconds

#### Social Channels
GitHub (`@alexcarter`), LinkedIn (`in/alexcarter`), Twitter (`@alexcarter_dev`), Email (`alex@example.com`).

---

### 7. `Footer.jsx` — Page Bottom

**Path:** `src/components/Footer.jsx`

#### Responsibilities
- Compact 3-part layout: brand credit, social icon row, and smooth "Back to top" link
- Computes current copyright year dynamically: `new Date().getFullYear()`
- Minimalist top border separator (`border-white/[0.06]`)

---

## Data Structures

### Project Item (`src/data/projects.js`)
```javascript
{
  id: 1,
  title: "NexusAI Dashboard",
  description: "A real-time AI analytics platform...",
  tags: ["React", "FastAPI", "WebSockets", "OpenAI"],
  category: "AI/ML",           // "AI/ML" | "Full-Stack" | "Frontend" | "Backend" | "DevOps"
  liveUrl: "https://...",
  githubUrl: "https://...",
  image: null,
  color: "cyan",               // "cyan" | "purple" | "pink" | "green"
  featured: true,              // Shows ★ Featured badge
  year: "2024",
  metrics: ["10k+ API calls/day", "98ms latency"],
}
```

### Skill Item (`src/data/skills.js`)
```javascript
{
  name: "React",
  level: 95, // 0 to 100
}
```

---

## Global CSS Classes (`src/styles/globals.css`)

| Class | Description |
|---|---|
| `.glass-card` | `bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl` |
| `.btn-primary` | Cyan→Purple gradient, glow shadow, scale-103 hover |
| `.btn-secondary` | Ghost border button, cyan hover tint |
| `.section-label` | Uppercase pill badge with cyan border and text |
| `.tech-badge` | Monospace chip for tags and categories |
| `.input-field` | Styled form inputs with smooth cyan focus ring |
| `.gradient-text` | Cyan → Purple → Pink text clip |

---

## Development & Build Commands

```powershell
# Start local development server with hot reload
npm run dev

# Run Vite production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

