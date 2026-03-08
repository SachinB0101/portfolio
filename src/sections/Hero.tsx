import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 md:pb-20 px-5 md:px-8 pt-28 md:pt-32 relative overflow-hidden">
      {/* Background decorative — hidden on small screens */}
      <div className="hidden md:block absolute top-1/4 right-16 w-[420px] h-[420px] rounded-full border border-[#1a1a1a]/6 pointer-events-none" />
      <div className="hidden md:block absolute top-1/3 right-28 w-[280px] h-[280px] rounded-full border border-[#1a1a1a]/8 pointer-events-none" />
      <div className="hidden md:block absolute top-[38%] right-40 w-[140px] h-[140px] rounded-full bg-[#1a1a1a]/4 pointer-events-none" />

      {/* Watermark name — desktop only */}
      <div
        className="hidden md:block absolute bottom-0 right-0 font-display font-semibold select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(5rem, 14vw, 14rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(26,26,26,0.055)",
          transform: "translateX(8%) translateY(22%)",
          whiteSpace: "nowrap",
          letterSpacing: "-0.03em",
        }}
        aria-hidden="true"
      >
        Sachin Bhatt
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl w-full relative z-10"
      >
        <motion.p variants={item} className="section-label mb-4 md:mb-5">
          Full-Stack Developer · Winnipeg, MB
        </motion.p>

        {/* Name — same clamp scale as the h1 */}
        <motion.h2
          variants={item}
          className="font-display font-semibold leading-[1.0] tracking-tight mb-0"
          style={{ fontSize: "clamp(2.6rem,8vw,7.5rem)" }}
        >
          Sachin Bhatt
        </motion.h2>

        <motion.h1
          variants={item}
          className="text-[clamp(2.6rem,8vw,7.5rem)] font-display leading-[1.0] tracking-tight mb-5 md:mb-6"
        >
          <span className="italic text-[#1a1a1a]/40">loves building.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[clamp(0.95rem,1.5vw,1.25rem)] text-[#1a1a1a]/55 max-w-xl leading-relaxed font-light mb-10 md:mb-12"
        >
          CS grad from University of Manitoba. I build scalable, full-stack
          applications with React, TypeScript, and AWS — from pixel-perfect UIs
          to serverless backends.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4 md:gap-6"
        >
          <a
            href="#work"
            className="flex items-center gap-2.5 bg-[#1a1a1a] text-[#F5F4F0] px-6 md:px-7 py-3 md:py-3.5 rounded-full text-sm font-medium hover:bg-[#333] transition-colors duration-200"
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/sachin-bhatt-5333b7217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors duration-200 flex items-center gap-1.5"
          >
            LinkedIn
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://github.com/SachinB0101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors duration-200 flex items-center gap-1.5"
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden md:flex absolute bottom-10 right-8 flex-col items-center gap-2"
      >
        <span className="section-label" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-[#1a1a1a]/20"
        />
      </motion.div>
    </section>
  );
}