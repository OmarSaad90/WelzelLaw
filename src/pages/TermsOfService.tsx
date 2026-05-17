import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'
import { PAGE_SEO } from '../data/seo'
import Footer from '../components/Footer'
import InnerPageHero from '../components/InnerPageHero'
import termsHero from '../assets/images/legal/terms-hero.jpg'

const ease = [0.16, 1, 0.3, 1] as const

interface TermsSection {
  num: string
  title: string
  body: ReactNode
}

const SECTIONS: TermsSection[] = [
  {
    num: '01',
    title: 'Agreement to Terms',
    body: 'This website, located at Welzellaw.com (the "Website"), is owned and operated by Welzel Law Professional Corporation ("the Firm"). The Website offers various resources to the public, including articles, publications, data, and other materials (collectively, "Materials"). Accessing this Website constitutes your acceptance of these terms of use ("Terms"). If you disagree with these Terms, you must refrain from using the Website. The Firm reserves the right to update these Terms at any time without prior notice; continued use of the Website following any updates indicates your acceptance of the modified Terms.',
  },
  {
    num: '02',
    title: 'Informational Purposes Only',
    body: "Nothing contained in the Materials should be interpreted as legal advice. All Materials are provided solely for general informational purposes and reflect information available at the time of their original publication. The Materials may not be accurate, up-to-date, or suitable for any specific situation. Users should not act or refrain from acting based on anything found on this Website. If you have legal concerns, always consult a qualified legal professional without delay. The Firm's lawyers are available to address any specific legal questions you may have.",
  },
  {
    num: '03',
    title: 'Communications Are Not Confidential',
    body: 'The Firm does not ensure the confidentiality of any messages or communications transmitted through this Website, whether by email or otherwise, and cannot confirm that such communications are protected by solicitor-client privilege. For sensitive or confidential matters, please reach out to the relevant Firm member directly by phone.',
  },
  {
    num: '04',
    title: 'No Attorney-Client Relationship',
    body: "Neither your use of this Website nor your reliance on the Materials establishes a lawyer-client relationship with the Firm or any of its professionals. While you may communicate with the Firm's professionals through email or other means via the Website, such communications do not give rise to a lawyer-client relationship. Please be aware that internet communications are generally not secure, and the Firm cannot guarantee the security or privacy of any messages sent or received.",
  },
  {
    num: '05',
    title: 'Privacy',
    body: (
      <>
        Any personal information you submit through this Website will be handled in accordance with the Firm's{' '}
        <a
          href="/privacy-policy"
          style={{
            color: 'var(--color-primary)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--color-teal-300)',
            textUnderlineOffset: '3px',
          }}
        >
          Privacy Policy
        </a>
        , which outlines how your information is collected, used, and disclosed. The Privacy Policy may be updated periodically, and you are encouraged to review it regularly. By submitting personal information, you consent to its use as described in the Privacy Policy. Note that the Privacy Policy applies only while you are using this Website; once you navigate to another site, that site's own privacy policy will govern.
      </>
    ),
  },
  {
    num: '06',
    title: 'Permitted Use and Limited Licence',
    body: "You agree to use the Website and its Materials only for your own personal, non-commercial purposes. Any unlawful use of the Website is strictly prohibited. Under these Terms, you are granted a limited, non-exclusive, and non-transferable licence to access and view the Website for personal use only. You may download or print individual items from the Materials for personal, non-commercial purposes, provided all copyright and proprietary notices remain intact.",
  },
  {
    num: '07',
    title: 'Intellectual Property Rights',
    body: "All Materials on this Website — including but not limited to text, graphics, images, videos, software, logos, trademarks, and other visual elements — are the property of the Firm, its licensors, or the credited content providers, and are protected under copyright, trademark, and other applicable intellectual property laws. Other than the limited licence described below, any reproduction, distribution, modification, or other use of the Materials, in whole or in part, is strictly prohibited without the Firm's prior written consent.",
  },
  {
    num: '08',
    title: 'Internet Security',
    body: 'Information transmitted over the internet is generally not secure. The Firm cannot guarantee the security of any data sent to or from this Website and assumes no responsibility for risks associated with your use of the internet.',
  },
  {
    num: '09',
    title: 'Third-Party Links',
    body: 'This Website may contain links to external websites for your convenience only. These links do not represent an endorsement by the Firm of any third-party content. The Firm makes no guarantees regarding the accuracy, reliability, security, or suitability of any external websites, and accepts no responsibility for their content. Accessing any linked third-party website is done entirely at your own risk.',
  },
  {
    num: '10',
    title: 'Termination',
    body: 'The Firm may, at its sole discretion, suspend or terminate your access to the Website or any portion thereof at any time, without notice or liability. Upon termination, your authorization to access the affected parts of the Website ceases immediately. All applicable restrictions under these Terms will continue to apply following termination.',
  },
  {
    num: '11',
    title: 'Disclaimer and Liability Limitations',
    body: (
      <>
        <p style={{ margin: '0 0 var(--space-4)', lineHeight: 1.78 }}>
          The Website and its Materials are provided on an "as is" and "as available" basis, with no warranties of any kind, express or implied. The Firm expressly disclaims all warranties, including those relating to accuracy, security, reliability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law. The Firm makes no guarantee that the Website is free from viruses or other harmful elements. YOUR USE OF THIS WEBSITE AND ITS MATERIALS IS ENTIRELY AT YOUR OWN RISK.
        </p>
        <p style={{ margin: 0, lineHeight: 1.78 }}>
          To the extent permitted by law, the Firm and its partners, employees, agents, consultants, and licensors shall not be liable for any damages of any kind (including direct, indirect, incidental, punitive, or consequential damages) arising from your use of, inability to use, or reliance on this Website or its Materials, regardless of the legal basis for such a claim. This applies even if the Firm was aware of the possibility of such damages.
        </p>
      </>
    ),
  },
  {
    num: '12',
    title: 'Release and Indemnification',
    body: 'You agree to release the Firm and its related parties from all liability arising from your use of this Website, the Materials, or any breach of these Terms. Your sole recourse for any dissatisfaction or harm is to discontinue use of the Website. You also agree to indemnify and hold harmless the Firm and its related parties from any claims, damages, losses, costs, or legal fees arising from your use of the Website, the Materials, or your breach of these Terms, including any claims made by third parties.',
  },
  {
    num: '13',
    title: 'Copyright and Trademark',
    body: (
      <>
        Welzel Law Professional Corporation. All rights reserved. No part of this Website or its Materials may be reproduced, distributed, sold, or transmitted in any form without prior written permission from the Firm, except as permitted under these Terms. All reproduced Materials must include this copyright notice.
        <br /><br />
        To request permission to reproduce any part of this Website, please contact{' '}
        <a
          href="mailto:info@welzellaw.com"
          style={{
            color: 'var(--color-primary)',
            textDecoration: 'underline',
            textDecorationColor: 'var(--color-teal-300)',
            textUnderlineOffset: '3px',
          }}
        >
          info@welzellaw.com
        </a>
      </>
    ),
  },
  {
    num: '14',
    title: 'General Provisions',
    body: "These Terms, along with any applicable supplemental agreements, constitute the entire agreement between you and the Firm concerning your use of this Website and its Materials. Should any provision of these Terms be found invalid by a court, it will be removed while the remaining provisions continue in full effect. Your rights under these Terms are personal and may not be transferred or assigned. Any waiver of the Firm's rights must be in writing and signed. The Firm's failure to enforce any provision shall not be construed as a waiver. Section headings are for reference only and carry no legal weight.",
  },
  {
    num: '15',
    title: 'Governing Law',
    body: "This Website is operated from the Firm's office in Ontario, Canada. Your access to and use of the Website, as well as these Terms, are governed by the laws of the Province of Ontario and applicable federal laws of Canada, without regard to conflict of laws principles. You consent to the non-exclusive jurisdiction of Ontario courts for any disputes related to your use of this Website.",
  },
]

export default function TermsOfService() {
  return (
    <>
      <SEO {...PAGE_SEO.terms} />
      <Navbar />

      <main style={{ backgroundColor: 'var(--color-bg)' }}>

        <InnerPageHero
          image={termsHero}
          eyebrow="Welzel Law"
          title="Terms of Use"
          subtitle="Legal terms governing your use of this website."
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

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function SectionBlock({ section }: { section: TermsSection }) {
  return (
    <div>
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
      <div style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: 'var(--font-size-base)',
        lineHeight: 1.78,
        color: 'var(--color-neutral-700)',
      }}>
        {section.body}
      </div>
    </div>
  )
}
