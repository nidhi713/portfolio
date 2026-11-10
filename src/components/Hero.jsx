import { useState, useEffect } from 'react'
import { ArrowRight, Download, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react'

const roles = [
  'Full-Stack Engineer',
  'UI/UX Architect',
  'AI Integration Specialist',
  'Open Source Contributor',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, charIndex === current.length ? 2000 : 60)
    } else if (charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 100)
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex((c) => c - 1)
      }, 35)
    } else {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Shipped' },
    { value: '12k+', label: 'GitHub Stars' },
    { value: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-[#00d4ff]/[0.07] via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-gradient-radial from-[#7c3aed]/[0.06] via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-gradient-radial from-[#ec4899]/[0.05] via-transparent to-transparent rounded-full blur-3xl animate-pulse-slow animate-delay-300" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-up animate-delay-100">
          <span className="text-white">Alex </span>
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">
            Carter
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6 animate-fade-up animate-delay-200">
          <span className="text-xl sm:text-2xl font-mono text-white/70 font-medium">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-[#00d4ff] ml-0.5 animate-pulse align-middle" />
          </span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/50 leading-relaxed mb-10 animate-fade-up animate-delay-300">
          I build{' '}
          <span className="text-white/80 font-medium">high-performance web products</span> that scale — from pixel-perfect interfaces to distributed backend systems, with a passion for AI-powered experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up animate-delay-400">
          <a href="#projects" className="btn-primary group">
            View Live Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-20 animate-fade-up animate-delay-500">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.07] hover:scale-110 transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-up animate-delay-600">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card px-4 py-5 flex flex-col items-center gap-1 hover:border-white/10 transition-all duration-300"
            >
              <span className="text-2xl font-black bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
                {s.value}
              </span>
              <span className="text-xs text-white/40 font-medium text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 hover:text-white/50 transition-colors animate-bounce"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}

