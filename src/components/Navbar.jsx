import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['about', 'projects', 'skills', 'experience', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center shadow-[0_0_16px_rgba(0,212,255,0.4)] group-hover:shadow-[0_0_24px_rgba(0,212,255,0.6)] transition-shadow duration-300">
              <span className="text-white font-bold text-sm font-mono">NK</span>
            </div>
            <span className="font-bold text-white/90 text-sm tracking-wide group-hover:text-white transition-colors">
              Nidhi Kumari
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-[#00d4ff] bg-[#00d4ff]/10'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white shadow-[0_0_16px_rgba(0,212,255,0.25)] hover:shadow-[0_0_24px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-[#0a0a0c]/95 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-300 md:hidden ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20 pb-6 px-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.05] transition-all text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 px-4 py-3 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}

