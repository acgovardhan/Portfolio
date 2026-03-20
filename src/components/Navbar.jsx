import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "/logo.png"


const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#mystack" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo} alt="ACG" width={32} height={32} />
          <span className={`font-display font-bold text-xs tracking-[0.2em] text-accent transition-all duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}>
            ACG
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-stone-500 hover:text-stone-200 transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10" />
          <a
            href="https://github.com/acgovardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-accent transition-colors duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/acgovardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-accent transition-colors duration-200"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <button
          className="md:hidden text-stone-500 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-stone-400 hover:text-stone-200 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
