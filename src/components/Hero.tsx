import { useRef, useState, useEffect } from 'react'

type MotionLevel = 'off' | 'low' | 'high'

interface HeroProps {
  motionLevel?: MotionLevel
}

interface GraphNodeT {
  id: string
  x: number
  y: number
  r: number
  label: string
}

function HeroGraph({ motionLevel }: { motionLevel: MotionLevel }) {
  const nodes: GraphNodeT[] = [
    { id: 'core', x: 250, y: 250, r: 36, label: 'CORE' },
    { id: 'a', x: 90, y: 110, r: 22, label: 'LLM' },
    { id: 'b', x: 410, y: 110, r: 22, label: 'API' },
    { id: 'c', x: 60, y: 320, r: 22, label: 'DB' },
    { id: 'd', x: 440, y: 380, r: 22, label: 'MCP' },
    { id: 'e', x: 250, y: 460, r: 22, label: 'AGENT' },
  ]
  const edges: [string, string][] = [
    ['core', 'a'], ['core', 'b'], ['core', 'c'], ['core', 'd'], ['core', 'e'],
    ['a', 'b'], ['c', 'e'], ['d', 'e'],
  ]

  const getNode = (id: string) => nodes.find((n) => n.id === id)!

  return (
    <div className="hero-graph-wrap">
      <span className="bracket bracket-tl" />
      <span className="bracket bracket-tr" />
      <span className="bracket bracket-bl" />
      <span className="bracket bracket-br" />

      <div className="hero-graph-header">
        <div className="hero-graph-dots">
          <span /><span /><span />
        </div>
        <span className="hero-graph-label font-mono">vimeta · network.mcp</span>
        <span className="hero-graph-status">
          <span className="pulse" />
          live
        </span>
      </div>

      <svg viewBox="0 0 500 540" className="hero-graph-svg">
        <defs>
          <radialGradient id="node-glow">
            <stop offset="0" stopColor="#00e5ff" stopOpacity="0.6" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00e5ff" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#00e5ff" stopOpacity="0.5" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const A = getNode(a)
          const B = getNode(b)
          return (
            <line key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="url(#edge-grad)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
              className="graph-edge"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          )
        })}

        {motionLevel !== 'off' && edges.slice(0, 5).map(([a, b], i) => {
          const A = getNode(a)
          const B = getNode(b)
          return (
            <circle key={`p${i}`} r="3" fill="#00e5ff">
              <animate attributeName="cx" from={String(A.x)} to={String(B.x)} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="cy" from={String(A.y)} to={String(B.y)} dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          )
        })}

        {nodes.map((n) => (
          <g key={n.id} className={`graph-node ${n.id === 'core' ? 'is-core' : ''}`}>
            <circle cx={n.x} cy={n.y} r={n.r * 2} fill="url(#node-glow)" opacity="0.5" />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#0a1726" stroke="#00e5ff" strokeWidth={n.id === 'core' ? 2 : 1} />
            {n.id === 'core' && (
              <circle cx={n.x} cy={n.y} r={n.r + 8} fill="none" stroke="#00e5ff" strokeOpacity="0.4" strokeWidth="1" className="graph-pulse-ring" />
            )}
            <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#00e5ff" fontSize={n.id === 'core' ? 11 : 9} fontFamily="JetBrains Mono, monospace" fontWeight="600">{n.label}</text>
          </g>
        ))}
      </svg>

      <div className="hero-graph-footer">
        <span className="font-mono">6 nodes</span>
        <span className="font-mono">8 edges</span>
        <span className="font-mono">latency: 12ms</span>
      </div>
    </div>
  )
}

export default function Hero({ motionLevel = 'high' }: HeroProps) {
  const meshRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const wordmarkRef = useRef<HTMLHeadingElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!wordmarkRef.current) return
    const el = wordmarkRef.current
    el.classList.add('is-entering')
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.remove('is-entering'))
    })
    return () => cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY
      if (meshRef.current) meshRef.current.style.transform = `translate3d(0, ${s * 0.15}px, 0)`
      if (nodesRef.current) nodesRef.current.style.transform = `translate3d(0, ${s * -0.25}px, 0)`
      if (orbRef.current) orbRef.current.style.transform = `translate3d(0, ${s * 0.1}px, 0)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (motionLevel === 'off') return
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const r = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [motionLevel])

  const tilt = motionLevel === 'off'
    ? ''
    : `perspective(1200px) rotateX(${mouse.y * -2}deg) rotateY(${mouse.x * 2}deg)`

  return (
    <section ref={heroRef} className="hero" id="hero">
      <div ref={meshRef} className="hero-mesh grid-mesh mask-radial" />

      <div ref={orbRef} className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div ref={nodesRef} className="hero-nodes">
        <span className="node node-a" />
        <span className="node node-b" />
        <span className="node node-c" />
        <span className="node node-d" />
        <span className="node node-e" />
      </div>

      <svg className="hero-circuit" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="circuit-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#00e5ff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#00e5ff" stopOpacity="0.6" />
            <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,400 Q360,300 720,420 T1440,380" fill="none" stroke="rgba(0,229,255,0.15)" strokeWidth="1" />
        <path d="M0,500 Q480,600 960,480 T1440,540" fill="none" stroke="rgba(0,229,255,0.1)" strokeWidth="1" />
        <path d="M100,200 L300,400 L250,650 M1200,100 L1000,300 L1100,550" fill="none" stroke="rgba(0,229,255,0.18)" strokeWidth="0.8" strokeDasharray="4 4" />
        <circle cx="100" cy="200" r="3" fill="#00e5ff" />
        <circle cx="300" cy="400" r="3" fill="#00e5ff" />
        <circle cx="250" cy="650" r="3" fill="#00e5ff" />
        <circle cx="1200" cy="100" r="3" fill="#00e5ff" />
        <circle cx="1000" cy="300" r="3" fill="#00e5ff" />
        <circle cx="1100" cy="550" r="3" fill="#00e5ff" />
        <circle r="4" fill="#00e5ff" className="hero-pulse">
          <animateMotion dur="8s" repeatCount="indefinite" path="M0,400 Q360,300 720,420 T1440,380" />
        </circle>
        <circle r="3" fill="#00e5ff" opacity="0.7">
          <animateMotion dur="11s" repeatCount="indefinite" path="M0,500 Q480,600 960,480 T1440,540" />
        </circle>
      </svg>

      {motionLevel !== 'off' && <div className="hero-scanline" />}

      <div className="hero-content container">
        <div className="hero-left">
          <span className="tag reveal active">
            <span className="pulse" />
            Next-Gen Software Agency
          </span>

          <h1 ref={wordmarkRef} className="hero-wordmark reveal active reveal-delay-1" style={{ transform: tilt }}>
            <span className="wordmark-letter" style={{ '--i': 0 }}>V</span>
            <span className="wordmark-letter" style={{ '--i': 1 }}>I</span>
            <span className="wordmark-letter" style={{ '--i': 2 }}>M</span>
            <span className="wordmark-letter" style={{ '--i': 3 }}>E</span>
            <span className="wordmark-letter" style={{ '--i': 4 }}>T</span>
            <span className="wordmark-letter" style={{ '--i': 5 }}>A</span>
          </h1>

          <h2 className="hero-tagline reveal active reveal-delay-2">
            Visión con <span className="hero-tagline-accent">propósito<span className="hero-tagline-cursor">.</span></span>
          </h2>

          <p className="hero-desc reveal active reveal-delay-3">
            Elevamos el potencial de tu empresa mediante el desarrollo estratégico de software, agentes de IA y protocolos de contexto avanzados con una inmersión técnica total.
          </p>

          <div className="hero-actions reveal active reveal-delay-4">
            <a href="#contact" className="btn btn-primary">
              Hablemos de tu proyecto
              <span className="material-icons" style={{ fontSize: 18 }}>bolt</span>
            </a>
            <a href="#services" className="btn btn-ghost">
              Nuestros servicios
              <span className="material-icons" style={{ fontSize: 18 }}>arrow_forward</span>
            </a>
          </div>

          <div className="hero-stats reveal active reveal-delay-4">
            <div className="hero-stat">
              <div className="hero-stat-value">99<span>%</span></div>
              <div className="hero-stat-label">eficiencia IA</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">100<span>+</span></div>
              <div className="hero-stat-label">APIs conectadas</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="hero-stat-value">24<span>/7</span></div>
              <div className="hero-stat-label">despliegue</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <HeroGraph motionLevel={motionLevel} />
        </div>
      </div>

      <div className="hero-scroll-cue">
        <span className="font-mono">desplazar</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
