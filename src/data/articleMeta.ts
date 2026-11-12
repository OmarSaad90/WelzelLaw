import type { StaticImageData } from 'next/image'

import imgWhatIs    from '../assets/images/insights/WhatIs.png'
import imgDoINeed   from '../assets/images/insights/DoINeed.png'
import imgContracts from '../assets/images/insights/WhatContracts.png'
import imgCorpGov   from '../assets/images/insights/CorporateGovernance.jpg'
import imgShouldI   from '../assets/images/insights/SoleProprietor.jpg'
import imgFedProv   from '../assets/images/insights/ArticlesOfIncorporation.jpg'
import imgConvert   from '../assets/images/insights/CanIConvert.png'
import imgHST       from '../assets/images/insights/WhenDoINeed.png'
import imgIncorProt from '../assets/images/insights/HowDoesIncor.jpg'
import imgEmployee  from '../assets/images/insights/WhatAreMy.png'
import imgClosing   from '../assets/images/insights/WhatAreClosingCosts.png'
import imgLandTax   from '../assets/images/insights/HowMuchisLand.png'
import imgTitle     from '../assets/images/insights/DoINeedTitleInsurance.png'
import imgNonCan    from '../assets/images/insights/CanNonCanadians.png'
import imgDeposit   from '../assets/images/insights/WhatHappens.jpg'
import imgMedDevice from '../assets/images/insights/MedicalDevice.jpg'
import imgHospital  from '../assets/images/insights/HospitalSupplies.jpg'
import imgHealthPrivacy from '../assets/images/insights/HealthPrivacy.jpg'

export interface ArticleMeta {
  slug: string
  title: string
  category: string
  img: StaticImageData
  /** One-line teaser shown on Insights cards. */
  excerpt: string
}

// Display metadata for each article (title as shown on the page, category tag,
// hero image, card excerpt). Order here is the order on the Insights page.
// Body content lives in ./articles.ts; SEO copy in ./seo.ts.
export const ARTICLES_META: ArticleMeta[] = [
  { slug: 'what-is-a-fractional-general-counsel',          title: 'What is a Fractional General Counsel?',                                         category: 'Fractional GC',  img: imgWhatIs, excerpt: 'An experienced lawyer embedded in your business part-time, delivering executive-level legal strategy at a fraction of the cost of a full-time hire.' },
  { slug: 'do-i-need-a-general-counsel',                   title: 'Do I Need a General Counsel? 7 Signs Your SMB Has Outgrown Ad-Hoc Legal',        category: 'Fractional GC',  img: imgDoINeed, excerpt: 'As your business grows, reactive legal support stops being enough. Here are seven clear signals it is time to bring on a General Counsel.' },
  { slug: 'contracts-every-canadian-smb-should-have',      title: 'What Contracts Every Canadian SMB Should Have in Place',                          category: 'Business Law',   img: imgContracts, excerpt: 'From employment agreements to NDAs, these are the contracts that protect your business relationships and keep your operations audit-ready.' },
  { slug: 'corporate-governance-basics-canadian-businesses',title: 'Corporate Governance Basics for Growing Canadian Businesses',                    category: 'Business Law',   img: imgCorpGov, excerpt: 'Clear roles, board oversight, and documented policies are not just for public companies. Here is how to build governance into your growing business.' },
  { slug: 'incorporate-or-sole-proprietorship-ontario',    title: 'Should I Incorporate or Register as a Sole Proprietorship in Ontario?',           category: 'Incorporation',  img: imgShouldI, excerpt: 'Your business structure affects your liability, taxes, and growth potential. Here is how to choose the right one for where you are today.' },
  { slug: 'federal-vs-provincial-incorporation-ontario',   title: 'What is the Difference Between Federal and Provincial Incorporation in Ontario?', category: 'Incorporation',  img: imgFedProv, excerpt: 'Federal and provincial incorporation offer different name protections and compliance requirements. Here is which one fits your plans.' },
  { slug: 'convert-sole-proprietorship-to-corporation-ontario', title: 'Can I Convert My Sole Proprietorship to a Corporation Later?',              category: 'Incorporation',  img: imgConvert, excerpt: 'Yes. With the right planning, the transition is smooth and can unlock tax savings and limited liability protection for your personal assets.' },
  { slug: 'when-to-register-for-hst-ontario',             title: 'When Do I Need to Register for HST in Ontario?',                                  category: 'Incorporation',  img: imgHST, excerpt: 'Once your revenues pass $30,000, HST registration is mandatory. Here is what to know before that threshold arrives.' },
  { slug: 'how-incorporation-protects-personal-assets',    title: 'How Does Incorporation Protect My Personal Assets?',                              category: 'Incorporation',  img: imgIncorProt, excerpt: 'Incorporation creates a legal shield between your personal wealth and your business obligations. Here is exactly how that protection works.' },
  { slug: 'obligations-hiring-first-employee-ontario',     title: 'What Are My Obligations When Hiring My First Employee in Ontario?',               category: 'Business Law',   img: imgEmployee, excerpt: 'From payroll registration to the Employment Standards Act, here is everything Ontario employers need to handle before day one.' },
  { slug: 'entering-canadian-medical-device-market',       title: 'Entering the Canadian Medical Device Market: Structure, Licensing, and Risk Allocation', category: 'Healthcare', img: imgMedDevice, excerpt: 'Subsidiary, distributor, or agent? The entry structure you choose decides who holds the licences, who carries the liability, and how much control you keep.' },
  { slug: 'how-medical-devices-are-sold-in-canada',        title: 'How Medical Devices and Supplies are Sold in Canada',                            category: 'Healthcare',     img: imgHospital, excerpt: 'Provincial tenders, group purchasing organizations, and regional priorities shape how hospitals buy. Here is where suppliers should focus first.' },
  { slug: 'personal-health-information-privacy-law-canada', title: 'Personal Health Information and Privacy Law in Canada',                      category: 'Healthcare',     img: imgHealthPrivacy, excerpt: 'Federal and provincial privacy laws can apply at the same time. Here is which regimes reach medical device companies and what they require.' },
  { slug: 'closing-costs-ontario',                       title: 'What Are Closing Costs in Ontario and Who Pays Them?',                            category: 'Real Estate',    img: imgClosing, excerpt: 'Closing costs go well beyond the purchase price. Here is a clear breakdown of who pays what in every Ontario real estate transaction.' },
  { slug: 'land-transfer-tax-ontario',                     title: 'How Much Is Land Transfer Tax in Ontario?',                                       category: 'Real Estate',    img: imgLandTax, excerpt: 'Land transfer tax is calculated on a sliding scale and is typically the largest single closing cost. Toronto buyers pay both provincial and municipal tax.' },
  { slug: 'title-insurance-ontario',                       title: 'Do I Need Title Insurance in Ontario?',                                           category: 'Real Estate',    img: imgTitle, excerpt: 'Not legally required, but almost always recommended. Here is what title insurance covers and why most lenders insist on it.' },
  { slug: 'non-canadians-buying-property-ontario',         title: 'Can Non-Canadians Buy Property in Ontario?',                                      category: 'Real Estate',    img: imgNonCan, excerpt: 'Foreign buyers face significant restrictions, a 25% speculation tax, and stricter financing requirements. Here is what you need to know.' },
  { slug: 'deposit-deal-falls-through-ontario',            title: 'What Happens to My Deposit if the Deal Falls Through?',                           category: 'Real Estate',    img: imgDeposit, excerpt: 'Whether you walk away or the seller defaults, the outcome depends on your conditions and the specific terms of your agreement.' },
]
