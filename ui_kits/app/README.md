# YapzZ — Compliance Console (Web App UI Kit)

A click-thru recreation of the YapzZ web application — the compliance console operators use to review, approve, seal, and block transfers of regulated materials.

## Screens

1. **Console** — landing dashboard. KPI strip, pending approvals queue, recent enforcement events, system status.
2. **Transfer Detail** — single transfer record. Chain of custody, rule citations, dual-approval, seal action.
3. **New Transfer** — operator submits a transfer; live rule evaluation as they type.
4. **Audit** — sealed-records ledger view, monospace, chronological.

## Files

| File | What's in it |
|---|---|
| `index.html` | Loads everything, mounts the app |
| `Shell.jsx` | `TopBar`, `LeftNav`, `StatusBar` — chrome that wraps every screen |
| `Primitives.jsx` | `Button`, `Field`, `Chip`, `Stamp`, `Kpi`, `RowDot`, etc. |
| `Screens.jsx` | The four screens above as composable components |
| `App.jsx` | State + screen router |

## Note

This UI kit is *visual + interactive*, not real production code. State lives in `useState`. Records are seeded fixtures. The seal hash is decorative.

## Source of truth

No codebase or Figma was provided for YapzZ — these screens are derived from the brand brief (mission, purpose, technology positioning) plus the design system in this repo. Re-attach a real codebase via the Import menu to revise these toward pixel fidelity.
