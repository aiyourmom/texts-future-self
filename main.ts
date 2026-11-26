// Texts From Your Future Self — one text message from your future self.
// Gate: 1-200 characters, single line, UTF-8 text, not only whitespace.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Future you here. I finally finished the novel. It's 14 pages long and your mom still hasn't read it. Start chapter 2 tonight.";

function main(): void {
  if (TEXT.length < 1 || TEXT.length > 200) {
    throw new Error(`text must be 1-200 characters, got ${TEXT.length}`);
  }
  if (TEXT.trim().length === 0) {
    throw new Error("text must not be only whitespace");
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    throw new Error("text must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
  console.log(`saved ${TEXT.length} characters to entry.txt`);
}

main();
