import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa"
import profile from "../assets/profile.jpg"
import { HERO_CONTENT, EDUCATION } from "../constants"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="font-mono text-accent text-xs tracking-[0.25em] uppercase">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-[3.5rem] lg:text-[5.5rem] font-bold text-white leading-[0.88] mt-4 mb-6"
          >
            A C<br />
            <span className="text-accent">Govardhan</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-stone-400 font-body text-base lg:text-lg leading-relaxed mb-8 max-w-md">
            {HERO_CONTENT}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black font-body font-semibold text-sm px-7 py-3 rounded-full hover:bg-amber-300 active:scale-95 transition-all duration-200"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/acgovardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-accent transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/acgovardhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 hover:text-accent transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/25 to-transparent blur-sm" />
            <img
              src={profile}
              alt="A C Govardhan"
              className="relative w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              style={{ objectPosition: "center 15%" }}
            />
            <div className="absolute -bottom-5 -right-5 bg-[#141414] border border-white/10 rounded-xl px-5 py-3 shadow-xl">
              <p className="font-display text-2xl font-bold text-accent leading-none">{EDUCATION.cgpa}</p>
              <p className="font-mono text-stone-600 text-xs mt-1">CGPA · TKMCE</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex justify-center mt-20 text-stone-700"
      >
        <FaArrowDown className="animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}

export default Hero
