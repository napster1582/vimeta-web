export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-mark">
                <svg viewBox="0 0 32 32" width="32" height="32">
                  <defs>
                    <linearGradient id="lgf" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#00e5ff" />
                      <stop offset="1" stopColor="#00b8d4" />
                    </linearGradient>
                  </defs>
                  <path d="M4 4 L16 28 L28 4 L23 4 L16 18 L9 4 Z" fill="url(#lgf)" />
                </svg>
              </div>
              <span className="logo-text">VIMETA</span>
            </div>
            <p className="footer-quote">"Visión con propósito en cada línea de código inteligente."</p>
            <div className="footer-loc font-mono">
              <span className="dot-glow" style={{ width: 6, height: 6, display: 'inline-block' }} />
              Medellín · Cali · Remoto
            </div>
          </div>

          <div>
            <h4 className="footer-h">Compañía</h4>
            <ul className="footer-list">
              <li><a href="#about">Sobre nosotros</a></li>
              <li><a href="#methodology">Metodología</a></li>
              <li><a href="#stack">Tecnología</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h">Servicios</h4>
            <ul className="footer-list">
              <li><a href="#services">IA & Agentes</a></li>
              <li><a href="#services">Software Custom</a></li>
              <li><a href="#services">Protocolos MCP</a></li>
              <li><a href="#services">APIs & Nube</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-h">Conecta</h4>
            <div className="footer-socials">
              <a className="footer-social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="material-icons">share</span>
              </a>
              <a className="footer-social" href="https://vimeta.tech" aria-label="Web">
                <span className="material-icons">language</span>
              </a>
              <a className="footer-social" href="mailto:info.vimeta@gmail.com" aria-label="Email">
                <span className="material-icons">mail</span>
              </a>
            </div>
            <a href="mailto:info.vimeta@gmail.com" className="footer-email">info.vimeta@gmail.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Vimeta Technologies. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="/Privacidad.html">Política de Privacidad</a>
            <a href="/Terminos.html">Términos y Condiciones</a>
          </div>
        </div>
      </div>

      <div className="footer-wordmark">VIMETA</div>
    </footer>
  )
}
