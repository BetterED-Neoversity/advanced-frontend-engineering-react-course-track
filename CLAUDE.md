# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

Instructor template repository for the **Advanced Front-End Engineering with React** course. Each lesson lives on its own branch — `main` holds only shared scaffolding (README, .gitignore). All lesson code lives in branches named `module-XX/lesson-YY`.

## Branch conventions

Each lesson branch contains:

- `README.md` — the lesson plan for the instructor
- Starter project code at the repository root

Navigate to a lesson before installing or running anything:

```bash
git checkout module-01/lesson-01
```

## Lesson branch setup

After checking out a lesson branch:

```bash
npm install   # install dependencies
npm run dev   # start the dev server
```

## Expected tech stack by module

- **Modules 1-4**: Vite + React. Expect `vite.config.ts`, `src/` directory. React Query and Formik added from module 3 onward.
- **Modules 5-6**: Next.js with App Router. Expect `app/` directory, `next.config.*`.
- **Module 7**: Next.js + Zustand for global state management.

Confirm the actual stack by reading `package.json` on the checked-out branch before assuming tool availability.

## Common scripts

| Script          | Purpose                                    |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start dev server                           |
| `npm run build` | Production build                           |
| `npm run lint`  | Run ESLint (included by default with Vite) |
