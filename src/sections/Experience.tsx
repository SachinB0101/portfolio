import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="px-5 md:px-8 py-16 md:py-20 bg-[#EFEDE8] max-w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start"
        >
          {/* Left */}
          <div>
            <p className="section-label mb-3">Experience</p>
            <h2 className="font-display text-4xl font-semibold leading-tight">
              Where I've<br />
              <span className="italic text-[#1a1a1a]/40">worked.</span>
            </h2>
          </div>

          {/* Right */}
          <div>
            {/* Role card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="border border-[#1a1a1a]/10 rounded-2xl p-6 md:p-8 bg-[#F5F4F0]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">Teaching & Support Assistant</h3>
                  <p className="text-[#1a1a1a]/60 text-sm">University of Manitoba · Winnipeg, MB (Hybrid)</p>
                </div>
                <span className="font-mono text-[11px] text-[#1a1a1a]/40 border border-[#1a1a1a]/15 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                  May 2024 – Dec 2025
                </span>
              </div>

              <div className="space-y-3">
                {[
                  'Mentored 50+ students through labs and office hours in Java, Python, and C/C++.',
                  'Graded assignments and provided actionable technical feedback to help students level up.',
                  'Diagnosed and resolved software, hardware, and networking issues in lab environments.',
                  'Guided students on Git workflows and debugging best practices.',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 text-[14px] md:text-[15px] text-[#1a1a1a]/65 font-light leading-relaxed">
                    <span className="text-[#1a1a1a]/25 mt-0.5 shrink-0">—</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="border border-[#1a1a1a]/10 rounded-2xl p-6 md:p-8 bg-[#F5F4F0] mt-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">B.Sc. Computer Science</h3>
                  <p className="text-[#1a1a1a]/60 text-sm">University of Manitoba · Winnipeg, MB</p>
                </div>
                <span className="font-mono text-[11px] text-[#1a1a1a]/40 border border-[#1a1a1a]/15 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                  May 2019 – Feb 2026
                </span>
              </div>

              <p className="text-[13px] md:text-[14px] text-[#1a1a1a]/50 font-light">
                Relevant Coursework:{' '}
                {['Data Structures & Algorithms', 'OOP', 'Distributed Computing', 'Database Concepts', 'Programming Practices'].map((c, i, arr) => (
                  <span key={c}>
                    <span className="text-[#1a1a1a]/70">{c}</span>
                    {i < arr.length - 1 && <span className="text-[#1a1a1a]/25"> · </span>}
                  </span>
                ))}
              </p>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
