/**
 * Speaker notes for the deck. Each entry is keyed by a stable slide key and
 * carries the speech `section` label plus the spoken `script` for that slide.
 *
 * Slides with in-slide reveals use `segments` instead: one entry per step, with
 * `atStep` = the step index at which that segment becomes the live one. The
 * presenter column highlights the active segment and dims the rest, so you can
 * read ahead.
 *
 * The script supports a tiny subset of markdown, rendered by <PresenterNote>:
 *   - blank-line-separated paragraphs
 *   - **bold** and *italic*
 *   - a paragraph beginning with "> " renders as a blockquote
 *
 * Source: docs/logo-agent-speech.md
 */

export type SpeakerNote = {
	section: string;
	script: string;
	segments?: { atStep: number; section: string; script: string }[];
};

export const speakerNotes = {
	title: {
		section: "01 · Opening",
		script: `TODO — write the opening beat.`,
	},
	theChore: {
		section: "02 · The chore",
		script: `TODO — the recurring chore: find a favicon, vectorize it, normalize it, open a PR, review, merge.`,
		segments: [
			{
				atStep: 0,
				section: "02a · Setup",
				script: `TODO — set up the problem before the first reveal lands.`,
			},
			{
				atStep: 1,
				section: "02b · The steps",
				script: `TODO — walk the manual steps as they appear.`,
			},
			{
				atStep: 2,
				section: "02c · The punchline",
				script: `TODO — land why this is exactly agent-shaped work.`,
			},
		],
	},
} as const satisfies Record<string, SpeakerNote>;

export type SpeakerNoteKey = keyof typeof speakerNotes;
