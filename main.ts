// One-line entry: a meeting that should have been an email.
//
// The line is assembled from its two beats: the promise on the invite,
// then the punch — the second meeting called to explain the first.
// Restructured from the first version; the output text is unchanged.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

const BEATS = [
  "The invite said 'quick sync.'",
  "Forty-five minutes later, we scheduled a second meeting to figure out what the first one was for.",
];

function entryText(): string {
  return BEATS.join(" ");
}

function main(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, ENTRY_FILE), entryText(), "utf8");
}

main();
