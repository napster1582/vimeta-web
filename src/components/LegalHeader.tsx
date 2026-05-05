import { Link } from 'react-router-dom'

export default function LegalHeader() {
  return (
    <header className="legal-header">
      <div className="legal-header-inner">
        <Link to="/" className="legal-logo">
          <div className="logo-mark">
            <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
              <defs>
                <linearGradient id="lg-legal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#0099ff" />
                </linearGradient>
              </defs>
              <circle cx="16" cy="16" r="14" fill="none" stroke="url(#lg-legal)" strokeWidth="1.5" opacity="0.4" />
              <path d="M8 11 L16 21 L24 11" fill="none" stroke="url(#lg-legal)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="2.2" fill="#00e5ff" />
            </svg>
          </div>
          <span className="logo-text">VIMETA</span>
        </Link>
        <Link to="/" className="legal-back">
          <span className="material-icons">arrow_back</span>
          Volver al sitio
        </Link>
      </div>
    </header>
  )
}
