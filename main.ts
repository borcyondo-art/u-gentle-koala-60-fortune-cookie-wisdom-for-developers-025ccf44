// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// A flaky test usually exposes a timing race: the assertion is right,
// the moment is wrong. That double meaning is the fortune's twist.
const FORTUNE =
  "Your flaky test is not lying to you; it is telling the truth at the wrong time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
