import type { Metadata } from 'next'
import { LegalPageLayout, LegalParagraph } from '@/components/ikr/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Cookiebeleid — IKnowRight',
  description: 'Welke cookies IKnowRight gebruikt op iknowright.be.',
}

export default function CookiesPage() {
  return (
    <LegalPageLayout title="Cookiebeleid">
      <LegalParagraph>
        Onze website gebruikt weinig cookies. We plaatsen geen advertentie- of trackingcookies van
        derden voor marketingdoeleinden.
      </LegalParagraph>
      <LegalParagraph>
        <strong>Functioneel:</strong> Cloudflare Turnstile kan een cookie plaatsen om spam op onze
        contact- en pricingformulieren te voorkomen. Dit is nodig om het formulier te laten werken.
      </LegalParagraph>
      <LegalParagraph>
        <strong>Analytisch:</strong> na deploy op Vercel kunnen we anonieme gebruiksstatistieken
        verzamelen via Vercel Analytics (geen individuele profilering). Als dat actief is, vermelden
        we het hier.
      </LegalParagraph>
      <LegalParagraph>
        Je kan cookies verwijderen via je browserinstellingen. Sommige formulieren werken dan
        mogelijk niet correct tot je Turnstile opnieuw accepteert.
      </LegalParagraph>
    </LegalPageLayout>
  )
}
