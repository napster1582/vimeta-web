import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LegalHeader from '../components/LegalHeader'
import LegalFooter from '../components/LegalFooter'

export default function Terminos() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-body">
      <LegalHeader />
      <main className="legal-main">
        <span className="legal-eyebrow">Documento legal &middot; 02</span>
        <h1 className="legal-title">Términos y Condiciones</h1>

        <div className="legal-meta">
          <span className="legal-meta-item">
            <span className="material-icons">event</span>
            Vigente desde 1 de enero de 2025
          </span>
          <span className="legal-meta-item">
            <span className="material-icons">update</span>
            Última actualización: 29 de abril de 2026
          </span>
          <span className="legal-meta-item">
            <span className="material-icons">gavel</span>
            Jurisdicción: Colombia
          </span>
        </div>

        <p className="legal-lead">
          Estos términos y condiciones regulan el uso del sitio web <strong>vimeta.tech</strong> y de los servicios de consultoría, desarrollo de software e inteligencia artificial prestados por <strong>Vimeta Technologies</strong>. Al acceder al sitio o contratar nuestros servicios, aceptas íntegramente lo aquí establecido.
        </p>

        <div className="legal-toc">
          <span className="legal-toc-tag">// contenido</span>
          <ol>
            <li><a href="#aceptacion">Aceptación</a></li>
            <li><a href="#servicios">Servicios ofrecidos</a></li>
            <li><a href="#uso-sitio">Uso del sitio</a></li>
            <li><a href="#propuestas">Propuestas y contratación</a></li>
            <li><a href="#propiedad">Propiedad intelectual</a></li>
            <li><a href="#confidencialidad">Confidencialidad</a></li>
            <li><a href="#responsabilidad">Limitación de responsabilidad</a></li>
            <li><a href="#modificaciones">Modificaciones</a></li>
            <li><a href="#ley">Ley aplicable</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ol>
        </div>

        <section className="legal-section" id="aceptacion">
          <h2 data-num="01">Aceptación</h2>
          <p>El acceso y uso de este sitio implica la aceptación plena y sin reservas de estos términos. Si no estás de acuerdo, te pedimos abstenerte de utilizar el sitio o contratar nuestros servicios.</p>
          <p>Estos términos se complementan con la <Link to="/privacidad">Política de Privacidad</Link>, que forma parte integral de este documento.</p>
        </section>

        <section className="legal-section" id="servicios">
          <h2 data-num="02">Servicios ofrecidos</h2>
          <p>Vimeta Technologies ofrece servicios profesionales de:</p>
          <ul>
            <li>Diseño y desarrollo de software a medida.</li>
            <li>Consultoría e implementación de soluciones de inteligencia artificial y agentes autónomos.</li>
            <li>Diseño y construcción de plataformas web, CMS y APIs.</li>
            <li>Asesoría técnica, arquitectura de software y auditorías.</li>
          </ul>
          <p>El alcance, plazos, entregables y condiciones económicas específicas de cada proyecto se establecen en una propuesta o contrato firmado entre las partes.</p>
        </section>

        <section className="legal-section" id="uso-sitio">
          <h2 data-num="03">Uso del sitio</h2>
          <p>Al utilizar el sitio te comprometes a:</p>
          <ul>
            <li>No realizar actos contrarios a la ley, la moral o el orden público.</li>
            <li>No introducir virus, código malicioso o intentar comprometer la seguridad del sitio.</li>
            <li>No suplantar la identidad de terceros ni proporcionar información falsa.</li>
            <li>No utilizar el sitio para enviar comunicaciones no solicitadas (spam).</li>
            <li>Respetar los derechos de propiedad intelectual de Vimeta y de terceros.</li>
          </ul>
          <div className="legal-callout">
            <span className="material-icons">info</span>
            <div>
              <div className="legal-callout-title">Nos reservamos el derecho</div>
              <p>De suspender el acceso al sitio en caso de uso indebido, sin perjuicio de las acciones legales que correspondan.</p>
            </div>
          </div>
        </section>

        <section className="legal-section" id="propuestas">
          <h2 data-num="04">Propuestas y contratación</h2>
          <h3>Cotizaciones</h3>
          <p>Las propuestas comerciales emitidas por Vimeta tienen una validez de <strong>30 días calendario</strong> desde su emisión, salvo que se indique lo contrario por escrito. Los precios cotizados están expresados en la moneda señalada en cada propuesta y no incluyen impuestos a menos que se especifique.</p>
          <h3>Formalización</h3>
          <p>La contratación se formaliza mediante la firma de un contrato o la aceptación expresa por escrito de la propuesta comercial. Hasta ese momento, no existe obligación contractual entre las partes.</p>
          <h3>Pagos</h3>
          <p>Las condiciones de pago, hitos y entregables se acuerdan en cada propuesta. La mora en pagos puede dar lugar a la suspensión del servicio y al cobro de intereses moratorios conforme a la ley.</p>
        </section>

        <section className="legal-section" id="propiedad">
          <h2 data-num="05">Propiedad intelectual</h2>
          <p>Todos los contenidos del sitio (textos, gráficos, logotipos, código, diseños) son propiedad de <strong>Vimeta Technologies</strong> o de sus licenciantes y se encuentran protegidos por la legislación de propiedad intelectual aplicable.</p>
          <p>Respecto a los entregables de un proyecto contratado, la titularidad y licencias se rigen por lo pactado en cada contrato específico. Salvo pacto expreso en contrario:</p>
          <ul>
            <li>El cliente recibe los entregables finales del proyecto bajo licencia de uso para los fines acordados.</li>
            <li>Vimeta conserva el derecho a reutilizar know-how, frameworks internos, librerías propias y componentes genéricos desarrollados antes o durante el proyecto.</li>
            <li>Vimeta puede mencionar al cliente como referencia comercial salvo objeción expresa por escrito.</li>
          </ul>
        </section>

        <section className="legal-section" id="confidencialidad">
          <h2 data-num="06">Confidencialidad</h2>
          <p>Toda la información sensible compartida durante la prestación de servicios será tratada como confidencial. Si lo requieres, podemos suscribir un acuerdo de confidencialidad (NDA) sin costo antes de iniciar conversaciones detalladas sobre tu proyecto.</p>
          <p>La obligación de confidencialidad subsiste por <strong>cinco (5) años</strong> tras la terminación del contrato, salvo que un pacto específico establezca un plazo distinto.</p>
        </section>

        <section className="legal-section" id="responsabilidad">
          <h2 data-num="07">Limitación de responsabilidad</h2>
          <p>Vimeta presta sus servicios bajo una obligación de <strong>medios</strong> y no de resultados específicos, salvo cuando estos se hayan pactado expresamente y por escrito en un contrato.</p>
          <p>Salvo en casos de dolo o culpa grave, la responsabilidad total de Vimeta frente al cliente, por cualquier concepto, se limita al <strong>monto efectivamente pagado por el cliente en los doce (12) meses anteriores</strong> al hecho generador de la responsabilidad.</p>
          <p>Vimeta no responde por:</p>
          <ul>
            <li>Daños indirectos, lucro cesante, pérdida de oportunidades o daños reputacionales.</li>
            <li>Fallas atribuibles a infraestructura, servicios o software de terceros.</li>
            <li>Eventos de fuerza mayor o caso fortuito.</li>
            <li>Uso indebido de los entregables por parte del cliente o terceros.</li>
          </ul>
        </section>

        <section className="legal-section" id="modificaciones">
          <h2 data-num="08">Modificaciones</h2>
          <p>Vimeta podrá modificar estos términos en cualquier momento. La versión vigente será la publicada en este sitio con su fecha de última actualización. El uso continuado del sitio tras una modificación implica la aceptación de los nuevos términos.</p>
        </section>

        <section className="legal-section" id="ley">
          <h2 data-num="09">Ley aplicable y jurisdicción</h2>
          <p>Estos términos se rigen por las leyes de la <strong>República de Colombia</strong>. Las controversias derivadas de su interpretación o aplicación se someterán a los jueces y tribunales competentes de la ciudad de <strong>Medellín, Colombia</strong>, salvo pacto expreso en contrario en un contrato específico (incluyendo eventuales cláusulas de arbitraje).</p>
        </section>

        <section className="legal-section" id="contacto">
          <h2 data-num="10">Contacto</h2>
          <p>Para cualquier consulta relacionada con estos términos, escríbenos a <a href="mailto:info.vimeta@gmail.com">info.vimeta@gmail.com</a>.</p>
        </section>

        <div className="legal-contact">
          <div className="legal-contact-text">
            <h3>¿Listo para empezar?</h3>
            <p>Hablemos de tu proyecto. Respondemos en menos de 24 horas hábiles.</p>
          </div>
          <a href="mailto:info.vimeta@gmail.com" className="legal-contact-email">
            <span className="material-icons">mail</span>
            info.vimeta@gmail.com
          </a>
        </div>
      </main>
      <LegalFooter />
    </div>
  )
}
