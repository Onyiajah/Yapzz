/* global React */
const { useState } = React;

/* =========================================================
   YapzZ Web App — Primitives
   ========================================================= */

const Button = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  const base = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 600,
    fontSize: size === 'sm' ? 12 : 13,
    letterSpacing: '.02em',
    lineHeight: 1,
    padding: size === 'sm' ? '7px 12px' : '10px 16px',
    borderRadius: 4,
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'background .12s var(--ypz-ease), color .12s var(--ypz-ease)',
  };
  const variants = {
    primary: { background: '#F27F0D', color: '#fff' },
    ink:     { background: '#0E0F11', color: '#FAF7F2' },
    outline: { background: 'transparent', color: '#0E0F11', borderColor: '#0E0F11' },
    ghost:   { background: 'transparent', color: '#0E0F11' },
    danger:  { background: '#C8321F', color: '#fff' },
  };
  return <button style={{ ...base, ...variants[variant] }} {...rest}>{children}</button>;
};

const Field = ({ label, required, value, onChange, error, hint, mono = true, readOnly, placeholder }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <div style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 11,
      letterSpacing: '.08em', textTransform: 'uppercase',
      color: '#2A2C30', display: 'flex', justifyContent: 'space-between',
    }}>
      <span>{label}</span>
      {required && <span style={{ color: '#F27F0D', fontWeight: 700 }}>REQ</span>}
    </div>
    <input
      value={value || ''}
      onChange={(e) => onChange && onChange(e.target.value)}
      readOnly={readOnly}
      placeholder={placeholder}
      style={{
        fontFamily: mono ? "'IBM Plex Mono',monospace" : "'IBM Plex Sans',sans-serif",
        fontSize: 13, height: 34, padding: '0 12px',
        border: `1px solid ${error ? '#C8321F' : '#B5B0A4'}`,
        boxShadow: error ? 'inset 0 0 0 1px #C8321F' : 'none',
        background: '#fff', color: '#0E0F11', borderRadius: 0, outline: 'none',
      }}
    />
    {(hint || error) && (
      <div style={{
        fontFamily: "'IBM Plex Mono',monospace", fontSize: 10,
        color: error ? '#C8321F' : '#5A5E66', letterSpacing: '.04em',
      }}>
        {error ? `§ ${error}` : hint}
      </div>
    )}
  </div>
);

const Chip = ({ tone = 'neutral', children }) => {
  const tones = {
    approved: { bg: '#DCEFE3', fg: '#155A3B', dot: '#1F8A5B' },
    blocked:  { bg: '#F6DDD8', fg: '#7A1E10', dot: '#C8321F' },
    pending:  { bg: '#FBEFCB', fg: '#5C4108', dot: '#E0A815' },
    info:     { bg: '#DCE6F4', fg: '#1A3A78', dot: '#2A5FB8' },
    sealed:   { bg: '#E5DEF1', fg: '#2D1859', dot: '#4A2A8E' },
    neutral:  { bg: '#E7E4DD', fg: '#2E2D29', dot: '#6B6860' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 10,
      letterSpacing: '.06em', padding: '3px 8px', borderRadius: 999,
      display: 'inline-flex', alignItems: 'center', gap: 5, lineHeight: 1.4,
      background: t.bg, color: t.fg, textTransform: 'uppercase',
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: t.dot }} />
      {children}
    </span>
  );
};

const Stamp = ({ tone = 'orange', children, sub, rotate = -3 }) => {
  const tones = { green: '#1F8A5B', red: '#C8321F', purple: '#4A2A8E', orange: '#F27F0D' };
  const c = tones[tone] || tones.orange;
  return (
    <span style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 13,
      letterSpacing: '.16em', textTransform: 'uppercase', padding: '7px 12px',
      border: `2.5px solid ${c}`, color: c, display: 'inline-flex',
      flexDirection: 'column', alignItems: 'center', lineHeight: 1.1,
      transform: `rotate(${rotate}deg)`,
    }}>
      <span>{children}</span>
      {sub && (
        <span style={{
          fontFamily: "'IBM Plex Mono',monospace", fontSize: 8.5,
          letterSpacing: '.1em', fontWeight: 500, opacity: 0.85, marginTop: 2,
        }}>{sub}</span>
      )}
    </span>
  );
};

const Kpi = ({ label, value, unit, tone = 'neutral', sub }) => (
  <div style={{
    background: '#fff', border: '1px solid #D2CEC4', borderRadius: 2,
    padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 6,
    borderTop: tone === 'orange' ? '4px solid #F27F0D' : '1px solid #D2CEC4',
    flex: 1, minWidth: 0,
  }}>
    <div style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 10,
      letterSpacing: '.08em', textTransform: 'uppercase', color: '#5A5E66',
    }}>{label}</div>
    <div style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 28,
      lineHeight: 1, color: '#0E0F11', display: 'flex', alignItems: 'baseline', gap: 4,
    }}>
      <span>{value}</span>
      {unit && <span style={{ fontSize: 12, color: '#5A5E66', fontFamily: "'IBM Plex Mono',monospace" }}>{unit}</span>}
    </div>
    {sub && (
      <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: '#5A5E66', letterSpacing: '.04em' }}>
        {sub}
      </div>
    )}
  </div>
);

const SectionTitle = ({ children, right }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    borderBottom: '1px solid #D2CEC4', paddingBottom: 6, marginBottom: 12,
  }}>
    <span style={{
      fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 18,
      lineHeight: 1.2, paddingBottom: 4, borderBottom: '2px solid #F27F0D',
      marginBottom: -7, color: '#0E0F11',
    }}>{children}</span>
    {right && <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66' }}>{right}</span>}
  </div>
);

const Crosshair = ({ pos = 'tl' }) => {
  const p = { tl: { top: 6, left: 6 }, tr: { top: 6, right: 6 }, bl: { bottom: 6, left: 6 }, br: { bottom: 6, right: 6 } }[pos];
  return (
    <svg style={{ position: 'absolute', width: 10, height: 10, opacity: 0.3, ...p }} viewBox="0 0 24 24" fill="none" stroke="#0E0F11" strokeWidth="1">
      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><circle cx="12" cy="12" r="4"/>
    </svg>
  );
};

Object.assign(window, { Button, Field, Chip, Stamp, Kpi, SectionTitle, Crosshair });
