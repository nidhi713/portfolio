export const projects = [
  {
    id: "megh-mitra-ai",
    title: "Megh Mitra — AI Weather & Advisory System",
    category: "Generative AI & Agro-Meteorology",
    summary: "Intelligent agro-meteorological conversational AI and voice advisory platform developed for Bihar Mausam Sewa Kendra (BMSK Patna).",
    description: "Production conversational AI system combining RAG architectures, LLMs, and real-time weather telemetry to provide localized agro-meteorological advisories, weather risk alerts, and voice-assisted query resolution.",
    highlights: [
      "RAG architecture integrated with real-time meteorological observation feeds",
      "Bilingual agro-advisory inference tailored for localized farming communities",
      "High-availability API backend powering telemetry queries and localized alerts"
    ],
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "RAG / LLMs",
      "Agro-Meteorology",
      "Generative AI"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/nidhi713",
    featured: true,
    color: "cyan",
    year: "2026",
    metrics: ["BMSK Production System", "RAG Knowledge Engine", "Live Telemetry Ingestion"],
    architecture: {
      overview: "Enterprise RAG and Generative AI system built for Bihar Mausam Sewa Kendra (BMSK Patna) to deliver real-time localized weather telemetry and automated advisory intelligence.",
      flow: [
        "Automatic Telemetry Ingestion (Weather Stations)",
        "Data Validation & Preprocessing Pipeline",
        "RAG Vector Embeddings & Context Retrieval",
        "LLM Agro-Advisory Reasoning Engine",
        "FastAPI Microservice Response Synthesis",
        "End-User Advisory Dissemination"
      ],
      challenges: [
        "Engineered low-latency context retrieval fusing tabular weather data with unstructured agricultural advisory guidelines.",
        "Implemented strict hallucination safeguards and guardrails ensuring agricultural safety and forecast reliability.",
        "Designed asynchronous REST microservices processing concurrent multi-station meteorological telemetry."
      ],
      stack: {
        "AI & RAG": "Python, LangChain, RAG Architecture, LLMs",
        "Backend & APIs": "FastAPI, Pydantic, Uvicorn",
        "Data & Telemetry": "Pandas, NumPy, Time-Series Weather Data",
        "Organization": "Bihar Mausam Sewa Kendra (BMSK Patna)"
      }
    }
  },
  {
    id: "ai-data-analyst-agent",
    title: "AI-Powered Data Analyst Agent",
    category: "Agentic AI & Data Analytics",
    summary: "Autonomous AI agent system designed to automate exploratory data analysis, SQL query generation, and visualization pipelines.",
    description: "An end-to-end agentic workflow that converts natural language queries into complex data analyses, automated visual charts, and actionable executive insights.",
    highlights: [
      "Autonomous query generation & statistical analysis workflow",
      "Automated data visualization and insight generation",
      "Embedded interactive video demo showcasing real-time execution"
    ],
    tags: [
      "Python",
      "LangChain / AI Agents",
      "Pandas",
      "SQL",
      "LLMs",
      "FastAPI / Streamlit"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/nidhi713/AI-Powered-Data-Analyst-Agent",
    demoVideoUrl: "https://raw.githubusercontent.com/nidhi713/AI-Powered-Data-Analyst-Agent/main/demo.mp4",
    featured: true,
    color: "purple",
    year: "2024",
    metrics: ["Autonomous SQL & EDA", "Dynamic Chart Synthesis", "Interactive Video Demo"],
    architecture: {
      overview: "Autonomous data science agent capable of executing complex relational queries, pandas statistical analyses, and generating interactive charts directly from natural language prompts.",
      flow: [
        "Natural Language Query Ingestion",
        "Schema & Table Inspection",
        "LangChain SQL / Python Code Synthesizer",
        "Sandboxed Execution & REPL Loop",
        "Automated Matplotlib / Plotly Visualization",
        "Narrative Executive Insight Summary"
      ],
      challenges: [
        "Eliminated SQL injection and destructive execution hazards using read-only AST parser and sandboxed Python runner.",
        "Engineered automatic syntax correction loop: if code execution errors out, the agent reflects on traceback and self-heals in sub-1s.",
        "Generated publication-ready charts and dynamic markdown data summaries formatted for executive presentations."
      ],
      stack: {
        "Agent Framework": "LangChain, ReAct Agent Architecture",
        "Data & Analysis": "Python, Pandas, NumPy, SQLite / PostgreSQL",
        "Visualization & UI": "Streamlit, FastAPI, Plotly",
        "Repository": "github.com/nidhi713/AI-Powered-Data-Analyst-Agent"
      }
    }
  },
  {
    id: "blinkit-sales-analysis",
    title: "Blinkit Sales & Performance Analysis",
    category: "Data Analytics & Visualization",
    summary: "Comprehensive end-to-end data analysis pipeline evaluating sales metrics, outlet performance, and consumer purchasing patterns.",
    description: "Exploratory data analysis and visualization pipeline built to analyze sales performance, item type distributions, outlet size efficiency, and revenue drivers across various location tiers.",
    highlights: [
      "Statistical EDA across sales revenue, fat content, and outlet age",
      "Item visibility and outlet size impact analysis",
      "Rich visual dashboards displaying key business performance indicators (KPIs)"
    ],
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Analytics / EDA"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/nidhi713/Blinkit-Sales-Analysis-Python",
    imageUrl: "https://raw.githubusercontent.com/nidhi713/Blinkit-Sales-Analysis-Python/main/Blinkit%20Project/images/outlet_size_sales.png",
    featured: true,
    color: "green",
    year: "2024",
    metrics: ["Statistical EDA", "Outlet Size & Location KPIs", "Custom Matplotlib Charts"],
    architecture: {
      overview: "Comprehensive exploratory data analysis and visualization workflow evaluating grocery retail telemetry, item visibility, and location tier revenue distribution.",
      flow: [
        "Raw Retail Dataset Ingestion (8,523 records)",
        "Data Cleaning & Missing Value Imputation (Pandas)",
        "Feature Engineering (Outlet Age, Item Categorization)",
        "Statistical Distribution & Correlation Analysis",
        "Matplotlib & Seaborn Chart Generation",
        "Executive Strategy Recommendations"
      ],
      challenges: [
        "Handled inconsistent categorical labels ('LF', 'low fat', 'reg') by implementing normalized standardization rules.",
        "Discovered that Tier 3 cities drove the highest outlet sales volume despite lower individual item visibility.",
        "Constructed comparative subplots displaying outlet establishment year trends and fat-content pricing distributions."
      ],
      stack: {
        "Data Manipulation": "Python 3.10+, Pandas, NumPy",
        "Visualization": "Matplotlib, Seaborn",
        "Environment": "Jupyter Notebook / VS Code",
        "Repository": "github.com/nidhi713/Blinkit-Sales-Analysis-Python"
      }
    }
  },
  {
    id: "mind-wandering-detection",
    title: "Vision-Based Mind Wandering Detection",
    category: "Computer Vision & Deep Learning",
    summary: "Real-time non-invasive attention and cognitive engagement tracking system using computer vision techniques.",
    description: "A machine learning pipeline designed to detect user mind-wandering and attentional drift in real time by analyzing facial landmarks, eye-gaze vectors, and head pose dynamics.",
    highlights: [
      "Real-time facial landmark & eye-gaze tracking",
      "Head pose estimation for cognitive state classification",
      "Lightweight inference pipeline suitable for edge/web deployment"
    ],
    tags: [
      "Python",
      "OpenCV",
      "PyTorch / TensorFlow",
      "Computer Vision",
      "Facial Landmarks",
      "Deep Learning"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/nidhi713/Vision-based-mind-wandering-detection-",
    featured: true,
    color: "cyan",
    year: "2024",
    metrics: ["Real-time Gaze Tracking", "Head Pose Estimation", "Edge-optimized Inference"],
    architecture: {
      overview: "Real-time non-invasive attention and cognitive engagement tracking system using computer vision techniques and deep learning classifiers.",
      flow: [
        "Video Stream Ingestion",
        "Facial Landmark Extraction (OpenCV / MediaPipe)",
        "Eye-Gaze Vector Estimation",
        "Head Pose Angular Dynamics",
        "Cognitive Drift Classification (PyTorch)",
        "Real-Time Telemetry & Alerting"
      ],
      challenges: [
        "Real-time facial landmark & eye-gaze tracking running at 30+ FPS without dedicated GPU overhead.",
        "Head pose estimation for cognitive state classification calibrated against 3D facial coordinates.",
        "Lightweight inference pipeline suitable for edge/web deployment with minimal CPU footprint."
      ],
      stack: {
        "Vision & Landmarks": "OpenCV, MediaPipe Face Mesh, Dlib",
        "Deep Learning": "PyTorch, TensorFlow",
        "Pipeline Language": "Python 3.10+",
        "Repository": "github.com/nidhi713/Vision-based-mind-wandering-detection-"
      }
    }
  }
];

export const categories = [
  "All",
  "Generative AI & Agro-Meteorology",
  "Agentic AI & Data Analytics",
  "Data Analytics & Visualization",
  "Computer Vision & Deep Learning"
];
