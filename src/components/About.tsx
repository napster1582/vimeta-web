import { useRef, useEffect } from 'react'

interface AboutStat {
  value: string
  suffix: string
  label: string
  mono: string
}

export default function About() {
  const blob1 = useRef<HTMLDivElement>(null)
  const blob2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const sec = document.getElementById('about')
      if (!sec) return
      const r = sec.getBoundingClientRect()
      const v = window.innerHeight - r.top
      if (blob1.current) blob1.current.style.transform = `translateY(${v * 0.08}px)`
      if (blob2.current) blob2.current.style.transform = `translateY(${v * -0.05}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const stats: AboutStat[] = [
    { value: '99', suffix: '%', label: 'Eficiencia en IA', mono: 'AI/eff' },
    { value: '24', suffix: '/7', label: 'Despliegue Continuo', mono: 'CD/uptime' },
    { value: 'MCP', suffix: '', label: 'Model Context Protocols', mono: 'protocol/v2' },
    { value: '100', suffix: '+', label: 'APIs Conectadas', mono: 'api/integrated' },
  ]

  return (
    <section className="section about" id="about">
      <div ref={blob1} className="about-blob about-blob-1" />
      <div ref={blob2} className="about-blob about-blob-2" />

      <div className="container about-grid">
        <div className="about-stats reveal">
          {stats.map((s, i) => (
            <div key={i} className="about-stat-card" style={{ '--d': `${i * 0.05}s` }}>
              <div className="about-stat-mono font-mono">{s.mono}</div>
              <div className="about-stat-value">
                {s.value}<span>{s.suffix}</span>
              </div>
              <div className="about-stat-label">{s.label}</div>
              <span className="about-stat-corner" />
            </div>
          ))}
        </div>

        <div className="about-text reveal reveal-delay-1">
          <span className="eyebrow">Manifiesto · 01</span>
          <h2 className="h-section about-title">
            Redefiniendo el software con<br />
            <span className="text-primary">IA y Protocolos Estratégicos</span>
          </h2>
          <p className="lead about-p">
            En Vimeta, no solo escribimos código; creamos ecosistemas inteligentes. Nos especializamos en la implementación de agentes de IA autónomos y protocolos de contexto (MCPs) que permiten a tus sistemas entender, razonar y actuar.
          </p>
          <p className="lead about-p">
            Nuestra misión es eliminar los silos de datos, permitiendo una interoperabilidad fluida entre modelos de lenguaje y tu infraestructura empresarial legacy.
          </p>
          <a href="#services" className="link-arrow about-link">
            <span className="underline">Descubre nuestra filosofía</span>
            <span className="material-icons arrow">east</span>
          </a>
        </div>
      </div>
    </section>
  )
}
