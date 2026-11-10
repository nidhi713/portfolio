export const projects = [
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
  },
  {
    id: "agentic-workflow-automation",
    title: "Agentic Workflow Automation Platform",
    summary: "Enterprise autonomous workflow orchestrator leveraging LangChain and FastAPI to coordinate multi-step reasoning.",
    description:
      "Enterprise autonomous workflow orchestrator leveraging LangChain and FastAPI to coordinate multi-step reasoning, external tool execution, and dynamic context caching with real-time UI monitoring.",
    highlights: [
      "Multi-step reasoning with ReAct agent loops",
      "Tool registry with sandboxed execution",
      "Sub-150ms execution with Redis context caching"
    ],
    tags: ["Python", "FastAPI", "LangChain", "React"],
    category: "Agentic AI",
    liveUrl: "https://github.com/nidhi713",
    githubUrl: "https://github.com/nidhi713",
    image: null,
    color: "purple",
    featured: true,
    year: "2024",
    metrics: ["10k+ daily tool calls", "99.4% task completion", "Sub-150ms execution"],
    architecture: {
      overview: "Autonomous agent pipeline employing ReAct (Reason + Act) loops with external tool calling and state persistence.",
      flow: [
        "User Intent Extraction",
        "FastAPI Gateway & Auth",
        "LangChain Orchestrator",
        "Tool Registry & Execution",
        "Context Window Caching",
        "Streaming Response"
      ],
      challenges: [
        "Reduced tool execution hallucination rate from 14.2% to <0.6% using Pydantic schema validation.",
        "Implemented Redis semantic caching layer, dropping average agent token spend by 38% on repeated queries.",
        "Engineered real-time server-sent events (SSE) pipeline enabling token-by-token streaming to the React dashboard."
      ],
      stack: {
        "Core Framework": "LangChain, FastAPI, Python 3.11",
        "Frontend": "React, Tailwind CSS, Lucide",
        "Caching & State": "Redis, PostgreSQL",
        "Deployment": "Docker, AWS ECS"
      }
    }
  },
  {
    id: "rag-retrieval-qa",
    title: "RAG-based Knowledge Retrieval & QA System",
    summary: "Hybrid search retrieval engine combining dense vector embeddings with sparse BM25 indexing via Qdrant.",
    description:
      "Enterprise hybrid search retrieval engine combining dense vector embeddings with sparse BM25 indexing via Qdrant, delivering high-precision contextual question answering over complex document corpora.",
    highlights: [
      "Dense embeddings + sparse BM25 hybrid search",
      "Cross-encoder re-ranking with Cohere",
      "94.8% retrieval recall across 500k+ docs"
    ],
    tags: ["Python", "LlamaIndex", "Qdrant", "Streamlit"],
    category: "RAG & LLMs",
    liveUrl: "https://github.com/nidhi713",
    githubUrl: "https://github.com/nidhi713",
    image: null,
    color: "pink",
    featured: true,
    year: "2024",
    metrics: ["94.8% retrieval recall", "500k+ docs indexed", "2.1s avg response"],
    architecture: {
      overview: "Hybrid retrieval augmented generation (RAG) system with re-ranking and reciprocal rank fusion (RRF).",
      flow: [
        "Document Ingestion & Chunking",
        "Embedding Generation (OpenAI)",
        "Qdrant Vector DB & BM25",
        "Cross-Encoder Re-Ranking",
        "Context Synthesis via LLM",
        "Streamlit Client"
      ],
      challenges: [
        "Solved 'lost in the middle' context degradation by implementing hierarchical recursive character chunking.",
        "Incorporated Cohere Re-ranker to boost Top-3 recall accuracy from 81% to 94.8% across 500k technical documents.",
        "Integrated metadata filtering allowing role-based access control (RBAC) at the embedding retrieval layer."
      ],
      stack: {
        "RAG Orchestration": "LlamaIndex, LangChain",
        "Vector Engine": "Qdrant (HNSW index + BM25)",
        "Models": "OpenAI text-embedding-3-large, GPT-4o",
        "Interface": "Streamlit, Python"
      }
    }
  },
  {
    id: "realtime-ml-pipeline",
    title: "Real-Time Data Analytics & ML Pipeline",
    summary: "End-to-end predictive analytics pipeline processing continuous event streams feeding Tableau BI dashboards.",
    description:
      "End-to-end predictive analytics pipeline processing continuous event streams, executing automated feature engineering, and feeding interactive Tableau performance dashboards.",
    highlights: [
      "1M+ records processed hourly with zero loss",
      "Automated feature engineering & drift monitoring",
      "Live executive business intelligence dashboards"
    ],
    tags: ["Python", "SQL", "Tableau", "Scikit-Learn"],
    category: "ML & Analytics",
    liveUrl: "https://github.com/nidhi713",
    githubUrl: "https://github.com/nidhi713",
    image: null,
    color: "green",
    featured: false,
    year: "2024",
    metrics: ["1M+ records processed/hr", "0.91 AUC-ROC score", "Live executive BI"],
    architecture: {
      overview: "High-throughput stream processing and machine learning feature store feeding executive intelligence dashboards.",
      flow: [
        "Kafka Event Stream",
        "Feature Engineering (Pandas / NumPy)",
        "Model Inference (Scikit-Learn)",
        "MySQL Analytical Data Mart",
        "Tableau Automated Refresh",
        "Alerting Engine"
      ],
      challenges: [
        "Automated continuous drift detection flagging feature distribution changes before production degradation.",
        "Optimized MySQL complex aggregation queries with covering indexes, slashing report query times by 74%.",
        "Engineered reliable fallback imputations for missing stream telemetry data ensuring 99.9% pipeline uptime."
      ],
      stack: {
        "Data & ML": "Python, Scikit-Learn, Pandas, NumPy",
        "Storage": "MySQL, Redis",
        "Visualization": "Tableau Desktop / Server",
        "ETL Scheduling": "Apache Airflow, Docker"
      }
    }
  },
  {
    id: "multi-agent-orchestrator",
    title: "Autonomous Multi-Agent Task Orchestrator",
    summary: "Collaborative multi-agent framework built with AutoGen and OpenAI API for complex software tasks.",
    description:
      "Collaborative multi-agent framework built with AutoGen and OpenAI API, enabling specialized subagents (researcher, coder, reviewer) to collaboratively break down and execute complex software workflows.",
    highlights: [
      "Collaborative researcher, coder & reviewer personas",
      "Isolated sandboxed code runner in Docker",
      "3x speedup vs standard single-prompt LLM"
    ],
    tags: ["Python", "AutoGen", "OpenAI API", "Next.js"],
    category: "Agentic AI",
    liveUrl: "https://github.com/nidhi713",
    githubUrl: "https://github.com/nidhi713",
    image: null,
    color: "cyan",
    featured: true,
    year: "2024",
    metrics: ["3x speedup vs single LLM", "Zero-shot tool use", "Self-healing execution"],
    architecture: {
      overview: "Hierarchical multi-agent network with specialized conversational personas and iterative feedback critique loops.",
      flow: [
        "Task Dispatcher",
        "Researcher Agent",
        "Coder Agent",
        "Static Linter & Runner",
        "Reviewer Critic Agent",
        "Synthesis & Verification"
      ],
      challenges: [
        "Eliminated infinite conversational deadlocks between subagents via deterministic state graphs and turn caps.",
        "Built isolated Docker execution sandbox preventing untrusted code execution from breaching host environment.",
        "Achieved 3x faster task execution by parallelizing independent research and implementation sub-tasks."
      ],
      stack: {
        "Agent Framework": "Microsoft AutoGen, LangGraph",
        "Inference": "OpenAI GPT-4o, Claude 3.5 Sonnet",
        "Sandbox": "Docker Python API",
        "Web Interface": "Next.js 14, Tailwind CSS"
      }
    }
  }
];

export const categories = [
  "All",
  "Agentic AI & Data Analytics",
  "Computer Vision & Deep Learning",
  "Agentic AI",
  "RAG & LLMs",
  "ML & Analytics"
];
