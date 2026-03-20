import { useRef } from "react"
import { motion } from "framer-motion"
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt,
} from "react-icons/fa"
import {
  SiMongodb, SiExpress, SiTailwindcss, SiPytorch,
  SiMysql, SiSolidity, SiScikitlearn, SiJavascript,
} from "react-icons/si"
import { SKILLS } from "../constants"

const MARQUEE_ITEMS = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <SiSolidity />, label: "Solidity" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiScikitlearn />, label: "Scikit-learn" },
]

const MarqueeItem = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 text-stone-500 hover:text-accent transition-colors duration-200 cursor-default select-none px-6">
    <span className="text-xl">{icon}</span>
    <span className="font-mono text-xs whitespace-nowrap">{label}</span>
  </div>
)

const Marquee = () => {
  const trackRef = useRef(null)

  const handleMouseEnter = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused"
    }
  }

  const handleMouseLeave = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running"
    }
  }

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="overflow-hidden py-4 border-y border-white/5 my-16"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
      `}</style>
      <div className="marquee-track" ref={trackRef}>
        {items.map((item, i) => (
          <MarqueeItem key={i} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  )
}

const Badge = ({ label }) => (
  <span className="font-mono text-xs text-stone-400 bg-white/[0.04] border border-white/[0.08] px-4 py-2 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 cursor-default">
    {label}
  </span>
)

const Technologies = () => {
  return (
    <section id="mystack" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-display text-4xl lg:text-6xl font-bold text-white mb-4"
      >
        My Stack
      </motion.h2>
      

      <Marquee />

      <div className="space-y-10">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <motion.div
            key={category}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8"
          >
            <div className="lg:w-36 shrink-0 pt-2">
              <span className="font-mono text-stone-600 text-[11px] uppercase tracking-widest">
                {category}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
