/* global React */
const { useState, useEffect, useRef, useMemo } = React;

/* ============================================================
   Router (hash-based, works on GitHub Pages)
   ============================================================ */
function useHashRoute() {
  const [route, setRoute] = useState(() => (window.location.hash || '#/').slice(1) || '/');
  useEffect(() => {
    const onHash = () => setRoute((window.location.hash || '#/').slice(1) || '/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}
function navigate(to) {
  window.location.hash = '#' + to;
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}
function Link({ to, children, className, ...rest }) {
  const onClick = (e) => { e.preventDefault(); navigate(to); };
  return <a href={'#' + to} onClick={onClick} className={className} {...rest}>{children}</a>;
}

/* ============================================================
   Tweaks context
   ============================================================ */
const TweaksContext = React.createContext(null);
const useTweaks = () => React.useContext(TweaksContext);

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "pcb",
  "accent": "teal",
  "motion": "heavy",
  "forceDarkAll": false
}/*EDITMODE-END*/;

function TweaksProvider({ children }) {
  const [state, setState] = useState(TWEAK_DEFAULTS);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handle = (e) => {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', handle);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (_) {}
    return () => window.removeEventListener('message', handle);
  }, []);

  const set = (patch) => {
    setState(prev => {
      const next = { ...prev, ...patch };
      try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*'); } catch (_) {}
      return next;
    });
  };

  return (
    <TweaksContext.Provider value={{ ...state, set }}>
      {children}
      {active && <TweaksPanel state={state} set={set} />}
    </TweaksContext.Provider>
  );
}

function TweaksPanel({ state, set }) {
  const accents = [
    { id: 'teal', color: '#1D9E75' },
    { id: 'blue', color: '#0F7B9A' },
    { id: 'amber', color: '#D89B3A' },
    { id: 'magenta', color: '#B04E7A' }
  ];
  return (
    <div className="tweaks">
      <h4>Tweaks</h4>
      <div className="row">
        <label>Hero variant</label>
        <select value={state.heroVariant} onChange={e => set({ heroVariant: e.target.value })}>
          <option value="pcb">PCB trace</option>
          <option value="terminal">Terminal</option>
          <option value="editorial">Editorial</option>
          <option value="scope">Oscilloscope</option>
        </select>
      </div>
      <div className="row">
        <label>Accent</label>
        <div className="swatches">
          {accents.map(a => (
            <div key={a.id}
                 className={'swatch' + (state.accent === a.id ? ' on' : '')}
                 style={{ background: a.color }}
                 onClick={() => set({ accent: a.id })} />
          ))}
        </div>
      </div>
      <div className="row">
        <label>Motion</label>
        <select value={state.motion} onChange={e => set({ motion: e.target.value })}>
          <option value="subtle">Subtle</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
        </select>
      </div>
    </div>
  );
}

/* ============================================================
   Accent resolver
   ============================================================ */
function useAccentCss() {
  const t = useTweaks();
  useEffect(() => {
    const map = { teal: '#1D9E75', blue: '#0F7B9A', amber: '#D89B3A', magenta: '#B04E7A' };
    document.documentElement.style.setProperty('--teal', map[t.accent] || '#1D9E75');
  }, [t.accent]);
}

/* ============================================================
   Cursor trace
   ============================================================ */
function CursorTrace() {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    let raf;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e) => {
      const a = e.target.closest('a, button, .hover-big');
      setHover(!!a);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);
  // Hide on touch
  if (typeof window !== 'undefined' && matchMedia('(hover: none)').matches) return null;
  return <div ref={ref} className={'cursor-trace' + (hover ? ' hover' : '')} />;
}

/* ============================================================
   Navbar
   ============================================================ */
function Nav({ route }) {
  const dark = route === '/' || route.startsWith('/mabe');
  const links = [
    { to: '/about', label: 'About' },
    { to: '/timeline', label: 'Journey' },
    { to: '/mabe', label: 'Projects' },
    { to: '/education', label: 'Education' },
  ];
  return (
    <nav className={'nav ' + (dark ? 'dark' : 'light')}>
      <Link to="/" className="nav-brand">
        <span className="dot" />
        <span>Moises Carrera · Portfolio '26</span>
      </Link>
      <div className="nav-links">
        {links.map(l => (
          <Link key={l.to} to={l.to} className={'nav-link' + (route.startsWith(l.to) ? ' active' : '')}>
            {l.label}
          </Link>
        ))}
        <a href="uploads/MoisesCarrera_Resume_M.pdf" target="_blank" className="nav-link">Resume ↗</a>
      </div>
    </nav>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function Footer({ dark }) {
  return (
    <footer style={{
      padding: '80px 48px 40px',
      background: dark ? 'var(--ink)' : 'var(--paper)',
      color: dark ? 'var(--paper)' : 'var(--ink)',
      borderTop: '1px solid ' + (dark ? 'var(--rule-dark)' : 'var(--rule)')
    }} className={dark ? 'dark' : ''}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="mono" style={{ opacity: 0.5, marginBottom: 24 }}>// 03 — Let's build</div>
        <h2 className="serif" style={{ fontSize: 'clamp(56px, 9vw, 128px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
          Let's build <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>something</em> together.
        </h2>
        <div style={{ marginTop: 40, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <a className="btn" href="mailto:mcarrera7@icloud.com">mcarrera7@icloud.com <span className="arrow">→</span></a>
          <a className="btn" href="https://www.linkedin.com/in/moisescarrera/" target="_blank">LinkedIn <span className="arrow">↗</span></a>
          <a className="btn" href="uploads/MoisesCarrera_Resume_M-eececdcc.pdf" target="_blank">Resume PDF <span className="arrow">↓</span></a>
        </div>
        <div style={{
          marginTop: 80, paddingTop: 24,
          borderTop: '1px solid ' + (dark ? 'var(--rule-dark)' : 'var(--rule)'),
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.55
        }}>
          <div>© 2026 Moises Carrera</div>
          <div>South Bend, Indiana · 41.6764°N 86.2520°W</div>
          <div>Notre Dame ESTEEM '26</div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Placeholder art
   ============================================================ */
function Placeholder({ label, aspect = '4 / 3', light, style, children, variant = 'stripe' }) {
  return (
    <div className={'placeholder' + (light ? ' light' : '')} style={{ aspectRatio: aspect, ...style }}>
      <span className="ph-corner tl" />
      <span className="ph-corner tr" />
      <span className="ph-corner bl" />
      <span className="ph-corner br" />
      {variant === 'pcb' && <PcbArt />}
      <span className="ph-label">{label}</span>
      {children}
    </div>
  );
}

/* Photo frame — same corner marks + teal hairline as placeholders, but showing a real image.
   Keeps the dark/blue/teal hero palette coherent across the site. */
function Photo({ src, alt, aspect = '4 / 3', caption, style, objectPosition = 'center', dark }) {
  return (
    <figure style={{ margin: 0, ...style }}>
      <div style={{
        position: 'relative', aspectRatio: aspect, overflow: 'hidden',
        background: dark ? 'var(--ink-2)' : 'var(--paper-2)',
        border: '1px solid ' + (dark ? 'var(--rule-dark)' : 'var(--rule)')
      }}>
        <img src={src} alt={alt || ''} loading="lazy" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition
        }}/>
        <span className="ph-corner tl" style={{ color: 'var(--teal)', opacity: 0.9, zIndex: 2 }}/>
        <span className="ph-corner tr" style={{ color: 'var(--teal)', opacity: 0.9, zIndex: 2 }}/>
        <span className="ph-corner bl" style={{ color: 'var(--teal)', opacity: 0.9, zIndex: 2 }}/>
        <span className="ph-corner br" style={{ color: 'var(--teal)', opacity: 0.9, zIndex: 2 }}/>
      </div>
      {caption && (
        <figcaption className="mono" style={{
          marginTop: 10, opacity: 0.55, fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase'
        }}>{caption}</figcaption>
      )}
    </figure>
  );
}

/* ============================================================
   Reusable PCB trace SVG background
   ============================================================ */
function PcbArt({ opacity = 0.35 }) {
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity }}
      viewBox="0 0 600 450" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="tr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0F7B9A" stopOpacity="0.8"/>
          <stop offset="1" stopColor="#1D9E75" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      <g stroke="url(#tr)" strokeWidth="1.2">
        <path d="M 20 60 L 120 60 L 150 90 L 280 90 L 310 60 L 520 60" />
        <path d="M 20 120 L 180 120 L 210 150 L 380 150 L 410 120 L 580 120" />
        <path d="M 20 200 L 80 200 L 110 230 L 110 360 L 140 390 L 480 390" />
        <path d="M 250 200 L 340 200 L 370 230 L 480 230 L 510 200 L 580 200" />
        <path d="M 60 260 L 200 260 L 230 290 L 350 290 L 380 320 L 460 320" />
        <path d="M 20 330 L 70 330 L 100 360 L 240 360" />
      </g>
      <g fill="#1D9E75">
        <circle cx="120" cy="60" r="2.2"/><circle cx="280" cy="90" r="2.2"/>
        <circle cx="180" cy="120" r="2.2"/><circle cx="380" cy="150" r="2.2"/>
        <circle cx="110" cy="230" r="2.2"/><circle cx="340" cy="200" r="2.2"/>
        <circle cx="230" cy="290" r="2.2"/><circle cx="460" cy="320" r="2.2"/>
        <circle cx="70" cy="330" r="2.2"/>
      </g>
      <g fill="none" stroke="#0F7B9A" strokeWidth="1" opacity="0.6">
        <rect x="160" y="170" width="60" height="38" rx="2"/>
        <rect x="320" y="250" width="46" height="26" rx="2"/>
        <rect x="420" y="70" width="80" height="36" rx="2"/>
      </g>
    </svg>
  );
}

/* ============================================================
   Live PCB trace background (cursor-reactive)
   ============================================================ */
function LivePcb({ density = 16 }) {
  const svgRef = useRef();
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let rafId;
    let mx = 0.5, my = 0.5;
    const onMove = (e) => { mx = e.clientX / window.innerWidth; my = e.clientY / window.innerHeight; };
    const pulse = () => {
      const paths = svg.querySelectorAll('path.live');
      paths.forEach((p, i) => {
        const phase = (performance.now() / 2000 + i * 0.12) % 1;
        p.style.strokeDashoffset = String(-phase * 200);
        const dx = (mx - 0.5) * 12, dy = (my - 0.5) * 12;
        p.setAttribute('transform', `translate(${dx * ((i % 3) - 1)}, ${dy * ((i % 2) - 0.5)})`);
      });
      rafId = requestAnimationFrame(pulse);
    };
    window.addEventListener('mousemove', onMove);
    pulse();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('mousemove', onMove); };
  }, []);
  // Generate random-ish paths
  const paths = useMemo(() => {
    const rng = (s) => { let x = Math.sin(s) * 10000; return x - Math.floor(x); };
    const list = [];
    for (let i = 0; i < density; i++) {
      const y = 40 + i * (520 / density) + rng(i + 1) * 20;
      const segs = 3 + Math.floor(rng(i + 2) * 4);
      let x = -20;
      let d = `M ${x} ${y.toFixed(1)}`;
      let cy = y;
      for (let s = 0; s < segs; s++) {
        const nx = x + 120 + rng(i * 10 + s) * 220;
        const ny = cy + (rng(i * 7 + s) > 0.5 ? 1 : -1) * (20 + rng(i + s) * 60);
        d += ` L ${nx.toFixed(1)} ${cy.toFixed(1)} L ${(nx + 20).toFixed(1)} ${ny.toFixed(1)}`;
        x = nx + 20; cy = ny;
      }
      d += ` L 1920 ${cy.toFixed(1)}`;
      list.push(d);
    }
    return list;
  }, [density]);
  return (
    <svg ref={svgRef} className="will-parallax"
         style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
         viewBox="0 0 1920 560" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="pcb-grad" x1="0" x2="1">
          <stop offset="0" stopColor="#0F7B9A" stopOpacity="0.15"/>
          <stop offset="0.5" stopColor="#0F7B9A" stopOpacity="0.9"/>
          <stop offset="1" stopColor="#1D9E75" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path key={i} d={d} className="live"
          stroke={i % 4 === 0 ? '#1D9E75' : '#0F7B9A'}
          strokeOpacity={0.35 + (i % 3) * 0.1}
          strokeWidth={i % 5 === 0 ? 1.2 : 0.7}
          strokeDasharray="6 200" />
      ))}
      {paths.map((d, i) => i % 3 === 0 && (
        <circle key={'c' + i} cx={200 + i * 110} cy={40 + i * 34 % 500} r="2.2" fill="#1D9E75" opacity="0.9"/>
      ))}
    </svg>
  );
}

Object.assign(window, {
  useHashRoute, navigate, Link,
  TweaksContext, useTweaks, TweaksProvider, useAccentCss,
  CursorTrace, Nav, Footer, Placeholder, Photo, PcbArt, LivePcb
});
