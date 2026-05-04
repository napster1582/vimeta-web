import { useState } from 'react'

interface TechItem {
  name: string
  desc: string
  logo: string
}

interface TechGroup {
  category: string
  items: TechItem[]
}

const techGroups: TechGroup[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', desc: 'Arquitectura flexible y moderna', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Angular', desc: 'Framework robusto y estructurado', logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 250'><path fill='%23dd0031' d='M125 30 L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z'/><path fill='%23c3002f' d='M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z'/><path fill='%23fff' d='M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z'/></svg>" },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', desc: 'Entorno escalable de alta velocidad', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
      { name: 'NestJS', desc: 'Arquitectura modular y eficiente', logo: 'https://cdn.worldvectorlogo.com/logos/nestjs.svg' },
      { name: 'Python', desc: 'Ecosistema de innovación en IA y datos', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: '.NET', desc: 'Potencia empresarial de Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'SQL Server', desc: 'Integridad y seguridad de datos', logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
      { name: 'PostgreSQL', desc: 'Ecosistema de innovación open-source', logo: 'https://www.svgrepo.com/show/354200/postgresql.svg' },
      { name: 'MongoDB', desc: 'Flexibilidad NoSQL a escala', logo: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
      { name: 'MySQL', desc: 'Fiabilidad relacional estándar', logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
    ],
  },
]

export default function TechStack() {
  const [active, setActive] = useState(0)

  return (
    <section className="section tech-stack" id="stack">
      <div className="section-divider" style={{ position: 'absolute', top: 0 }} />
      <div className="container">
        <div className="tech-grid">
          <div className="tech-intro reveal">
            <span className="eyebrow">Stack · 03</span>
            <h2 className="h-section">
              Ecosistema de<br />
              <span className="text-primary">Innovación</span>
            </h2>
            <p className="lead" style={{ marginTop: '1.5rem' }}>
              Implementamos infraestructuras de alto rendimiento utilizando los estándares más exigentes de la industria para garantizar escalabilidad y seguridad total.
            </p>
            <div className="tech-precision">
              <div className="tech-precision-tag font-mono">// engineering</div>
              <div className="tech-precision-title">Ingeniería de Precisión</div>
              <div className="tech-precision-desc">Optimizamos cada capa de la aplicación para un despliegue sin fricciones.</div>
            </div>
          </div>

          <div className="tech-content reveal reveal-delay-1">
            <div className="tech-tabs">
              {techGroups.map((g, i) => (
                <button
                  key={i}
                  className={`tech-tab ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="font-mono">0{i + 1}</span> {g.category}
                </button>
              ))}
            </div>

            <div className="tech-list">
              {techGroups[active].items.map((tech, i) => (
                <div key={tech.name} className="tech-item" style={{ animationDelay: `${i * 0.06}s` }}>
                  <div className="tech-item-logo">
                    <img src={tech.logo} alt={tech.name} />
                  </div>
                  <div className="tech-item-body">
                    <h4 className="tech-item-name">{tech.name}</h4>
                    <p className="tech-item-desc">{tech.desc}</p>
                  </div>
                  <span className="tech-item-num font-mono">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
