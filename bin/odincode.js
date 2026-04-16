#!/usr/bin/env node
/**
 * ODINCODE CLI — wraps pi's main() with the odincode extension and theme
 * pre-loaded, so you can just run `odincode` instead of `pi`.
 */
process.title = "odincode";
process.env.PI_CODING_AGENT = "true";
process.emitWarning = () => {};

import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";
import { main } from "@mariozechner/pi-coding-agent/dist/main.js";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

setGlobalDispatcher(new EnvHttpProxyAgent());

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(__dirname, "..");

// Inject the extension and theme as additional CLI args, then pass through
// all user-supplied args.
const injectedArgs = [
  "-e", resolve(packageRoot, "extensions/odincode.ts"),
  "--theme", resolve(packageRoot, "themes/odincode.json"),
];

main([...injectedArgs, ...process.argv.slice(2)]);
