import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa"
import { PROJECTS, ALL_PROJECTS } from "../constants"

const TechTag = ({ label }) => (
  <span className="font-mono text-[11px] text-stone-500 bg-white/5 border border-white/8 px-3 py-1 rounded-full">
    {label}
  </span>
)

const ProjectLinks = ({ github, live }) => (
  <div className="flex items-center gap-3">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-600 hover:text-accent transition-colors duration-200"
        title="View on GitHub"
      >
        <FaGithub size={18} />
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-stone-600 hover:text-accent transition-colors duration-200"
        title="Live demo"
      >
        <FaExternalLinkAlt size={14} />
      </a>
    )}
  </div>
)

const FeaturedProject = ({ project }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 36 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-8 rounded-2xl border border-white/8 bg-white/[0.02] p-8 lg:p-12 hover:border-accent/25 transition-colors duration-300"
  >
    <div className="flex items-start justify-between gap-6 mb-5">
      <div>
        <span className="font-mono text-accent text-[11px] tracking-[0.2em] uppercase">Featured Project</span>
        <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mt-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-stone-500 font-body text-sm mt-1">{project.subtitle}</p>
      </div>
      <ProjectLinks github={project.github} live={project.live} />
    </div>
    <p className="text-stone-400 font-body leading-relaxed max-w-2xl mb-7 text-sm lg:text-base">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => <TechTag key={t} label={t} />)}
    </div>
  </motion.div>
)

const ProjectCard = ({ project, index }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 28 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-accent/25 transition-colors duration-300 flex flex-col"
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <h3 className="font-display text-xl font-semibold text-white leading-tight">
        {project.title}
      </h3>
      <ProjectLinks github={project.github} live={project.live} />
    </div>
    <p className="text-stone-500 font-body text-xs mb-3">{project.subtitle}</p>
    <p className="text-stone-400 font-body text-sm leading-relaxed flex-1 mb-6">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.tech.map((t) => <TechTag key={t} label={t} />)}
    </div>
  </motion.div>
)

const SmallCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    className="rounded-xl border border-white/8 bg-white/[0.02] p-5 hover:border-accent/20 transition-colors duration-300 flex flex-col"
  >
    <div className="flex items-start justify-between gap-3 mb-2">
      <h4 className="font-display text-base font-semibold text-white leading-tight">{project.title}</h4>
      <ProjectLinks github={project.github} live={project.live} />
    </div>
    <p className="text-stone-500 font-body text-xs leading-relaxed flex-1 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map((t) => (
        <span key={t} className="font-mono text-[10px] text-stone-600 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
)

const Projects = () => {
  const [expanded, setExpanded] = useState(false)
  const featured = PROJECTS.find((p) => p.featured)
  const highlighted = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-display text-4xl lg:text-6xl font-bold text-white mb-16"
      >
        Projects
      </motion.h2>

      {featured && <FeaturedProject project={featured} />}

      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {highlighted.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2.5 font-mono text-sm text-stone-500 hover:text-accent border border-white/8 hover:border-accent/30 px-6 py-3 rounded-full transition-all duration-300"
        >
          {expanded ? "Show less" : `Show all projects`}
          <FaChevronDown
            size={12}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {ALL_PROJECTS.map((project, i) => (
                <SmallCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
