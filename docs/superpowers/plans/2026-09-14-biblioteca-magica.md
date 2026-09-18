# Biblioteca mágica de grimorios Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the project archive with an accessible interactive library of magical project grimoires.

**Architecture:** Add shelf metadata to archive projects, group them in a local component, and keep selected-book state inside the library. Motion renders only decorative transformations; buttons, headings and links retain normal semantic behavior.

**Tech Stack:** React, Motion, CSS, existing project data.

---

### Task 1: Classify the project archive

**Files:**
- Modify: `src/projects.js`

- [x] Classify every archive record through a supported `shelf` value or its project category.
- [x] Verify the archive classification with `node -e`.

### Task 2: Build the library components

**Files:**
- Create: `src/components/GrimoireLibrary.jsx`
- Modify: `src/App.jsx`

- [x] Create `GrimoireLibrary` with five buttons, `aria-pressed`, active project state, and a semantic page panel.
- [x] Use `AnimatePresence` and Motion for a 420 ms page entrance and a 180 ms exit.
- [x] Replace the current searchable archive block in `App.jsx` with the library while keeping the featured projects unchanged.

### Task 3: Style and protect the interaction

**Files:**
- Modify: `src/styles.css`

- [x] Add book-spine, page, shelf and active-state styles using existing color tokens.
- [x] Add mobile horizontal book row and a no-motion stylesheet branch.

### Task 4: Verify

**Files:**
- Modify: `docs/superpowers/plans/2026-09-14-biblioteca-magica.md`

- [x] Run `npm run build` and verify it passes.
- [x] Verify five grimoires and public project links exist in the rendered source.
- [x] Mark completed tasks.
