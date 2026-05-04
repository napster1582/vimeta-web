import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Methodology from './components/Methodology'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CaseStudies from './components/CaseStudies'
import CallToAction from './components/CallToAction'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakSlider,
  TweakToggle,
} from './components/TweaksPanel'

type TweakValues = {
  density: 'compact' | 'default' | 'spacious'
  motionLevel: 'off' | 'low' | 'high'
  showTechStack: boolean
  showMethodology: boolean
  showWhyUs: boolean
  showTestimonials: boolean
  showCaseStudies: boolean
  accentHue: number
}

const TWEAK_DEFAULTS: TweakValues = {
  density: 'default',
  motionLevel: 'high',
  showTechStack: true,
  showMethodology: true,
  showWhyUs: true,
  showTestimonials: true,
  showCaseStudies: true,
  accentHue: 188,
}

export default function App() {
  const [tweaks, setTweak] = useTweaks<TweakValues>(TWEAK_DEFAULTS)

  useEffect(() => {
    document.body.dataset.density = tweaks.density || 'default'
    const hue = tweaks.accentHue ?? 188
    document.documentElement.style.setProperty('--primary', `hsl(${hue}, 100%, 50%)`)
    document.documentElement.style.setProperty('--primary-glow', `hsla(${hue}, 100%, 60%, 0.5)`)
    document.documentElement.style.setProperty('--border', `hsla(${hue}, 100%, 50%, 0.12)`)
    document.documentElement.style.setProperty('--border-hover', `hsla(${hue}, 100%, 50%, 0.4)`)
  }, [tweaks.density, tweaks.accentHue])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('active')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero motionLevel={tweaks.motionLevel} />
        <About />
        <Services />
        {tweaks.showTechStack && <TechStack />}
        {tweaks.showMethodology && <Methodology />}
        {tweaks.showWhyUs && <WhyUs />}
        {tweaks.showCaseStudies && <CaseStudies />}
        {tweaks.showTestimonials && <Testimonials />}
        <CallToAction />
      </main>
      <Footer />
      <ContactModal />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={tweaks.density}
          options={['compact', 'default', 'spacious']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakSection label="Motion" />
        <TweakRadio
          label="Hero motion"
          value={tweaks.motionLevel}
          options={['off', 'low', 'high']}
          onChange={(v) => setTweak('motionLevel', v)}
        />
        <TweakSection label="Accent" />
        <TweakSlider
          label="Hue"
          value={tweaks.accentHue}
          min={140}
          max={280}
          step={1}
          unit="°"
          onChange={(v) => setTweak('accentHue', v)}
        />
        <TweakSection label="Sections" />
        <TweakToggle label="Tech Stack" value={tweaks.showTechStack} onChange={(v) => setTweak('showTechStack', v)} />
        <TweakToggle label="Methodology" value={tweaks.showMethodology} onChange={(v) => setTweak('showMethodology', v)} />
        <TweakToggle label="Why Us" value={tweaks.showWhyUs} onChange={(v) => setTweak('showWhyUs', v)} />
        <TweakToggle label="Testimonials" value={tweaks.showTestimonials} onChange={(v) => setTweak('showTestimonials', v)} />
        <TweakToggle label="Casos de Éxito" value={tweaks.showCaseStudies} onChange={(v) => setTweak('showCaseStudies', v)} />
      </TweaksPanel>
    </div>
  )
}
