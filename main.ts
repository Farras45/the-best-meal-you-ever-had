// The Best Meal You Ever Had — entry program.
// Writes one sentence, the best meal I ever had, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";

// Three beats of one memory: the bench, the reach, the taste.
const beats = [
  "The first meal after my father's surgery was instant noodles on a hospital bench, salt and steam,",
  "his hand reaching for the second packet,",
  "and it tasted like he was coming home.",
];

const sentence = beats.join(" ");

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, sentence, { encoding: "utf8" });
console.log(`Wrote ${sentence.length} characters to ${OUT_PATH}`);
