/* global React, Link, navigate, Placeholder, PcbArt */
const { useState: useOS } = React;

/* ============================================================
   Irish Nostalgia
   ============================================================ */
function IrishPage() {
  const products = [
    { name: 'ND Ornaments', mat: 'PLA · Multi-material', tag: 'LICENSED · SEASONAL' },
    { name: 'Golf Tees', mat: 'PLA · Multi-material', tag: 'B2B · FULFILLMENT' },
    { name: 'Keepsakes', mat: 'Laser-cut hardwood', tag: 'GIFTING' },
  ];
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 02</span> &nbsp;·&nbsp; 2025 — PRESENT
        </div>
        <h1 className="page-title">Irish <em>Nostalgia.</em></h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 24, maxWidth: 740, opacity: 0.75 }}>
          <b>Product Growth & E-Commerce Lead.</b> Licensed Notre Dame memorabilia, designed in SolidWorks + CorelDraw, printed on a Bambu Lab farm, sold through a rebuilt Shopify storefront, fulfilled to 7+ institutional B2B accounts.
        </div>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40 }}>
          <Photo src="uploads/Imagen de WhatsApp 2025-11-12 a las 19.06.48_97c553fd-9678d78c.jpg" alt="Irish Nostalgia team" aspect="5 / 4" caption="Irish Nostalgia · Team" />
          <div>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// ROLE</div>
            <ul style={{ paddingLeft: '1.1em', fontSize: 15, lineHeight: 1.7 }}>
              <li>End-to-end product dev: design → manufacture → QA → delivery.</li>
              <li>3D printed licensed ND memorabilia on Bambu Lab H2C / H2S / X1C.</li>
              <li>Designed ornaments, golf tees, keepsakes in SolidWorks + CorelDraw.</li>
              <li>Managed <b>7+ B2B institutional accounts</b>, outreach-to-close motion.</li>
              <li>Print farm operations at scale, multi-material assemblies.</li>
              <li>Oversaw dimensional quality, finish standards, packaging.</li>
              <li>Rebuilt the <b>Shopify storefront</b> end-to-end, VOC-grounded funnel.</li>
            </ul>
            <div className="tag-list" style={{ marginTop: 24 }}>
              {['SolidWorks', 'Bambu Lab', 'Shopify', 'CorelDraw', 'B2B', 'QA'].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div style={{ marginTop: 96 }}>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 20 }}>// Product lines</div>
          <div className="grid col-3">
            <div key="ornament" className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Photo src="uploads/goldendome3.jpeg" alt="ND Golden Dome ornament" aspect="4 / 3" caption="Golden Dome" />
              <div className="mono" style={{ opacity: 0.55 }}>LICENSED · SEASONAL</div>
              <div className="serif" style={{ fontSize: 28 }}>Memorabilia</div>
              <div style={{ fontSize: 13.5, opacity: 0.7 }}>PLA · Multi-material</div>
            </div>
            <div key="golf" className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Photo src="uploads/golf.jpg" alt="ND Golf Tees" aspect="4 / 3" caption="Golf Tees" />
              <div className="mono" style={{ opacity: 0.55 }}>B2B · FULFILLMENT</div>
              <div className="serif" style={{ fontSize: 28 }}>Golf Tees</div>
              <div style={{ fontSize: 13.5, opacity: 0.7 }}>PLA · Multi-material</div>
            </div>
            <div key="keepsake" className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Photo src="uploads/IMG_0309.JPG" alt="Irish Nostalgia ornament" aspect="4 / 3" caption="ORNAMENT" />
              <div className="mono" style={{ opacity: 0.55 }}>GIFTING</div>
              <div className="serif" style={{ fontSize: 28 }}>Keepsake</div>
              <div style={{ fontSize: 13.5, opacity: 0.7 }}>PLA · Multi-material</div>
            </div>
          </div>
        </div>

        {/* Funnel diagram */}
        <div style={{ marginTop: 96, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 20 }}>// Sales funnel</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            {[
              { s: '01', k: 'Discovery', d: 'ND campus' },
              { s: '02', k: 'Landing', d: '' },
              { s: '03', k: 'Product',  d: '' },
              { s: '04', k: 'Checkout', d: '' },
              { s: '05', k: 'Delivery', d: '' },
            ].map((x, i) => (
              <div key={x.s} style={{ padding: '22px 16px', border: '1px solid var(--rule)', position: 'relative' }}>
                <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>{x.s}</div>
                <div className="serif" style={{ fontSize: 22 }}>{x.k}</div>
                <div style={{ fontSize: 12.5, opacity: 0.65, marginTop: 6 }}>{x.d}</div>
                {i < 4 && <span style={{ position: 'absolute', right: -7, top: '50%', opacity: 0.45, fontFamily: 'var(--mono)' }}>→</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://irishnostalgia.com/" target="_blank" rel="noopener noreferrer" className="btn">Visit Irish Nostalgia <span className="arrow">→</span></a>
          <Link to="/tycho" className="btn">Next · Tycho.AI <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>

        <div style={{ marginTop: 96, paddingTop: 40, borderTop: '1px solid var(--rule)' }}>
          <div className="mono" style={{ opacity: 0.5, marginBottom: 20 }}>// Team</div>
          <Photo src="uploads/Imagen de WhatsApp 2025-11-12 a las 19.06.48_97c553fd.jpg" alt="Irish Nostalgia team dinner" aspect="16 / 9" caption="Irish Nostalgia · Full team" />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Tycho.AI
   ============================================================ */
function TychoPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 03</span> &nbsp;·&nbsp; 2025 — PRESENT
        </div>
        <h1 className="page-title"><em>Tycho</em>.AI.</h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 24, maxWidth: 760, opacity: 0.75 }}>
          <b>Student Consultant</b> to a defense UAV tech company building autonomous drone navigation pursuing dual-use purposes in commercial environments.
        </div>

        <div style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { n: '50', l: 'Discovery interviews' },
            { n: 'GTM', l: 'Commercial strategy' },
            { n: 'Ag', l: 'Sector focus' },
          ].map(c => (
            <div key={c.l} className="big-stat" style={{ borderTop: '1px solid var(--rule)', paddingTop: 24 }}>
              <div className="n">{c.n}</div>
              <div className="l">{c.l}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, maxWidth: 760 }}>
          <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// Scope</div>
          <ul style={{ paddingLeft: '1.1em', fontSize: 15.5, lineHeight: 1.7 }}>
            <li>Technical and customer discovery interviews.</li>
            <li>Evaluated performance requirements, failure modes, and adoption barriers for autonomous drone navigation in commercial environments.</li>
            <li style={{ height: 0 }}>Supported commercialization planning and sequencing.</li>
            <li>Cross-functional reporting translating engineering constraints into business language.</li>
          </ul>
          <div className="mono" style={{ marginTop: 28, opacity: 0.55, fontSize: 11 }}>
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/baja" className="btn">Next · BAJA SAE <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   BAJA SAE
   ============================================================ */
function BajaPage() {
  return (
    <div className="page page-enter">
      <div className="stagger">
        <div className="mono" style={{ opacity: 0.55 }}>
          <Link to="/" style={{ opacity: 0.7 }}>/ INDEX</Link> &nbsp;·&nbsp; <span style={{ color: 'var(--teal)' }}>PROJECT 04</span> &nbsp;·&nbsp; 2021 — 2023
        </div>
        <h1 className="page-title">BAJA SAE <em>Suspension.</em></h1>
        <div style={{ marginTop: 24, fontFamily: 'var(--serif)', fontSize: 24, maxWidth: 720, opacity: 0.75 }}>
          Anáhuac Racing Team · designed and delivered a <b>suspension system</b> for a nationally-competing off-road vehicle.
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40 }}>
          <Photo src="img/baja-team.jpeg" alt="Anáhuac Racing Team · BAJA SAE"
                 aspect="16 / 10" light caption="Anáhuac Racing Team · BAJA SAE competition"/>
          <div>
            <div className="mono" style={{ color: 'var(--teal)', marginBottom: 10 }}>// DELIVERABLES</div>
            <ul style={{ paddingLeft: '1.1em', fontSize: 15, lineHeight: 1.7 }}>
              <li>Geometry modeled in SolidWorks.</li>
              <li>FEA + dynamic load analysis.</li>
              <li>In-house manufacture: CNC, welding, manual machining.</li>
              <li style={{ height: 0, color: 'rgb(245, 243, 238)', width: 0 }}></li>
              <li style={{ height: 0, color: 'rgb(245, 243, 238)', width: 0 }}></li>
            </ul>
            <div className="tag-list" style={{ marginTop: 24, gap: 0 }}>
              {['SolidWorks', 'FEA', 'CNC', 'Welding'].map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr', gap: 20, maxWidth: 720 }}>
        </div>

        <div style={{ marginTop: 80, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/education" className="btn">Next · Education <span className="arrow">→</span></Link>
          <Link to="/" className="btn" style={{ opacity: 0.6 }}>Back to index</Link>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { IrishPage, TychoPage, BajaPage });
