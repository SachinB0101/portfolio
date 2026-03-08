import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const footerLinks = [
  { label: "Home", href: "#" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/SachinB0101" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sachin-bhatt-5333b7217" },
  {
    label: "Portfolio",
    href: "http://madebysachin.com.s3-website.ca-central-1.amazonaws.com/",
  },
];

type FormState = "idle" | "sending" | "sent";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((res) => setTimeout(res, 1400));
    setFormState("sent");
  };

  const inputBase =
    "w-full bg-transparent border-b py-3.5 text-[#F5F4F0] text-[14px] font-light outline-none transition-all duration-300";

  const labelClass =
    "font-mono text-[10px] tracking-[0.18em] uppercase text-[#F5F4F0] block mb-1";

  const inputBorder = (field: string) =>
    focused === field ? "border-[#F5F4F0]/70" : "border-[#F5F4F0]/20";

  // Inline style for placeholder since Tailwind placeholder opacity can be overridden by browser defaults
  const inputStyle: React.CSSProperties = {
    colorScheme: "dark",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#1a1a1a] text-[#F5F4F0] px-5 md:px-8 pt-16 md:pt-28 pb-12 md:pb-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: heading + direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F5F4F0]/30 mb-6">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2.4rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tight mb-8 md:mb-12">
            Let's start
            <br />
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

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="border-t border-[#F5F4F0]/10 pt-10 md:pt-14 mb-12 md:mb-20"
        >
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#F5F4F0]/30 mb-8">
            Or send a message
          </p>

          {/* Global placeholder style — scoped to this form */}
          <style>{`
            #contact-form input::placeholder,
            #contact-form textarea::placeholder {
              color: rgba(245, 244, 240, 0.3);
            }
            #contact-form input,
            #contact-form textarea {
              color: #F5F4F0;
            }
          `}</style>

          {formState === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 py-6"
            >
              <div className="w-10 h-10 rounded-full border border-[#F5F4F0]/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10L8.5 14.5L16 6"
                    stroke="#F5F4F0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-display text-2xl font-semibold">
                Message sent.
              </p>
              <p className="text-[#F5F4F0]/45 text-sm font-light">
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setFormState("idle");
                  formRef.current?.reset();
                }}
                className="text-sm text-[#F5F4F0]/35 hover:text-[#F5F4F0] transition-colors duration-200 font-mono tracking-wider self-start mt-1"
              >
                SEND ANOTHER →
              </button>
            </motion.div>
          ) : (
            <form
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {/* Name */}
              <div>
                <label className={labelClass}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  style={inputStyle}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} ${inputBorder("name")}`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  style={inputStyle}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} ${inputBorder("email")}`}
                />
              </div>

              {/* Subject */}
              <div className="md:col-span-2">
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  style={inputStyle}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} ${inputBorder("subject")}`}
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, role, or idea..."
                  style={inputStyle}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`${inputBase} ${inputBorder("message")} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="flex items-center gap-2.5 bg-[#F5F4F0] text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors duration-200 disabled:opacity-50"
                >
                  {formState === "sending" ? (
                    <>
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.2 }}
                      >
                        Sending
                      </motion.span>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="w-3 h-3 border border-[#1a1a1a]/30 border-t-[#1a1a1a] rounded-full"
                      />
                    </>
                  ) : (
                    <>
                      Send message
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 10L10 2M10 2H4M10 2V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Footer nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#F5F4F0]/10 pt-8 md:pt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
        >
          <div>
            <p className="font-display text-2xl font-semibold mb-1">
              Sachin Bhatt
            </p>
            <p className="text-[#F5F4F0]/30 text-sm font-mono">
              Full-Stack Developer
            </p>
          </div>

          <div className="flex gap-12 md:gap-20">
            <div>
              <p className="section-label text-[#F5F4F0]/20 mb-4">Navigation</p>
              <ul className="space-y-2">
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-[#F5F4F0]/50 hover:text-[#F5F4F0] transition-colors duration-200"
                    >
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
  );
}