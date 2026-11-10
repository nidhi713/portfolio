import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden">
      {/* Subtle noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar onOpenPalette={setPaletteOpen} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <CommandPalette isOpen={paletteOpen} onClose={setPaletteOpen} />

      {/* Floating AI Terminal Trigger */}
      <button
        onClick={() => setPaletteOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border-[#00d4ff]/30 text-white shadow-[0_4px_24px_rgba(0,212,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,212,255,0.45)] hover:scale-105 active:scale-95 transition-all group"
        title="Open AI Command Terminal (Ctrl+K)"
      >
        <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
        <span className="text-xs font-mono font-medium text-white/90 group-hover:text-white">Ask Agent</span>
        <span className="text-[10px] font-mono bg-white/[0.08] px-1.5 py-0.5 rounded text-white/50">⌘K</span>
      </button>
    </div>
  )
}

