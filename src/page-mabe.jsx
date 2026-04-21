/* global React, Link, navigate, Placeholder, PcbArt, LivePcb */
const { useState: useMS, useEffect: useME, useRef: useMR } = React;

/* ============================================================
   Mabe deep-dive — the flagship
   Layered: hero → interactive PCB viewer → tabbed case-study → stats → 2nd board
   ============================================================ */
function MabePage() {
  return (
    <div className="page dark page-enter" style={{ maxWidth: 'none', padding: 0 }}>
      <MabeHero />
      <MabeCaseStudy />
      <MabePcbViewer />
      <MabeBoard2 />
      <MabeOutcomes />
    </div>
  );
}

function MabeHero() {
  return (
    <section style={{ position: 'relative', padding: '140px 48px 80px', overflow: 'hidden', borderBottom: '1px solid var(--rule-dark)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}><LivePcb density={22}/></div>
      <div style={{ position: 'relative', maxWidth: 1400, margin: '0 auto' }} className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 01</span> &nbsp;·&nbsp; 2024 — 2025
        </div>
        <h1 className="serif" style={{ fontSize: 'clamp(64px, 10vw, 148px)', lineHeight: 0.92, letterSpacing: '-0.02em', marginTop: 16, color: 'var(--paper)' }}>
          Mabe<br/><em style={{ color: 'var(--blue)', fontStyle: 'italic' }}>TyP.</em>
        </h1>
        <div style={{ marginTop: 28, fontFamily: 'var(--serif)', fontSize: 26, maxWidth: 760, opacity: 0.8 }}>
          An end-to-end connected refrigerator platform for <b>Mabe's New Technology & Innovation</b> division. Two production PCBs, 20+ sensors, six DFM cycles, one ten-unit production run.
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 28 }}>
          {['Altium Designer', '2-Layer Boards', 'SMD + THT', 'JST ZHR Harness', 'Raspberry Pi · SPI / UART', 'DFM'].map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          <Stat n="2"   l="PCBs designed" sub="Full lifecycle"/>
          <Stat n="43"  l="Unique MPNs"   sub="Main board BOM"/>
          <Stat n="292" l="SMT placements" sub="SMD + mixed THT"/>
          <Stat n="20+" l="Sensors" sub="Temp · humidity · current · fan speed"/>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l, sub }) {
  return (
    <div className="big-stat">
      <div className="n" style={{ color: 'var(--paper)' }}>{n}</div>
      <div className="l" style={{ color: 'var(--teal)' }}>{l}</div>
      <div style={{ opacity: 0.55, fontSize: 13, marginTop: 6 }}>{sub}</div>
    </div>
  );
}

function MabeCaseStudy() {
  const tabs = [
    { id: 'context', label: 'Context',
      body: (<>
        <p>Mabe's NTI division wanted a connected-refrigerator platform capable of telemetry, shelf-presence detection, and voice/vision interaction. I joined under a senior hardware engineer and took full ownership of the PCB lifecycle — schematic capture, layout, fabrication coordination, and bring-up.</p>
        <p>Two boards: a <b>Main Controller</b> (150 × 150 mm) and a compact <b>Liner Board</b> carrying an LED / rack-detection subsystem over a custom magnetic harness.</p>
      </>)
    },
    { id: 'role', label: 'My Role',
      body: (<ul>
        <li>Interpreted hardware reference designs from senior engineers.</li>
        <li>Owned component footprint selection and placement strategy.</li>
        <li>Executed routing with trace-width, clearance, and thermal-relief rules.</li>
        <li>Coordinated with external fabricator and hardware enginers across <b> DFM rounds</b>.</li>
        <li>Resolved footprint mismatches, clearance violations, and DC-DC converter pad issues.</li>
        <li>Performed full board bring-up: signal integrity and sensor reads.</li>
      </ul>)
    },
    { id: 'specs', label: 'Main Board Specs',
      body: (<div className="kv-list">
        {[
          ['Layers', '2-Layer (Top + Bottom)'],
          ['Board Size', '150.07 × 149.93 mm'],
          ['Unique MPNs', '43 components'],
          ['SMT Placements', '292 (SMD + mixed THT)'],
          ['Supply Voltages', '12 V (DC), 5 V (DC), 3.3 V (DC), 127 V (AC)'],
          ['MCU Interface', 'Raspberry Pi · SPI / UART'],
          ['Fabricator', 'AJ Electronic Design, Zapopan, Jalisco'],
          ['DFM Rounds', '6 iterative review cycles'],
          ['Sensor Coverage', 'Humidity · Temperature · Voltage · Current · Fan Speed'],
        ].map(([k, v]) => (
          <div key={k} className="kv"><div className="k">{k}</div><div className="v">{v}</div></div>
        ))}
      </div>)
    },
    { id: 'outcomes', label: 'Outcomes',
      body: (<ul>
        <li>2 production-ready Gerber files submitted to fabricator.</li>
        <li>Full BOM: 43 unique MPNs, 292 SMT placements (Main Board).</li>
        <li>Technical validation report delivered to cross-functional teams.</li>
        <li>Magnetic harness design for Liner Board shelf-tracking subsystem.</li>
        <li>10-unit production run completed.</li>
        <li>Sensor accuracy validated: temperature, humidity, voltage, current, fan speed.</li>
      </ul>)
    },
  ];
  const [active, setActive] = useMS('context');
  const current = tabs.find(t => t.id === active);
  return (
    <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--rule-dark)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 64 }}>
        <div>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 20 }}>// Case study</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                textAlign: 'left', padding: '14px 16px', borderLeft: '2px solid ' + (active === t.id ? 'var(--teal)' : 'var(--rule-dark)'),
                opacity: active === t.id ? 1 : 0.55, fontFamily: 'var(--serif)', fontSize: 22,
                transition: 'opacity 0.2s, border-color 0.2s'
              }}>{t.label}</button>
            ))}
          </div>
        </div>
        <div key={active} className="page-enter" style={{ fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.55, maxWidth: 720 }}>
          <div className="mono" style={{ color: 'var(--teal)', marginBottom: 24, opacity: 0.9 }}>/ {current.id.toUpperCase()}</div>
          {current.body}
        </div>
      </div>
      <style>{`
        .kv-list .kv { grid-template-columns: 200px 1fr; border-top-color: var(--rule-dark); }
        .page ul { padding-left: 1.1em; }
        .page ul li { margin: 10px 0; }
        .page p + p { margin-top: 14px; }
      `}</style>
    </section>
  );
}

/* Interactive PCB viewer */
function MabePcbViewer() {
  const [hot, setHot] = useMS(null);
  const hotspots = [
    { id: 'mcu', x: 42, y: 44, label: 'Raspberry Pi header', detail: 'SPI / UART comms. Centered for trace-length balance.' },
    { id: 'pwr', x: 18, y: 24, label: 'DC-DC conversion', detail: '12V → 5V / 3.3V. Pad issues resolved in DFM rd. 4.' },
    { id: 'ac',  x: 20, y: 72, label: '127V AC entry',    detail: 'Isolated AC section with clearance rules ≥4 mm.' },
    { id: 'sns', x: 68, y: 30, label: 'Sensor header',    detail: 'Temp · humidity · current · fan speed.' },
    { id: 'hrn', x: 82, y: 56, label: 'Liner harness',    detail: 'JST B5B-ZR · magnetic pogo-pin connection.' },
    { id: 'led', x: 60, y: 78, label: 'LED driver',       detail: 'Interior lighting control PWM output.' },
    { id: 'com', x: 32, y: 62, label: 'Communications',   detail: '2.4 GHz module footprint + antenna keepout.' },
  ];
  const active = hotspots.find(h => h.id === hot);
  return (
    <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--rule-dark)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 32 }}>
          <div>
            <div className="mono" style={{ opacity: 0.5 }}>// Interactive · Board 1</div>
            <h2 className="serif" style={{ fontSize: 64, letterSpacing: '-0.02em' }}>Main Controller — hover to inspect.</h2>
          </div>
          <div className="mono" style={{ opacity: 0.55 }}>150 × 150 MM · 2-LAYER</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40 }} className="pcb-grid">
          {/* PCB canvas */}
          <div style={{ position: 'relative', aspectRatio: '1 / 1', background: '#061621', border: '1px solid var(--rule-dark)', overflow: 'hidden' }}>
            <PcbBoardSvg />
            {/* Hotspots */}
            {hotspots.map(h => (
              <button
                key={h.id}
                onMouseEnter={() => setHot(h.id)}
                onFocus={() => setHot(h.id)}
                onClick={() => setHot(h.id)}
                style={{
                  position: 'absolute', left: h.x + '%', top: h.y + '%',
                  width: 36, height: 36, marginLeft: -18, marginTop: -18, borderRadius: '50%',
                  border: '1px solid ' + (hot === h.id ? 'var(--teal)' : 'rgba(245,243,238,0.4)'),
                  background: hot === h.id ? 'rgba(29,158,117,0.2)' : 'rgba(10,14,26,0.35)',
                  backdropFilter: 'blur(2px)', cursor: 'pointer',
                  transition: 'all 0.2s'
                }}>
                <span style={{
                  position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
                  width: 8, height: 8, borderRadius: '50%',
                  background: hot === h.id ? 'var(--teal)' : 'var(--paper)'
                }}/>
              </button>
            ))}
            {/* Corner coordinates */}
            <div className="mono" style={{ position: 'absolute', top: 12, left: 12, opacity: 0.5, fontSize: 10 }}>X: 0.00 Y: 0.00</div>
            <div className="mono" style={{ position: 'absolute', bottom: 12, right: 12, opacity: 0.5, fontSize: 10 }}>X: 150.07 Y: 149.93 MM</div>
          </div>

          {/* Detail panel */}
          <div>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 14 }}>/ {active ? active.id.toUpperCase() : 'SELECT · A · NODE'}</div>
            <div className="serif" style={{ fontSize: 36, lineHeight: 1.1, minHeight: 80 }}>
              {active ? active.label : 'Hover any node to inspect the board.'}
            </div>
            <div style={{ marginTop: 20, fontSize: 15, lineHeight: 1.55, opacity: 0.75, minHeight: 60 }}>
              {active ? active.detail : 'Each highlighted node corresponds to a routed subsystem on the production board.'}
            </div>
            <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--rule-dark)' }}>
              <div className="mono" style={{ opacity: 0.5, marginBottom: 10 }}>// BOARD LEGEND</div>
              {hotspots.map(h => (
                <div key={h.id}
                     onMouseEnter={() => setHot(h.id)}
                     style={{ padding: '8px 0', display: 'flex', gap: 12, opacity: hot === h.id ? 1 : 0.6, cursor: 'pointer', transition: 'opacity 0.2s' }}>
                  <span className="mono" style={{ width: 40 }}>{h.id.toUpperCase()}</span>
                  <span style={{ fontSize: 13 }}>{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real photos */}
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20 }}>
          <Photo src="img/mabe-main-pcb.jpeg" alt="Fabricated Main Controller PCB"
                 aspect="4 / 3" dark caption="Fabricated main controller · production unit · 150 × 150 mm"/>
          <Photo src="img/mabe-main-pcb-altium.jpeg" alt="Altium layout + custom magnetic harness footprint"
                 aspect="4 / 3" dark caption="Altium layout · custom magnetic harness footprint"/>
        </div>
      </div>
    </section>
  );
}

function PcbBoardSvg() {
  return (
    <svg viewBox="0 0 600 600" preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="pcbBoard" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0A1F2A"/>
          <stop offset="1" stopColor="#061119"/>
        </linearGradient>
        <pattern id="boardGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(15,123,154,0.06)" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="600" height="600" fill="url(#pcbBoard)"/>
      <rect width="600" height="600" fill="url(#boardGrid)"/>
      <rect x="16" y="16" width="568" height="568" fill="none" stroke="rgba(15,123,154,0.35)" strokeWidth="2" rx="8"/>
      {/* Mount holes */}
      {[[30,30],[570,30],[30,570],[570,570]].map(([cx,cy],i)=> (
        <g key={i}>
          <circle cx={cx} cy={cy} r="8" fill="none" stroke="rgba(245,243,238,0.4)"/>
          <circle cx={cx} cy={cy} r="3" fill="#061119"/>
        </g>
      ))}
      {/* Traces */}
      <g stroke="#0F7B9A" fill="none" strokeWidth="1.6">
        <path d="M 110 130 L 240 130 L 260 150 L 260 260 L 280 280 L 360 280"/>
        <path d="M 110 180 L 200 180 L 220 200 L 220 340 L 240 360 L 340 360"/>
        <path d="M 110 430 L 180 430 L 200 450 L 200 500 L 220 520 L 360 520"/>
        <path d="M 500 330 L 420 330 L 400 310 L 400 180 L 420 160 L 500 160"/>
        <path d="M 500 390 L 440 390 L 420 410 L 420 480 L 440 500 L 500 500"/>
      </g>
      <g stroke="#1D9E75" fill="none" strokeWidth="1" opacity="0.7">
        <path d="M 140 130 L 240 220 L 340 220"/>
        <path d="M 300 450 L 380 450 L 400 430"/>
        <path d="M 180 500 L 260 500"/>
      </g>
      {/* Components */}
      <g fill="none" stroke="rgba(245,243,238,0.28)">
        <rect x="250" y="250" width="100" height="72" rx="2" strokeWidth="1.2"/>
        <rect x="90"  y="120" width="42" height="26" rx="1" />
        <rect x="90"  y="170" width="42" height="26" rx="1" />
        <rect x="90"  y="420" width="42" height="26" rx="1" />
        <rect x="480" y="140" width="54" height="42" rx="1" />
        <rect x="480" y="320" width="42" height="26" rx="1" />
        <rect x="480" y="380" width="42" height="26" rx="1" />
        <rect x="380" y="440" width="80" height="60" rx="2"/>
        <rect x="160" y="480" width="120" height="50" rx="2"/>
      </g>
      {/* IC pins */}
      <g fill="rgba(245,243,238,0.45)">
        {Array.from({length: 8}).map((_, i) => (
          <rect key={'t'+i} x={256 + i * 12} y="244" width="4" height="6" />
        ))}
        {Array.from({length: 8}).map((_, i) => (
          <rect key={'b'+i} x={256 + i * 12} y="322" width="4" height="6" />
        ))}
      </g>
      {/* Pads */}
      <g fill="#D9A441">
        {Array.from({length: 12}).map((_, i) => (
          <circle key={i} cx={40 + i * 12} cy="580" r="2.5" opacity="0.7"/>
        ))}
      </g>
      {/* Silk */}
      <g fill="rgba(245,243,238,0.35)" fontFamily="JetBrains Mono" fontSize="9">
        <text x="256" y="238">U1 · MCU</text>
        <text x="96" y="112">J1</text>
        <text x="96" y="162">J2</text>
        <text x="482" y="132">PWR</text>
        <text x="164" y="472">LED · DRV</text>
        <text x="384" y="432">RF</text>
      </g>
    </svg>
  );
}

function MabeBoard2() {
  return (
    <section style={{ padding: '100px 48px', borderBottom: '1px solid var(--rule-dark)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="mono" style={{ opacity: 0.5 }}>// Board 2 · Liner subsystem</div>
        <h2 className="serif" style={{ fontSize: 64, letterSpacing: '-0.02em', marginTop: 8 }}>
          Liner Board.
        </h2>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="liner-grid">
          <Photo src="img/mabe-liner-pcb.jpeg" alt="Liner Board — top view" aspect="4 / 3" dark
                 caption="Liner Board"/>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.5, opacity: 0.85 }}>
              A compact sub-PCB mounted inside the refrigerator liner. It interfaces with the Main Controller over a custom magnetic harness and handles <b>shelf placement detection</b> and <b>internal lighting control</b>.
            </div>
            <div style={{ marginTop: 28 }}>
              {[
                ['Width', '30.35 mm (1.195 in)'],
                ['Height', '22.73 mm (0.895 in)'],
                ['Interface', 'Magnetic pogo-pin harness · ZR series'],
                ['Connectors', 'JST ZHR-5 / B5B-ZR'],
                ['Resistors', '0603 SMD'],
                ['Rack detection', 'Positional encoding'],
                ['Lighting', 'Integrated LED control circuit'],
              ].map(([k, v]) => (
                <div key={k} className="kv" style={{ borderTopColor: 'var(--rule-dark)', ...(k === 'Rack detection' ? { color: 'rgb(10, 14, 26)', borderColor: 'rgb(10, 14, 26)' } : {}) }}>
                  <div className="k">{k}</div><div className="v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MabeOutcomes() {
  const counters = [
    { n: '10', l: 'Production units' },
    { n: '6',  l: 'DFM rounds' },
    { n: '2',  l: 'Gerber releases' },
    { n: '50%', l: 'Usability lift · UX study' },
  ];
  return (
    <section style={{ padding: '120px 48px 140px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="mono" style={{ opacity: 0.5 }}>// Outcomes</div>
        <h2 className="serif" style={{ fontSize: 72, letterSpacing: '-0.02em' }}>
          Built · validated · <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>shipped</em>.
        </h2>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {counters.map(c => (
            <div key={c.l} className="big-stat" style={{ borderTop: '1px solid var(--rule-dark)', paddingTop: 24 }}>
              <div className="n" style={{ color: 'var(--paper)' }}>{c.n}</div>
              <div className="l" style={{ color: 'var(--teal)' }}>{c.l}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 96, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/irish" className="btn">Next project · Irish Nostalgia <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { MabePage });
