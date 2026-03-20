import { motion } from "framer-motion"
import { RESEARCH } from "../constants"

const Research = () => {
  return (
    <section id="research" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-display text-4xl lg:text-6xl font-bold text-white mb-16"
      >
        Research
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-8 lg:p-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
          <div className="flex-1">
            <span className="font-mono text-accent text-[11px] tracking-[0.2em] uppercase">
              {RESEARCH.type}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mt-3 leading-tight max-w-2xl">
              {RESEARCH.title}
            </h3>
          </div>
          <div className="lg:text-right shrink-0">
            <p className="font-mono text-accent text-xs">{RESEARCH.period}</p>
            <p className="text-stone-500 text-xs font-body mt-1.5">Advisor: {RESEARCH.advisor}</p>
            <p className="text-stone-600 text-xs font-body">{RESEARCH.institution}</p>
          </div>
        </div>

        <ul className="space-y-4">
          {RESEARCH.points.map((point, i) => (
            <motion.li
              key={i}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 text-sm font-body text-stone-400 leading-relaxed"
            >
              <span className="text-accent shrink-0 mt-1.5 text-xs">◆</span>
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Research
