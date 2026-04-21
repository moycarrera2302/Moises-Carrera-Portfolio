/* global React, Link, Placeholder, Photo */

function IdeaLabPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 03</span> &nbsp;·&nbsp; OCT 2025 — PRESENT
        </div>
        <h1 className="page-title"><em>IDEA Center</em> — Innovation Lab.</h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 24, maxWidth: 760, opacity: 0.78 }}>
          <b>Prototyping &amp; Design Engineer</b> at the Innovation Lab maker space, IDEA Center, University of Notre Dame. Supporting the Director across 3D design, student mentorship, and lab operations.
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--ink-2)', border: '1px solid var(--rule)' }}>
            <video width="100%" height="100%" controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
              <source src="uploads/WhatsApp Video 2026-04-20 at 22.45.12.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// ROLE</div>
            <ul style={{ paddingLeft: '1.1em', fontSize: 14.5, lineHeight: 1.65 }}>
              <li>Develop <b>SolidWorks 3D models</b> &amp; mechanical designs for student ventures and faculty projects — concept through MVP.</li>
              <li>Provide 1:1 SolidWorks <b>tutoring</b> and technical assessments DFM, material selection, 3D-printing parameters.</li>
              <li>Lead <b>lab restructuring</b> and organization workflow efficiency and equipment inventory across 3D printers, laser cutters, manufacturing tools.</li>
              <li>Run <b>prototyping sessions</b> with early-stage teams rapid iteration, materials, cost-effective fabrication.</li>
              <li>Troubleshoot and maintain lab equipment to ensure uptime for student and research use.</li>
            </ul>
            <div className="tag-list" style={{ marginTop: 22 }}>
              {['SolidWorks', '3D Printing', 'Laser Cutting', 'Mentorship', 'DFM', 'Lab Ops'].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 96, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 20 }}>// Focus areas</div>
          <div className="grid col-3">
            <div className="card">
              <div className="mono" style={{ color: 'var(--teal)' }}>DESIGN</div>
              <div className="serif" style={{ fontSize: 26, marginTop: 8 }}>Concept → MVP</div>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>SolidWorks parts/assemblies for student ventures and faculty research projects.</div>
            </div>
            <div className="card">
              <div className="mono" style={{ color: 'var(--teal)' }}>MENTORSHIP</div>
              <div className="serif" style={{ fontSize: 26, marginTop: 8 }}>1:1 tutoring</div>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>Technical assessments on DFM, materials, and 3D-printing parameters.</div>
            </div>
            <div className="card">
              <div className="mono" style={{ color: 'var(--teal)' }}>LAB OPS</div>
              <div className="serif" style={{ fontSize: 26, marginTop: 8 }}>Restructure &amp; uptime</div>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 8 }}>Inventory across printers, laser cutters, manufacturing tools keep the lab running.</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/alcar" className="btn">Next · Alcar Consultores <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </div>
  );
}

function InnovaPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>INNOVA</span> &nbsp;·&nbsp; 2022 — 2024
        </div>
        <h1 className="page-title"><em>Innova</em> — Leadership Diploma.</h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 24, maxWidth: 740, opacity: 0.75 }}>
          <b>Resource Planning President</b> · Innova — Leadership in Technological Innovation, Anáhuac Querétaro. A competitive leadership diploma on innovation, technology strategy, and organizational decision-making.
        </div>
        <div style={{ marginTop: 48, maxWidth: 720, fontSize: 15, lineHeight: 1.7, opacity: 0.8 }}>
          Led resource planning across multi-team innovation sprints · owned logistics, budget, and cross-functional calendar · coached cohort members on problem framing · ran real-world case challenges with industry partners.
        </div>
        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/alcar" className="btn">Next · Alcar Consultores <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </div>
  );
}

function AlcarPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 04</span> &nbsp;·&nbsp; 2024 — PRESENT
        </div>
        <h1 className="page-title"><em>Alcar</em> Consultores.</h1>
        <div style={{ height: 0 }}>
          Commercialization strategy for hardware and service clients.
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ink-2)', border: '1px solid var(--rule)', aspectRatio: '4 / 3', overflow: 'hidden' }}>
            <img src="uploads/Alcar.webp" alt="Alcar Consultores" style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// ENGAGEMENTS</div>
            <ul style={{ paddingLeft: '1.1em', fontSize: 15, lineHeight: 1.7 }}>
              <li>Website development, Market analysis, segmentation, and positioning.</li>
              <li>Cross-functional reporting translating engineering constraints into business language.</li>
            </ul>
            <div className="tag-list" style={{ marginTop: 24 }}>
              {['Strategy', 'Consulting', 'Market Analysis', 'Commercialization'].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
            <a href="https://www.alcarconsultores.com/" target="_blank" rel="noopener noreferrer" className="btn" style={{ marginTop: 24, display: 'inline-block' }}>Visit Alcar Consultores <span className="arrow">→</span></a>
            <div className="mono" style={{ marginTop: 28, opacity: 0.55, fontSize: 11 }}>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/tycho" className="btn">Next · Tycho.AI <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { IdeaLabPage, InnovaPage, AlcarPage });
