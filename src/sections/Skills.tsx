import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const skillGroups = [
  {
    label: 'Languages',
    emoji: '{ }',
    items: ['TypeScript', 'JavaScript', 'Java', 'C/C++', 'Python', 'Kotlin', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    emoji: '⚡',
    items: ['React', 'Redux', 'React Query', 'Vite', 'Framer Motion', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express', 'Spring Boot', 'JUnit', 'Vitest'],
  },
  {
    label: 'Cloud & DevOps',
    emoji: '☁',
    items: ['AWS Lambda', 'API Gateway', 'CloudFront', 'Amplify', 'S3', 'DynamoDB', 'SNS', 'CodePipeline', 'GitHub Actions', 'CI/CD'],
  },
  {
    label: 'Databases',
    emoji: '⬡',
    items: ['Supabase', 'DynamoDB', 'MongoDB', 'Room Database'],
  },
  {
    label: 'Tools',
    emoji: '◈',
    items: ['Linux/Unix', 'Git', 'VS Code', 'IntelliJ', 'Android Studio', 'Jupyter Notebook'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  const active = skillGroups[activeTab]

  return (
    <section id="skills" ref={ref} className="px-5 md:px-8 py-16 md:py-28 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-16"
      >
        <p className="section-label mb-3">Capabilities</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
          Technologies &{' '}
          <span className="italic text-[#1a1a1a]/40">skills.</span>
        </h2>
      </motion.div>

      {/* Main skills panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-[240px_1fr] border border-[#1a1a1a]/10 rounded-3xl overflow-hidden"
      >
        {/* Sidebar tabs — horizontal scroll on mobile, vertical on desktop */}
        <div className="bg-[#1a1a1a] p-4 md:p-6 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible">
          {skillGroups.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl text-left transition-all duration-200 whitespace-nowrap shrink-0 md:shrink ${
                activeTab === i
                  ? 'bg-[#F5F4F0]/12 text-[#F5F4F0]'
                  : 'text-[#F5F4F0]/40 hover:text-[#F5F4F0]/70 hover:bg-[#F5F4F0]/6'
              }`}
            >
              <span className="font-mono text-[13px] w-5 md:w-6 text-center">{group.emoji}</span>
              <span className="text-sm font-medium">{group.label}</span>
              {activeTab === i && (
                <motion.div
                  layoutId="tab-indicator"
                  className="hidden md:block ml-auto w-1.5 h-1.5 rounded-full bg-[#F5F4F0]/60"
                />
              )}
            </button>
          ))}

          {/* Bottom stats — hidden on mobile */}
          <div className="hidden md:block mt-auto pt-6 border-t border-[#F5F4F0]/8">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#F5F4F0]/20 mb-3">Stack size</p>
            <p className="font-display text-4xl font-semibold text-[#F5F4F0]/80">
              {skillGroups.reduce((acc, g) => acc + g.items.length, 0)}
            </p>
            <p className="font-mono text-[11px] text-[#F5F4F0]/25 mt-1">technologies</p>
          </div>
        </div>

        {/* Content area */}
        <div className="bg-[#F5F4F0] p-6 md:p-10 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="font-mono text-[20px] md:text-[22px]">{active.emoji}</span>
                <h3 className="font-display text-xl md:text-2xl font-semibold">{active.label}</h3>
                <span className="font-mono text-[11px] text-[#1a1a1a]/30 border border-[#1a1a1a]/15 px-2.5 py-1 rounded-full ml-1">
                  {active.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {active.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: i * 0.03, ease: 'easeOut' }}
                    className="inline-flex items-center bg-white border border-[#1a1a1a]/10 text-[#1a1a1a]/75 text-[12px] md:text-[13px] font-mono px-3 md:px-4 py-1.5 md:py-2 rounded-xl hover:bg-[#1a1a1a] hover:text-[#F5F4F0] hover:border-[#1a1a1a] transition-all duration-200 cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tab dots at bottom */}
          <div className="flex gap-2 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-[#1a1a1a]/8">
            {skillGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeTab ? 'w-8 bg-[#1a1a1a]' : 'w-1.5 bg-[#1a1a1a]/15 hover:bg-[#1a1a1a]/30'
                }`}
                aria-label={`View ${skillGroups[i].label}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
