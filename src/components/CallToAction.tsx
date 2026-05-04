export default function CallToAction() {
  return (
    <section className="section cta">
      <div className="cta-mesh grid-mesh" />
      <div className="cta-noise" />
      <div className="container cta-inner">
        <span className="cta-tag font-mono">// next step</span>
        <h2 className="cta-title">
          ¿Listo para transformar<br />tu negocio?
        </h2>
        <p className="cta-lead">
          Únete a las empresas que ya están liderando con inteligencia artificial y desarrollo estratégico de clase mundial.
        </p>
        <a href="#contact" className="cta-btn">
          <span>INICIAR CONSULTA GRATUITA</span>
          <span className="material-icons">arrow_outward</span>
        </a>
        <div className="cta-meta">
          <div className="cta-meta-item">
            <span className="material-icons">schedule</span>
            <span>Respuesta en 24h</span>
          </div>
          <div className="cta-meta-item">
            <span className="material-icons">verified</span>
            <span>Sin compromiso inicial</span>
          </div>
          <div className="cta-meta-item">
            <span className="material-icons">handshake</span>
            <span>Acuerdo de confidencialidad</span>
          </div>
        </div>
      </div>
    </section>
  )
}
