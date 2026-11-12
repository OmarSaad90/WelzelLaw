// ─── Netlify Forms submission ────────────────────────────────────────────────
// Netlify only detects forms by parsing static HTML at deploy time, and our
// forms are rendered by React. So each form is declared in
// public/__forms.html (form name + field names must match exactly), and the
// React forms POST here, via fetch, to that static file: a path Next.js does
// not handle, so the request reaches Netlify's form processor.
//
// Works only on a deployed Netlify site with form detection enabled, never
// under `next dev`. Where submissions are emailed is configured in the Netlify
// dashboard (Forms → Form notifications), not in code.

export type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

/** Name of the hidden honeypot field; Netlify silently drops submissions that fill it. */
export const HONEYPOT_FIELD = 'bot-field'

/**
 * Submit one form to Netlify Forms.
 *
 * Throws on a non-2xx response so callers show an error instead of a false
 * "Message Received".
 */
export async function submitNetlifyForm(formName: string, fields: Record<string, string>): Promise<void> {
  const body = new URLSearchParams({ 'form-name': formName, ...fields })
  const res = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  if (!res.ok) {
    throw new Error(`Netlify form "${formName}" submission failed with HTTP ${res.status}`)
  }
}
