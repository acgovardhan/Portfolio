import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Technologies from "./components/Technologies"
import Footer from "./components/Footer"
import Certifications from "./components/Certifications"

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-stone-300 antialiased font-body min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,#d4a85318,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Research />
      <Certifications/>
      <Technologies />
      <Footer />
    </div>
  )
}
