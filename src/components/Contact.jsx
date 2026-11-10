import { useState, useRef, useEffect } from 'react'
import {
  Mail, MessageSquare, Send, Github, Linkedin, Twitter,
  CheckCircle2, AlertCircle, Loader2, MapPin, Coffee,
} from 'lucide-react'

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@alexcarter',
    href: 'https://github.com',
    color: '#ffffff',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'in/alexcarter',
    href: 'https://linkedin.com',
    color: '#0077b5',
  },
  {
    icon: Twitter,
    label: 'Twitter / X',
    handle: '@alexcarter_dev',
    href: 'https://twitter.com',
    color: '#1da1f2',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'alex@example.com',
    href: 'mailto:alex@example.com',
    color: '#00d4ff',
  },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email.'
  if (!form.subject.trim() || form.subject.trim().length < 4) errors.subject = 'Subject must be at least 4 characters.'
  if (!form.message.trim() || form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, subject: true, message: true }
    setTouched(allTouched)
    const newErrors = validate(form)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setStatus('sending')
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTouched({})
    setTimeout(() => setStatus('idle'), 5000)
  }

  const fieldClass = (name) =>
    `input-field ${touched[name] && errors[name] ? 'border-[#ef4444]/50 focus:border-[#ef4444]/60 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.08)]' : ''} ${touched[name] && !errors[name] ? 'border-[#10b981]/30 focus:border-[#10b981]/50' : ''}`

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#00d4ff]/[0.04] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="section-label mb-4">
            <span>✉️</span> Contact
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Let's <span className="bg-gradient-to-r from-[#00d4ff] to-[#ec4899] bg-clip-text text-transparent">Build Together</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            Have a project in mind or want to collaborate? I'm available for freelance, contract, and full-time roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Info */}
          <div
            className="lg:col-span-2 flex flex-col gap-5 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)', transitionDelay: '150ms' }}
          >
            {/* Availability card */}
            <div className="glass-card p-5 border-[#10b981]/20 bg-[#10b981]/[0.03]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-[#10b981] text-sm font-semibold">Currently Available</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Remote-first · UTC+5:30 · Open to relocation</span>
              </div>
              <div className="flex items-start gap-2 text-white/50 text-sm mt-2">
                <Coffee size={14} className="mt-0.5 shrink-0" />
                <span>Typical response time: &lt; 24 hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
              {socials.map(({ icon: Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 px-4 py-3 hover:border-white/15 hover:scale-[1.01] transition-all duration-200 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-medium">{label}</span>
                    <span className="text-sm text-white/80 font-mono group-hover:text-white transition-colors">{handle}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-3 glass-card p-7 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(24px)', transitionDelay: '250ms' }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-[#10b981]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/40 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={16} className="text-[#00d4ff]" />
                  <h3 className="font-bold text-white text-base">Send a Message</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-1.5 tracking-wide uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      className={fieldClass('name')}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-white/40 mb-1.5 tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@company.com"
                      className={fieldClass('email')}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-white/40 mb-1.5 tracking-wide uppercase">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Project inquiry / Collaboration..."
                    className={fieldClass('subject')}
                  />
                  {touched.subject && errors.subject && (
                    <p className="mt-1 text-xs text-[#ef4444] flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-white/40 mb-1.5 tracking-wide uppercase">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`${fieldClass('message')} resize-none`}
                  />
                  <div className="flex items-start justify-between mt-1">
                    {touched.message && errors.message ? (
                      <p className="text-xs text-[#ef4444] flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className={`text-xs font-mono ml-auto ${form.message.length < 20 ? 'text-white/20' : 'text-[#10b981]/60'}`}>
                      {form.message.length}/20
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center w-full py-3.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

