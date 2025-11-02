// Small formatter to convert plain text (with CRLFs and simple markdown-like headings)
// into safe HTML for rendering in details pages. This is intentionally small —
// it handles CRLF -> paragraphs, simple *wrapped* headings, and a few known
// section header keywords. If the input already looks like HTML, it is returned
// as-is.
export function looksLikeHtml(s: string | undefined) {
  if (!s) return false;
  return /<[^>]+>/.test(s);
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const KNOWN_HEADERS = new Set([
  "details",
  "responsibilities",
  "requirements",
  "preferred skills",
  "perks",
  "responsibilities & requirements",
  "job responsibilities & requirements",
  "responsibilities and requirements",
]);

export function formatPlainTextToHtml(raw: string | undefined): string {
  if (!raw) return "";

  // If it already contains HTML-ish content, return as-is to avoid double-escaping.
  if (looksLikeHtml(raw)) return raw;

  // Normalize newlines and trim
  const normalized = raw.replace(/\r\n/g, "\n").trim();

  // Split into paragraphs on empty lines
  const paragraphs = normalized.split(/\n\s*\n/);

  const out: string[] = [];

  for (let p of paragraphs) {
    const trimmed = p.trim();

    // Heading wrapped in *asterisks* (e.g. *Details*)
    const asteriskMatch = trimmed.match(/^\*(.+)\*$/);
    if (asteriskMatch) {
      const inner = escapeHtml(asteriskMatch[1].trim());
      out.push(`<h3 class=\"text-lg font-semibold text-primary mb-2\">${inner}</h3>`);
      continue;
    }

    // Known short headers (case-insensitive)
    const lower = trimmed.toLowerCase();
    if (KNOWN_HEADERS.has(lower)) {
      out.push(`<h4 class=\"text-md font-semibold text-primary mt-4 mb-2\">${escapeHtml(trimmed)}</h4>`);
      continue;
    }

    // Otherwise, convert single newlines to <br/> and wrap in <p>
    const withBreaks = escapeHtml(trimmed).replace(/\n/g, "<br/>");
    out.push(`<p class=\"text-secondary leading-relaxed text-[15px] mb-3\">${withBreaks}</p>`);
  }

  return out.join("\n");
}
