// Real Life Patch Notes entry: one line, 160 characters max, no trailing
// newline. The joke is the contrast between flawless recall of old song
// lyrics and forgetting the reason for the most routine action.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY =
  "v7.2.0: Fixed bug where brain remembered every lyric from 2007 but forgot why you opened the fridge.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
