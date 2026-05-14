/* global React, Button, Field, Chip, Stamp, Kpi, SectionTitle, Crosshair */
const { useState } = React;

/* =========================================================
   YapzZ Web App — Screens
   ========================================================= */

const TRANSFERS = [
  { id: 'T-8821-04A', qty: '2.450 kg', op: 'OP-04823', status: 'pending',  rule: 'R-114.2(a)', sealed: '—', material: 'Class-II propellant' },
  { id: 'T-8820-13B', qty: '0.180 kg', op: 'OP-04701', status: 'approved', rule: 'R-091.1',    sealed: '14:28 UTC', material: 'Class-I oxidizer' },
  { id: 'T-8819-02C', qty: '5.000 kg', op: 'OP-03388', status: 'blocked',  rule: 'R-114.2(a)', sealed: '—', material: 'Class-II propellant' },
  { id: 'T-8818-09A', qty: '0.045 kg', op: 'OP-04823', status: 'sealed',   rule: 'R-091.1',    sealed: '12:11 UTC', material: 'Class-III tracer' },
  { id: 'T-8817-21D', qty: '1.200 kg', op: 'OP-02105', status: 'approved', rule: 'R-091.1',    sealed: '11:48 UTC', material: 'Class-I oxidizer' },
  { id: 'T-8816-04B', qty: '0.500 kg', op: 'OP-03388', status: 'sealed',   rule: 'R-091.1',    sealed: '10:22 UTC', material: 'Class-II propellant' },
];

/* ---------- Console screen ---------- */
const ConsoleScreen = ({ onOpenTransfer }) => (
  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 24, background: '#FAF7F2', flex: 1, overflow: 'auto' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
      <div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#F27F0D', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 18, height: 2, background: '#F27F0D' }} /> Compliance Console
        </div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 32, letterSpacing: '-.015em', color: '#0E0F11', marginTop: 6 }}>
          Pending Approvals — 4
        </div>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', marginTop: 4 }}>
          Operator OP-04823 · session expires 02:14:37 · jurisdiction US-NM-Doña Ana
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="outline">Export Audit</Button>
        <Button variant="primary">+ New Transfer</Button>
      </div>
    </div>

    <div style={{ display: 'flex', gap: 12 }}>
      <Kpi label="Pending Approvals" value="4" tone="orange" sub="2 require dual-signoff" />
      <Kpi label="Sealed Today" value="38" sub="≈ 12.7 kg total" />
      <Kpi label="Blocked · 24h" value="2" sub="§ R-114.2(a) · 1 escalated" />
      <Kpi label="Custody Continuity" value="100" unit="%" sub="0 chain breaks · 90d" />
    </div>

    <div>
      <SectionTitle right="6 records · refresh 30s">Active Transfers</SectionTitle>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, border: '1px solid #D2CEC4' }}>
        <thead>
          <tr>
            {['Transfer','Material','Quantity','Custodian','Rule','Status','Sealed'].map((h, i) => (
              <th key={h} style={{
                background: '#F2EEE6', textAlign: i === 6 ? 'right' : 'left',
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 10,
                letterSpacing: '.08em', textTransform: 'uppercase', color: '#2A2C30',
                padding: '8px 12px', borderBottom: '1px solid #0E0F11', height: 30,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TRANSFERS.map((t, i) => (
            <tr key={t.id} onClick={() => onOpenTransfer && onOpenTransfer(t)} style={{
              cursor: 'pointer',
              background: t.status === 'pending' ? '#FFF4E4' : '#fff',
              boxShadow: t.status === 'pending' ? 'inset 4px 0 0 0 #F27F0D' : 'none',
            }}>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD', color: '#0E0F11', fontWeight: 500 }}>{t.id}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD', color: '#2A2C30' }}>{t.material}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD' }}>{t.qty}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD' }}>{t.op}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD', color: '#5A5E66' }}>§ {t.rule}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD' }}><Chip tone={t.status}>{t.status}</Chip></td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #E7E4DD', textAlign: 'right', color: '#5A5E66' }}>{t.sealed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
      <div>
        <SectionTitle>Recent Enforcement</SectionTitle>
        <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2 }}>
          {[
            { t: '14:14', id: 'T-8819-02C', txt: 'Blocked. Quantity 5.000 kg exceeds dual-approval threshold.', tone: 'blocked' },
            { t: '13:48', id: 'LIC-3441', txt: 'Custodian license expired. Operator session frozen for 11 min.', tone: 'pending' },
            { t: '12:02', id: 'T-8814-08A', txt: 'Manifest hash mismatch. Record sent to manual review.', tone: 'pending' },
            { t: '11:30', id: 'JUR-NM',     txt: 'Schema rev 2026.04 applied. 3 fields deprecated.', tone: 'info' },
          ].map((e) => (
            <div key={e.t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 14px', borderBottom: '1px dotted #D2CEC4' }}>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', width: 50, flexShrink: 0 }}>{e.t}</div>
              <Chip tone={e.tone}>{e.tone}</Chip>
              <div style={{ flex: 1, fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#0E0F11' }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", color: '#2A2C30' }}>{e.id}</span> · {e.txt}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>Operator Notes</SectionTitle>
        <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2, padding: 16, position: 'relative', minHeight: 200 }}>
          <Crosshair pos="tl" /><Crosshair pos="tr" /><Crosshair pos="bl" /><Crosshair pos="br" />
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 8 }}>SHIFT NOTE · 2026-05-09</div>
          <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, lineHeight: 1.5, color: '#0E0F11' }}>
            Vault V-3 inventory reconciled with manifest M-2208. Two Class-II containers pending re-sealing — supervisor escalation
            sent at 13:55. Awaiting custodian counter-signature on T-8821.
          </div>
          <div style={{ height: 1, background: '#D2CEC4', margin: '12px 0' }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="sm">Append Note</Button>
            <Button variant="ghost" size="sm">Print Shift Log</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Transfer Detail screen ---------- */
const TransferDetail = ({ transfer, onBack, onApprove, onBlock }) => {
  const t = transfer;
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, background: '#FAF7F2', flex: 1, overflow: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={onBack} style={{ all: 'unset', cursor: 'pointer', fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', letterSpacing: '.06em', textTransform: 'uppercase' }}>← Console</button>
        <span style={{ color: '#D2CEC4' }}>/</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#0E0F11' }}>{t.id}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#F27F0D' }}>Transfer Record</div>
          <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 36, letterSpacing: '-.015em', color: '#0E0F11', marginTop: 6, fontFeatureSettings: '"tnum"' }}>{t.id}</div>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, color: '#5A5E66', marginTop: 4 }}>{t.material} · {t.qty} · custodian {t.op}</div>
        </div>
        {t.status === 'pending' && <Stamp tone="orange" sub="DUAL APPROVAL">PENDING</Stamp>}
        {t.status === 'approved' && <Stamp tone="green" sub={`SEAL · 0x9f2c·a014`}>APPROVED</Stamp>}
        {t.status === 'blocked' && <Stamp tone="red" sub="§ R-114.2(a)">BLOCKED</Stamp>}
        {t.status === 'sealed' && <Stamp tone="purple" sub="IMMUTABLE">SEALED</Stamp>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2, borderTop: '4px solid #F27F0D', padding: 18 }}>
          <SectionTitle right="immutable below seal">Record</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: 8, columnGap: 16, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12 }}>
            {[
              ['Serial', t.id],
              ['Material', t.material],
              ['Quantity', `${t.qty}  ±0.002`],
              ['Custodian', `${t.op} · J. Alvarez`],
              ['Origin Vault', 'V-3 · West Bay · Rack 04'],
              ['Destination', 'V-7 · East Bay · Rack 12'],
              ['Jurisdiction', 'US-NM-Doña Ana'],
              ['Rule', `§ ${t.rule} · dual-approval ≥ 0.500 kg`],
              ['Initiated', '2026-05-09 14:30:51 UTC'],
              ['Seal Hash', '0x9f2c·7e41·a9e2·a014'],
            ].map(([k, v]) => (
              <React.Fragment key={k}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#5A5E66' }}>{k}</div>
                <div style={{ color: '#0E0F11' }}>{v}</div>
              </React.Fragment>
            ))}
          </div>

          {t.status === 'pending' && (
            <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px dashed #D2CEC4', display: 'flex', gap: 10, alignItems: 'center' }}>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', flex: 1 }}>
                Action requires supervisor signature. Logged to audit ledger on submit.
              </div>
              <Button variant="danger" onClick={onBlock}>Block</Button>
              <Button variant="primary" onClick={onApprove}>Approve & Seal →</Button>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2, padding: 16 }}>
            <SectionTitle>Chain of Custody</SectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
              {[
                { t: '14:30:51', who: 'OP-04823', evt: 'Transfer initiated', tone: '#F27F0D' },
                { t: '14:31:02', who: 'SYS',       evt: 'Rule § R-114.2(a) evaluated', tone: '#2A5FB8' },
                { t: '14:31:04', who: 'SYS',       evt: 'Dual-approval requirement set', tone: '#E0A815' },
                { t: '— pending', who: 'SUP-1142', evt: 'Awaiting supervisor signature', tone: '#5A5E66' },
              ].map((s, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: 12, position: 'relative', paddingBottom: i === arr.length - 1 ? 0 : 12 }}>
                  <div style={{ width: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ width: 10, height: 10, background: s.tone, borderRadius: 0, transform: 'rotate(45deg)', flexShrink: 0, marginTop: 2 }} />
                    {i < arr.length - 1 && <span style={{ flex: 1, width: 1, background: '#D2CEC4', minHeight: 22, marginTop: 4 }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#0E0F11' }}>{s.t} · {s.who}</div>
                    <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#2A2C30' }}>{s.evt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#0E0F11', color: '#FAF7F2', borderRadius: 2, padding: 14, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, lineHeight: 1.55 }}>
            <div style={{ color: '#F27F0D', fontWeight: 600, letterSpacing: '.1em', marginBottom: 6 }}>RULE CITATION · § {t.rule}</div>
            <div style={{ opacity: 0.85 }}>"Transfers of Class-II propellants in quantities ≥ 500 g require counter-signature by a custodian holding a Tier-2 license within the same jurisdiction. Single-operator approval is enforced as a denial."</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- New Transfer screen ---------- */
const NewTransfer = ({ onCancel, onSubmit }) => {
  const [qty, setQty] = useState('2.450');
  const [material, setMaterial] = useState('Class-II propellant');
  const [dest, setDest] = useState('V-7 · East Bay · Rack 12');
  const [note, setNote] = useState('');
  const qtyNum = parseFloat(qty);
  const ruleHit = qtyNum >= 0.5 && /Class-II/.test(material);
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, background: '#FAF7F2', flex: 1, overflow: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={onCancel} style={{ all: 'unset', cursor: 'pointer', fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', letterSpacing: '.06em', textTransform: 'uppercase' }}>← Console</button>
        <span style={{ color: '#D2CEC4' }}>/</span>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#0E0F11' }}>NEW · DRAFT</span>
      </div>

      <div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#F27F0D' }}>New Transfer</div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 32, letterSpacing: '-.015em', color: '#0E0F11', marginTop: 6 }}>Initiate movement of regulated material</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
        <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2, padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <SectionTitle>Record</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <Field label="Material Class" required value={material} onChange={setMaterial} hint="Class I/II/III + descriptor" />
            <Field label="Quantity (kg)" required value={qty} onChange={setQty}
                   error={ruleHit ? 'R-114.2(a) · dual-approval ≥ 0.500 kg' : null}
                   hint={!ruleHit ? 'Single-operator approval available' : null} />
            <Field label="Origin Vault" value="V-3 · West Bay · Rack 04" readOnly hint="Auto-detected from facility" />
            <Field label="Destination" required value={dest} onChange={setDest} />
            <Field label="Jurisdiction" value="US-NM-Doña Ana" readOnly />
            <Field label="Custodian ID" value="OP-04823" readOnly />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: '#2A2C30', marginBottom: 4 }}>Seal Note</div>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="optional · max 240 chars · appended to immutable record"
              style={{ width: '100%', minHeight: 60, fontFamily: "'IBM Plex Mono',monospace", fontSize: 12, padding: 10, border: '1px solid #B5B0A4', background: '#fff', borderRadius: 0, outline: 'none', resize: 'vertical' }} />
          </div>
          <div style={{ borderTop: '1px dashed #D2CEC4', paddingTop: 14, display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
            <Button variant="ghost" onClick={onCancel}>Cancel</Button>
            <Button variant="outline">Save Draft</Button>
            <Button variant="primary" onClick={onSubmit}>Submit for Approval →</Button>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2, padding: 16 }}>
          <SectionTitle>Live Rule Evaluation</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <RuleRow ok title="License current" body="LIC-3441 valid · expires 2026-08-12" />
            <RuleRow ok title="Vault custody continuous" body="V-3 chain unbroken (90d)" />
            <RuleRow ok={!ruleHit} title="Quantity threshold" body={ruleHit ? '§ R-114.2(a) — dual-approval required' : '< 0.500 kg threshold'} />
            <RuleRow ok title="Jurisdiction match" body="Origin and destination in US-NM" />
            <RuleRow ok title="Manifest schema 2026.04" body="All required fields satisfied" />
          </div>
          <div style={{ marginTop: 14, padding: 10, background: '#FFF4E4', border: '1px solid #FFB36A', fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#7A4A08', lineHeight: 1.5 }}>
            On submit: record will route to <strong>SUP-1142</strong> for counter-signature. Dual-approval timeout 30 min.
          </div>
        </div>
      </div>
    </div>
  );
};

const RuleRow = ({ ok, title, body }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '8px 0', borderBottom: '1px dotted #D2CEC4' }}>
    <span style={{
      width: 14, height: 14, marginTop: 2, flexShrink: 0,
      background: ok ? '#1F8A5B' : '#C8321F',
      color: '#fff', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 10,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>{ok ? '✓' : '!'}</span>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#0E0F11', fontWeight: 500 }}>{title}</div>
      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66' }}>{body}</div>
    </div>
  </div>
);

/* ---------- Audit Ledger screen ---------- */
const AuditLedger = () => (
  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, background: '#FAF7F2', flex: 1, overflow: 'auto' }}>
    <div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#F27F0D' }}>Audit Ledger</div>
      <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 32, letterSpacing: '-.015em', color: '#0E0F11', marginTop: 6 }}>Sealed Records — Immutable</div>
    </div>
    <div style={{ background: '#0E0F11', color: '#FAF7F2', padding: 18, borderRadius: 2, fontFamily: "'IBM Plex Mono',monospace", fontSize: 11.5, lineHeight: 1.7 }}>
      <div style={{ color: '#F27F0D', letterSpacing: '.12em', marginBottom: 8 }}>YPZ · LEDGER · 2026-05-09</div>
      {[
        ['14:28:04', 'T-8820-13B', 'SEAL', '0x9f2c·a014', 'OP-04701 · 0.180 kg · Class-I'],
        ['12:11:33', 'T-8818-09A', 'SEAL', '0x77a3·b112', 'OP-04823 · 0.045 kg · Class-III'],
        ['11:48:17', 'T-8817-21D', 'SEAL', '0x4188·d930', 'OP-02105 · 1.200 kg · Class-I'],
        ['10:22:45', 'T-8816-04B', 'SEAL', '0x2204·e8c1', 'OP-03388 · 0.500 kg · Class-II'],
        ['09:05:11', 'T-8815-77A', 'SEAL', '0xa902·1b34', 'OP-04701 · 0.080 kg · Class-I'],
        ['13:55:41', 'T-8819-02C', 'BLOCK', '§ R-114.2(a)', 'OP-03388 · 5.000 kg · Class-II — denied'],
      ].map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 110px 60px 1fr', gap: 16, borderBottom: i === 5 ? 'none' : '1px dotted rgba(255,255,255,.1)', padding: '4px 0' }}>
          <span style={{ opacity: 0.6 }}>{r[0]}</span>
          <span>{r[1]}</span>
          <span style={{ color: r[2] === 'SEAL' ? '#A6E3BC' : '#FFB3A8', fontWeight: 600 }}>{r[2]}</span>
          <span style={{ opacity: 0.85 }}>{r[3]} · {r[4]}</span>
        </div>
      ))}
      <div style={{ textAlign: 'center', opacity: 0.4, marginTop: 10 }}>─ ─ ─ END OF LEDGER ─ ─ ─</div>
    </div>
  </div>
);

Object.assign(window, { ConsoleScreen, TransferDetail, NewTransfer, AuditLedger, TRANSFERS });
