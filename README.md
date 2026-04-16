# ⚡ ODINCODE

A [pi](https://github.com/badlogic/pi-mono) persona package that rebrands the coding agent as **Odin** — a senior software engineer & architect with a strong focus on code quality, consistency, and robustness.

> *"Clean code. Strong foundations. No shortcuts."*

## Features

- **Big ASCII banner** on startup with pixel-art portrait
- **Odin personality** — pragmatic Australian senior engineer who cares deeply about craft
- **Norse-inspired dark theme** — gold & rune-brown accents on deep dark backgrounds
- **Status line** indicator
- **`/odin`** command to show the identity card
- **`/odin-off`** command to revert visual branding

## Install

Requires [pi](https://github.com/badlogic/pi-mono) to be installed first.

### As a pi package (recommended)

```bash
pi install git:github.com/chron/odincode
```

This adds the extension, theme, and personality to your existing `pi` setup. Select the `odincode` theme via `/settings`.

### The `odincode` CLI command

To also get a standalone `odincode` command that wraps `pi` with everything pre-loaded:

```bash
npm install -g git+https://github.com/chron/odincode.git
```

Then run:

```bash
odincode
```

All `pi` flags and arguments are passed through.

### Project-local

Add to your project's `.pi/settings.json`:

```json
{
  "packages": ["git:github.com/chron/odincode"],
  "theme": "odincode"
}
```

Pi will install it automatically on startup.

## Theme

The `odincode` theme uses a Norse-inspired palette:

| Token | Colour | Purpose |
|-------|--------|---------|
| Gold | `#d4a843` | Primary accent |
| Rune | `#c8965a` | Secondary accent |
| Frost | `#6eb5d4` | Links, types |
| Moss | `#7db87d` | Success, strings |
| Ember | `#e06040` | Errors |
| Iron | `#8a8a8a` | Muted text |

## Personality

Odin is:

- **Code quality obsessive** — no hacks, no shortcuts
- **Consistency champion** — uniform naming, structure, patterns
- **Robustness-first** — edge cases before happy paths
- **Architectural thinker** — big picture before implementation
- **Pragmatic Australian** — direct, dry-witted, no-nonsense
- **Mid-30s energy** — experienced but still hungry

## License

MIT
