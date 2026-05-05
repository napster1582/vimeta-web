import { Link } from 'react-router-dom'

export default function LegalFooter() {
  return (
    <footer className="legal-footer">
      <div className="legal-footer-links">
        <Link to="/">Inicio</Link>
        <span>&middot;</span>
        <Link to="/privacidad">Privacidad</Link>
        <span>&middot;</span>
        <Link to="/terminos">Términos</Link>
        <span>&middot;</span>
        <a href="mailto:info.vimeta@gmail.com">Contacto</a>
      </div>
      <div>&copy; 2026 Vimeta Technologies &middot; Medellín &middot; Cali &middot; Remoto</div>
    </footer>
  )
}
