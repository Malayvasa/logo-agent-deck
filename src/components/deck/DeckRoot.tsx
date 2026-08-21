"use client";

import { Deck, defaultTransition } from "spectacle";

import { TheChoreSlide } from "~/components/slides/TheChoreSlide";
import { TitleSlide } from "~/components/slides/TitleSlide";

/**
 * Minimal Spectacle theme — visuals are driven through Tailwind, so this only
 * fixes the backdrop (the letterbox around the scaled slide) and points fonts at
 * the design-system CSS variables in globals.css.
 */
const theme = {
	// IMPORTANT: backdropStyle REPLACES Spectacle's default, which supplies the
	// viewport-filling box it measures to scale slides. Keep position/size or the
	// deck stops scaling (caps at 1366×768). We only want to add the black bg.
	backdropStyle: {
		position: "fixed",
		top: 0,
		left: 0,
		width: "100vw",
		height: "100vh",
		backgroundColor: "#000000",
	},
	fonts: {
		header: "var(--font-abc-diatype), sans-serif",
		text: "var(--font-abc-diatype), sans-serif",
		monospace: "var(--font-jetbrains-mono), monospace",
	},
	colors: { primary: "#ffffff", secondary: "#0007cd" },
};

/**
 * The deck. Add each finished slide as a child below — the JSX order IS the
 * presentation order.
 */
export function DeckRoot() {
	return (
		<Deck
			theme={theme}
			transition={defaultTransition}
			// Suppress Spectacle's default footer (progress dots + fullscreen
			// button). Without this it renders a full-width white pixel row at
			// the bottom of every slide. Swap for a real component if the deck
			// ever needs a persistent overlay across slides.
			template={() => null}
		>
			<TitleSlide />
			<TheChoreSlide />
		</Deck>
	);
}

export default DeckRoot;
