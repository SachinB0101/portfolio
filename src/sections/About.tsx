import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="px-5 md:px-8 py-16 md:py-28 bg-[#1a1a1a] text-[#F5F4F0] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full border border-[#F5F4F0]/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full border border-[#F5F4F0]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start"
        >
          {/* Left */}
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F5F4F0]/30 mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              About<br />
              <span className="italic text-[#F5F4F0]/40">me.</span>
            </h2>

            <div className="mt-12 space-y-1">
              {[
                ['Degree', 'B.Sc. Computer Science'],
                ['School', 'University of Manitoba'],
                ['Location', 'Winnipeg, MB, Canada'],
                ['Status', 'Open to opportunities'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-3 border-b border-[#F5F4F0]/8 text-sm">
                  <span className="text-[#F5F4F0]/40 font-mono text-[11px] tracking-wider uppercase">{label}</span>
                  <span className="text-[#F5F4F0]/80">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="text-[clamp(1.1rem,2vw,1.4rem)] font-light leading-[1.75] text-[#F5F4F0]/70 mb-8"
            >
              I'm a Computer Science graduate from the University of Manitoba with a passion for 
              building clean, performant applications. I enjoy working across the full stack — 
              from crafting polished React UIs to designing serverless AWS architectures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-[15px] font-light leading-relaxed text-[#F5F4F0]/50 mb-12"
            >
              Beyond coding, I've spent time as a Teaching & Support Assistant at UofM — 
              mentoring 50+ students in Java, Python, and C/C++, guiding them through debugging 
              and Git workflows. I believe great software and great teaching share the same 
              foundation: clarity and intentionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="flex gap-4"
            >
              <a
                href="https://linkedin.com/in/sachin-bhatt-5333b7217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium border border-[#F5F4F0]/20 text-[#F5F4F0]/70 px-6 py-3 rounded-full hover:bg-[#F5F4F0] hover:text-[#1a1a1a] transition-all duration-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="http://madebysachin.com.s3-website.ca-central-1.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium bg-[#F5F4F0] text-[#1a1a1a] px-6 py-3 rounded-full hover:bg-[#ddd] transition-colors duration-200"
              >
                Portfolio Site ↗
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
