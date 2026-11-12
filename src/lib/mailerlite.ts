// ─── MailerLite newsletter sign-up ───────────────────────────────────────────
// Every "Subscribe" box on the site posts to one MailerLite embedded form
// ("Website subscribe", in the Key Step Legal account). That form adds the
// person to the "Website subscribers" group and sends a double opt-in email,
// so nobody is subscribed until they click the confirmation link.
//
// The endpoint and field names come from the form's "HTML code" embed. If the
// form is recreated in MailerLite, its id below changes.
//
// The endpoint allows cross-origin POSTs (access-control-allow-origin: *) and
// answers HTTP 200 even when it rejects a submission, with
// {"success": false, "errors": ...}. So success is read from the body, never
// from the status code alone.

const SUBSCRIBE_URL = 'https://assets.mailerlite.com/jsonp/2790218/forms/203954543606629638/subscribe'

export interface NewsletterSignup {
  name: string
  email: string
  /** Optional on the site; sent as an empty string when left blank. */
  phone: string
}

interface MailerLiteResponse {
  success: boolean
  errors?: unknown
}

/**
 * Submit one newsletter sign-up to MailerLite.
 *
 * Throws on a network failure, a non-2xx response, or a body that does not
 * report success, so callers show an error instead of a false "you're on the list".
 */
export async function subscribeToNewsletter(signup: NewsletterSignup): Promise<void> {
  const body = new URLSearchParams({
    'fields[name]': signup.name,
    'fields[email]': signup.email,
    'fields[phone]': signup.phone,
    'ml-submit': '1',
    anticsrf: 'true',
  })

  const res = await fetch(SUBSCRIBE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: body.toString(),
  })
  if (!res.ok) {
    throw new Error(`MailerLite subscribe failed with HTTP ${res.status}`)
  }

  const data = (await res.json()) as MailerLiteResponse
  if (data.success !== true) {
    throw new Error(`MailerLite rejected the sign-up: ${JSON.stringify(data.errors ?? data)}`)
  }
}
