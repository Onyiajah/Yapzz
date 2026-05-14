# YapzZ Design System

> **Track. Control. Comply.**
> A design system for compliance-control infrastructure — built for industries that move regulated materials.

---

## About YapzZ

YapzZ is a compliance-control platform for industrial, commercial, and defense-sector operators handling regulated materials. The product is **enforcement-driven** — its job is not to track inventory, it is to *prevent non-compliant activity from happening in the first place* and to leave an immutable, audit-ready record when it does.

Core themes the system must convey at all times:

- **Authority.** The interface should feel like a piece of regulatory infrastructure, not a consumer app.
- **Provenance.** Every record has a serial, a timestamp, a signer, a hash. Show that.
- **Enforcement.** When a rule blocks an action, the UI does not apologize — it states the rule and the citation.
- **Audit-readiness.** Anything visible could end up in front of an inspector. Density and precision over decoration.

### Sources used to build this system

> No codebase, Figma file, or visual assets were supplied with the brief. The system below is derived from the brand description (mission, purpose, objectives, technology positioning) and the supplied palette (white `#FFFFFF` + orange `#F27F0D`). Logos and brand marks are originals built for this system. **Re-attach a codebase or Figma file via the Import menu** if you want pixel-fidelity to an existing implementation — this system will then be revised to match.

---

## Index

| File | What's in it |
|---|---|
| `README.md` | This file — brand context, content + visual + iconography fundamentals |
| `SKILL.md` | Cross-compatible skill manifest (Claude Code / agent skills) |
| `colors_and_type.css` | Color tokens, type tokens, semantic CSS vars |
| `assets/` | Logos, marks, seals, textures, icons |
| `preview/` | Cards rendered into the Design System tab |
| `ui_kits/app/` | Web app UI kit — compliance console (`index.html` + JSX components) |
| `ui_kits/marketing/` | Marketing site UI kit (`index.html` + `Sections.jsx`) |

### UI Kits

- **`ui_kits/app/`** — Compliance console: Console / Transfer Detail / New Transfer / Audit Ledger. Files: `index.html`, `App.jsx`, `Shell.jsx`, `Screens.jsx`, `Primitives.jsx`.
- **`ui_kits/marketing/`** — Single-page marketing site: header, hero, capabilities, sealed-record explainer, sectors, CTA, footer. Files: `index.html`, `Sections.jsx`.

### How to use this design system

1. Always import `colors_and_type.css` for tokens.
2. Use the utility classes (`.ypz-h1`, `.ypz-mono`, `.ypz-stamp`, etc.) or read the CSS vars (`var(--ypz-orange)`, `var(--ypz-paper)`).
3. Copy SVG assets out of `assets/` rather than referencing across projects.
4. Follow the content + visual + iconography rules above — they are the system, not the tokens.

---

## Content Fundamentals

YapzZ copy reads like **regulatory infrastructure documentation**, not marketing fluff. It is precise, declarative, and slightly cold. Compliance officers, audit teams, and operators are the audience — they value clarity over cleverness.

### Voice

- **Declarative, not aspirational.** "Transfer blocked. License `LIC-3441` expired 09 Apr 2026." not "Oops! Looks like your license needs a refresh."
- **Third-person and system-voice.** The platform is referred to as "YapzZ" or "the platform." Avoid "we" in product copy. Use "you" sparingly, only for actions the user must take.
- **Active voice, present tense.** "YapzZ enforces…" "The transaction requires…" "This record is sealed."
- **No exclamation points.** Anywhere. Ever.
- **No emoji.** This is enforcement infrastructure, not Slack.
- **No hedging.** Avoid "might," "could," "perhaps." Replace with "will," "must," "is required."

### Casing

- **Section headers**: Title Case ("Chain Of Custody", "Pending Approvals")
- **Buttons**: Title Case for primary actions ("Approve Transfer", "Seal Record"), UPPERCASE for status stamps ("APPROVED", "BLOCKED", "SEALED")
- **Labels**: ALL CAPS, tracked +0.06em ("SERIAL", "CUSTODIAN", "JURISDICTION") — gives the regulatory-form feel
- **Body**: Sentence case
- **Code/IDs**: Always monospace, untransformed (`YPZ-002841-1A`, `0x9f2c…`)

### Tone examples

| Generic SaaS ❌ | YapzZ ✅ |
|---|---|
| "Welcome back! 👋" | "Console — operator `j.alvarez@op.gov` — session `2h 14m` remaining" |
| "Oops! Something went wrong." | "Action denied. Rule `R-114.2(a)` requires dual approval for transfers ≥ 500g." |
| "Your transfer is on its way 🚀" | "Transfer `T-8821` sealed. Custodian receipt pending — ETA 14 min." |
| "We've made some changes!" | "Schema revision `2026.04` applied. 3 fields deprecated. Migration log: `MIG-0418`." |

### Numbers, units, IDs

- Always show units (`500 g`, `2.4 kg`, `12 rounds`, `48 h`)
- Times in **24-hour, ISO-8601** where possible: `2026-05-09 14:32 UTC`
- IDs are typeset in monospace and prefixed by category: `T-` transfer, `R-` rule, `LIC-` license, `OP-` operator, `JUR-` jurisdiction, `EVT-` event, `SEAL-` seal hash
- Hashes are abbreviated `0x9f2c…a014` with full value on hover

---

## Visual Foundations

### Aesthetic in one line

**Engineering drawing meets enforcement notice.** Hairline rules, monospace serials, signal-orange seals on warm off-white paper. No gradients. No glass. No drop-shadows softer than the structure they sit on.

### Color

- **Paper** (`--ypz-paper`, `#FAF7F2`) is the default surface — a warm, slightly cream off-white. Pure white (`#FFFFFF`) is reserved for inset cards and modal sheets so they read as "documents on the desk."
- **Ink** (`#0E0F11`) is the type and rule color. Near-black with a slight cool cast. Pure black is never used.
- **Signal Orange** (`#F27F0D`) is the brand mark and the **enforcement accent**. It is used sparingly: stamps, the active state, the brand mark, and the line under section headings. Never used for body text. Never used as a background for large surfaces.
- **Steel grays** (50–700) handle borders, secondary text, table zebra, and disabled states.
- **Status colors** are saturated and earthy, not neon: green `#1F8A5B` (approved/sealed), red `#C8321F` (blocked/denied), amber `#E0A815` (warning/pending), blue `#2A5FB8` (info/system).

### Type

Three families, each doing one job:

- **Display + UI** — *Space Grotesk* (500/600/700). Geometric, slightly industrial. Used for headings, buttons, KPI numbers.
- **Body** — *IBM Plex Sans* (400/500). Technical, neutral, reads like documentation.
- **Mono** — *IBM Plex Mono* (400/500). Serials, hashes, IDs, code, timestamps. Used heavily — it's a visual signature of the brand.

Display sizes step in a tight scale (1.2×) — this is a dense product, not a marketing site. Headings sit on a 1px orange underline rule the same height as their cap height.

### Spacing & layout

- **Grid**: 4px base. Spacing tokens at 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64.
- **Density**: Default rows are 36px, condensed rows 28px. Most tables are condensed.
- **Containers**: Hard left/right edges. Content sits flush to a left rail (8px gutter) so labels can hang into it.
- **Fixed elements**: Top bar (48px), left nav (220px), status footer (24px). Always present in app surfaces.

### Corner radii

- **0px** for tables, cells, status stamps, and form fields. Hard corners convey rigor.
- **2px** for cards and the primary surface card.
- **4px** for buttons (small softening — this is the *only* place radius reads as friendly).
- **999px** (pill) for chips, status badges, and avatars only.

### Borders & rules

- **Hairlines** (1px solid `--ypz-steel-200`) everywhere. Tables are ruled, not zebra-striped.
- **Section dividers**: 1px ink rule with a 4px solid orange tick at the left edge.
- **Heading underline**: orange 1px rule, sized to the cap height of the heading, sits below the text with a 4px gap.
- **No double rules.** Adjacent sections collapse their borders.

### Shadows

Used minimally and only to denote elevation:

- `--ypz-shadow-1`: `0 1px 0 0 rgba(14,15,17,0.04), 0 1px 2px rgba(14,15,17,0.06)` — for resting cards.
- `--ypz-shadow-2`: `0 6px 20px -8px rgba(14,15,17,0.18), 0 2px 4px rgba(14,15,17,0.06)` — for modals and dropdowns.
- No inner shadows. No glow.

### Backgrounds & texture

- **Paper grain** is applied at ~2% opacity to large surfaces — a subtle SVG noise. Never visible at thumbnail scale; gives the screen a "document" feel up close.
- **Crosshair registration marks** (small `+` glyphs) sit in the corners of major panels at 30% opacity — a callback to engineering drawings and customs stamps.
- **No photographs as page backgrounds.** Imagery, when used, is contained in fixed-aspect frames with a 1px ink border.
- **No gradients.** None. Solid fills only. This is a hard rule.

### Animation

- **Easing**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (`--ypz-ease`). Slightly snappy.
- **Durations**: 120ms (state changes), 200ms (transitions), 320ms (modals).
- **Stamps animate by stamping** — a 1.2× scale-down to 1× with a 60ms duration and no fade. Decisive, like ink hitting paper.
- **No bouncy, no spring, no parallax.** Hover/press states are instant or near-instant.

### Hover & press

- **Buttons**: hover darkens fill 6%; press darkens 12% AND inset 1px (no scale). Outline buttons hover gets `--ypz-paper-2` fill.
- **Rows**: hover gets a paper-2 fill + the orange tick at the left edge; press inverts to ink.
- **Links**: orange underline always present (1px); hover thickens to 2px.
- **Disabled**: 40% opacity + crosshatch pattern overlay (visible at close range — communicates "blocked," not "loading").

### Transparency & blur

- **Modals** sit over a 60% ink scrim (no blur).
- **Top bar** is solid `--ypz-paper`, not translucent. We are not Apple.
- **Blur** is reserved for one place: the redaction tool, where it expresses "redacted" semantically.

### Imagery

If imagery is used at all (rare), it is:

- **Cool, slightly desaturated**, with a subtle grain
- Industrial subject matter — facilities, vaults, instruments, manifests, hands handling materials
- Always in a 1px-bordered frame, never bleeding to the edge
- Never used as a background for type

### Cards

A YapzZ card is **a document, not a panel**:

- 2px corner radius
- 1px `--ypz-steel-200` border
- White (`#FFFFFF`) fill on the paper background — so cards read as paper-on-desk
- A 4px solid orange band runs along the top of "active" or "current" cards; absent on neutral cards
- Header row: ALL-CAPS label left, monospace ID right, separated by a hairline rule
- Optional corner crosshairs at ~30% opacity

---

## Iconography

YapzZ uses a single icon set: **Lucide** (CDN), filtered to a thin, rectilinear subset. Lucide's stroke style (1.5px, square caps, rectilinear geometry) matches the engineering-drawing aesthetic.

**Usage rules:**

- **Stroke width**: 1.5px (Lucide default). Never filled icons except for status dots.
- **Size**: 16px in dense UI, 20px in primary nav, 24px in empty states. Never larger than the cap height of the type next to them.
- **Color**: Icons inherit `currentColor`. Status icons take the matching status color.
- **Pairing**: Icons sit 8px to the left of their label, vertically centered to the cap height (not the x-height).
- **Never decorative.** An icon without a label is only acceptable in toolbars and only with a tooltip.

**Custom icons** specific to YapzZ semantics are in `assets/icons/`:

- `seal.svg` — the YapzZ seal (orange wax seal mark, used for sealed records)
- `chain.svg` — chain-of-custody glyph (linked rectangles)
- `gavel.svg` — enforcement / rule citation
- `manifest.svg` — manifest document with a stamp corner
- `vault.svg` — secure storage glyph

**Emoji** — never used. Anywhere.

**Unicode glyphs** used as functional symbols only:

- `↗` for external links
- `→` for "leads to" in chain visualizations
- `§` for rule citations (`§ R-114.2`)
- `·` mid-dot for inline metadata separators
- `─ ─ ─` for monospace horizontal dividers in receipt-style views

**Logos & marks** in `assets/`:

- `logo-mark.svg` — square mark (the seal alone)
- `logo-wordmark.svg` — wordmark (mark + "YapzZ")
- `logo-lockup.svg` — full lockup with tagline ("Track. Control. Comply.")

---
