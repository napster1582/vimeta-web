interface CaseStudy {
  id: string
  client: string
  org: string
  logo: string
  image?: string
  type: string
  title: string
  desc: string
  stack: string[]
  metrics: { label: string; value: string }[]
  status: 'live' | 'in-progress' | 'shipped'
  year: string
  featured?: boolean
}

const cases: CaseStudy[] = [
  {
    id: 'jinen',
    client: 'Armada de Colombia',
    org: 'Jefatura Integral de Educación Naval',
    logo: '/assets/escudo-jinen.png',
    type: 'CMS · Plataforma Educativa',
    title: 'Sistema de Gestión de Contenidos Naval',
    desc: 'CMS estratégico para la JINEN: centraliza la gestión de contenidos académicos, comunicaciones internas y recursos formativos para todas las escuelas de formación naval del país.',
    stack: ['Svelte', 'Node.js', 'MongoDB', 'Payload CMS'],
    metrics: [
      { label: 'Escuelas', value: '12+' },
      { label: 'Usuarios', value: '8K' },
      { label: 'Uptime', value: '99.9%' },
    ],
    status: 'live',
    year: '2024',
    featured: true,
  },
  {
    id: 'orm-univalle',
    client: 'Universidad del Valle',
    org: 'Olimpiadas Regionales de Matemáticas',
    logo: '/assets/logo-univalle.png',
    type: 'Plataforma Académica · ORM',
    title: 'Plataforma de Olimpiadas Regionales de Matemáticas',
    desc: 'Sistema integral para la gestión de las ORM: registro de estudiantes en las diferentes versiones del evento, consulta de resultados públicos, asignación de sedes y dashboards para coordinadores académicos del suroccidente colombiano.',
    stack: ['Angular', 'NestJS', 'MySQL', 'Railway'],
    metrics: [
      { label: 'Estudiantes', value: '10K+' },
      { label: 'Sedes', value: '50+' },
      { label: 'Versión', value: 'v2' },
    ],
    status: 'live',
    year: '2020',
    featured: true,
  },
  {
    id: 'dental-agents',
    client: 'Mirorss Dental',
    org: 'Clínica Odontológica · Atención al Paciente',
    logo: '/assets/logo-mirorss-dental.png',
    type: 'AI Agents · MCP',
    title: 'Agentes IA para Clínica Odontológica',
    desc: 'Orquestación de agentes con Model Context Protocols para agendamiento inteligente, recordatorios automáticos a pacientes, triaje inicial por chat y gestión de historias clínicas conectadas al sistema interno.',
    stack: ['Node.js', 'MongoDB', 'OpenAI', 'MCP'],
    metrics: [
      { label: 'Citas/mes', value: '1.2K' },
      { label: 'No-show', value: '-48%' },
      { label: 'Respuesta', value: '24/7' },
    ],
    status: 'in-progress',
    year: '2025',
    featured: true,
  },
]

function StatusPill({ status }: { status: CaseStudy['status'] }) {
  const labels: Record<CaseStudy['status'], string> = {
    live: 'en producción',
    'in-progress': 'en desarrollo',
    shipped: 'entregado',
  }
  return (
    <span className={`case-status case-status-${status}`}>
      <span className="pulse" />
      <span className="font-mono">{labels[status]}</span>
    </span>
  )
}

export default function CaseStudies() {
  return (
    <section className="section case-studies" id="cases">
      <div className="case-studies-orb" />

      <div className="container">
        <div className="cases-head reveal">
          <span className="eyebrow">Portfolio · 07</span>
          <h2 className="h-section">
            Casos de <span className="text-primary">Éxito</span>
          </h2>
          <p className="lead" style={{ margin: '1.5rem auto 0' }}>
            Proyectos donde nuestra ingeniería se convirtió en ventaja competitiva real.
          </p>
        </div>

        {cases.filter((c) => c.featured).map((c) => (
          <div key={c.id} className="case-featured reveal reveal-delay-1">
            <span className="bracket bracket-tl" />
            <span className="bracket bracket-tr" />
            <span className="bracket bracket-bl" />
            <span className="bracket bracket-br" />

            <div className="case-featured-grid">
              <div className="case-featured-visual">
                <div className="case-emblem">
                  <div className="case-emblem-rings">
                    <span /><span /><span />
                  </div>
                  <img src={c.logo} alt={c.client} />
                  <div className="case-emblem-glow" />
                </div>
                <div className="case-featured-meta">
                  <div className="case-meta-row">
                    <span className="case-meta-key font-mono">cliente</span>
                    <span className="case-meta-val">{c.client}</span>
                  </div>
                  <div className="case-meta-row">
                    <span className="case-meta-key font-mono">unidad</span>
                    <span className="case-meta-val">{c.org}</span>
                  </div>
                  <div className="case-meta-row">
                    <span className="case-meta-key font-mono">año</span>
                    <span className="case-meta-val">{c.year}</span>
                  </div>
                </div>
              </div>

              <div className="case-featured-body">
                <div className="case-featured-head">
                  <span className="case-type font-mono">{c.type}</span>
                  <StatusPill status={c.status} />
                </div>
                <h3 className="case-featured-title">{c.title}</h3>
                <p className="case-featured-desc">{c.desc}</p>

                <div className="case-stack">
                  {c.stack.map((s) => (
                    <span key={s} className="case-chip">{s}</span>
                  ))}
                </div>

                <div className="case-metrics">
                  {c.metrics.map((m, i) => (
                    <div key={m.label} className="case-metric">
                      <div className="case-metric-value">{m.value}</div>
                      <div className="case-metric-label font-mono">{m.label}</div>
                      {i < c.metrics.length - 1 && <span className="case-metric-divider" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {cases.some((c) => !c.featured) && (
          <div className="cases-grid">
            {cases.filter((c) => !c.featured).map((c, i) => (
              <article key={c.id} className={`case-card reveal reveal-delay-${i + 2}${c.image ? ' case-card-with-image' : ''}`}>
                {c.image && (
                  <div className="case-card-image">
                    <img src={c.image} alt={c.title} />
                    <div className="case-card-image-overlay" />
                    <div className="case-card-image-grid" />
                  </div>
                )}
                <div className="case-card-head">
                  <span className="case-type font-mono">{c.type}</span>
                  <StatusPill status={c.status} />
                </div>
                <h3 className="case-card-title">{c.title}</h3>
                <div className="case-card-org font-mono">
                  <span className="material-icons" style={{ fontSize: 14 }}>shield</span>
                  {c.org} · {c.year}
                </div>
                <p className="case-card-desc">{c.desc}</p>

                <div className="case-stack">
                  {c.stack.map((s) => (
                    <span key={s} className="case-chip">{s}</span>
                  ))}
                </div>

                <div className="case-card-metrics">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="case-card-metric">
                      <div className="case-metric-value">{m.value}</div>
                      <div className="case-metric-label font-mono">{m.label}</div>
                    </div>
                  ))}
                </div>

                <span className="case-card-corner" />
              </article>
            ))}
          </div>
        )}

        <div className="cases-foot reveal">
          <span className="font-mono cases-foot-tag">// más casos bajo NDA disponibles a solicitud</span>
          <a href="#contact" className="link-arrow">
            <span className="underline">Solicitar dossier completo</span>
            <span className="material-icons arrow">east</span>
          </a>
        </div>
      </div>
    </section>
  )
}
