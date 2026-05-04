import { useRef, useState } from 'react'

interface Service {
  icon: string
  title: string
  desc: string
  tag: string
  featured?: boolean
}

const services: Service[] = [
  { icon: 'code', title: 'Custom Software', desc: 'Desarrollo a medida escalable, optimizado para el rendimiento y la experiencia de usuario de alto nivel.', tag: '01 / dev' },
  { icon: 'api', title: 'API Ecosystems', desc: 'Diseño y orquestación de APIs robustas que actúan como el sistema nervioso central de tu negocio.', tag: '02 / api' },
  { icon: 'hub', title: 'Integrations', desc: 'Conectamos tus herramientas favoritas para un flujo de trabajo sin fricciones ni pérdida de datos.', tag: '03 / int' },
  { icon: 'smart_toy', title: 'AI Agents', desc: 'Implementación de agentes inteligentes que automatizan procesos complejos y toma de decisiones.', tag: '04 / ai', featured: true },
  { icon: 'auto_fix_high', title: 'Automation', desc: 'Sistemas auto-gestionados que reducen costes operativos y minimizan el error humano.', tag: '05 / auto' },
  { icon: 'psychology', title: 'Tech Consulting', desc: 'Asesoría estratégica para navegar el paisaje tecnológico actual y planificar el futuro.', tag: '06 / con' },
]

function ServiceCard({ s, i }: { s: Service; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0, hovering: false })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
      hovering: true,
    })
  }
  const onLeave = () => setMouse({ x: 0, y: 0, hovering: false })

  const tilt = mouse.hovering
    ? `perspective(1000px) rotateX(${mouse.y * -4}deg) rotateY(${mouse.x * 4}deg) translateZ(8px)`
    : ''

  return (
    <div
      ref={ref}
      className={`service-card reveal reveal-delay-${(i % 3) + 1} ${s.featured ? 'is-featured' : ''}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform: tilt }}
    >
      <div className="service-card-inner">
        <div className="service-card-head">
          <span className="service-tag font-mono">{s.tag}</span>
          <span className="service-arrow material-icons">arrow_outward</span>
        </div>
        <div className="service-icon">
          <span className="material-icons">{s.icon}</span>
        </div>
        <h3 className="service-title">{s.title}</h3>
        <p className="service-desc">{s.desc}</p>
      </div>
      <span
        className="service-glow"
        style={{
          background: mouse.hovering
            ? `radial-gradient(400px circle at ${(mouse.x + 1) * 50}% ${(mouse.y + 1) * 50}%, rgba(0,229,255,0.18), transparent 50%)`
            : 'transparent',
        }}
      />
    </div>
  )
}

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-head reveal">
          <span className="eyebrow">Capacidades · 02</span>
          <h2 className="h-section services-title">
            Soluciones Tecnológicas<br />
            <span className="text-primary">Premium</span>
          </h2>
          <p className="lead services-lead">
            Desde la arquitectura base hasta la integración de inteligencia artificial de última generación.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => <ServiceCard key={i} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
