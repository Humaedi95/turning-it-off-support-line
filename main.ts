import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Have you tried turning it off, turning it on, then acting like it was never broken? That's my whole job, sir, and I'm employee of the month.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
