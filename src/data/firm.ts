// ─── Firm identity & contact details ─────────────────────────────────────────
// Single source of truth for anything that identifies the firm. Name, address,
// phone, booking link and socials change together (e.g. the Welzel Law →
// Key Step Legal rebrand), so they live here rather than in each component.

export const FIRM = {
  /** Short form, used everywhere the firm is named in copy. */
  name: 'Key Step Legal',
  /** Complete legal name: footer copyright and the opening of the legal pages only. */
  legalName: 'Key Step Legal Professional Corporation',
  domain: 'Keysteplegal.ca',

  email: 'info@keysteplegal.ca',
  phoneDisplay: '(226) 218-5943',
  phoneE164: '+12262185943',

  address: {
    street: '72 Victoria St. South, Suite 300',
    city: 'Kitchener',
    region: 'ON',
    postalCode: 'N2G 4Y9',
    country: 'CA',
  },

  calendlyUrl: 'https://calendly.com/fernandawelzel-keysteplegal',

  social: {
    linkedin: 'https://www.linkedin.com/company/key-step-legal-professional-corporation',
    instagram: 'https://www.instagram.com/keysteplegal/',
  },
} as const

/** "72 Victoria St. South, Suite 300, Kitchener, ON N2G 4Y9" */
export const FIRM_ADDRESS_ONE_LINE =
  `${FIRM.address.street}, ${FIRM.address.city}, ${FIRM.address.region} ${FIRM.address.postalCode}`

/** Query string for Google Maps links/embeds. */
export const FIRM_MAPS_QUERY = encodeURIComponent(`${FIRM_ADDRESS_ONE_LINE}, Canada`)
