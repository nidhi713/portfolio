# 📘 Nidhi Kumari — Portfolio Architecture & Component Documentation

> **Identity:** Nidhi Kumari — Agentic AI Engineer & Systems Developer  
> **Tagline:** Building Autonomous AI Agents & Intelligent Systems  
> **Stack:** React 18 · Vite 5 · Tailwind CSS 3 · Lucide React  
> **Status:** Production build ✅ PASSING (`dist/` verified, 0 errors)

---

## 🧭 Navigation & Section Map

| Section | Component File | Key Highlights |
|---|---|---|
| **Header** | [`src/components/Navbar.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Navbar.jsx) | `NK` monogram logo, glass backdrop-blur, dynamic active section indicator, responsive mobile menu drawer. |
| **Hero** | [`src/components/Hero.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Hero.jsx) | Typewriter role loop, 4 credibility stats, multi-layer ambient glows, direct CTAs, and verified social links. |
| **Projects** | [`src/components/Projects.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Projects.jsx) | Category-filtered showcase (Agentic AI, RAG & LLMs, ML & Analytics, Data Analytics & Visualization). Supports inline MP4 video execution demo and custom chart image preview modals. |
| **Skills** | [`src/components/Skills.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Skills.jsx) | Categorized matrix: AI & GenAI, Data Science & ML, Web & Cloud. Animated percentage bars. |
| **Experience** | [`src/components/Experience.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Experience.jsx) | Verified timeline: AI Intern (Megha Mitra Project @ BMSK Patna), AI & Data Science Intern (Grade A @ C-DAC Patna), and Agentic Systems Developer. |
| **Certifications** | [`src/components/Certifications.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Certifications.jsx) | Verified credentials: C-DAC Patna (Grade A), IIT Roorkee NPTEL Elite Topper (90%), ExcelR Data Analysis, and 200+ Solved DSA benchmark. Includes local file preview and modal viewer. |
| **Contact** | [`src/components/Contact.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Contact.jsx) | Production-ready live fetch API submission, validation state engine, direct channels, and availability badge. |
| **Footer** | [`src/components/Footer.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Footer.jsx) | Dynamic copyright year, verified profile URLs, smooth back-to-top scroll. |

---

## 🛠️ Data Layers

### 1. Projects Store (`src/data/projects.js`)
Configured with 7 enterprise AI/ML, Agentic, Computer Vision & Data Analytics entries:
1. **Blinkit Sales & Performance Analysis**: Python, Pandas, NumPy, Matplotlib, Seaborn, EDA ([Repo](https://github.com/nidhi713/Blinkit-Sales-Analysis-Python) · Custom Chart Visual Rendering)
2. **AI-Powered Data Analyst Agent**: LangChain, Python, Pandas, SQL, LLMs, Streamlit ([Repo](https://github.com/nidhi713/AI-Powered-Data-Analyst-Agent) · Interactive Video Demo Supported)
3. **Vision-Based Mind Wandering Detection**: Python, OpenCV, PyTorch / TensorFlow, Computer Vision, Facial Landmarks ([Repo](https://github.com/nidhi713/Vision-based-mind-wandering-detection-))
4. **Agentic Workflow Automation Platform**: LangChain, FastAPI, React, Python
5. **RAG-based Knowledge Retrieval & QA System**: LlamaIndex, Qdrant, Streamlit, Python
6. **Real-Time Data Analytics & ML Pipeline**: Python, SQL, Tableau, Scikit-Learn
7. **Autonomous Multi-Agent Task Orchestrator**: Python, AutoGen, OpenAI API, Next.js

### 2. Skills Matrix (`src/data/skills.js`)
1. **AI & GenAI**: LangChain (95%), LlamaIndex (92%), Agentic Workflows (96%), RAG Architecture (94%), OpenAI / Gemini APIs (95%), Hugging Face (88%)
2. **Data Science & ML**: Python (98%), PyTorch (88%), Scikit-Learn (92%), Pandas & NumPy (95%), MySQL (89%), Tableau (85%)
3. **Web & Cloud**: React (92%), Node.js (88%), FastAPI (94%), Tailwind CSS (93%), Docker (87%), Git / GitHub (95%), Cloud Deployment (90%)

### 3. Certifications & Achievements (`src/data/certifications.js`)
1. **AI & Data Science Internship Certificate**: C-DAC Patna · **Grade A** (Dec 2025 – Jan 2026) · Direct Certificate View (`/cdac certificate.png`)
2. **Fundamentals of Object-Oriented Programming**: IIT Roorkee / NPTEL · **Elite Certificate + Top 5% Topper (90%)** (Jan – Apr 2025) · Direct PDF View (`/Fundamentals of Object Oriented Programming (1).pdf`)
3. **Data Analysis Certification**: ExcelR · Certified Data Analyst (Sep 2025)
4. **Key Problem Solving Benchmark**: 200+ Solved DSA Problems in C++ and Python

### 4. Resume Document Asset
- Direct file: `public/nidhi_resume.pdf`
- Wireup: Hero CTA button (`download="Nidhi_Kumari_Resume.pdf"`), Navbar header button, and Command Palette quick action.

---

## 🌐 Verified Profile Links

- **GitHub:** [https://github.com/nidhi713](https://github.com/nidhi713)
- **LinkedIn:** [https://www.linkedin.com/in/nidhi-kumari-6b0331308/](https://www.linkedin.com/in/nidhi-kumari-6b0331308/)
- **Email:** [mailto:nidhitiwaryy011@gmail.com](mailto:nidhitiwaryy011@gmail.com)

---

## ⚡ Form Integration Details

In [`src/components/Contact.jsx`](file:///c:/Users/dell/my-portfolio-site/my-portfolio-site/src/components/Contact.jsx), form submissions use standard `fetch` with configurable environment variables:

```javascript
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || 'https://api.web3forms.com/submit'
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'your-key'
```

To configure your own live Web3Forms key, simply create a `.env.local` file:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
```
