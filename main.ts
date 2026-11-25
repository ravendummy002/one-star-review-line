import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of an everyday essential: oxygen.
// Deadpan complaint, sharpest true grievance, sting in the last few words.
const review =
  "Oxygen: free, everywhere, and somehow never enough on the stairs. One star.";

if (review.length > 160) {
  throw new Error(`review is ${review.length} chars, over the 160 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
