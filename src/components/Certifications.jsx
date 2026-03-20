import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { CERTIFICATIONS } from "../constants"

const Lightbox = ({ cert, onClose, onPrev, onNext }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full object-contain max-h-[60vh]"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-white/[0.03]">
              <p className="font-mono text-stone-600 text-sm">No image added yet</p>
            </div>
          )}
          <div className="p-5 flex items-center justify-between">
            <div>
              <p className="font-display text-base font-semibold text-white">{cert.title}</p>
              <p className="font-mono text-accent text-xs mt-0.5">{cert.issuer} · {cert.year}</p>
            </div>
            {cert.link && (
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-accent transition-colors duration-200"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-[#1a1a1a] border border-white/10 text-stone-400 hover:text-white rounded-full p-2 transition-colors duration-200"
        >
          <FaTimes size={14} />
        </button>
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-stone-600 hover:text-white transition-colors duration-200"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-stone-600 hover:text-white transition-colors duration-200"
        >
          <FaChevronRight size={20} />
        </button>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)

const VISIBLE = 3;

const Certifications = () => {
  const [start, setStart] = useState(0)
  const [selected, setSelected] = useState(null)
  const total = CERTIFICATIONS.length

  const prev = () => setStart((s) => (s - 1 + total) % total)
  const next = () => setStart((s) => (s + 1) % total)

  const lightboxPrev = () => setSelected((s) => (s - 1 + total) % total)
  const lightboxNext = () => setSelected((s) => (s + 1) % total)

  const visible = Array.from({ length: VISIBLE }, (_, i) => CERTIFICATIONS[(start + i) % total])

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-6xl font-bold text-white"
        >
          Certifications
        </motion.h2>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={prev}
            className="border border-white/8 text-stone-500 hover:text-white hover:border-white/20 rounded-full p-2.5 transition-all duration-200"
          >
            <FaChevronLeft size={13} />
          </button>
          <span className="font-mono text-stone-600 text-xs px-2">
            {start + 1} / {total}
          </span>
          <button
            onClick={next}
            className="border border-white/8 text-stone-500 hover:text-white hover:border-white/20 rounded-full p-2.5 transition-all duration-200"
          >
            <FaChevronRight size={13} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map((cert, i) => (
            <motion.div
              key={`${start}-${i}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              onClick={() => setSelected((start + i) % total)}
              className="border border-white/8 rounded-2xl bg-white/[0.02] hover:border-accent/30 transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="h-40 bg-white/[0.03] overflow-hidden">
                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-stone-700 text-xs">No image yet</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="font-display text-sm font-semibold text-white leading-snug mb-1">
                  {cert.title}
                </p>
                <p className="font-mono text-accent text-[11px]">{cert.issuer}</p>
                <p className="font-mono text-stone-600 text-[11px] mt-0.5">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <p className="font-mono text-stone-700 text-xs mt-6 text-center">
        click any card to view certificate
      </p>

      {selected !== null && (
        <Lightbox
          cert={CERTIFICATIONS[selected]}
          onClose={() => setSelected(null)}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </section>
  )
}

export default Certifications