import { useState, useEffect, useRef } from 'react'
import {
  Search, Terminal, Copy, Check, FileText,
  ExternalLink, Sparkles, X, CornerDownLeft, ArrowRight, Linkedin, Github
} from 'lucide-react'

const navActions = [
  { label: 'Jump to About / Hero', href: '#about', category: 'Navigation' },
  { label: 'Explore AI Projects', href: '#projects', category: 'Navigation' },
  { label: 'Inspect Skills Arsenal', href: '#skills', category: 'Navigation' },
  { label: 'View Career Experience', href: '#experience', category: 'Navigation' },
  { label: 'View Verified Certifications', href: '#certifications', category: 'Navigation' },
  { label: 'Send Direct Message', href: '#contact', category: 'Navigation' },
]

const aiResponses = {
  about: "Nidhi Kumari is an Agentic AI Engineer & Systems Developer specializing in multi-agent orchestration, RAG architectures, computer vision, and scalable data intelligence pipelines.",
  roles: "Primary roles: Agentic AI Engineer, LLM & RAG Application Developer, Machine Learning & Data Scientist, and Generative AI Systems Developer.",
  skills: "Key Stack: LangChain, LlamaIndex, Agentic Workflows, Qdrant, PyTorch, Scikit-Learn, Python, Pandas, NumPy, OpenCV, FastAPI, React, Next.js, Docker, MySQL, and Tableau.",
  projects: "Featured Systems: 1) Blinkit Sales & Performance Analysis, 2) AI-Powered Data Analyst Agent (with live video demo), 3) Vision-Based Mind Wandering Detection, 4) Agentic Workflow Automation Platform, 5) RAG-based Knowledge QA, 6) Real-Time Data Analytics Pipeline, 7) Autonomous Multi-Agent Orchestrator.",
  certifications: "Verified Specializations: Deep Learning Specialization (DeepLearning.AI / Andrew Ng), LangChain for LLM Application Development (Harrison Chase), Machine Learning (IBM / Coursera), Computer Vision (OpenCV University).",
  contact: "Email: nidhitiwaryy011@gmail.com | LinkedIn: https://www.linkedin.com/in/nidhi-kumari-6b0331308/ | GitHub: https://github.com/nidhi713",
  resume: "Downloading Nidhi Kumari's Resume...",
}

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: "Nidhi AI Agent Terminal v2.4 initialized. Type 'help' or select a command below." },
  ])
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [terminalHistory])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onClose(!isOpen)
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const copyEmail = () => {
    navigator.clipboard.writeText('nidhitiwaryy011@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    addTerminalEntry('action', "Copied 'nidhitiwaryy011@gmail.com' to clipboard.")
  }

  const addTerminalEntry = (type, text) => {
    setTerminalHistory((prev) => [...prev, { type, text }])
  }

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const cmd = query.trim().toLowerCase()
    if (!cmd) return

    addTerminalEntry('user', `> ${query}`)

    if (cmd === 'clear') {
      setTerminalHistory([])
      setQuery('')
      return
    }

    if (cmd === 'help') {
      addTerminalEntry(
        'system',
        "Available commands: 'about', 'skills', 'projects', 'contact', 'resume', 'clear', or type any question."
      )
    } else if (aiResponses[cmd]) {
      addTerminalEntry('agent', aiResponses[cmd])
      if (cmd === 'resume') {
        window.open('/nidhi_resume.pdf', '_blank')
      }
    } else {
      addTerminalEntry(
        'agent',
        `Agent Analysis: Nidhi specializes in ${query}. Explore the Projects and Skills sections for deep architecture breakdown.`
      )
    }

    setQuery('')
  }

  if (!isOpen) return null

  const filteredNav = navActions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0a0a0c]/80 backdrop-blur-md transition-opacity duration-200"
        onClick={() => onClose(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0f0f13] border border-white/[0.12] rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8),0_0_0_1px_rgba(0,212,255,0.2)] overflow-hidden flex flex-col z-10 animate-fade-in">
        {/* Search / Input Bar */}
        <form onSubmit={handleCommandSubmit} className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3">
          <Terminal size={18} className="text-[#00d4ff] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections or ask the AI agent (e.g. 'skills', 'projects', 'about')..."
            className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none font-mono"
          />
          {query && (
            <button
              type="submit"
              className="px-2 py-1 rounded bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-mono flex items-center gap-1 hover:bg-[#00d4ff]/20 transition-colors"
            >
              <span>Run</span>
              <CornerDownLeft size={12} />
            </button>
          )}
          <button
            type="button"
            onClick={() => onClose(false)}
            className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X size={16} />
          </button>
        </form>

        {/* Terminal Log Output */}
        <div className="p-4 max-h-56 overflow-y-auto bg-black/40 border-b border-white/[0.06] font-mono text-xs space-y-2">
          {terminalHistory.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              {item.type === 'user' && <span className="text-[#00d4ff] font-semibold">{item.text}</span>}
              {item.type === 'agent' && (
                <div className="flex items-start gap-1.5 text-white/80">
                  <Sparkles size={13} className="text-[#7c3aed] mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </div>
              )}
              {item.type === 'system' && <span className="text-white/40">{item.text}</span>}
              {item.type === 'action' && <span className="text-[#10b981] font-semibold">{item.text}</span>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Actions List */}
        <div className="p-3 max-h-60 overflow-y-auto space-y-1">
          <div className="text-[10px] uppercase font-semibold text-white/30 tracking-wider px-2 py-1">
            Quick Actions
          </div>

          {/* Copy Email Action */}
          <button
            onClick={copyEmail}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff]">
                {copied ? <Check size={12} /> : <Copy size={12} />}
              </div>
              <span>Copy Direct Email (nidhitiwaryy011@gmail.com)</span>
            </div>
            <span className="text-[10px] font-mono text-[#00d4ff]">{copied ? 'Copied!' : 'Click to copy'}</span>
          </button>

          {/* GitHub Profile Action */}
          <a
            href="https://github.com/nidhi713"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClose(false)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-white">
                <Github size={12} />
              </div>
              <span>View GitHub Repositories (@nidhi713)</span>
            </div>
            <ExternalLink size={12} className="text-white/30 group-hover:text-white transition-colors" />
          </a>

          {/* Download Resume Action */}
          <a
            href="/nidhi_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Nidhi_Kumari_Resume.pdf"
            onClick={() => onClose(false)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa]">
                <FileText size={12} />
              </div>
              <span>Download Nidhi Kumari Resume (PDF)</span>
            </div>
            <ExternalLink size={12} className="text-white/30 group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn Profile Action */}
          <a
            href="https://www.linkedin.com/in/nidhi-kumari-6b0331308/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClose(false)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5]">
                <Linkedin size={12} />
              </div>
              <span>View LinkedIn Profile (in/nidhi-kumari)</span>
            </div>
            <ExternalLink size={12} className="text-white/30 group-hover:text-white transition-colors" />
          </a>

          {/* Navigation Links */}
          {filteredNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => onClose(false)}
              className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/70 hover:text-white hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/50 group-hover:text-white">
                  <ArrowRight size={12} />
                </div>
                <span>{item.label}</span>
              </div>
              <span className="text-[10px] font-mono text-white/30">{item.href}</span>
            </a>
          ))}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-white/40">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/[0.08] text-white/70 font-mono text-[10px]">Esc</kbd> to close</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white/[0.08] text-white/70 font-mono text-[10px]">Enter</kbd> to execute</span>
          </div>
          <span className="font-mono text-[#00d4ff]">Agent v2.4</span>
        </div>
      </div>
    </div>
  )
}
