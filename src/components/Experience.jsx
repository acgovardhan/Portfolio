import { motion } from "framer-motion"
import { EXPERIENCES, EDUCATION, CONTRIBUTIONS } from "../constants"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-display text-4xl lg:text-6xl font-bold text-white mb-16"
      >
        Experience
      </motion.h2>

      <div className="space-y-14">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-10"
          >
            <div className="pt-0.5">
              <p className="font-mono text-accent text-xs leading-relaxed">{exp.period}</p>
              <p className="text-stone-600 text-xs mt-1 font-body">{exp.location}</p>
            </div>
            <div className="border-l border-white/8 pl-6">
              <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-stone-500 font-body text-sm mb-4 mt-0.5">{exp.company}</p>
              <ul className="space-y-2.5">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm font-body text-stone-500 leading-relaxed">
                    <span className="text-accent shrink-0 mt-1.5 text-xs">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>


      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 border border-white/8 rounded-2xl p-6 lg:p-8 bg-white/[0.02] grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-10"
      >
        <div className="pt-0.5">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Education</span>
          <p className="font-mono text-stone-600 text-xs mt-2 leading-relaxed">{EDUCATION.period}</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{EDUCATION.degree}</h3>
          <p className="text-accent font-mono text-xs mt-0.5">{EDUCATION.honors}</p>
          <p className="text-stone-500 font-body text-sm mt-1">
            {EDUCATION.institution} · {EDUCATION.location}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="font-mono text-sm text-white font-semibold">
              CGPA {EDUCATION.cgpa}
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="text-stone-500 text-xs font-body">
              {EDUCATION.coursework.join(" · ")}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="font-display text-lg font-bold text-white mb-4">
          Open Source Contributions
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {CONTRIBUTIONS.map((item, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-xl p-5 bg-white/[0.02] hover:border-accent/25 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h4 className="font-display text-base font-semibold text-white">{item.project}</h4>
                  <p className="font-mono text-accent text-[11px] mt-0.5">{item.type}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-accent transition-colors duration-200 shrink-0"
                    >
                    <FaGithub size={17} />
                  </a>

                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 hover:text-accent transition-colors duration-200 shrink-0"
                    >
                    <FaExternalLinkAlt size={17} />
                  </a>
                </div>
                
                
              </div>
              <p className="text-stone-500 font-body text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}

export default Experience