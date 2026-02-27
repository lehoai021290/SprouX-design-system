#!/usr/bin/env node
/**
 * Generate foundation-export.json from index.css
 *
 * Run:  pnpm gen:foundation
 *
 * Parses all foundation tokens from src/index.css and produces
 * a JSON file matching the 6 Figma variable collections format.
 * The Figma plugin reads this file to compare & import.
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CSS_PATH = join(__dirname, "..", "src", "index.css");
const OUT_PATH = join(__dirname, "..", "public", "foundation-export.json");

const css = readFileSync(CSS_PATH, "utf-8");

// ─── Helpers ────────────────────────────────────────────────

function rgbaToHex(r, g, b, a) {
  const hex = [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
  const alpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0");
  return `#${hex}${alpha}`;
}

/** Extract content of a CSS block by selector pattern (brace-counting).
 *  selectorRe should match up to and including the opening `{`. */
function extractBlock(source, selectorRe) {
  const match = source.match(selectorRe);
  if (!match) return "";
  // The regex includes `{`, so start scanning right after the match
  const braceStart = match.index + match[0].length - 1; // position of `{`
  let depth = 1;
  let i = braceStart + 1;
  while (depth > 0 && i < source.length) {
    if (source[i] === "{") depth++;
    if (source[i] === "}") depth--;
    i++;
  }
  return source.substring(braceStart + 1, i - 1);
}

/** Parse all `--name: value;` declarations from a CSS block string */
function parseVars(block) {
  const vars = {};
  const re = /--([a-z0-9][\w-]*):\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    let value = m[2].replace(/\/\*.*?\*\//g, "").trim();
    vars[m[1]] = value;
  }
  return vars;
}

// ─── 1. Parse Palette (raw colors) from @theme inline ──────

const palette = {}; // { slate: { "50": "#f7f7f6", … }, … }
const paletteRe = /--color-([a-z]+)-(\d+):\s*(#[0-9a-fA-F]+)/g;
let pm;
while ((pm = paletteRe.exec(css)) !== null) {
  if (!palette[pm[1]]) palette[pm[1]] = {};
  palette[pm[1]][pm[2]] = pm[3];
}

// ─── 2. Extract :root and .dark blocks ──────────────────────

// :root lives inside @layer base { :root { ... } }
const rootBlock = extractBlock(css, /:root\s*\{/);
const darkBlock = extractBlock(css, /\.dark\s*\{/);

const lightVars = parseVars(rootBlock);
const darkVars = parseVars(darkBlock);

// ─── 3. Resolve a CSS value to { value: hex, raw: ref|null } ─

function resolveValue(val) {
  // var(--color-XXX-YYY) → palette reference
  const varRef = val.match(/var\(--color-([a-z]+)-(\d+)\)/);
  if (varRef) {
    const hex = palette[varRef[1]]?.[varRef[2]];
    return { value: hex || val, raw: `${varRef[1]}/${varRef[2]}` };
  }

  // transparent
  if (val === "transparent") {
    return { value: "transparent", raw: null };
  }

  // rgba(r,g,b,a)
  const rgbaMatch = val.match(
    /rgba\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*\)/
  );
  if (rgbaMatch) {
    return {
      value: rgbaToHex(
        parseInt(rgbaMatch[1]),
        parseInt(rgbaMatch[2]),
        parseInt(rgbaMatch[3]),
        parseFloat(rgbaMatch[4])
      ),
      raw: null,
    };
  }

  // direct hex or other
  return { value: val, raw: null };
}

// ─── 4. Build semantic colors ───────────────────────────────

function buildSemantic(vars) {
  const tokens = {};
  for (const [name, val] of Object.entries(vars)) {
    // Map: CSS sidebar-background → Figma sidebar
    const tokenName =
      name === "sidebar-background" ? "sidebar" : name;
    tokens[tokenName] = resolveValue(val);
  }
  return tokens;
}

const semanticLight = buildSemantic(lightVars);
const semanticDark = buildSemantic(darkVars);

// Tokens only in :root (static colors, etc.) are same in light/dark.
// Copy them into dark so both modes have the same token set.
for (const [key, val] of Object.entries(semanticLight)) {
  if (!(key in semanticDark)) {
    semanticDark[key] = { ...val };
  }
}

// ─── 5. Typography ──────────────────────────────────────────

const typography = {};
const fontRe = /--font-(\w+):\s*"([^"]+)"/g;
let fm;
while ((fm = fontRe.exec(css)) !== null) {
  typography[`font-${fm[1]}`] = { value: fm[2], type: "STRING" };
}

// ─── 6. Border Radius (11 Figma values) ─────────────────────
// Figma collection has fixed names. We parse CSS values for the
// 5 custom ones and hardcode the 6 Tailwind-default ones.

const radiusFromCss = {};
const radRe = /--radius-([a-z0-9]+):\s*(\d+)px/g;
let rm;
while ((rm = radRe.exec(css)) !== null) {
  radiusFromCss[rm[1]] = parseInt(rm[2]);
}

// Map CSS name → Figma value for lookup
const radiusCssToValue = {
  sm: radiusFromCss.sm,   // 4
  md: radiusFromCss.md,   // 6
  lg: radiusFromCss.lg,   // 8
  10: radiusFromCss["10"], // 10
  xl: radiusFromCss.xl,   // 12
};

const borderradius = {
  "rounded-none": { value: 0 },
  "radius/2": { value: 2 },
  "radius/4": { value: radiusCssToValue.sm ?? 4 },
  "radius/6": { value: radiusCssToValue.md ?? 6 },
  "radius/8": { value: radiusCssToValue.lg ?? 8 },
  "radius/10": { value: radiusCssToValue[10] ?? 10 },
  "radius/12": { value: radiusCssToValue.xl ?? 12 },
  "radius/16": { value: 16 },
  "radius/24": { value: 24 },
  "radius/32": { value: 32 },
  "radius/infinite": { value: 9999 },
};

// ─── 7. Spacing ─────────────────────────────────────────────
// Tailwind numeric scale (fixed) + repo semantic spacing (parsed)

const twNumeric = {
  "0": 0, px: 1, "0.5": 2, "1": 4, "1.5": 6, "2": 8, "2.5": 10,
  "3": 12, "3.5": 14, "4": 16, "5": 20, "6": 24, "7": 28, "8": 32,
  "9": 36, "10": 40, "11": 44, "12": 48, "14": 56, "16": 64,
  "20": 80, "24": 96, "28": 112, "32": 128, "36": 144, "40": 160,
  "44": 176, "48": 192, "52": 208, "56": 224, "60": 240, "64": 256,
  "72": 288, "80": 320, "96": 384,
};

const spacingFromCss = {};
const spRe = /--spacing-([a-z0-9]+):\s*(\d+)px/g;
let sm;
while ((sm = spRe.exec(css)) !== null) {
  spacingFromCss[sm[1]] = parseInt(sm[2]);
}

const spacing = {};
for (const [k, v] of Object.entries(twNumeric)) {
  spacing[k] = { value: v };
}
for (const [k, v] of Object.entries(spacingFromCss)) {
  spacing[k] = { value: v };
}

// ─── 8. Shadows ─────────────────────────────────────────────

const shadows = {
  light: {
    "shadow/color": {
      value: semanticLight["shadow-color"]?.value || "#00000040",
    },
  },
  dark: {
    "shadow/color": {
      value: semanticDark["shadow-color"]?.value || "#00000080",
    },
  },
};

// ─── 9. Raw Colors ──────────────────────────────────────────

const rawcolors = {};
// Keep CSS order: iterate palette families in the order they appear
const familyOrder = Object.keys(palette);
for (const family of familyOrder) {
  const shades = palette[family];
  // Sort shades numerically
  const sortedShades = Object.keys(shades).sort((a, b) => +a - +b);
  for (const shade of sortedShades) {
    rawcolors[`${family}/${shade}`] = { value: shades[shade] };
  }
}

// ─── 10. Write JSON ─────────────────────────────────────────

const result = {
  semanticcolors: { light: semanticLight, dark: semanticDark },
  typography,
  borderradius,
  spacing,
  shadows,
  rawcolors,
  _exportedAt: new Date().toISOString(),
  _source: "repo",
};

writeFileSync(OUT_PATH, JSON.stringify(result, null, 2) + "\n");

// Summary
const lc = Object.keys(semanticLight).length;
const dc = Object.keys(semanticDark).length;
const rc = Object.keys(rawcolors).length;
const sc = Object.keys(spacing).length;
const tc = Object.keys(typography).length;
const br = Object.keys(borderradius).length;

console.log(`✅ foundation-export.json generated`);
console.log(`   Semantic: ${lc} light, ${dc} dark`);
console.log(`   Typography: ${tc} | Border radius: ${br} | Spacing: ${sc}`);
console.log(`   Shadows: 1 light, 1 dark | Raw colors: ${rc}`);
