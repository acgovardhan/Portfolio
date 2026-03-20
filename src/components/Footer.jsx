import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="grid lg:grid-cols-2 gap-14 items-end">
        <div>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-mono text-accent text-xs tracking-widest uppercase mb-4"
          >
            Get in touch
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            viewport={{ once: true }}
            className="font-display text-5xl lg:text-7xl font-bold text-white leading-[0.92] mb-8"
          >
            Let's build<br />
            <span className="text-accent">something.</span>
          </motion.h2>
          <motion.a
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            href="mailto:mail2acgovardhan@gmail.com"
            className="inline-flex items-center gap-2.5 bg-accent text-black font-body font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-amber-300 active:scale-95 transition-all duration-200"
          >
            <FaEnvelope size={14} />
            mail2acgovardhan@gmail.com
          </motion.a>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div>
            <p className="text-stone-600 font-mono text-xs uppercase tracking-widest mb-3">Contact</p>
            <div className="space-y-2 font-body text-sm text-stone-500">
              <p>+91 9645100641</p>
              <p>Kollam, Kerala, India</p>
            </div>
          </div>
          <div>
            <p className="text-stone-600 font-mono text-xs uppercase tracking-widest mb-3">Links</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/acgovardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-accent transition-colors duration-200 font-body text-sm"
              >
                <FaGithub size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/acgovardhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-500 hover:text-accent transition-colors duration-200 font-body text-sm"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/[0.05] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
        <span className="font-mono text-stone-700 text-xs">© 2025 A C Govardhan</span>
        <span className="font-mono text-stone-700 text-xs">TKM College of Engineering · B.Tech CSE · CGPA 9.57</span>
      </div>
    </footer>
  )
}

export default Footer
