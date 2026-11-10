import { useState, useRef, useEffect } from 'react'
import { Award, ExternalLink, Calendar, CheckCircle2, FileText, Image as ImageIcon, Code2, Sparkles, X } from 'lucide-react'
import { certifications } from '../data/certifications.js'

export default function Certifications() {
  const [visible, setVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setPreviewImage(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section id="certifications" className="py-24 px-6 relative" ref={ref}>
      {/* Background Accent Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[450px] bg-gradient-radial from-[#7c3aed]/[0.04] via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-radial from-[#00d4ff]/[0.03] via-transparent to-transparent blur-3xl" />
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
            <span>📜</span> Credentials & Achievements
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base">
            Verified academic excellence, government-recognized institutional credentials, and competitive problem-solving milestones.
          </p>
        </div>

        {/* Certifications Grid (2x2 Balanced Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const isImage = cert.previewType === 'image'
            const isPdf = cert.previewType === 'pdf'

            return (
              <div
                key={cert.id}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] group relative overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${index * 100 + 150}ms`,
                }}
              >
                {/* Subtle card corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity"
                  style={{ background: cert.color }}
                />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-sm shrink-0 transition-transform group-hover:scale-105"
                        style={{
                          background: `${cert.color}18`,
                          border: `1px solid ${cert.color}35`,
                          color: cert.color,
                        }}
                      >
                        {cert.id === 4 ? <Code2 size={22} /> : <Award size={22} />}
                      </div>
                      <div>
                        <span
                          className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border"
                          style={{
                            color: cert.color,
                            borderColor: `${cert.color}30`,
                            background: `${cert.color}10`,
                          }}
                        >
                          {cert.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-bold text-white text-lg sm:text-xl group-hover:text-white transition-colors mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-white/70 mb-3">
                    {cert.issuer}
                  </div>

                  {/* Achievement Highlight Tag */}
                  {cert.achievement && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/[0.08] text-white/90 mb-4 shadow-sm">
                      <Sparkles size={13} style={{ color: cert.color }} />
                      <span>Achievement: </span>
                      <span className="font-bold text-white">{cert.achievement}</span>
                    </div>
                  )}

                  {/* Summary / Description */}
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {cert.summary}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono text-white/60 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06] mt-auto">
                  {cert.hasCertificateFile ? (
                    <>
                      {/* Direct View in New Tab */}
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-white/[0.08] to-white/[0.04] hover:from-white/[0.14] hover:to-white/[0.08] border border-white/[0.12] hover:border-white/25 transition-all shadow-sm group/btn"
                      >
                        {isPdf ? <FileText size={14} style={{ color: cert.color }} /> : <ImageIcon size={14} style={{ color: cert.color }} />}
                        <span>View Certificate</span>
                        <ExternalLink size={12} className="text-white/40 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all ml-auto" />
                      </a>

                      {/* Quick inline modal trigger for PNG image certificates */}
                      {isImage && (
                        <button
                          onClick={() => setPreviewImage(cert.credentialUrl)}
                          className="px-3 py-2.5 rounded-xl text-xs font-semibold text-white/70 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all"
                          title="Quick Preview Certificate"
                        >
                          Preview
                        </button>
                      )}
                    </>
                  ) : (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white/70 hover:text-white bg-white/[0.04] border border-white/[0.08] hover:border-white/20 transition-all"
                    >
                      <CheckCircle2 size={13} style={{ color: cert.color }} />
                      <span>{cert.id === 4 ? 'View DSA GitHub Profile' : 'Verify Certification'}</span>
                      <ExternalLink size={12} className="text-white/40 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox / Preview Modal for Image Certificate */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-[#0a0a0c]/85 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          />
          <div className="relative max-w-4xl w-full bg-[#0f0f13] border border-white/[0.15] rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-fade-in flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                <Award size={14} className="text-[#00d4ff]" />
                <span className="font-semibold text-white">C-DAC Patna Certificate Preview (Grade A)</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={previewImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00d4ff] hover:underline flex items-center gap-1 font-mono"
                >
                  <span>Open Full Asset</span>
                  <ExternalLink size={11} />
                </a>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center bg-black/40">
              <img
                src={previewImage}
                alt="Certificate Preview"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg border border-white/[0.06]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
