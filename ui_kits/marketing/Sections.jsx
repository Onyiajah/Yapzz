/* global React */
const { useState } = React;

/* =========================================================
   YapzZ Marketing — Sections
   ========================================================= */

const containerStyle = { maxWidth: 1180, margin: '0 auto', padding: '0 32px' };

const Eyebrow = ({ children }) => (
  <div style={{
    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11,
    letterSpacing: '.12em', textTransform: 'uppercase', color: '#F27F0D',
    display: 'inline-flex', alignItems: 'center', gap: 10,
  }}>
    <span style={{ width: 22, height: 2, background: '#F27F0D' }} />
    {children}
  </div>
);

const MktButton = ({ variant = 'primary', children, ...rest }) => {
  const v = {
    primary: { background: '#F27F0D', color: '#fff', border: '1px solid #F27F0D' },
    ink:     { background: '#0E0F11', color: '#FAF7F2', border: '1px solid #0E0F11' },
    outline: { background: 'transparent', color: '#0E0F11', border: '1px solid #0E0F11' },
  }[variant];
  return (
    <button {...rest} style={{
      ...v, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 14,
      padding: '12px 18px', borderRadius: 4, cursor: 'pointer', display: 'inline-flex',
      alignItems: 'center', gap: 10, letterSpacing: '.01em',
    }}>{children}</button>
  );
};

const Header = ({ onCta }) => (
  <header style={{ borderBottom: '1px solid #D2CEC4', background: '#FAF7F2', position: 'sticky', top: 0, zIndex: 10 }}>
    <div style={{ ...containerStyle, height: 64, display: 'flex', alignItems: 'center', gap: 32 }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#0E0F11' }}>
        <img src="../../assets/logo-mark.svg" width="32" height="32" alt="" />
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: '-.01em' }}>YapzZ</span>
      </a>
      <nav style={{ display: 'flex', gap: 24, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14 }}>
        {['Platform', 'Sectors', 'Compliance', 'Patents', 'Docs'].map((n) => (
          <a key={n} href="#" style={{ color: '#2A2C30', textDecoration: 'none' }}>{n}</a>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66' }}>SOC2 · ITAR-ready</div>
      <MktButton variant="outline">Sign in</MktButton>
      <MktButton variant="primary" onClick={onCta}>Request Brief →</MktButton>
    </div>
  </header>
);

const Hero = () => (
  <section style={{ background: '#FAF7F2', borderBottom: '1px solid #D2CEC4', position: 'relative', overflow: 'hidden' }}>
    <div style={{ ...containerStyle, padding: '88px 32px 96px', position: 'relative' }}>
      {/* corner crosshairs */}
      {['tl','tr','bl','br'].map((p) => {
        const pos = { tl: { top: 16, left: 16 }, tr: { top: 16, right: 16 }, bl: { bottom: 16, left: 16 }, br: { bottom: 16, right: 16 } }[p];
        return <img key={p} src="../../assets/crosshair.svg" width="14" height="14" style={{ position: 'absolute', opacity: .35, ...pos }} alt="" />;
      })}
      <Eyebrow>Compliance-Control Infrastructure</Eyebrow>
      <h1 style={{
        fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 84,
        lineHeight: 1, letterSpacing: '-.02em', color: '#0E0F11',
        margin: '20px 0 24px', maxWidth: 980,
      }}>
        Track. Control.<br />
        <span style={{ color: '#F27F0D' }}>Comply</span><span style={{ color: '#0E0F11' }}>.</span>
      </h1>
      <p style={{
        fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 18, lineHeight: 1.55,
        color: '#2A2C30', maxWidth: 640, margin: 0,
      }}>
        YapzZ enforces compliance, accountability, and chain-of-custody for industries that move regulated materials.
        Built for industrial, commercial, and defense-sector operators where a missed signature is a federal incident.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        <MktButton variant="primary">Request Operator Brief →</MktButton>
        <MktButton variant="outline">Read Technical Whitepaper</MktButton>
      </div>

      {/* fact strip */}
      <div style={{
        marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        background: '#fff', border: '1px solid #D2CEC4', borderTop: '4px solid #F27F0D',
      }}>
        {[
          ['IMMUTABLE', 'Audit-ready records sealed on submission'],
          ['ENFORCEMENT', 'Rules block non-compliant action at source'],
          ['CHAIN-OF-CUSTODY', 'Continuous traceability across vault & field'],
          ['SECTOR-AGNOSTIC', 'Industrial · commercial · defense'],
        ].map(([k, v]) => (
          <div key={k} style={{ padding: '20px 22px', borderRight: '1px solid #D2CEC4' }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: '.1em', color: '#F27F0D', marginBottom: 6 }}>{k}</div>
            <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#0E0F11', lineHeight: 1.45 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Capabilities = () => {
  const items = [
    { ic: 'gavel',    k: '01', t: 'Enforcement-driven workflows', b: 'Compliance rules are not warnings. YapzZ blocks non-compliant transactions at the moment they are attempted, not in a report next quarter.' },
    { ic: 'chain',    k: '02', t: 'Immutable accountability',    b: 'Every record is sealed with an anchored hash on submission. Operator, custodian, time, jurisdiction, rule citation — all permanent.' },
    { ic: 'manifest', k: '03', t: 'Chain-of-custody visibility',  b: 'Storage, transfer, and field handoffs are tracked as continuous custody. A break is an alert, not a gap in the spreadsheet.' },
    { ic: 'vault',    k: '04', t: 'Role-based transaction control', b: 'Dual-approval, license expiry, jurisdictional scope, and tier requirements are enforced as code, not policy.' },
  ];
  return (
    <section style={{ background: '#fff', borderBottom: '1px solid #D2CEC4' }}>
      <div style={{ ...containerStyle, padding: '88px 32px' }}>
        <Eyebrow>Platform Capabilities</Eyebrow>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 44, letterSpacing: '-.015em', color: '#0E0F11', margin: '12px 0 56px', maxWidth: 800 }}>
          Built for operators who treat audit-readiness as a default state.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: '1px solid #D2CEC4' }}>
          {items.map((it, i) => (
            <div key={it.k} style={{
              padding: 28, display: 'flex', flexDirection: 'column', gap: 12,
              borderRight: i % 2 === 0 ? '1px solid #D2CEC4' : 'none',
              borderBottom: i < 2 ? '1px solid #D2CEC4' : 'none',
              background: '#FAF7F2',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <img src={`../../assets/icons/${it.ic}.svg`} width="32" height="32" alt="" />
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#F27F0D', letterSpacing: '.1em' }}>{it.k}</span>
              </div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, color: '#0E0F11' }}>{it.t}</div>
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14, lineHeight: 1.55, color: '#2A2C30' }}>{it.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReceiptExplainer = () => (
  <section style={{ background: '#0E0F11', color: '#FAF7F2' }}>
    <div style={{ ...containerStyle, padding: '88px 32px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
      <div>
        <Eyebrow>Anatomy of a Sealed Record</Eyebrow>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 40, letterSpacing: '-.015em', margin: '12px 0 20px' }}>
          What an inspector sees when they open a YapzZ record.
        </h2>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 16, lineHeight: 1.6, color: '#D2CEC4', maxWidth: 460 }}>
          Each transfer, approval, and seal produces a deterministic record. Operator, custodian, quantity,
          jurisdiction, rule citation, and a content-addressable hash are bound at the moment of sealing.
          The record cannot be altered after seal — only superseded with a new, linked record.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <MktButton variant="primary">Read the Spec →</MktButton>
        </div>
      </div>
      <div style={{
        background: '#FAF7F2', color: '#0E0F11', padding: 24,
        fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, lineHeight: 1.6,
        position: 'relative', border: '1px solid #FAF7F2',
      }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: -1, height: 4, background: 'repeating-linear-gradient(90deg,#0E0F11 0 6px, transparent 6px 10px)' }} />
        <div style={{ textAlign: 'center', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, letterSpacing: '.16em', borderBottom: '1px solid #0E0F11', paddingBottom: 8, marginBottom: 12 }}>YPZ · TRANSFER RECEIPT</div>
        {[
          ['SERIAL','T-8820-13B'],['CUSTODIAN','OP-04701 · Tier-2'],['MATERIAL','Class-I oxidizer'],
          ['QUANTITY','0.180 kg ±0.002'],['JURISDICTION','US-NM-Doña Ana'],['RULE','§ R-091.1'],
          ['ORIGIN','V-3 · West Bay · 04'],['DESTINATION','V-7 · East Bay · 12'],
          ['SEAL HASH','0x9f2c·7e41·a9e2·a014'],['SEALED','2026-05-09 14:28:04 UTC'],
        ].map(([k,v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted #D2CEC4', padding: '3px 0' }}>
            <span style={{ color: '#5A5E66' }}>{k}</span><span>{v}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, textAlign: 'center', padding: '8px', border: '2.5px solid #1F8A5B', color: '#1F8A5B', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: '.18em', transform: 'rotate(-2deg)' }}>APPROVED</div>
        <div style={{ marginTop: 10, textAlign: 'center', fontSize: 10, color: '#5A5E66', letterSpacing: '.1em' }}>─ ─ ─ END OF RECORD ─ ─ ─</div>
      </div>
    </div>
  </section>
);

const Sectors = () => {
  const sectors = [
    { k: 'Industrial',  body: 'Mining, energy, fabrication. Hazardous-material custody and controlled-precursor handling.' },
    { k: 'Commercial',  body: 'Pharma manufacturing, agricultural chemistry, controlled-substance distribution.' },
    { k: 'Defense',     body: 'Munitions, propellants, dual-use components. ITAR-aligned chain of custody.' },
  ];
  return (
    <section style={{ background: '#FAF7F2', borderBottom: '1px solid #D2CEC4' }}>
      <div style={{ ...containerStyle, padding: '88px 32px' }}>
        <Eyebrow>Sectors Served</Eyebrow>
        <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 36, letterSpacing: '-.015em', color: '#0E0F11', margin: '12px 0 32px', maxWidth: 760 }}>
          Wherever regulated material moves, YapzZ is the layer of record.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {sectors.map((s, i) => (
            <div key={s.k} style={{ background: '#fff', border: '1px solid #D2CEC4', borderTop: '4px solid #F27F0D', padding: 22, position: 'relative' }}>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: '#5A5E66', letterSpacing: '.1em' }}>0{i+1} / 03</div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, color: '#0E0F11', margin: '8px 0 10px' }}>{s.k}</div>
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14, color: '#2A2C30', lineHeight: 1.55 }}>{s.body}</div>
              <div style={{ marginTop: 18, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#F27F0D' }}>VIEW SECTOR BRIEF →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section style={{ background: '#F27F0D', color: '#fff' }}>
    <div style={{ ...containerStyle, padding: '64px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, letterSpacing: '.14em', opacity: 0.85 }}>NEXT STEP</div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 36, letterSpacing: '-.015em', marginTop: 6 }}>Schedule a 30-minute operator brief.</div>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <MktButton variant="ink">Request Brief →</MktButton>
        <MktButton variant="outline" style={{ borderColor: '#fff', color: '#fff' }}>Download Whitepaper</MktButton>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#0E0F11', color: '#D2CEC4' }}>
    <div style={{ ...containerStyle, padding: '48px 32px 32px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="../../assets/logo-mark.svg" width="32" height="32" alt="" style={{ filter: 'invert(1)' }} />
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: '#FAF7F2' }}>YapzZ</span>
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, marginTop: 12, letterSpacing: '.14em', color: '#F27F0D' }}>TRACK · CONTROL · COMPLY</div>
        <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, marginTop: 14, lineHeight: 1.55, maxWidth: 360 }}>
          Compliance-control infrastructure for regulated materials. Patent-pending enforcement workflows.
        </div>
      </div>
      {[
        { h: 'PLATFORM', items: ['Console', 'Audit Ledger', 'Rules Engine', 'API'] },
        { h: 'SECTORS',  items: ['Industrial', 'Commercial', 'Defense'] },
        { h: 'COMPANY',  items: ['About', 'Patents', 'Security', 'Contact'] },
      ].map((c) => (
        <div key={c.h}>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.12em', color: '#FAF7F2', marginBottom: 14 }}>{c.h}</div>
          {c.items.map((it) => (
            <a key={it} href="#" style={{ display: 'block', fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#D2CEC4', textDecoration: 'none', padding: '4px 0' }}>{it}</a>
          ))}
        </div>
      ))}
    </div>
    <div style={{ borderTop: '1px solid #2E2D29' }}>
      <div style={{ ...containerStyle, padding: '14px 32px', display: 'flex', justifyContent: 'space-between', fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: '.06em', color: '#8E8A80' }}>
        <span>© 2026 YapzZ Corp · Patent Pending</span>
        <span>SCHEMA · 2026.04 · BUILD · 1.4.218</span>
      </div>
    </div>
  </footer>
);

function MarketingPage() {
  return (
    <div data-screen-label="YapzZ Marketing" style={{ background: '#FAF7F2' }}>
      <Header />
      <Hero />
      <Capabilities />
      <ReceiptExplainer />
      <Sectors />
      <CTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<MarketingPage />);
