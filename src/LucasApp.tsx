import { DemoProvider } from './context/DemoContext'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { ProjectSimulation } from './sections/ProjectSimulation'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

export default function LucasApp() {
  return (
    <DemoProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ProjectSimulation />
      </main>
      <Footer />
    </DemoProvider>
  )
}
