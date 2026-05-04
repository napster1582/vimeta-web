interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  { id: 1, quote: 'La transición de nuestra infraestructura legacy a una arquitectura basada en agentes de IA fue impecable. Vimeta no solo entiende el código, entiende el negocio a un nivel profundo.', name: 'Elena Rostova', role: 'CTO', company: 'FinNexus Global', image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d' },
  { id: 2, quote: 'Gracias a sus protocolos MCP, nuestros sistemas ahora dialogan entre sí en tiempo real. La eficiencia operativa ha aumentado un 40% en solo tres meses de implementación.', name: 'Marcus Chen', role: 'Director de Operaciones', company: 'Logistics AI', image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { id: 3, quote: 'Buscábamos una agencia que pudiera manejar integraciones complejas de APIs sin sacrificar la experiencia de usuario. El resultado superó todas las expectativas técnicas.', name: 'Sarah Jenkins', role: 'VP de Producto', company: 'HealthStream', image: 'https://i.pravatar.cc/150?u=a04258114e29026302d' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="testimonials-orb testimonials-orb-1" />
      <div className="testimonials-orb testimonials-orb-2" />

      <div className="container">
        <div className="testimonials-head reveal">
          <span className="eyebrow">Validación · 06</span>
          <h2 className="h-section">
            Impacto <span className="text-primary">Validado</span>
          </h2>
          <p className="lead" style={{ margin: '1.5rem auto 0' }}>
            La confianza se construye con resultados. Así es como ayudamos a líderes de la industria a redefinir sus límites tecnológicos.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.id} className={`testimonial reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-mark">
                <svg viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14C0 6 4 1 12 0V5C7 6 5 9 5 14H12V24H0ZM20 24V14C20 6 24 1 32 0V5C27 6 25 9 25 14H32V24H20Z" fill="currentColor" />
                </svg>
              </div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-foot">
                <div className="testimonial-avatar">
                  <img src={t.image} alt={t.name} />
                  <span className="testimonial-online" />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role font-mono">
                    <span>{t.role}</span>
                    <span className="testimonial-sep">·</span>
                    <span>{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
