import { useState, useEffect } from 'react'

interface NavLink {
  id: string
  label: string
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['hero', 'about', 'services', 'stack', 'methodology', 'why-us', 'testimonials']
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= 120 && r.bottom >= 120) { current = id; break }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: NavLink[] = [
    { id: 'about', label: 'Nosotros' },
    { id: 'services', label: 'Servicios' },
    { id: 'stack', label: 'Ecosistema' },
    { id: 'methodology', label: 'Metodología' },
    { id: 'cases', label: 'Casos' },
    { id: 'testimonials', label: 'Testimonios' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 32 32" width="32" height="32">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#00e5ff" />
                  <stop offset="1" stopColor="#00b8d4" />
                </linearGradient>
              </defs>
              <path d="M4 4 L16 28 L28 4 L23 4 L16 18 L9 4 Z" fill="url(#lg)" />
            </svg>
          </div>
          <span className="logo-text">VIMETA</span>
        </a>

        <nav className="navbar-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'is-active' : ''}`}
            >
              {l.label}
              <span className="nav-link-dot" />
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <span className="status-pill">
            <span className="status-dot" />
            <span className="status-text">Aceptando proyectos · Q2</span>
          </span>
          <a href="#contact" className="btn btn-primary btn-sm">
            Contacto
            <span className="material-icons" style={{ fontSize: 18 }}>arrow_outward</span>
          </a>
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)} className="mobile-link">{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary">Contacto</a>
        </div>
      )}
    </header>
  )
}
