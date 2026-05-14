/* global React, ReactDOM, TopBar, LeftNav, StatusBar, ConsoleScreen, TransferDetail, NewTransfer, AuditLedger, TRANSFERS, Stamp, Button */
const { useState } = React;

function App() {
  const [screen, setScreen] = useState('console');
  const [active, setActive] = useState(null);
  const [modal, setModal] = useState(null);

  const open = (t) => { setActive(t); setScreen('detail'); };
  const goNav = (k) => {
    if (k === 'console') setScreen('console');
    else if (k === 'audit') setScreen('audit');
    else if (k === 'transfers') setScreen('console');
    else setScreen('console');
  };

  return (
    <div data-screen-label="YapzZ Console" style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#FAF7F2', fontFamily: "'IBM Plex Sans',sans-serif" }}>
      <TopBar operator="j.alvarez" session="2h 14m" />
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <LeftNav active={screen === 'audit' ? 'audit' : 'console'} onSelect={goNav} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, position: 'relative' }}>
          {screen === 'console' && <ConsoleScreen onOpenTransfer={open} onNew={() => setScreen('new')} />}
          {screen === 'detail'  && <TransferDetail transfer={active} onBack={() => setScreen('console')}
                                                    onApprove={() => setModal('approve')}
                                                    onBlock={() => setModal('block')} />}
          {screen === 'new'     && <NewTransfer onCancel={() => setScreen('console')} onSubmit={() => setModal('submitted')} />}
          {screen === 'audit'   && <AuditLedger />}

          {/* Floating "+ New Transfer" wired up — the button in ConsoleScreen also dispatches via a global */}
        </div>
      </div>
      <StatusBar msg={
        screen === 'detail' ? `Reviewing ${active?.id}` :
        screen === 'new' ? 'Drafting new transfer' :
        screen === 'audit' ? 'Ledger view · read-only' :
        'Awaiting operator action'
      } />

      {modal && (
        <div onClick={() => setModal(null)} style={{
          position: 'absolute', inset: 0, background: 'rgba(14,15,17,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: '#fff', border: '1px solid #0E0F11', borderTop: '4px solid #F27F0D',
            width: 460, padding: 24, borderRadius: 2, position: 'relative',
            boxShadow: '0 24px 48px -16px rgba(14,15,17,.30)',
          }}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>
              {modal === 'approve' ? 'Approval · dual-signoff required' :
               modal === 'block'   ? 'Enforcement Action' :
                                     'Submission Receipt'}
            </div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 22, color: '#0E0F11', marginBottom: 12 }}>
              {modal === 'approve' ? 'Counter-signature requested' :
               modal === 'block'   ? 'Transfer blocked' :
                                     'Submitted for approval'}
            </div>
            <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: '#2A2C30', lineHeight: 1.5, marginBottom: 16 }}>
              {modal === 'approve' && <>Request sent to <code style={{ fontFamily: "'IBM Plex Mono',monospace" }}>SUP-1142</code>. Dual-approval timeout 30 min. Record locked from edits.</>}
              {modal === 'block'   && <>This action will be logged to the audit ledger and notify supervisor. Confirm to proceed.</>}
              {modal === 'submitted' && <>Record drafted. Routing to supervisor for counter-signature.</>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, border: '1px solid #D2CEC4', background: '#FAF7F2', marginBottom: 16 }}>
              <Stamp tone={modal === 'block' ? 'red' : modal === 'approve' ? 'orange' : 'green'} sub={modal === 'block' ? '§ R-114.2(a)' : 'PENDING SUP'} rotate={-5}>
                {modal === 'block' ? 'BLOCKED' : modal === 'approve' ? 'PENDING' : 'SENT'}
              </Stamp>
              <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: '#5A5E66', lineHeight: 1.6 }}>
                <div>EVT-{Math.floor(Math.random() * 9000) + 1000}</div>
                <div>2026-05-09 · 14:32:08 UTC</div>
                <div>OP-04823</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <Button variant="ghost" onClick={() => setModal(null)}>Close</Button>
              <Button variant={modal === 'block' ? 'danger' : 'primary'} onClick={() => setModal(null)}>
                {modal === 'block' ? 'Confirm Block' : 'Acknowledged'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
