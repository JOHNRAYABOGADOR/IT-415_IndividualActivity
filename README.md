# Little Leaf

A friendly, two-page Next.js guide to choosing beginner-friendly houseplants and caring for them.

## Getting started

You’ll need Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create and run a production build:

```bash
npm run build
npm run start
```

## Pages

- `/` — Introduction and beginner-friendly plant suggestions.
- `/care` — Plant care basics and a simple weekly check-in.

The shared `InfoCard` component displays the cards on both pages using different content.

## Project structure

```text
app/
  care/page.tsx     Plant care page
  globals.css       Site styles
  layout.tsx        Shared site layout and metadata
  page.tsx          Home page
components/
  info-card.tsx     Reusable information card
  site-footer.tsx   Shared footer
  site-header.tsx   Shared header and navigation
```
