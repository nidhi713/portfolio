import { useState, useRef, useEffect } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
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
    <section id="certifications" className="py-24 px-6 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-gradient-radial from-[#7c3aed]/[0.03] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <div className="section-label mb-4">
            <span>📜</span> Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Verified technical specializations across Deep Learning, Generative AI Agent development, and Machine Learning engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card p-6 flex flex-col justify-between hover:border-white/15 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${index * 90 + 150}ms`,
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm"
                    style={{
                      background: `${cert.color}18`,
                      border: `1px solid ${cert.color}35`,
                      color: cert.color,
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border"
                    style={{
                      color: cert.color,
                      borderColor: `${cert.color}30`,
                      background: `${cert.color}10`,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-white transition-colors mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs font-medium text-white/70 mb-1">
                  {cert.issuer}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono mb-4">
                  <Calendar size={12} />
                  <span>{cert.date} · {cert.instructor}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tech-badge text-[10px] px-2 py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all mt-auto"
              >
                <CheckCircle size={12} style={{ color: cert.color }} />
                <span>Verify Credential</span>
                <ExternalLink size={11} className="text-white/30 ml-auto" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

