import { useState, useRef, useEffect } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experiences } from '../data/experience.js'

export default function Experience() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-[#00d4ff]/[0.03] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="section-label mb-4">
            <span>💼</span> Career
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Work <span className="bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Track record of designing scalable cloud architectures and delivering high-impact web products.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] ml-2 sm:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${index * 120 + 150}ms`,
              }}
            >
              {/* Timeline Marker Node */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#0a0a0c] transition-all duration-300 group-hover:scale-125"
                style={{
                  borderColor: exp.accent,
                  boxShadow: `0 0 12px ${exp.accent}88`,
                }}
              />

              {/* Card */}
              <div className="glass-card p-6 sm:p-7 hover:border-white/15 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold flex items-center gap-1.5" style={{ color: exp.accent }}>
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/40 font-mono">
                    <span className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mb-5 space-y-1.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-white/50 flex items-start gap-2">
                        <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: exp.accent }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-badge text-[11px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

