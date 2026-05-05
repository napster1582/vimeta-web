import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LegalHeader from '../components/LegalHeader'
import LegalFooter from '../components/LegalFooter'

export default function Privacidad() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-body">
      <LegalHeader />
      <main className="legal-main">
        <span className="legal-eyebrow">Documento legal &middot; 01</span>
        <h1 className="legal-title">Política de Privacidad</h1>

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
            <span className="material-icons">verified_user</span>
            Cumple Ley 1581 de 2012 (Colombia)
          </span>
        </div>

        <p className="legal-lead">
          En <strong>Vimeta Technologies</strong> respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros. Esta política explica qué información recolectamos, cómo la usamos, con quién la compartimos y qué derechos tienes sobre ella.
        </p>

        <div className="legal-toc">
          <span className="legal-toc-tag">// contenido</span>
          <ol>
            <li><a href="#responsable">Responsable del tratamiento</a></li>
            <li><a href="#datos">Datos que recolectamos</a></li>
            <li><a href="#finalidad">Finalidad del tratamiento</a></li>
            <li><a href="#base-legal">Base legal</a></li>
            <li><a href="#compartir">Con quién compartimos los datos</a></li>
            <li><a href="#retencion">Tiempo de retención</a></li>
            <li><a href="#derechos">Tus derechos</a></li>
            <li><a href="#seguridad">Seguridad</a></li>
            <li><a href="#cookies">Cookies y tecnologías similares</a></li>
            <li><a href="#cambios">Cambios a esta política</a></li>
          </ol>
        </div>

        <section className="legal-section" id="responsable">
          <h2 data-num="01">Responsable del tratamiento</h2>
          <p><strong>Vimeta Technologies</strong> es la responsable del tratamiento de los datos personales recolectados a través del sitio web <span className="legal-mono">vimeta.tech</span> y de los formularios de contacto asociados.</p>
          <p>Para cualquier consulta relacionada con esta política o con el ejercicio de tus derechos, puedes escribirnos a <a href="mailto:info.vimeta@gmail.com">info.vimeta@gmail.com</a>.</p>
        </section>

        <section className="legal-section" id="datos">
          <h2 data-num="02">Datos que recolectamos</h2>
          <p>Recolectamos únicamente los datos estrictamente necesarios para responder a tus consultas y prestar nuestros servicios:</p>
          <h3>Datos que tú nos proporcionas</h3>
          <ul>
            <li><strong>Identificación:</strong> nombre completo, empresa u organización.</li>
            <li><strong>Contacto:</strong> dirección de correo electrónico.</li>
            <li><strong>Detalles del proyecto:</strong> tipo de proyecto y mensaje libre que decidas compartir.</li>
          </ul>
          <h3>Datos recolectados automáticamente</h3>
          <ul>
            <li>Dirección IP, tipo de navegador y dispositivo, idioma y zona horaria.</li>
            <li>Páginas visitadas, tiempo de permanencia y origen del tráfico.</li>
          </ul>
        </section>

        <section className="legal-section" id="finalidad">
          <h2 data-num="03">Finalidad del tratamiento</h2>
          <p>Usamos tus datos personales exclusivamente para:</p>
          <ul>
            <li>Responder a tus consultas y solicitudes comerciales.</li>
            <li>Enviarte propuestas, dossiers y documentación técnica relacionada con tu proyecto.</li>
            <li>Mantener un registro de comunicaciones para fines contractuales y de auditoría.</li>
            <li>Mejorar nuestro sitio web y servicios mediante análisis estadístico agregado.</li>
            <li>Cumplir con obligaciones legales y regulatorias aplicables.</li>
          </ul>
          <div className="legal-callout">
            <span className="material-icons">block</span>
            <div>
              <div className="legal-callout-title">No vendemos tus datos</div>
              <p>No comercializamos, alquilamos ni cedemos tu información personal a terceros con fines publicitarios.</p>
            </div>
          </div>
        </section>

        <section className="legal-section" id="base-legal">
          <h2 data-num="04">Base legal</h2>
          <p>El tratamiento de tus datos se fundamenta en:</p>
          <ul>
            <li><strong>Tu consentimiento expreso</strong>, otorgado al enviarnos un formulario.</li>
            <li><strong>Ejecución de un contrato</strong> o medidas precontractuales solicitadas por ti.</li>
            <li><strong>Interés legítimo</strong> de Vimeta para responder consultas comerciales.</li>
            <li><strong>Cumplimiento de obligaciones legales</strong> aplicables a nuestra actividad.</li>
          </ul>
        </section>

        <section className="legal-section" id="compartir">
          <h2 data-num="05">Con quién compartimos los datos</h2>
          <p>Tus datos podrán ser tratados por terceros únicamente en calidad de encargados de tratamiento, bajo estrictas garantías contractuales:</p>
          <ul>
            <li><strong>Proveedores de infraestructura cloud</strong> (servidores, bases de datos).</li>
            <li><strong>Servicios de envío de correo transaccional</strong> como SendGrid, para entregar tu mensaje a nuestro equipo.</li>
            <li><strong>Herramientas de analítica</strong> que procesan datos agregados y anónimos.</li>
            <li><strong>Autoridades competentes</strong>, cuando exista requerimiento legal vinculante.</li>
          </ul>
        </section>

        <section className="legal-section" id="retencion">
          <h2 data-num="06">Tiempo de retención</h2>
          <p>Conservamos tus datos por el tiempo necesario para cumplir las finalidades descritas:</p>
          <ul>
            <li><strong>Consultas no comerciales:</strong> hasta 12 meses desde el último contacto.</li>
            <li><strong>Relación comercial activa:</strong> durante toda la vigencia de la relación más el plazo legal de prescripción.</li>
            <li><strong>Datos analíticos agregados:</strong> de forma indefinida en formato anónimo.</li>
          </ul>
          <p>Cumplido el plazo, tus datos serán eliminados o anonimizados de forma irreversible.</p>
        </section>

        <section className="legal-section" id="derechos">
          <h2 data-num="07">Tus derechos</h2>
          <p>De acuerdo con la Ley 1581 de 2012 y la normativa aplicable, tienes derecho a:</p>
          <ul>
            <li><strong>Acceder</strong> a tus datos personales y conocer cómo los tratamos.</li>
            <li><strong>Rectificar</strong> datos inexactos o incompletos.</li>
            <li><strong>Suprimir</strong> tus datos cuando no sean necesarios para la finalidad recolectada.</li>
            <li><strong>Oponerte</strong> al tratamiento por motivos legítimos.</li>
            <li><strong>Revocar el consentimiento</strong> otorgado, sin afectar la licitud del tratamiento previo.</li>
            <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC).</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:info.vimeta@gmail.com">info.vimeta@gmail.com</a> indicando el derecho que deseas ejercer y adjuntando un documento de identificación. Responderemos dentro de los <strong>15 días hábiles</strong> siguientes a la recepción de tu solicitud.</p>
        </section>

        <section className="legal-section" id="seguridad">
          <h2 data-num="08">Seguridad</h2>
          <p>Implementamos medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida, alteración o divulgación. Esto incluye cifrado en tránsito (TLS), control de acceso por roles, copias de seguridad periódicas y monitoreo continuo.</p>
          <p>Sin embargo, ningún sistema es invulnerable. En caso de un incidente de seguridad que afecte tus datos personales, te notificaremos en los plazos que establezca la normativa aplicable.</p>
        </section>

        <section className="legal-section" id="cookies">
          <h2 data-num="09">Cookies y tecnologías similares</h2>
          <p>Nuestro sitio puede utilizar cookies y tecnologías similares con los siguientes propósitos:</p>
          <ul>
            <li><strong>Esenciales:</strong> permiten el funcionamiento básico del sitio.</li>
            <li><strong>Preferencias:</strong> recuerdan tus elecciones (idioma, tema).</li>
            <li><strong>Analíticas:</strong> nos ayudan a entender cómo se usa el sitio para mejorarlo.</li>
          </ul>
          <p>Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
        </section>

        <section className="legal-section" id="cambios">
          <h2 data-num="10">Cambios a esta política</h2>
          <p>Podemos actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o requisitos legales. La fecha de la última actualización aparece al inicio del documento. Si los cambios son sustanciales, te notificaremos por correo electrónico o mediante un aviso destacado en nuestro sitio.</p>
        </section>

        <div className="legal-contact">
          <div className="legal-contact-text">
            <h3>¿Tienes preguntas?</h3>
            <p>Escríbenos para resolver cualquier duda sobre el tratamiento de tus datos.</p>
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
