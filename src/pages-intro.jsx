/* global React, Link, navigate, Placeholder, PcbArt */

/* ============================================================
   About Page
   ============================================================ */
function AboutPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="page-label">// About · 02</div>
        <h1 className="page-title">I design the <em>hardware</em> <span className="teal">people</span> actually use.</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, marginTop: 80 }} className="about-grid">
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.45, maxWidth: 640 }}>
            I'm a Mechatronics Engineer from Anáhuac Querétaro and an ESTEEM graduate student at Notre Dame. My day-to-day lives at innovation, product development; fullfiling orders and optimizing our E-Commerce for my startup and help students to develop their startup ideas and prototype them.
            <br/><br/>
            At <b>Mabe NTI</b> I co-led the PCB lifecycle for a connected-refrigerator platform. At <b>Irish Nostalgia</b> I designed the E-Commerce platform, build the product line, and grow along my teammates in the start-up environment. At <b>Tycho.AI</b> I'm writing the GTM strategy for autonomous drones in the AgTech field.
            <br/><br/>
            The connective tissue: I like turning <i>"does it work?"</i> into <i>"will someone buy it?"</i>
          </div>
          <div>
            <Photo src="img/portrait.jpeg" alt="Moises Carrera" aspect="4 / 5" objectPosition="center 30%" caption="South Bend, IN · 2026" />
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginTop: 120 }}>
          <div className="mono" style={{ opacity: 0.5 }}>// Capability map</div>
          <h2 className="serif" style={{ fontSize: 56, letterSpacing: '-0.02em', marginTop: 8 }}>What I can own.</h2>
          <div className="grid col-3" style={{ marginTop: 40 }}>
            <SkillBlock title="PCB Design" items={['Altium Designer · schematic & layout', 'Mixed SMD / through-hole', 'Outputs generation (Gerber, BOM)', 'Cross-functional reporting']} />
            <SkillBlock title="Prototypes & 3D Design" items={['SolidWorks · parts & assemblies', '3D printing · multi-material', 'Laser cutting', 'Design for manufacturability']} />
            <SkillBlock title="Product & Strategy" items={['Customer discovery (50+ interviews)', 'GTM strategy & financial models', 'Shopify storefront rebuild', 'B2B account management', 'VOC-grounded redesign']} />
          </div>
        </div>

        {/* Languages */}
        <div style={{ marginTop: 100, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          <LangBar lang="Spanish"  level="Native"       pct={100}/>
          <LangBar lang="English"  level="Advanced"     pct={92}/>
          <LangBar lang="Italian"  level="Conversational" pct={42}/>
        </div>
      </div>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="card">
      <div className="mono" style={{ color: 'var(--teal)', marginBottom: 12 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ padding: '10px 0', borderTop: '1px solid var(--rule)', fontSize: 15 }}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function LangBar({ lang, level, pct }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="serif" style={{ fontSize: 28 }}>{lang}</span>
        <span className="mono" style={{ opacity: 0.6 }}>{level}</span>
      </div>
      <div style={{ marginTop: 10, height: 2, background: 'var(--rule)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, width: pct + '%', background: 'var(--teal)',
          animation: 'rise 1.2s cubic-bezier(0.2,0.8,0.2,1) both'
        }}/>
      </div>
    </div>
  );
}

/* ============================================================
   Timeline Page
   ============================================================ */
function TimelinePage() {
  const phases = [
    {
      phase: 'I', color: 'var(--teal)', title: 'Mechatronics', span: '2019 — 2025',
      blurb: 'Foundations: CAD, ECAD, LEADERSHIP, Business Analytics',
      items: [
        { year: '2021—23', dot: 'BAJA SAE Suspension Engineer', detail: 'Suspension · SolidWorks · FEA · in-house CNC + welding.' },
        { year: '2024',    dot: 'Università degli Studi di Firenze', detail: 'LEAN · TRIZ · business analytics.' },
        { year: '2025',    dot: 'CSWA Certified', detail: 'SolidWorks Associate.' },
      ]
    },
    {
      phase: 'II', color: 'var(--blue)', title: 'Hardware Designer', span: '2024 — present',
      blurb: 'From reference design to Gerber, bring-up to validation.',
      items: [
        { year: '2024',    dot: 'Mabe NTI, Artificial Vision & UX Research', detail: 'Usability testing on a vision-based refrigerator; 50% usability lift.' },
        { year: '2022—24', dot: 'Innova · Resource Planning President', detail: 'Leadership diploma; tech strategy & org decision-making.' }
      ]
    },
    {
      phase: 'III', color: '#D89B3A', title: 'Product Developer', span: '2025 — present',
      blurb: 'Bench to customer. Strategy + commercialization.',
      items: [
        { year: '2025',    dot: 'Tycho.AI , Student Consultant', detail: '50 customer interviews · multi-year GTM · financial model for ag-drones.' },
        { year: '2026',    dot: 'MS ESTEEM, Notre Dame', detail: 'Engineering, Science, Technology & Entrepreneurship.' },
      ]
    }
  ];
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="page-label">// Journey · 03</div>
        <h1 className="page-title">Mechatronics <em>→</em> Hardware <em>→</em> <span className="teal">Product.</span></h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 22, maxWidth: 720, opacity: 0.7 }}>
          Three phases, one question: <i>how does the thing get into someone's hands?</i>
        </div>

        <div style={{ marginTop: 96 }}>
          {phases.map((p, idx) => (
            <div key={p.phase} style={{
              display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40,
              paddingTop: 60, paddingBottom: 60,
              borderTop: '1px solid var(--rule)'
            }}>
              <div style={{ position: 'sticky', top: 110, alignSelf: 'start' }}>
                <div className="serif" style={{ fontSize: 96, lineHeight: 0.9, color: p.color, fontStyle: 'italic' }}>{p.phase}</div>
                <div className="mono" style={{ opacity: 0.5, marginTop: 8 }}>{p.span}</div>
                <div className="serif" style={{ fontSize: 30, marginTop: 12, letterSpacing: '-0.01em' }}>{p.title}</div>
                <div style={{ marginTop: 12, opacity: 0.65, fontSize: 14, maxWidth: 200 }}>{p.blurb}</div>
              </div>
              <div>
                {p.items.map((it, i) => (
                  <div key={i} style={{
                    position: 'relative', padding: '22px 0 22px 40px',
                    borderTop: i === 0 ? 'none' : '1px solid var(--rule)'
                  }}>
                    <div style={{
                      position: 'absolute', left: 0, top: 28,
                      width: 10, height: 10, borderRadius: '50%',
                      background: p.color, boxShadow: `0 0 0 4px ${p.color}22`
                    }}/>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 24 }}>
                      <div className="mono" style={{ opacity: 0.55, paddingTop: 4 }}>{it.year}</div>
                      <div>
                        <div className="serif" style={{ fontSize: 26, lineHeight: 1.2 }}>{it.dot}</div>
                        <div style={{ opacity: 0.7, marginTop: 6, fontSize: 14.5, maxWidth: 560 }}>{it.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Education Page
   ============================================================ */
function EducationPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="page-label">// Education & Credentials · 04</div>
        <h1 className="page-title">Three <em>schools</em>, three <span className="teal">languages</span>.</h1>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }} className="edu-grid">
          <EduCard
            name="University of Notre Dame"
            where="South Bend, Indiana"
            degree="MS — Engineering, Science, Technology & Entrepreneurship (ESTEEM)"
            years="2025 — May 2026"
            gpa="3.62 / 4.0"
            note="Capstone: commercialization of hardware products."
            mono="ND · ESTEEM '26"
          />
          <EduCard
            name="Universidad Anáhuac Querétaro"
            where="Querétaro, México"
            degree="BEng — Mechatronics Engineering · Minor: Strategic Management"
            years="2019 — 2024"
            gpa="3.72 / 4.0"
            note=""
            mono="ANÁHUAC · BENG"
          />
          <EduCard
            name="Università degli Studi di Firenze"
            where="Florence, Italy"
            degree="Academic Exchange — Ingegneria Gestionale"
            years="January 2024"
            gpa="—"
            note="LEAN · TRIZ · problem-solving · business analytics."
            mono="UNIFI · EXCHANGE"
          />
        </div>

        {/* Certifications */}
        <div style={{ marginTop: 120 }}>
          <div className="mono" style={{ opacity: 0.5 }}>// Certifications</div>
          <h2 className="serif" style={{ fontSize: 56, letterSpacing: '-0.02em', marginTop: 8 }}>Formal proofs of work.</h2>
          <div className="grid col-3" style={{ marginTop: 40 }}>
            <CertCard code="CSWA · 2025"      name="Certified SolidWorks Associate" body="SolidWorks fundamentals; part/assembly proficiency."/>
            <CertCard code="GE VERNOVA · 2024" name="Leadership in Tech Innovation" body="Posgrados Anahuac: strategy, decision-making, applied leadership."/>
            <CertCard code="DATA SCIENCE · 2025" name="Data Science & AI (Basic)" body="Python, ML fundamentals, applied notebooks."/>
            <CertCard code="UNIFI · 2024" name="LEAN / TRIZ" body="Exchange coursework at Università di Firenze."/>
          </div>
        </div>
      </div>
    </div>
  );
}

function EduCard({ name, where, degree, years, gpa, note, mono }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="mono" style={{ color: 'var(--teal)' }}>{mono}</div>
      <div className="serif" style={{ fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em' }}>{name}</div>
      <div style={{ opacity: 0.6, fontSize: 13 }}>{where}</div>
      <div style={{ marginTop: 8, fontSize: 14.5 }}>{degree}</div>
      <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', justifyContent: 'space-between',
                    borderTop: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, opacity: 0.65 }}>
        <span>{years}</span><span>GPA {gpa}</span>
      </div>
      <div style={{ fontSize: 13, opacity: 0.7, fontStyle: 'italic' }}>{note}</div>
    </div>
  );
}

function CertCard({ code, name, body }) {
  return (
    <div className="card">
      <div className="mono" style={{ opacity: 0.5, marginBottom: 8 }}>{code}</div>
      <div className="serif" style={{ fontSize: 26, lineHeight: 1.15 }}>{name}</div>
      <div style={{ marginTop: 10, fontSize: 14, opacity: 0.7 }}>{body}</div>
    </div>
  );
}

Object.assign(window, { AboutPage, TimelinePage, EducationPage });
