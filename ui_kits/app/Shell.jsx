/* global React */

/* =========================================================
   YapzZ Web App — Shell (TopBar, LeftNav, StatusBar)
   ========================================================= */

const TopBar = ({ operator, session }) => (
  <div style={{
    height: 48, background: '#FAF7F2', borderBottom: '1px solid #0E0F11',
    display: 'flex', alignItems: 'center', padding: '0 16px', gap: 16,
    flexShrink: 0,
  }}>
    <img src="../../assets/logo-mark.svg" width="28" height="28" alt="" />
    <div style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 16,
      letterSpacing: '-.01em', color: '#0E0F11',
    }}>YapzZ</div>
    <div style={{
      width: 1, height: 24, background: '#D2CEC4',
    }} />
    <div style={{
      fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66',
      letterSpacing: '.06em', textTransform: 'uppercase',
    }}>Compliance Console</div>

    <div style={{ flex: 1 }} />

    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '4px 10px',
      background: '#fff', border: '1px solid #D2CEC4', borderRadius: 0,
      fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1F8A5B' }} />
      <span>SYS · OPERATIONAL</span>
    </div>

    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '4px 10px',
      background: '#fff', border: '1px solid #D2CEC4',
      fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#0E0F11',
    }}>
      <span style={{
        width: 22, height: 22, borderRadius: '50%', background: '#0E0F11',
        color: '#FAF7F2', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 10,
      }}>JA</span>
      <span style={{ fontWeight: 500 }}>{operator}</span>
      <span style={{ color: '#5A5E66' }}>·</span>
      <span style={{ color: '#5A5E66' }}>{session}</span>
    </div>
  </div>
);

const NAV = [
  { key: 'console',  label: 'Console',     short: 'CON' },
  { key: 'transfers', label: 'Transfers',  short: 'TRF', count: 4 },
  { key: 'audit',    label: 'Audit Ledger', short: 'AUD' },
  { key: 'rules',    label: 'Rules',       short: 'RUL' },
  { key: 'custodians', label: 'Custodians', short: 'CUS' },
  { key: 'vaults',   label: 'Vaults',      short: 'VLT' },
  { key: 'reports',  label: 'Reports',     short: 'REP' },
];

const LeftNav = ({ active, onSelect }) => (
  <div style={{
    width: 220, background: '#FAF7F2', borderRight: '1px solid #D2CEC4',
    display: 'flex', flexDirection: 'column', flexShrink: 0,
  }}>
    <div style={{
      padding: '14px 16px 8px', fontFamily: "'Space Grotesk',sans-serif",
      fontWeight: 600, fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase',
      color: '#5A5E66',
    }}>Operator</div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {NAV.map((n) => {
        const isActive = active === n.key;
        return (
          <button
            key={n.key}
            onClick={() => onSelect && onSelect(n.key)}
            style={{
              all: 'unset', cursor: 'pointer',
              padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 12,
              fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13,
              color: isActive ? '#0E0F11' : '#2A2C30',
              background: isActive ? '#fff' : 'transparent',
              borderLeft: isActive ? '4px solid #F27F0D' : '4px solid transparent',
              borderTop: isActive ? '1px solid #D2CEC4' : 'none',
              borderBottom: isActive ? '1px solid #D2CEC4' : 'none',
              fontWeight: isActive ? 500 : 400,
              marginRight: isActive ? -1 : 0,
              transition: 'background .12s var(--ypz-ease)',
            }}>
            <span style={{
              fontFamily: "'IBM Plex Mono',monospace", fontSize: 10,
              color: '#8E8A80', width: 26,
            }}>{n.short}</span>
            <span style={{ flex: 1 }}>{n.label}</span>
            {n.count != null && (
              <span style={{
                fontFamily: "'IBM Plex Mono',monospace", fontSize: 10,
                background: '#F27F0D', color: '#fff', padding: '1px 6px',
                borderRadius: 999, fontWeight: 600,
              }}>{n.count}</span>
            )}
          </button>
        );
      })}
    </div>
    <div style={{ flex: 1 }} />
    <div style={{
      padding: '12px 16px', borderTop: '1px solid #D2CEC4',
      fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: '#5A5E66',
      letterSpacing: '.04em', lineHeight: 1.5,
    }}>
      <div>JUR · US-NM-Doña Ana</div>
      <div>SCHEMA · 2026.04</div>
      <div>BUILD · 1.4.218</div>
    </div>
  </div>
);

const StatusBar = ({ msg }) => (
  <div style={{
    height: 24, background: '#0E0F11', color: '#FAF7F2',
    display: 'flex', alignItems: 'center', padding: '0 16px',
    fontFamily: "'IBM Plex Mono',monospace", fontSize: 10,
    letterSpacing: '.06em', flexShrink: 0, gap: 16,
  }}>
    <span style={{ color: '#F27F0D', fontWeight: 600 }}>● ENFORCEMENT ACTIVE</span>
    <span style={{ opacity: 0.6 }}>│</span>
    <span>{msg || 'Awaiting operator action'}</span>
    <span style={{ flex: 1 }} />
    <span style={{ opacity: 0.6 }}>2026-05-09 · 14:32:08 UTC</span>
  </div>
);

Object.assign(window, { TopBar, LeftNav, StatusBar });
