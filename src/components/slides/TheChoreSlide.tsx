"use client";

import { motion } from "framer-motion";
import { Notes } from "spectacle";
import { DeckSlide, Kicker } from "~/components/deck/DeckSlide";
import { PresenterNote } from "~/components/deck/PresenterNote";
import { useStepMotion } from "~/components/deck/useStepMotion";

const STEPS = [
	"Find the favicon",
	"Vectorize it",
	"Normalize to 128×128",
	"Open a PR",
	"Review it",
	"Merge it",
];

/**
 * Reference slide for the stepped pattern — delete or rewrite once real content
 * lands. Demonstrates the four moving parts every animated slide in this deck
 * uses:
 *
 *   1. An inner *Body component. Spectacle's `useSteps` reads SlideContext, so
 *      it MUST be called by a component rendered INSIDE <DeckSlide>, never in
 *      the component that renders <DeckSlide> itself.
 *   2. `useStepMotion(n)` for the step counter, with its `placeholder` rendered
 *      somewhere in the tree so Spectacle knows how many steps exist.
 *   3. `reached(i)` driving Framer Motion `animate` props.
 *   4. <PresenterNote steps={n}> so the presenter column shows what the next
 *      arrow press will do.
 */
export function TheChoreSlide() {
	return (
		<DeckSlide>
			<TheChoreBody />
			<Notes>
				<PresenterNote noteKey="theChore" steps={3} />
			</Notes>
		</DeckSlide>
	);
}

function TheChoreBody() {
	const { reached, placeholder } = useStepMotion(3);

	return (
		<div className="flex h-full w-full flex-col">
			{placeholder}

			<Kicker>The chore</Kicker>

			<h2 className="mt-6 max-w-[30ch] font-medium font-sans text-[56px] leading-none tracking-tight">
				Six steps, every single time.
			</h2>

			<motion.ul
				className="mt-12 flex flex-col gap-3"
				initial={false}
				animate={reached(0) ? "in" : "out"}
				variants={{
					in: { transition: { staggerChildren: 0.06 } },
					out: {},
				}}
			>
				{STEPS.map((step, i) => (
					<motion.li
						key={step}
						className="flex items-baseline gap-6 font-mono text-[24px] text-foreground"
						variants={{
							out: { opacity: 0, y: 12 },
							in: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
					>
						<span className="tabular-nums text-muted-foreground">
							{String(i + 1).padStart(2, "0")}
						</span>
						<span>{step}</span>
					</motion.li>
				))}
			</motion.ul>

			<motion.p
				className="mt-auto max-w-[36ch] font-sans text-[28px] leading-tight text-muted-foreground"
				initial={false}
				animate={reached(2) ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
				transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
			>
				Every one of them is mechanical. That is the tell.
			</motion.p>
		</div>
	);
}
