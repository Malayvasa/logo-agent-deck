# Logo Agent

A talk deck about **Logo Agent** — a production Composio agent that turns a Linear
ticket into a merged logo PR: fetch the favicon, vectorize it, normalize it, open
the PR, and merge only once a human moves the ticket to **Done**.

Built with [Next.js 16](https://nextjs.org), [Spectacle](https://formidable.com/open-source/spectacle/), [Framer Motion](https://www.framer.com/motion/), and Tailwind CSS — the same setup as `karan_aie_deck` and `sarah_aie_deck`.

## Getting started

```bash
pnpm install
pnpm dev --port 3005
```

Then open [http://localhost:3005](http://localhost:3005).

Press `f` to go fullscreen. Press `p` (Spectacle) for presenter mode with speaker
notes; arrow keys advance in-slide reveals first, then move to the next slide.

## Scripts

| Command      | Description                |
| ------------ | -------------------------- |
| `pnpm dev`   | Start the local dev server |
| `pnpm build` | Create a production build  |
| `pnpm start` | Serve the production build |

## Project structure

```
src/
├── app/                  # Next.js app router entry + globals.css design system
├── components/
│   ├── deck/             # Spectacle deck root, slide chrome, presenter notes
│   ├── slides/           # One component per slide
│   ├── mocks/            # Mock product UIs used in demos (Linear, GitHub, …)
│   └── terminal-kit/     # Animated terminal primitives
├── content/              # Speaker notes, keyed per slide
└── lib/                  # Utilities, terminal themes, syntax highlighting
docs/
└── logo-agent-speech.md  # Full talk script — source of truth for speaker notes
```

## Adding a slide

1. Create `src/components/slides/MySlide.tsx`, wrapping content in `<DeckSlide>`.
2. Add a `speakerNotes` entry in `src/content/speaker-notes.ts` and render
   `<Notes><PresenterNote noteKey="mySlide" /></Notes>` inside the slide.
3. Import it into `src/components/deck/DeckRoot.tsx` and drop it into the `<Deck>`
   children — JSX order is presentation order.

For in-slide reveals, use `useStepMotion(n)`, render its `placeholder`, and pass
`steps={n}` to `<PresenterNote>`. `src/components/slides/TheChoreSlide.tsx` is a
working reference for all three.

## License

[MIT](./LICENSE)
