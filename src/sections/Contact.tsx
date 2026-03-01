import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/SachinB0101' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sachin-bhatt-5333b7217' },
  { label: 'Portfolio', href: 'http://madebysachin.com.s3-website.ca-central-1.amazonaws.com/' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="bg-[#1a1a1a] text-[#F5F4F0] px-5 md:px-8 pt-16 md:pt-28 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-20"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F5F4F0]/30 mb-6">Contact</p>
          <h2 className="font-display text-[clamp(2.4rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tight mb-8 md:mb-12">
            Let's start<br />
            <span className="italic text-[#F5F4F0]/40">creating together</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <a
              href="mailto:sachin.bhatt0010@gmail.com"
              className="flex items-center gap-2 bg-[#F5F4F0] text-[#1a1a1a] px-5 md:px-7 py-3 md:py-3.5 rounded-full text-sm font-medium hover:bg-[#ddd] transition-colors duration-200 self-start"
            >
              sachin.bhatt0010@gmail.com ↗
            </a>
            <a
              href="tel:+12049517612"
              className="text-sm text-[#F5F4F0]/50 hover:text-[#F5F4F0] transition-colors duration-200 font-medium"
            >
              +1 (204) 951-7612
            </a>
          </div>
        </motion.div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#F5F4F0]/10 pt-8 md:pt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold mb-1">Sachin Bhatt</p>
            <p className="text-[#F5F4F0]/30 text-sm font-mono">Full-Stack Developer</p>
          </div>

          <div className="flex gap-12 md:gap-20">
            <div>
              <p className="section-label text-[#F5F4F0]/20 mb-4">Navigation</p>
              <ul className="space-y-2">
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-[#F5F4F0]/50 hover:text-[#F5F4F0] transition-colors duration-200">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label text-[#F5F4F0]/20 mb-4">Social</p>
              <ul className="space-y-2">
                {socialLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F5F4F0]/50 hover:text-[#F5F4F0] transition-colors duration-200 flex items-center gap-1"
                    >
                      {l.label}
                      <span className="text-[#F5F4F0]/20">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-[#F5F4F0]/20 text-xs font-mono"
        >
          © {new Date().getFullYear()} Sachin Bhatt. Built with ❤️.
        </motion.p>
      </div>
    </section>
  )
}
