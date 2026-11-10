import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, Star, ArrowRight, Zap } from 'lucide-react'
import { projects, categories } from '../data/projects.js'

const colorMap = {
  cyan: {
    glow: 'rgba(0,212,255,0.12)',
    border: 'rgba(0,212,255,0.25)',
    text: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    dot: 'bg-[#00d4ff]',
    badge: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20',
  },
  purple: {
    glow: 'rgba(124,58,237,0.12)',
    border: 'rgba(124,58,237,0.25)',
    text: '#a78bfa',
    bg: 'rgba(124,58,237,0.08)',
    dot: 'bg-[#7c3aed]',
    badge: 'bg-[#7c3aed]/10 text-[#a78bfa] border-[#7c3aed]/20',
  },
  pink: {
    glow: 'rgba(236,72,153,0.12)',
    border: 'rgba(236,72,153,0.25)',
    text: '#f472b6',
    bg: 'rgba(236,72,153,0.08)',
    dot: 'bg-[#ec4899]',
    badge: 'bg-[#ec4899]/10 text-[#f472b6] border-[#ec4899]/20',
  },
  green: {
    glow: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.25)',
    text: '#34d399',
    bg: 'rgba(16,185,129,0.08)',
    dot: 'bg-[#10b981]',
    badge: 'bg-[#10b981]/10 text-[#34d399] border-[#10b981]/20',
  },
}

function ProjectCard({ project, index }) {
  const c = colorMap[project.color] || colorMap.cyan
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-[#0f0f13] overflow-hidden cursor-default
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
        <h3 className="text-base font-bold text-white group-hover:text-[var(--c)] transition-colors duration-200" style={{ '--c': c.text }}>
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {project.description}
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
        <div className="flex gap-2 pt-3 border-t border-white/[0.06] mt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
            style={{
              background: `linear-gradient(135deg, ${c.text}22, ${c.text}11)`,
              border: `1px solid ${c.border}`,
              color: c.text,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 16px ${c.glow}`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
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
            Production-grade projects. Each one solves a real problem, built with modern tech, deployed and running.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <ProjectCard project={project} index={i} />
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
    </section>
  )
}

