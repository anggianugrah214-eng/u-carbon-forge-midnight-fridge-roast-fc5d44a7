// Midnight Fridge Roast — one-line entry for make.fun
//
// Why this line: the joke has to roast the fridge's midnight refusal
// itself, not just midnight hunger in general. So the sentence opens
// with the refusal, then sets up the petty contrast — the fridge will
// keep a yoghurt fresh for two whole weeks — and only at the very end
// flips it: the human, not the food, is the thing that expired. One
// joke, twist in the last words, and it reads cleanly spoken aloud.

import { mkdirSync, writeFileSync } from "node:fs";

// Build the line from its three beats so each part stays easy to tune:
// refusal, freshness contrast, expired-human twist.
const refusal = "My smart fridge refuses to open after midnight";
const contrast =
  "it will keep a yoghurt fresh for two weeks, but it treats me like";
const twist = "I'm the thing that expired.";

const line = `${refusal} — ${contrast} ${twist}`;

// Guard: the entry is a fixed 142-character line. If a future edit to
// any beat drifts the length, fail loudly instead of silently writing
// a different entry than the one that was judged and approved.
if (line.length !== 142) {
  throw new Error(`entry line drifted: ${line.length} chars, expected 142`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
