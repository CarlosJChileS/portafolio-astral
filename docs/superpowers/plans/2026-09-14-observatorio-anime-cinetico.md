# Observatorio anime cinético Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing portfolio into a maximal but accessible Acuario-inspired observatory with original anime-cinematic motion.

**Architecture:** Add reusable SVG identity marks and a data module so identity does not remain embedded in the page. Wrap existing content sections with a chapter component, keeping semantic HTML intact. Extend the existing lazy Three.js scene and use CSS animation for the remaining motion, with mobile and reduced-motion fallbacks.

**Tech Stack:** React 19, Vite, Motion, Three.js, CSS, SVG.

---

### Task 1: Create identity primitives and identity data

**Files:**
- Create: `src/components/IdentityMark.jsx`
- Create: `src/identity.js`
- Modify: `src/App.jsx`

- [x] **Step 1: Add testable identity data and SVG primitives**

Create `src/identity.js` with:

```js
export const identity = {
  sign: 'Acuario',
  birthDate: '30 · 01 · 2004',
  constellationLabel: 'AQUARIUS / CC-300104',
}
```

Create `IdentityMark.jsx` exporting `StarMark`, `AquariusMark`, and `AquariusConstellation`. Each returns an `svg` using paths, circles, and lines only, defaults to `aria-hidden="true"`, and accepts `className`.

- [x] **Step 2: Integrate symbols into the hero and contact sections**

Import `identity` and identity marks into `App.jsx`. Replace decorative glyph characters in the hero title, discipline strip, diagrams, and footer with `StarMark`. Use `AquariusConstellation` plus `identity.birthDate` in the hero metadata and contact footer.

- [x] **Step 3: Verify source contains no emoji glyphs used as decoration**

Run: `rg "[✳♒✦⌘]" src`

Expected: no matches.

### Task 2: Make content sections explicit chapters

**Files:**
- Create: `src/components/SceneChapter.jsx`
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

- [x] **Step 1: Create the chapter wrapper**

Create `SceneChapter.jsx` accepting `index`, `kicker`, `title`, `children`, and `enabled`. It renders a semantic `section`, a screen-reader-safe label, a chapter rail with an SVG line, and a Motion entry state only when `enabled` is true.

- [x] **Step 2: Wrap the profile, projects, stack and contact blocks**

Replace each standalone section in `App.jsx` with `SceneChapter` using: `ORIGEN / 01`, `MISIONES / 02`, `SISTEMAS / 03`, and `TRANSMISIÓN / 04`. Preserve the existing `id` values, headings, links, inputs and `details` elements.

- [x] **Step 3: Add cinematic but cheap chapter styles**

Add styles for `.scene-chapter`, `.chapter-rail`, `.chapter-line`, `.chapter-number`, and `.chapter-flare`. Animate only `opacity` and `transform`; use `@keyframes chapter-scan` for the line.

### Task 3: Extend the 3D observatory with Acuario

**Files:**
- Modify: `src/components/OrbitScene.jsx`
- Modify: `src/three.css`

- [x] **Step 1: Add an eleven-node constellation group**

Within `OrbitScene`, create a `THREE.Group` containing eleven `SphereGeometry(0.035, 8, 8)` points and `Line` segments. Position it above and to the right of the globe. Add the group to `observatory` and rotate it slowly only while `enabledRef.current` is true.

- [x] **Step 2: Add abstract water-wave rings**

Use two `THREE.TorusGeometry` meshes, flatten their y scale, position them below the globe, and animate their rotation and y position when motion is enabled. Use the existing mineral/amber palette.

- [x] **Step 3: Protect reduced-motion and mobile behavior**

Keep the current lazy import. In `three.css`, ensure `prefers-reduced-motion: reduce` displays the SVG fallback and hides the canvas. Keep the existing `max-width: 680px` fallback rule.

### Task 4: Add cinematic interaction layers

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/styles.css`
- Modify: `src/three.css`

- [x] **Step 1: Add original motion layers**

Place a decorative `div` with `hero-speedlines` and an SVG constellation overlay in the hero. Add `mission-stamp` metadata to featured project cards and a `system-trace` span to technology summaries. All decorations use `aria-hidden="true"`.

- [x] **Step 2: Add hover and focus effects**

Give interactive project cards `:focus-visible` outlines, use `translateY` on hover, and expose card content without requiring hover. Style speed lines, scan overlays, stamps, and system traces using CSS variables from the existing palette.

- [x] **Step 3: Add reduced-motion overrides**

In the `prefers-reduced-motion` block, disable scan, speedline, constellation, hover-transition, and chapter animation. The user pause setting continues to be handled by the existing `data-motion="off"` selector.

### Task 5: Verify the complete experience

**Files:**
- Modify: `docs/superpowers/plans/2026-09-14-observatorio-anime-cinetico.md`

- [x] **Step 1: Build production assets**

Run: `npm run build`

Expected: Vite completes with no errors.

- [x] **Step 2: Verify desktop page state**

Use the local Vite page and confirm the hero canvas exists, the four chapter labels appear, no console errors are emitted, and the pause button changes `data-motion` to `off`.

- [x] **Step 3: Verify mobile and reduced motion**

At 390px wide, confirm no horizontal scroll and the WebGL canvas is hidden. Emulate reduced motion and confirm the fallback is visible, controls remain usable, and decorative animation is inactive.

- [x] **Step 4: Mark completed steps**

Mark each completed checkbox in this file after validation.
