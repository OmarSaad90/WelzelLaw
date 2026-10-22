import type { StaticImageData } from 'next/image'

import imgWhatIs    from '../assets/images/insights/WhatIs.png'
import imgDoINeed   from '../assets/images/insights/DoINeed.png'
import imgContracts from '../assets/images/insights/WhatContracts.png'
import imgCorpGov   from '../assets/images/insights/CorporateGovernance.jpg'
import imgShouldI   from '../assets/images/insights/ShouldI.png'
import imgFedProv   from '../assets/images/insights/WhatIsTheDiff.png'
import imgConvert   from '../assets/images/insights/CanIConvert.png'
import imgHST       from '../assets/images/insights/WhenDoINeed.png'
import imgIncorProt from '../assets/images/insights/HowDoesIncor.jpg'
import imgEmployee  from '../assets/images/insights/WhatAreMy.png'
import imgClosing   from '../assets/images/insights/WhatAreClosingCosts.png'
import imgLandTax   from '../assets/images/insights/HowMuchisLand.png'
import imgTitle     from '../assets/images/insights/DoINeedTitleInsurance.png'
import imgNonCan    from '../assets/images/insights/CanNonCanadians.png'
import imgDeposit   from '../assets/images/insights/WhatHappens.jpg'

export interface ArticleMeta {
  slug: string
  title: string
  category: string
  img: StaticImageData
}

// Display metadata for each article (title as shown on the page, category tag,
// hero image). Body content lives in ./articles.ts; SEO copy in ./seo.ts.
export const ARTICLES_META: ArticleMeta[] = [
  { slug: 'what-is-a-fractional-general-counsel',          title: 'What is a Fractional General Counsel?',                                         category: 'Fractional GC',  img: imgWhatIs    },
  { slug: 'do-i-need-a-general-counsel',                   title: 'Do I Need a General Counsel? 7 Signs Your SMB Has Outgrown Ad-Hoc Legal',        category: 'Fractional GC',  img: imgDoINeed   },
  { slug: 'contracts-every-canadian-smb-should-have',      title: 'What Contracts Every Canadian SMB Should Have in Place',                          category: 'Business Law',   img: imgContracts },
  { slug: 'corporate-governance-basics-canadian-businesses',title: 'Corporate Governance Basics for Growing Canadian Businesses',                    category: 'Business Law',   img: imgCorpGov   },
  { slug: 'incorporate-or-sole-proprietorship-ontario',    title: 'Should I Incorporate or Register as a Sole Proprietorship in Ontario?',           category: 'Incorporation',  img: imgShouldI   },
  { slug: 'federal-vs-provincial-incorporation-ontario',   title: 'What is the Difference Between Federal and Provincial Incorporation in Ontario?', category: 'Incorporation',  img: imgFedProv   },
  { slug: 'convert-sole-proprietorship-to-corporation-ontario', title: 'Can I Convert My Sole Proprietorship to a Corporation Later?',              category: 'Incorporation',  img: imgConvert   },
  { slug: 'when-to-register-for-hst-ontario',             title: 'When Do I Need to Register for HST in Ontario?',                                  category: 'Incorporation',  img: imgHST       },
  { slug: 'how-incorporation-protects-personal-assets',    title: 'How Does Incorporation Protect My Personal Assets?',                              category: 'Incorporation',  img: imgIncorProt },
  { slug: 'obligations-hiring-first-employee-ontario',     title: 'What Are My Obligations When Hiring My First Employee in Ontario?',               category: 'Business Law',   img: imgEmployee  },
  { slug: 'closing-costs-ontario',                         title: 'What Are Closing Costs in Ontario and Who Pays Them?',                            category: 'Real Estate',    img: imgClosing   },
  { slug: 'land-transfer-tax-ontario',                     title: 'How Much Is Land Transfer Tax in Ontario?',                                       category: 'Real Estate',    img: imgLandTax   },
  { slug: 'title-insurance-ontario',                       title: 'Do I Need Title Insurance in Ontario?',                                           category: 'Real Estate',    img: imgTitle     },
  { slug: 'non-canadians-buying-property-ontario',         title: 'Can Non-Canadians Buy Property in Ontario?',                                      category: 'Real Estate',    img: imgNonCan    },
  { slug: 'deposit-deal-falls-through-ontario',            title: 'What Happens to My Deposit if the Deal Falls Through?',                           category: 'Real Estate',    img: imgDeposit   },
]
