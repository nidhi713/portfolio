import { useRef, useEffect, useState } from 'react'
import { skills, categoryColors } from '../data/skills.js'

function SkillBar({ name, level, color, visible }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-white/70 font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-mono font-semibold" style={{ color: color.bar }}>
          {level}%
        </span>
      </div>
      <div className="h-1 w-full bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out duration-1000"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color.bar}cc, ${color.bar})`,
            boxShadow: visible ? `0 0 8px ${color.bar}66` : 'none',
            transitionDelay: '200ms',
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ title, items, color, visible, delay }) {
  return (
    <div
      className="glass-card p-6 hover:border-white/10 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      style={{
        borderColor: visible ? color.border : 'rgba(255,255,255,0.07)',
        background: visible ? color.bg : 'rgba(255,255,255,0.02)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.6s ease-out ${delay}ms`,
      }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-2.5 mb-6">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
          style={{ background: color.bg, border: `1px solid ${color.border}` }}
        >
          {title === 'AI & GenAI' && '🤖'}
          {title === 'Data Science & ML' && '📊'}
          {title === 'Web & Cloud' && '☁️'}
          {!['AI & GenAI', 'Data Science & ML', 'Web & Cloud'].includes(title) && '⚡'}
        </div>
        <h3 className="font-bold text-white text-sm">{title}</h3>
        <span
          className="ml-auto text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md border"
          style={{ color: color.text, background: color.bg, borderColor: color.border }}
        >
          {items.length} skills
        </span>
      </div>

      {/* Skill Bars */}
      <div className="flex flex-col gap-4">
        {items.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} visible={visible} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
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

  const totalSkills = Object.values(skills).flat().length
  const avgLevel = Math.round(
    Object.values(skills).flat().reduce((acc, s) => acc + s.level, 0) / totalSkills
  )

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#7c3aed]/[0.05] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <div className="section-label mb-4">
            <span>🛠️</span> Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Tech <span className="bg-gradient-to-r from-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-base">
            {totalSkills} technologies across {Object.keys(skills).length} domains, with an average proficiency of{' '}
            <span className="text-white/60 font-semibold">{avgLevel}%</span>.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              title={category}
              items={items}
              color={categoryColors[category]}
              visible={visible}
              delay={i * 100 + 150}
            />
          ))}
        </div>

        {/* Bottom tag cloud */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(16px)', transitionDelay: '600ms' }}
        >
          {Object.values(skills).flat().map((s) => (
            <span key={s.name} className="tech-badge text-[11px] px-3 py-1.5">
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

