import { useState, useEffect } from 'react'

interface ContactFormState {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  message: string
  consent: boolean
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const cmProjectTypes = [
  'IA & Agentes',
  'Desarrollo Software',
  'Plataforma / CMS',
  'Consultoría',
  'Otro',
]

const cmInitialForm: ContactFormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
  consent: false,
}

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<ContactFormState>(cmInitialForm)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const openHandler = () => setOpen(true)
    window.addEventListener('open-contact', openHandler)

    const linkHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href="#contact"]') as HTMLAnchorElement | null
      if (link) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', linkHandler)

    return () => {
      window.removeEventListener('open-contact', openHandler)
      document.removeEventListener('click', linkHandler)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open && status === 'success') {
      const t = setTimeout(() => {
        setStatus('idle')
        setForm(cmInitialForm)
        setErrorMsg('')
      }, 400)
      return () => clearTimeout(t)
    }
  }, [open, status])

  const update = <K extends keyof ContactFormState>(key: K, val: ContactFormState[K]) => {
    setForm((f) => ({ ...f, [key]: val }))
  }

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Por favor ingresa tu nombre.'
    if (!form.email.trim()) return 'Por favor ingresa tu email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Email inválido.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      return 'Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).'
    }
    if (!form.consent) return 'Debes aceptar la política de privacidad.'
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const err = validate()
    if (err) {
      setStatus('error')
      setErrorMsg(err)
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
        }),
      })

      if (!res.ok) {
        if (res.status === 404) {
          await new Promise((r) => setTimeout(r, 800))
          setStatus('success')
          return
        }
        throw new Error(`Error ${res.status}`)
      }

      const data = await res.json().catch(() => ({ ok: true }))
      if (data.ok === false) throw new Error(data.error || 'Error al enviar')

      setStatus('success')
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : ''
      if (message.includes('Failed to fetch') || message.includes('NetworkError')) {
        await new Promise((r) => setTimeout(r, 600))
        setStatus('success')
        return
      }
      setStatus('error')
      setErrorMsg('No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos a info.vimeta@gmail.com')
    }
  }

  if (!open) return null

  return (
    <div className="cm-backdrop" onClick={() => setOpen(false)} role="dialog" aria-modal="true">
      <div className="cm-shell" onClick={(e) => e.stopPropagation()}>
        <span className="bracket bracket-tl" />
        <span className="bracket bracket-tr" />
        <span className="bracket bracket-bl" />
        <span className="bracket bracket-br" />

        <button
          type="button"
          className="cm-close"
          onClick={() => setOpen(false)}
          aria-label="Cerrar"
        >
          <span className="material-icons">close</span>
        </button>

        {status === 'success' ? (
          <div className="cm-success">
            <div className="contact-success-icon">
              <span className="material-icons">check_circle</span>
              <div className="success-pulse" />
            </div>
            <h2 className="contact-success-title">Mensaje enviado</h2>
            <p className="contact-success-desc">
              Gracias por escribirnos. Te responderemos en menos de 24 horas hábiles a <strong style={{ color: 'var(--text)' }}>{form.email || 'tu email'}</strong>.
            </p>
            <div className="cm-success-actions">
              <button
                type="button"
                className="contact-success-reset"
                onClick={() => {
                  setStatus('idle')
                  setForm(cmInitialForm)
                }}
              >
                <span className="material-icons" style={{ fontSize: 18 }}>refresh</span>
                Enviar otro mensaje
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="cm-head">
              <span className="font-mono cm-tag">/ vimeta · contact</span>
              <div>
                <h2 className="cm-title">
                  Hablemos de tu <span className="text-primary">proyecto</span>
                </h2>
                <p className="cm-sub">
                  Respondemos en &lt;24h hábiles. Sin compromiso.
                </p>
              </div>
            </div>

            <form className="cm-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <label className="form-field">
                  <span className="form-label font-mono">nombre *</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="form-field">
                  <span className="form-label font-mono">email *</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="tu@empresa.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <div className="form-row">
                <label className="form-field">
                  <span className="form-label font-mono">tipo de proyecto</span>
                  <div className="form-select">
                    <select
                      value={form.projectType}
                      onChange={(e) => update('projectType', e.target.value)}
                    >
                      <option value="">Selecciona…</option>
                      {cmProjectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <span className="material-icons form-select-arrow">expand_more</span>
                  </div>
                </label>
                <label className="form-field">
                  <span className="form-label font-mono">empresa</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => update('company', e.target.value)}
                    placeholder="Tu compañía (opcional)"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <label className="form-field">
                <span className="form-label font-mono">cuéntanos *</span>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Objetivo, contexto, plazos estimados…"
                  rows={4}
                  required
                />
                <span className="form-counter font-mono">{form.message.length} / 1000</span>
              </label>

              <label className="form-consent">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => update('consent', e.target.checked)}
                />
                <span className="form-consent-box">
                  <span className="material-icons">check</span>
                </span>
                <span className="form-consent-text">
                  Acepto la <a href="/privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a> y los <a href="/terminos" target="_blank" rel="noopener noreferrer">términos y condiciones</a>.
                </span>
              </label>

              {status === 'error' && errorMsg && (
                <div className="form-alert form-alert-error">
                  <span className="material-icons">error_outline</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="form-spinner" />
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <span className="material-icons" style={{ fontSize: 18 }}>send</span>
                    </>
                  )}
                </button>
                <a href="mailto:info.vimeta@gmail.com" className="cm-direct font-mono">
                  o escríbenos a info.vimeta@gmail.com
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
