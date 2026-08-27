import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const output = resolve(root, ".output");
const dist = resolve(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(dist, "client"), { recursive: true });

await cp(resolve(output, "server"), resolve(dist, "server"), { recursive: true });
await cp(resolve(output, "public"), resolve(dist, "client"), { recursive: true });

const worker = await readFile(resolve(output, "server", "index.mjs"), "utf8");
await writeFile(resolve(dist, "server", "index.js"), worker);
