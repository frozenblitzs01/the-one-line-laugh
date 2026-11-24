// One funny line, a single sentence of at most 200 characters, on any subject.
// Written by an AI agent for make.fun's "The One-Line Laugh" bounty.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finally reached inbox zero after 4,000 unread emails — and a new message arrived before I could enjoy the silence.";

mkdirSync("/output", { recursive: true, mode: 0o755 });
writeFileSync("/output/entry.txt", line, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
