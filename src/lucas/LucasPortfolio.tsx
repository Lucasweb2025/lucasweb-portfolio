import { DemoProvider } from '../context/DemoContext'
import { LucasMarquee } from './sections/LucasMarquee'
import { LucasAbout } from './sections/LucasAbout'
import { LucasContact } from './sections/LucasContact'
import { LucasFooter } from './sections/LucasFooter'
import { LucasHero } from './sections/LucasHero'
import { LucasProjects } from './sections/LucasProjects'
import { LucasServices } from './sections/LucasServices'
import { LucasSimulation } from './sections/LucasSimulation'

export function LucasPortfolio() {
  return (
    <DemoProvider>
      <div className="overflow-x-clip bg-[#0C0C0C] font-[Kanit,sans-serif] text-[#D7E2EA]">
        <LucasHero />
        <LucasMarquee />
        <LucasAbout />
        <LucasServices />
        <LucasProjects />
        <LucasSimulation />
        <LucasContact />
        <LucasFooter />
      </div>
    </DemoProvider>
  )
}
