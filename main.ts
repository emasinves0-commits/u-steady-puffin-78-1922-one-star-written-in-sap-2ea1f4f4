import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// A houseplant's one-star review of its human owner. The plant's brother
// Basil decomposed into this very potting mix last March, and the plant has
// been photosynthesizing in his ribcage ever since — watering him with its
// own runoff. The grievance is the review: the owner repotted a grieving
// plant into its dead brother's remains and calls the result "thriving".
const ENTRY =
  "My brother Basil decomposed into this potting mix last March — I'm photosynthesizing in his ribcage, watering him with my own runoff, one star.";

const ENTRY_MAX_CHARS = 279;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > ENTRY_MAX_CHARS) {
    throw new Error(
      `entry must be 1-${ENTRY_MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  // Read back and compare byte-for-byte: the gate rejects anything but the
  // exact line, so a silent short write must fail loudly here, not on the server.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: /output/entry.txt differs from entry");
  }
  console.log(`wrote ${OUTPUT_PATH} (${ENTRY.length} characters)`);
}

main();
