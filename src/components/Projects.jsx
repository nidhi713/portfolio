import { useState, useRef, useEffect } from 'react'
import {
  ExternalLink, Github, Star, ArrowRight, Zap,
  Layers, X, CheckCircle2, Cpu, ChevronRight
} from 'lucide-react'
import { projects, categories } from '../data/projects.js'

const colorMap = {
  cyan: {
    glow: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.25)',
    text: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    badge: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20',
  },
  purple: {
    glow: 'rgba(124,58,237,0.12)',
    border: 'rgba(124,58,237,0.25)',
    text: '#a78bfa',
    bg: 'rgba(124,58,237,0.08)',
    badge: 'bg-[#7c3aed]/10 text-[#a78bfa] border-[#7c3aed]/20',
  },
  pink: {
    glow: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.25)',
    text: '#f472b6',
    bg: 'rgba(236,72,153,0.08)',
    badge: 'bg-[#ec4899]/10 text-[#f472b6] border-[#ec4899]/20',
  },
  green: {
    glow: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.25)',
    text: '#34d399',
    bg: 'rgba(16,185,129,0.08)',
    badge: 'bg-[#10b981]/10 text-[#34d399] border-[#10b981]/20',
  },
}

function ProjectCard({ project, index, onSelect }) {
  const c = colorMap[project.color] || colorMap.cyan
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-[#0f0f13] overflow-hidden cursor-pointer
        transition-all duration-300 ease-out
        ${hovered ? 'scale-[1.02] shadow-[0_16px_48px_rgba(0,0,0,0.6)]' : 'scale-100 shadow-card'}
      `}
      style={{
        borderColor: hovered ? c.border : 'rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px ${c.border}, inset 0 1px 0 rgba(255,255,255,0.08)`
          : undefined,
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(project)}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top, ${c.glow}, transparent 70%)` }}
      />

      {/* Preview area */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden border-b border-white/[0.05]"
        style={{ background: `linear-gradient(135deg, ${c.bg}, rgba(10,10,12,0.8))` }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${c.text}22 1px, transparent 1px), linear-gradient(90deg, ${c.text}22 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Featured badge */}
        {project.featured && (
          <div className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-semibold border ${c.badge}`}>
            <Star size={9} fill="currentColor" />
            Featured
          </div>
        )}
        {/* Year */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-white/30 font-medium">
          {project.year}
        </div>
        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <span className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-md border ${c.badge}`}>
            {project.category}
          </span>
        </div>
        {/* Central icon */}
        <div
          className="relative w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: c.bg, border: `1px solid ${c.border}`, boxShadow: `0 0 24px ${c.glow}` }}
        >
          <Zap size={28} style={{ color: c.text }} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-white group-hover:text-[var(--c)] transition-colors duration-200" style={{ '--c': c.text }}>
            {project.title}
          </h3>
          <span className="shrink-0 p-1 rounded-md bg-white/[0.04] text-white/40 group-hover:text-white transition-colors" title="View Architecture Specs">
            <Layers size={14} />
          </span>
        </div>

        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {project.summary || project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span key={m} className="text-[10px] font-mono text-white/40 bg-white/[0.04] px-2 py-0.5 rounded-md border border-white/[0.06]">
              {m}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-white/[0.06] mt-1" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => onSelect(project)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${c.text}22, ${c.text}11)`,
              border: `1px solid ${c.border}`,
              color: c.text,
            }}
          >
            <Layers size={13} />
            Architecture
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200"
          >
            <Github size={13} />
            Source
          </a>
        </div>
      </div>
    </article>
  )
}

function ArchitectureModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!project) return null
  const c = colorMap[project.color] || colorMap.cyan

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0a0a0c]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0f0f13] border border-white/[0.12] rounded-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 my-8 animate-fade-in max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm shrink-0"
              style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
            >
              <Cpu size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border ${c.badge}`}>
                  {project.category}
                </span>
                <span className="text-xs font-mono text-white/30">{project.year}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">System Overview</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              {project.architecture?.overview || project.description}
            </p>
          </div>

          {/* Flow Pipeline */}
          {project.architecture?.flow && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3 flex items-center gap-1.5">
                <Layers size={13} style={{ color: c.text }} />
                <span>Execution & Data Flow Topology</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {project.architecture.flow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2 text-xs font-mono text-white/80"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center text-[10px] text-white/50 shrink-0">
                      {idx + 1}
                    </span>
                    <span className="truncate">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Core Engineering Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: c.text }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Engineering Solutions */}
          {project.architecture?.challenges && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Key Technical Innovations</h4>
              <ul className="space-y-2">
                {project.architecture.challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/70 bg-white/[0.02] p-3 rounded-xl border border-white/[0.04]">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: c.text }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack Specifications */}
          {project.architecture?.stack && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Technical Specifications</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(project.architecture.stack).map(([key, val]) => (
                  <div key={key} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <span className="text-white/40 font-mono block mb-1 uppercase text-[10px]">{key}</span>
                    <span className="text-white/90 font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Summary */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Validated Benchmarks</h4>
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((m) => (
                <span key={m} className="text-xs font-mono text-white/70 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.08]">
                  ⚡ {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-3">
          <div className="text-xs text-white/40 font-mono hidden sm:block">
            Nidhi Kumari · {project.category} Architecture
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all"
            >
              <Github size={14} />
              View Source
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] shadow-[0_0_16px_rgba(0,212,255,0.3)] hover:scale-105 transition-all"
              >
                <ExternalLink size={14} />
                Explore Demo
              </a>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] shadow-[0_0_16px_rgba(0,212,255,0.3)] hover:scale-105 transition-all"
              >
                <Github size={14} />
                Open GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-4">
            <span>⚡</span> Projects
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Shipped & <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">Live</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Autonomous multi-agent workflows, enterprise RAG systems, and streaming ML pipelines. Click any project card to inspect its system architecture.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-[0_0_16px_rgba(0,212,255,0.3)]'
                  : 'text-white/40 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <ProjectCard project={project} index={i} onSelect={setSelectedProject} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/nidhi713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 transition-colors group"
          >
            <Github size={16} />
            Explore more repositories on GitHub (@nidhi713)
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <ArchitectureModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
