interface Step {
  id: number
  title: string
  desc: string
  icon: string
}

const steps: Step[] = [
  { id: 1, title: 'Discovery', desc: 'Entendemos tus retos, objetivos y el contexto profundo de tus datos de negocio.', icon: 'travel_explore' },
  { id: 2, title: 'Planning', desc: 'Arquitectura técnica robusta y definición estratégica de la IA necesaria.', icon: 'architecture' },
  { id: 3, title: 'Development', desc: 'Ciclos ágiles de desarrollo con integración constante y QA automatizado.', icon: 'terminal' },
  { id: 4, title: 'Integration', desc: 'Despliegue y conexión nativa con tus ecosistemas actuales y legacy.', icon: 'hub' },
  { id: 5, title: 'Scaling', desc: 'Optimización continua y escalabilidad elástica según demanda real.', icon: 'rocket_launch' },
]

export default function Methodology() {
  return (
    <section className="section methodology" id="methodology">
      <div className="container">
        <div className="meth-head reveal">
          <span className="eyebrow">Proceso · 04</span>
          <h2 className="h-section">
            Metodología de<br />
            <span className="text-primary">Alto Impacto</span>
          </h2>
          <p className="lead" style={{ margin: '1.5rem auto 0' }}>
            Un proceso probado, cinco etapas, valor compuesto en cada iteración.
          </p>
        </div>

        <div className="meth-timeline">
          <div className="meth-line" />
          <div className="meth-steps">
            {steps.map((s, i) => (
              <div key={s.id} className={`meth-step reveal reveal-delay-${i + 1}`}>
                <div className="meth-num font-mono">0{s.id}</div>
                <div className="meth-marker">
                  <div className="meth-marker-dot" />
                  <div className="meth-marker-ring" />
                </div>
                <div className="meth-card">
                  <div className="meth-icon">
                    <span className="material-icons">{s.icon}</span>
                  </div>
                  <h4 className="meth-title">{s.title}</h4>
                  <p className="meth-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
