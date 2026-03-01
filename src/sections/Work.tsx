import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    company: 'Personal Project',
    title: 'Modique — E-Commerce Store',
    tags: ['React', 'TypeScript', 'Redux', 'Supabase', 'Clerk', 'AWS S3', 'CI/CD'],
    description:
      'Full-featured e-commerce SPA with product browsing, cart management, and user authentication. Integrated Clerk + Supabase with custom React Query hooks. Cart state managed via Redux Toolkit, persisting to Supabase in real time. Deployed on AWS S3 via GitHub Actions.',
    github: 'https://github.com/SachinB0101/ecommerce-website',
    live: 'http://modique.madebysachin.com.s3-website-us-east-1.amazonaws.com/',
    year: '2026',
    index: '01',
  },
  {
    company: 'Personal Project',
    title: 'Event Announcement Service',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SNS', 'CloudFront', 'CodePipeline'],
    description:
      'Scalable serverless event notification platform supporting subscriptions and automated alerts. REST APIs for user subscriptions and event creation. DynamoDB TTL + SNS for automated notifications and cleanup. Frontend on S3 + CloudFront with CI/CD via CodePipeline.',
    github: 'https://github.com/SachinB0101/event-announcement-project',
    live: 'https://d3lnqu8pzyn695.cloudfront.net/',
    year: '2025',
    index: '02',
  },
  {
    company: 'Personal Project',
    title: 'Cloud Dictionary Application',
    tags: ['React', 'AWS Amplify', 'Lambda', 'DynamoDB', 'API Gateway'],
    description:
      'Cloud technology dictionary with fast autocomplete search and 500ms debounce to optimize API load. Serverless backend built with Lambda + API Gateway. Supports batch uploads for efficient data ingestion. Hosted on AWS Amplify.',
    github: 'https://github.com/SachinB0101/serverless-cloud-dictionary',
    live: 'https://main.d1utiqi17bjp3v.amplifyapp.com/',
    year: '2025',
    index: '03',
  },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Work() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }

  const prev = () => go(current === 0 ? projects.length - 1 : current - 1)
  const next = () => go(current === projects.length - 1 ? 0 : current + 1)

  const project = projects[current]

  return (
    <section id="work" className="px-5 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        ref={headRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-16"
      >
        <div>
          <p className="section-label mb-3">Selected Work</p>
          <h2 className="font-display text-5xl font-semibold leading-tight">
            Projects I've<br />
            <span className="italic text-[#1a1a1a]/40">shipped.</span>
          </h2>
        </div>
        <a
          href="https://github.com/SachinB0101"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium bg-[#1a1a1a]/8 px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] hover:text-[#F5F4F0] transition-all duration-200"
        >
          All on GitHub ↗
        </a>
      </motion.div>

      {/* Carousel */}
      <div className="relative border border-[#1a1a1a]/10 rounded-3xl overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] min-h-auto md:min-h-[420px]"
          >
            <div className="bg-[#1a1a1a] text-[#F5F4F0] p-8 md:p-12 flex flex-col justify-between gap-8 md:gap-0">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-[11px] text-[#F5F4F0]/30">{project.index} / 0{projects.length}</span>
                  <span className="w-10 h-px bg-[#F5F4F0]/15" />
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#F5F4F0]/30">{project.company}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold leading-snug mb-6">
                  {project.title}
                </h3>
                <p className="font-mono text-[11px] tracking-widest uppercase text-[#F5F4F0]/25">
                  {project.year}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-[#F5F4F0]/20 text-[#F5F4F0]/70 text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full hover:bg-[#F5F4F0] hover:text-[#1a1a1a] hover:border-[#F5F4F0] transition-all duration-200"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#F5F4F0] text-[#1a1a1a] text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full hover:bg-[#ddd] transition-colors duration-200"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            {/* Right light panel */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-[#F5F4F0] pb-20 md:pb-12">
              <div>
                <p className="text-[#1a1a1a]/60 leading-relaxed text-[15px] font-light mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-8">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-[#1a1a1a]' : 'w-1.5 bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40'
                    }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows — bottom right of light panel */}
        <div className="absolute bottom-10 right-10 flex gap-3 z-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#F5F4F0] hover:border-[#1a1a1a] transition-all duration-200 text-[#1a1a1a]/50 bg-white/60 backdrop-blur-sm"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-[#1a1a1a]/15 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#F5F4F0] hover:border-[#1a1a1a] transition-all duration-200 text-[#1a1a1a]/50 bg-white/60 backdrop-blur-sm"
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
