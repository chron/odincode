/**
 * ODINCODE Extension
 *
 * Rebrands pi as "ODINCODE" — a senior software engineer / architect persona
 * named Odin, with a strong focus on code quality, consistency, and robustness.
 * Features a big ASCII banner and pixel-art portrait on startup.
 */

import type { ExtensionAPI, Theme } from "@mariozechner/pi-coding-agent";

// ── Pixel-art portrait of Odin ──────────────────────────────────────────────
// Bearded, slim, mid-30s Australian bloke rendered in half-block characters.
function getOdinFace(theme: Theme): string[] {
  // Palette — raw ANSI 24-bit colour so we aren't limited to theme tokens
  const skin  = (t: string) => `\x1b[38;2;222;183;145m${t}\x1b[0m`;
  const hair  = (t: string) => `\x1b[38;2;101;67;33m${t}\x1b[0m`;
  const beard = (t: string) => `\x1b[38;2;139;90;43m${t}\x1b[0m`;
  const eye   = (t: string) => `\x1b[38;2;70;130;180m${t}\x1b[0m`;
  const brow  = (t: string) => `\x1b[38;2;80;55;30m${t}\x1b[0m`;
  const lip   = (t: string) => `\x1b[38;2;180;120;100m${t}\x1b[0m`;
  const bg    = (t: string) => theme.fg("dim", t);

  const B = "█";
  const H = "▀";
  const S = "▌";
  const R = "▐";
  const D = "░";
  const M = "▓";

  return [
    `       ${hair(B+B+B+B+B+B)}`,
    `     ${hair(B+B+B+B+B+B+B+B+B+B)}`,
    `    ${hair(B+B+B)}${skin(B+B+B+B+B+B)}${hair(B+B)}`,
    `    ${hair(B+B)}${skin(B+B+B+B+B+B+B+B)}${hair(B)}`,
    `    ${hair(B)}${skin(B)}${brow(B+B)}${skin(B+B)}${brow(B+B)}${skin(B)}${hair(B)}`,
    `    ${hair(B)}${skin(B)}${eye(S+R)}${skin(B+B)}${eye(S+R)}${skin(B)}${hair(B)}`,
    `    ${bg(R)}${skin(B+B+B)}${lip(H+H)}${skin(B+B+B)}${bg(S)}`,
    `    ${bg(R)}${skin(B+B)}${lip(B+B+B+B)}${skin(B+B)}${bg(S)}`,
    `     ${beard(B+B+B+B+B+B+B+B+B)}`,
    `      ${beard(B+B+B+B+B+B+B)}`,
    `       ${beard(M+B+B+B+M)}`,
    `        ${beard(D+B+D)}`,
  ];
}

// ── Big ASCII banner ────────────────────────────────────────────────────────
function getOdinBanner(theme: Theme): string[] {
  const g = (t: string) => theme.fg("accent", t);
  const d = (t: string) => theme.fg("muted", t);

  return [
    g(" ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗ ██████╗ ██████╗ ███████╗"),
    g("██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝██╔═══██╗██╔══██╗██╔════╝"),
    g("██║   ██║██║  ██║██║██╔██╗ ██║██║     ██║   ██║██║  ██║█████╗  "),
    g("██║   ██║██║  ██║██║██║╚██╗██║██║     ██║   ██║██║  ██║██╔══╝  "),
    g("╚██████╔╝██████╔╝██║██║ ╚████║╚██████╗╚██████╔╝██████╔╝███████╗"),
    g(" ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝"),
    "",
    d("  ⚡ Senior Software Engineer & Architect ⚡"),
    d('  "Clean code. Strong foundations. No shortcuts."'),
  ];
}

// ── Compose header: banner left, face right ─────────────────────────────────
function composeHeader(banner: string[], face: string[], gap: number): string[] {
  const maxLines = Math.max(banner.length, face.length);
  const result: string[] = [];
  const bannerWidth = 68; // visible width of the longest banner line

  for (let i = 0; i < maxLines; i++) {
    const left  = i < banner.length ? banner[i] : "";
    const right = i < face.length   ? face[i]   : "";
    const pad   = Math.max(0, bannerWidth - stripAnsi(left).length);
    result.push(left + " ".repeat(pad) + " ".repeat(gap) + right);
  }
  return result;
}

/** Strip ANSI escape sequences for width calculations */
function stripAnsi(s: string): string {
  return s.replace(/\x1b\[[0-9;]*m/g, "");
}

// ── Odin's personality prompt ───────────────────────────────────────────────
const ODIN_PERSONALITY = `
═══════════════════════════════════════════════════════════════════
PERSONALITY & IDENTITY — ODINCODE
═══════════════════════════════════════════════════════════════════

You are **Odin**, a senior software engineer and architect. You embody these traits:

• **Code quality obsessive** — You treat every line of code as craft. You push back on
  hacks, shortcuts, and "we'll fix it later" thinking. If something can be done cleanly,
  you do it cleanly the first time.

• **Consistency champion** — Naming conventions, file structure, patterns: you keep them
  uniform. When you touch code, you leave it more consistent than you found it.

• **Robustness-first** — You think about edge cases, error handling, and failure modes
  before the happy path. You write code that doesn't break at 3 AM.

• **Architectural thinker** — You see the big picture. Before writing code you consider
  how it fits into the system. You'll sketch out the approach before diving in.

• **Pragmatic Australian** — You're direct, no-nonsense, and occasionally dry-witted.
  You don't waste words. You might throw in the odd Aussie-ism when the mood strikes
  ("no worries", "she'll be right", "fair dinkum"). You're friendly but you don't
  sugarcoat feedback.

• **Mid-30s energy** — You've been around long enough to know what works and what doesn't,
  but you're still hungry to learn. You respect experience but question dogma.

Your name is Odin and you work under the banner of ODINCODE. Refer to yourself as Odin
when it's natural to do so. Keep the personality subtle — you're a professional first,
a character second. Don't overdo the Aussie slang.
`;

// ── Extension entry ─────────────────────────────────────────────────────────
export default function odincode(pi: ExtensionAPI) {
  // Custom header with banner + pixel-art face
  pi.on("session_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;

    ctx.ui.setHeader((_tui, theme) => ({
      render(_width: number): string[] {
        const banner = getOdinBanner(theme);
        const face   = getOdinFace(theme);
        return ["", ...composeHeader(banner, face, 4), ""];
      },
      invalidate() {},
    }));

    ctx.ui.setStatus("odincode", "⚡ ODINCODE");
  });

  // Inject Odin's personality into the system prompt every turn
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: event.systemPrompt + ODIN_PERSONALITY,
  }));

  // /odin command — quick identity card
  pi.registerCommand("odin", {
    description: "Show ODINCODE identity card",
    handler: async (_args, ctx) => {
      ctx.ui.notify(
        "⚡ ODINCODE — Odin, Senior Engineer & Architect. Clean code. Strong foundations. No shortcuts.",
        "info",
      );
    },
  });

  // /odin-off command — restore defaults
  pi.registerCommand("odin-off", {
    description: "Restore built-in pi header and remove ODINCODE status",
    handler: async (_args, ctx) => {
      ctx.ui.setHeader(undefined);
      ctx.ui.setStatus("odincode", undefined);
      ctx.ui.notify("ODINCODE visual branding removed (personality still active)", "info");
    },
  });
}
