export default function WhyUs() {
  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="why-head reveal">
          <span className="eyebrow">Diferencial · 05</span>
          <h2 className="h-section">
            ¿Por qué elegir a <span className="text-primary">Vimeta</span>?
          </h2>
        </div>

        <div className="why-bento">
          <div className="why-cell why-strategy reveal reveal-delay-1">
            <div className="why-strategy-pattern" />
            <div className="why-cell-content">
              <span className="font-mono why-cell-tag">vision · ROI</span>
              <h3 className="why-cell-title">Visión Estratégica</h3>
              <p className="why-cell-desc">No solo programamos; alineamos cada línea de código con tus objetivos de negocio y retorno de inversión a largo plazo.</p>
            </div>
          </div>

          <div className="why-cell why-excellence reveal reveal-delay-2">
            <div className="why-excellence-grid" />
            <span className="material-icons why-excellence-icon">terminal</span>
            <div className="why-cell-content">
              <div className="why-excellence-meter">
                <span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <h3 className="why-cell-title why-excellence-title">Excelencia Técnica</h3>
              <p className="why-cell-desc why-excellence-desc">Uso intensivo de las últimas herramientas de IA para acelerar el despliegue sin comprometer la calidad.</p>
            </div>
          </div>

          <div className="why-cell why-agility reveal reveal-delay-3">
            <div className="why-cell-content">
              <span className="material-icons why-mini-icon">bolt</span>
              <h3 className="why-mini-title">Agilidad Real</h3>
              <p className="why-cell-desc">Entregas incrementales semanales para que el valor llegue rápido a tus usuarios.</p>
            </div>
          </div>

          <div className="why-cell why-ai reveal reveal-delay-4">
            <div className="why-cell-content">
              <span className="material-icons why-mini-icon">smart_toy</span>
              <h3 className="why-mini-title">Foco en IA</h3>
              <p className="why-cell-desc">Especialistas en la nueva frontera de Model Context Protocols y razonamiento de agentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
