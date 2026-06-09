import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/ContactButton'
import { FadeIn } from '../components/FadeIn'

const aboutText =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

const decorImages = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn delay={0.1} duration={0.9} x={-80} y={0} className="pointer-events-none absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <img src={decorImages.moon} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>

      <FadeIn delay={0.25} duration={0.9} x={-80} y={0} className="pointer-events-none absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <img src={decorImages.object} alt="" className="w-[100px] sm:w-[140px] md:w-[180px]" />
      </FadeIn>

      <FadeIn delay={0.15} duration={0.9} x={80} y={0} className="pointer-events-none absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <img src={decorImages.lego} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.9} x={80} y={0} className="pointer-events-none absolute right-[3%] bottom-[8%] sm:right-[6%] md:right-[10%]">
        <img src={decorImages.group} alt="" className="w-[130px] sm:w-[170px] md:w-[220px]" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText text={aboutText} />
          <div id="contact">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  )
}
