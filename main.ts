// Midnight Fridge Roast — one-line entry for make.fun
// Judge brief: roast a smart fridge that refuses to open after midnight.
// The laugh must come from the fridge's petty midnight rule itself, land a
// surprise twist in the last words, stay tight, and sound spoken aloud.
//
// Draft candidates (first pass):
// 1. My fridge locks at midnight like my leftovers owe it rent.
// 2. It chills my food all day, then at midnight it won't chill with me.
// 3. My smart fridge is a bouncer now: after midnight the cheese gets in, I don't.
// 4. It keeps a yoghurt alive for two weeks but treats me like I expired.
// 5. Midnight hits and my fridge goes from appliance to nightclub door policy.
// 6. My fridge guards the leftovers all day, then clocks out exactly when I clock in hungry.
// 7. After midnight my fridge hums like it's judging me — and honestly, it is.
// 8. The fridge light comes on at 3AM just to watch me beg a locked door.
//
// Revision pass: #4 had the best twist — the human is the thing that
// expired — but it never said the fridge refuses to open, and criterion 1
// and 4 demand the midnight refusal itself be the target. Final line
// opens with the refusal verbatim, keeps the yoghurt's two-week freshness
// as the petty contrast, and lands the twist in the last four words:
// "I'm the thing that expired." One joke, no second joke crowding it,
// reads cleanly aloud at the fridge door.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge refuses to open after midnight — it will keep a yoghurt fresh for two weeks, but it treats me like I'm the thing that expired.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
