import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white font-bold text-[9px] font-mono">NK</span>
            </div>
            <span className="font-bold text-white/80 text-sm">Nidhi Kumari</span>
          </div>
          <span className="text-xs text-white/30">
            © {new Date().getFullYear()} · Built with React + Vite + Tailwind
          </span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:contact@nidhikumari.dev', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.07] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors group"
        >
          <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          Back to top
        </a>
      </div>
    </footer>
  )
}

