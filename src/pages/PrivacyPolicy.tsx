import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'
import privacyHero from '../assets/images/legal/privacy-hero.png'

const ease = [0.16, 1, 0.3, 1] as const

interface PolicySection {
  num: string
  title: string
  body?: string
  bullets?: string[]
  afterBullets?: string
}

const SECTIONS: PolicySection[] = [
  {
    num: '01',
    title: 'Commitment to Privacy',
    body: 'At Welzel Law Professional Corporation ("Welzel Law", "we", "us", "our", or "the Firm"), we prioritize the protection, confidentiality, and accuracy of your personal data. Our role as legal professionals requires us to treat all details received during the lawyer-client relationship as strictly confidential. This Privacy Policy describes our approach to handling your personal information, ensuring compliance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and the other privacy laws.',
  },
  {
    num: '02',
    title: 'Your Privacy Rights',
    body: 'PIPEDA requires all Canadian organizations conducting business activities, including law firms like Welzel Law, to adhere to its standards. It grants you the right to be informed about the collection, usage, and sharing of your personal data. We are dedicated to upholding these obligations.',
  },
  {
    num: '03',
    title: 'What Is Personal Information?',
    body: 'Personal Information means details that can identify an individual, such as your home address, contact numbers, personal email, billing or account records, specifics of your legal case, or data about third parties related to your legal matter. Information that is publicly accessible or considered business contact information under PIPEDA does not fall under this definition.',
  },
  {
    num: '04',
    title: 'Collection of Personal Information',
    body: 'We gather personal information in a reasonable, lawful, and fair manner, never in a way that is excessively intrusive. Typically, this information comes straight from you, either at the beginning or throughout our representation. However, there are occasions when we obtain details from additional sources, such as:',
    bullets: [
      'Government agencies and registries',
      'Insurance companies',
      'Financial institutions',
      'Employers (when acting at their request)',
      'Accountants or other professionals',
    ],
  },
  {
    num: '05',
    title: 'Use of Personal Information',
    body: 'We utilize your personal information for the following purposes:',
    bullets: [
      'Delivering legal counsel and services',
      'Meeting our legal and professional responsibilities',
      'Handling accounting and billing matters',
      'Maintaining internal records and performing conflict checks',
      'Communicating with clients and conducting marketing activities (unless you withdraw consent)',
    ],
    afterBullets: 'We never share your information with third parties for marketing reasons.',
  },
  {
    num: '06',
    title: 'Consent',
    body: 'Your approval is necessary for us to collect, use, or share your personal data. Consent can be given verbally, in writing, or can be inferred from your interactions with us. You have the right to revoke your consent at any time, except where legal or contractual limitations apply.',
  },
  {
    num: '07',
    title: 'Disclosure of Personal Information',
    body: 'We may disclose your personal data in specific situations, including:',
    bullets: [
      'When the law requires or permits it (such as court orders or subpoenas)',
      'With your explicit permission',
      'When disclosure is necessary for providing legal services (to third parties like government agencies, opposing lawyers, or financial institutions)',
      'To recover fees or enforce agreements',
      'To service providers who are contractually bound to protect your privacy',
      'To consultants or expert witnesses acting for you',
      'When other law firms are retained on your behalf in other jurisdictions',
      'If the information is already available to the public, as outlined by PIPEDA',
    ],
    afterBullets: 'Should we involve third-party organizations to process your data (for example, IT support, file storage, or administrative services), we will ensure these parties are legally obligated to safeguard your privacy in line with our Policy.',
  },
  {
    num: '08',
    title: 'Accuracy of Personal Information',
    body: 'To maintain high standards in our legal services, we rely on the accuracy and currency of your personal details. Kindly notify us of any updates to your information during our engagement.',
  },
  {
    num: '09',
    title: 'Safeguards and Security',
    body: 'We implement a range of measures to safeguard your personal data against unauthorized access, loss, or misuse. Our security practices include:',
    bullets: [
      'Securing our physical premises',
      'Limiting access to files containing personal information',
      'Using encryption and secure network solutions',
      'Employing password protection for databases',
      'Providing staff with confidentiality training',
    ],
  },
  {
    num: '10',
    title: 'Access to Personal Information',
    body: 'You are entitled to access your personal information held by us. Basic information is available at no cost, but complex or detailed requests may incur standard professional and disbursement fees. Certain legal exceptions may prevent access, such as:',
    bullets: [
      'Information protected by solicitor-client privilege',
      'Situations where disclosure would reveal confidential commercial data that cannot be separated from your personal information',
      "Circumstances where another individual's safety could be at risk and redaction is not possible",
      'If the records were created as part of a formal dispute resolution',
    ],
    afterBullets: 'If your request to access or correct information is denied, we will provide an explanation. We do not use your Social Insurance Number to identify or organize your records.',
  },
  {
    num: '11',
    title: 'Correction of Information',
    body: 'Our firm is committed to maintaining accurate, complete and up-to-date personal information. If your information is inaccurate or incomplete, please contact us to make the necessary updates. We will make reasonable efforts to correct it.',
  },
  {
    num: '12',
    title: 'Anonymity and Identification Requirements',
    body: 'Where lawful and practical, we will allow anonymous access (e.g., accessing general information on our website). However, we are required by law (including under the Proceeds of Crime (Money Laundering) and Terrorist Financing Act) to confirm the identity of all new clients.',
  },
  {
    num: '13',
    title: 'Website Privacy',
    body: 'Our website contains links to other sites, which are not governed by this Privacy Policy. On our website, like most other commercial websites, we may monitor traffic patterns, site usage, and related site information in order to optimize our web service. We may provide aggregated information to third parties, but these statistics do not include any identifiable personal information.',
  },
  {
    num: '14',
    title: 'Email Communications',
    body: 'Please be aware that email is not a fully secure medium. If you prefer another method of communication for sensitive information, let us know.',
  },
  {
    num: '15',
    title: 'Employment Inquiries',
    body: 'If you apply for a position at Welzel Law, we may retain your personal information during and after the application process unless you request otherwise. If hired, this information will be managed under our employee privacy procedures.',
  },
  {
    num: '16',
    title: 'Policy Updates',
    body: 'We review our policies regularly. This Privacy Policy may be updated to reflect changes in law or practice. The most current version will always be available on our website.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO {...PAGE_SEO.privacy} />
      <Navbar />

      <main style={{ backgroundColor: 'var(--color-bg)' }}>

        <InnerPageHero
          image={privacyHero}
          eyebrow="Welzel Law"
          title="Privacy Policy"
          subtitle="Your privacy is our commitment."
        />

        {/* Content body */}
        <section style={{
          paddingTop: 'var(--space-24)',
          paddingBottom: 'var(--space-32)',
        }}>
          <div style={{
            maxWidth: 'var(--content-max-width)',
            margin: '0 auto',
            padding: '0 var(--section-padding-x)',
          }}>

            {/* Policy sections */}
            {SECTIONS.map((section) => (
              <motion.div
                key={section.num}
                className="policy-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.6, ease }}
              >
                {/* Number — left column */}
                <div className="policy-row-num" style={{
                  paddingTop: '0.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 'var(--space-2)',
                }}>
                  <span style={{
                    display: 'block',
                    width: '20px',
                    height: '1.5px',
                    backgroundColor: 'var(--color-accent)',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: 'var(--font-size-xs)',
                    letterSpacing: 'var(--letter-spacing-caps)',
                    color: 'var(--color-accent-text)',
                  }}>
                    {section.num}
                  </span>
                </div>

                {/* Content — right column */}
                <SectionBlock section={section} />
              </motion.div>
            ))}

            {/* Contact — special treatment */}
            <motion.div
              className="policy-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="policy-row-num" style={{
                paddingTop: '0.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 'var(--space-2)',
              }}>
                <span style={{
                  display: 'block',
                  width: '20px',
                  height: '1.5px',
                  backgroundColor: 'var(--color-accent)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'var(--font-size-xs)',
                  letterSpacing: 'var(--letter-spacing-caps)',
                  color: 'var(--color-accent-text)',
                }}>
                  17
                </span>
              </div>
              <ContactBlock />
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

/* ── Standard section block ─────────────────────────────── */

function SectionBlock({ section }: { section: PolicySection }) {
  return (
    <div>
      {/* Section title */}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--font-size-xl)',
        lineHeight: 1.2,
        letterSpacing: 'var(--letter-spacing-tight)',
        color: 'var(--color-primary)',
        margin: '0 0 var(--space-5)',
      }}>
        {section.title}
      </h2>

      {/* Body */}
      {section.body && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: 'var(--font-size-base)',
          lineHeight: 1.78,
          color: 'var(--color-neutral-700)',
          margin: '0 0 var(--space-4)',
        }}>
          {section.body}
        </p>
      )}

      {/* Bullet list */}
      {section.bullets && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
          marginBottom: section.afterBullets ? 'var(--space-5)' : 0,
          paddingLeft: 'var(--space-4)',
        }}>
          {section.bullets.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 'var(--space-4)',
              alignItems: 'flex-start',
            }}>
              <span style={{
                width: '5px',
                height: '5px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: 0,
                flexShrink: 0,
                marginTop: '0.58em',
                display: 'inline-block',
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--font-size-base)',
                lineHeight: 1.68,
                color: 'var(--color-neutral-700)',
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* After-bullets continuation */}
      {section.afterBullets && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 1.78,
          color: 'var(--color-neutral-700)',
          margin: 0,
        }}>
          {section.afterBullets}
        </p>
      )}
    </div>
  )
}

/* ── Contact block ─────────────────────────────────────── */

function ContactBlock() {
  return (
    <div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--font-size-xl)',
        lineHeight: 1.2,
        letterSpacing: 'var(--letter-spacing-tight)',
        color: 'var(--color-primary)',
        margin: '0 0 var(--space-6)',
      }}>
        Contact Us
      </h2>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        lineHeight: 1.78,
        color: 'var(--color-neutral-700)',
        marginBottom: 'var(--space-8)',
      }}>
        If you have questions or concerns about your personal information or this Policy, please contact our Privacy Officer directly.
      </p>

      {/* Privacy Officer */}
      <div style={{ marginBottom: 'var(--space-10)' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          letterSpacing: 'var(--letter-spacing-caps)',
          textTransform: 'uppercase',
          color: 'var(--color-text-subtle)',
          margin: '0 0 var(--space-3)',
        }}>
          Privacy Officer
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 1.85,
          color: 'var(--color-neutral-700)',
          margin: '0 0 var(--space-4)',
        }}>
          Welzel Law Professional Corporation<br />
          5063 North Service Rd., Suite 100<br />
          Burlington, ON L7L 5H6
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          <ContactLink href="mailto:info@welzellaw.ca" label="info@welzellaw.ca" />
          <ContactLink href="tel:+16479075459" label="(647) 907-5459" />
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        lineHeight: 1.78,
        color: 'var(--color-neutral-700)',
        marginBottom: 'var(--space-6)',
      }}>
        If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada:
      </p>

      {/* OPC */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 'var(--font-size-sm)',
          letterSpacing: 'var(--letter-spacing-caps)',
          textTransform: 'uppercase',
          color: 'var(--color-text-subtle)',
          margin: '0 0 var(--space-3)',
        }}>
          Office of the Privacy Commissioner of Canada
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 1.85,
          color: 'var(--color-neutral-700)',
          margin: '0 0 var(--space-4)',
        }}>
          30 Victoria Street<br />
          Gatineau, Quebec K1A 1H3
        </p>
        <a
          href="https://www.priv.gc.ca/en/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--color-primary)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--color-teal-300)',
            paddingBottom: '1px',
            transition: 'border-color var(--transition-fast)',
          }}
        >
          www.priv.gc.ca
        </a>
      </div>
    </div>
  )
}

/* ── Inline link ────────────────────────────────────────── */

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-primary)',
        textDecoration: 'none',
        borderBottom: '1px solid var(--color-teal-200)',
        paddingBottom: '1px',
        width: 'fit-content',
        transition: 'border-color var(--transition-fast)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--color-primary)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'var(--color-teal-200)')}
    >
      {label}
    </a>
  )
}
