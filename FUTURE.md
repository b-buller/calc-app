# Future work

Calculator is an fx-115ES-style Natural Display app (MathLive editor + Compute Engine).
This tracks what is NOT built yet. Buttons for many of these exist but are stubbed.

## Done
- Natural 2D display, tap-to-edit placeholder boxes, cursor nav.
- Core scientific: + − × ÷, fractions, √/∛, powers x²/x³/xʸ/x⁻¹/ˣ√, logs (log/ln/10ˣ/eˣ),
  trig + inverses, π, e, ( ), (−), ×10ˣ, Ans, DEG/RAD/GRAD, S⇔D exact/decimal.
- Quick wins: nPr, nCr, Abs, Ran#, ENG (engineering notation), %.
- Imaginary/complex numbers: `i` (SHIFT+e), arithmetic, i², √−1, |a+bi|. Results show `a+bi`.
- History (localStorage), light Casio theme, offline PWA.

## Medium (state/UI, engine already capable)
- **STO / RCL variables** A–F, X, Y, M via `ce.assign(name, value)`; wire M+/M− fully.
- **Ans as a live symbol** — currently inserts the decimal value, not a dynamic reference.
- **CALC** — evaluate a stored expression, prompting for each variable it contains.
- **SOLVE** — numeric root find (`ce.solve` / Newton). Needs a variable picker + initial guess UI.
- **Error caret positioning** — on Syntax/Math ERROR, jump the cursor to the offending token (real ES behavior).
- **°′″ (DMS) input + DRG▸ conversion** — sexagesimal entry (deg-min-sec) and angle-unit conversion.
  Deferred from "quick wins": proper sexagesimal parse/format is fiddlier than a one-liner.

## Heavy (each is a whole MODE screen / mini-app)
- **CMPLX mode** — dedicated complex mode: arg, conjugate, polar↔rect display. (Basic complex arithmetic already works in COMP.)
- **BASE-N** — hex/bin/oct with logic ops (AND/OR/XOR/NOT); needs its own integer engine + mode.
- **STAT / regression** — data-table entry UI, summary stats (mean, σ, Σx…), linear/quadratic regression.
- **TABLE** — f(x) table generator over a range.
- **EQN** — polynomial roots + simultaneous linear systems solver.
- **∫dx / d/dx** — numeric + symbolic calculus. Symbolic needs re-vendoring the ~7MB
  Compute Engine `integration-rules` bundle (pruned to keep the app small); numeric derivative/integral may work without it.

## Nice-to-have (not Casio, good for a phone app)
- Copy result to clipboard; tap-to-copy history rows.
- Landscape layout.
