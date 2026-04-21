/* global React, Link, navigate, useTweaks, LivePcb */
const { useState: useHeroState, useEffect: useHeroEffect, useRef: useHeroRef } = React;

/* ============================================================
   Hero — wraps 4 variants
   ============================================================ */
function Hero() {
  const t = useTweaks();
  const variant = t.heroVariant;

  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-vignette" />
      <div className="scanline" />

      {variant === 'pcb' && <HeroPcb />}
      {variant === 'terminal' && <HeroTerminal />}
      {variant === 'editorial' && <HeroEditorial />}
      {variant === 'scope' && <HeroScope />}

      {/* Shared bottom project index */}
      <HeroProjectIndex />
    </section>
  );
}

/* ---- Variant 1: PCB trace (default) ---- */
function HeroPcb() {
  return (
    <div style={{ position: 'relative', padding: '140px 48px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <LivePcb density={18} />
      <div style={{ position: 'relative' }} className="stagger">
        <div className="mono" style={{ opacity: 0.55, marginBottom: 24, letterSpacing: '0.22em' }}>
          <span style={{ color: 'var(--teal)' }}>●</span> PORTFOLIO · 2026 · SOUTH BEND, IN
        </div>
        <h1 className="serif" style={{
          fontSize: 'clamp(72px, 13vw, 196px)', lineHeight: 0.9, letterSpacing: '-0.03em',
          color: 'var(--paper)', maxWidth: '11ch'
        }}>
          Moises<br/>
          <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Carrera.</em>
        </h1>
        <div style={{ display: 'flex', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 440 }}>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// TRAJECTORY</div>
            <div style={{ fontSize: 18, lineHeight: 1.5, fontFamily: 'var(--serif)' }}>
              Mechatronics Engineer <span style={{ opacity: 0.5 }}>→</span> Hardware Designer <span style={{ opacity: 0.5 }}>→</span> Product Developer.
              <br/><span style={{ opacity: 0.65 }}>Bridging the bench and the customer.</span>
            </div>
          </div>
          <div style={{ maxWidth: 340 }}>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// CURRENTLY</div>
            <div style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.8 }}>
              MS ESTEEM @ Notre Dame '26 · Product Growth @ Irish Nostalgia.
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap' }}>
          <Link to="/mabe" className="btn">See flagship project <span className="arrow">→</span></Link>
          <Link to="/about" className="btn" style={{ opacity: 0.7 }}>About me <span className="arrow">→</span></Link>
        </div>
      </div>
    </div>
  );
}

/* ---- Variant 2: Terminal ---- */
function HeroTerminal() {
  const [lines, setLines] = useHeroState([]);
  const script = [
    { t: '$ whoami', d: 300 },
    { t: 'moises_carrera', cls: 'teal', d: 400 },
    { t: '$ cat trajectory.txt', d: 500 },
    { t: 'mechatronics.engineer → hardware.designer → product.developer', cls: 'blue', d: 600 },
    { t: '$ ls ./capabilities/', d: 400 },
    { t: 'altium_designer/  solidworks/  bambu_lab/  python/  pcb_dfm/', cls: 'dim', d: 500 },
    { t: '$ status --location --role', d: 400 },
    { t: 'location=south_bend,in  grad=notre_dame_esteem_2026  state=building', cls: 'teal', d: 0 },
  ];
  useHeroEffect(() => {
    let cancelled = false;
    (async () => {
      for (let i = 0; i < script.length; i++) {
        if (cancelled) return;
        await new Promise(r => setTimeout(r, script[i].d));
        setLines(prev => [...prev, script[i]]);
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return (
    <div style={{ position: 'relative', padding: '160px 48px 60px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: 'var(--ink-2)', border: '1px solid var(--rule-dark)', borderRadius: 10,
        padding: '16px 20px', fontFamily: 'var(--mono)', fontSize: 14, lineHeight: 1.9, minHeight: 320,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
      }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}/>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }}/>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }}/>
          <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.5 }}>moises@portfolio ~ </span>
        </div>
        {lines.map((l, i) => (
          <div key={i} style={{
            color: l.cls === 'teal' ? 'var(--teal)' : l.cls === 'blue' ? '#6bb8d0' :
                   l.cls === 'dim' ? 'rgba(245,243,238,0.55)' : 'var(--paper)'
          }}>
            {l.t}
          </div>
        ))}
        <div>$ <span className="caret">&nbsp;</span></div>
      </div>
      <h1 className="serif" style={{
        fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 0.95, letterSpacing: '-0.02em',
        color: 'var(--paper)', marginTop: 60
      }}>
        Moises <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>Carrera.</em>
      </h1>
    </div>
  );
}

/* ---- Variant 3: Editorial ---- */
function HeroEditorial() {
  return (
    <div style={{ position: 'relative', padding: '140px 48px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="mono" style={{ opacity: 0.55, marginBottom: 20 }}>
          Vol. 01 · Engineering Portfolio · 2026
        </div>
        <h1 className="serif" style={{
          fontSize: 'clamp(96px, 17vw, 280px)', lineHeight: 0.82, letterSpacing: '-0.035em',
          color: 'var(--paper)'
        }}>
          <span style={{ display: 'block' }}>Hardware,</span>
          <span style={{ display: 'block', fontStyle: 'italic', color: 'var(--blue)', paddingLeft: '18vw' }}>made</span>
          <span style={{ display: 'block' }}>for people.</span>
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 60 }}>
          <Ticker label="Status" value="Graduating · May '26" />
          <Ticker label="Focus" value="PCB · Product · Commercialization" />
          <Ticker label="Currently" value="Irish Nostalgia · Tycho.AI" />
          <Ticker label="Based" value="South Bend, IN" />
        </div>
      </div>
    </div>
  );
}
function Ticker({ label, value }) {
  return (
    <div style={{ borderTop: '1px solid var(--rule-dark)', paddingTop: 14 }}>
      <div className="mono" style={{ opacity: 0.45, marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2 }}>{value}</div>
    </div>
  );
}

/* ---- Variant 4: Oscilloscope ---- */
function HeroScope() {
  const svgRef = useHeroRef();
  useHeroEffect(() => {
    let raf;
    const loop = () => {
      const t = performance.now() / 1000;
      if (svgRef.current) {
        const path = svgRef.current.querySelector('.wave');
        let d = 'M 0 150';
        for (let x = 0; x <= 1200; x += 8) {
          const y = 150
            + Math.sin(x * 0.01 + t * 1.8) * 40
            + Math.sin(x * 0.04 + t * 3.1) * 18
            + Math.sin(x * 0.09 - t * 2) * 8;
          d += ` L ${x} ${y.toFixed(1)}`;
        }
        path.setAttribute('d', d);
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div style={{ position: 'relative', padding: '140px 48px 60px', maxWidth: 1400, margin: '0 auto' }}>
      <svg ref={svgRef} viewBox="0 0 1200 300" style={{ width: '100%', height: 260, marginBottom: 20 }}>
        <defs>
          <pattern id="sc" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(29,158,117,0.12)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="wg" x1="0" x2="1">
            <stop offset="0" stopColor="#1D9E75" stopOpacity="0"/>
            <stop offset="0.5" stopColor="#1D9E75" stopOpacity="1"/>
            <stop offset="1" stopColor="#0F7B9A" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect width="1200" height="300" fill="url(#sc)"/>
        <line x1="0" y1="150" x2="1200" y2="150" stroke="rgba(29,158,117,0.25)" strokeDasharray="4 6"/>
        <path className="wave" d="M 0 150" fill="none" stroke="url(#wg)" strokeWidth="2"/>
        <text x="14" y="24" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(245,243,238,0.5)">CH1 · 2.0V/div · 20ms · TRIG ▲</text>
        <text x="14" y="290" fontFamily="JetBrains Mono" fontSize="10" fill="rgba(245,243,238,0.5)">INPUT: MOISES_CARRERA · 2026</text>
      </svg>
      <h1 className="serif" style={{
        fontSize: 'clamp(80px, 14vw, 200px)', lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--paper)'
      }}>
        Signal <em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>→</em> shipped.
      </h1>
      <div style={{ marginTop: 30, fontFamily: 'var(--serif)', fontSize: 22, maxWidth: 560, opacity: 0.75 }}>
        Moises Carrera designs boards, validates signals, and brings products to market. Hardware that makes it out of the lab.
      </div>
    </div>
  );
}

/* ---- Shared: Project index at hero bottom ---- */
function HeroProjectIndex() {
  const projects = [
    { id: '01', to: '/mabe',    title: 'Mabe TyP',    desc: 'Connected refrigerator platform · Mabe NTI · PCB lifecycle', year: '2024—25', tag: 'PCB · IoT' },
    { id: '02', to: '/irish',   title: 'Irish Nostalgia',         desc: 'Licensed ND memorabilia · Shopify rebuild · 7 B2B', year: '2025— ', tag: 'Product · Retail' },
    { id: '03', to: '/idealab', title: 'IDEA Center · Innovation Lab', desc: 'Prototyping & Design Engineer · Notre Dame · SolidWorks, mentorship, lab ops', year: '2025— ', tag: 'Design · Mentorship' },
    { id: '04', to: '/alcar',   title: 'Alcar Consultores',       desc: 'Strategy & commercialization consulting', year: '2024— ', tag: 'Strategy · Consulting' },
    { id: '05', to: '/tycho',   title: 'Tycho.AI',                desc: 'Commercial strategy for autonomous ag-drones · discovery interviews', year: '2025— ', tag: 'Drones · Strategy' },
    { id: '06', to: '/baja',    title: 'BAJA SAE Suspension',     desc: 'Double-wishbone suspension · FEA · in-house build', year: '2021—23', tag: 'Mechanical' },
  ];
  return (
    <div style={{ position: 'relative', padding: '80px 48px 60px', maxWidth: 1400, margin: '0 auto', color: 'var(--paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 24 }}>
        <div>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 8 }}>// 01 — Selected Work</div>
          <div className="serif" style={{ fontSize: 32 }}>Six chapters, one throughline.</div>
        </div>
        <Link to="/timeline" className="mono" style={{ opacity: 0.6, letterSpacing: '0.18em' }}>VIEW JOURNEY →</Link>
      </div>
      <div>
        {projects.map(p => (
          <Link key={p.id} to={p.to} className="proj-row hover-big" style={{ display: 'grid' }}>
            <div className="p-num">{p.id}</div>
            <div className="p-title serif">{p.title}</div>
            <div className="p-desc">{p.desc}</div>
            <div className="p-year">{p.year}</div>
            <div className="p-cta">Open<span className="arrow">→</span></div>
          </Link>
        ))}
        <div style={{ borderTop: '1px solid var(--rule-dark)' }}/>
      </div>
    </div>
  );
}

Object.assign(window, { Hero });
