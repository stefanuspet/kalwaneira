import type { Metadata } from 'next'
import BrandHero from '@/components/sections/BrandHero'
import Catalogue from '@/components/sections/Catalogue'
import { zanetuno } from '@/data/brands'

export const metadata: Metadata = {
  title: 'Zanetuno — Premium Indonesian Seafood',
  description: 'Zanetuno sources premium frozen seafood — yellowfin tuna, vannamei shrimp, squid and more — from trusted fisheries across the Indonesian archipelago.',
}

export default function ZanetunoPage() {
  return (
    <>
      <BrandHero brand={zanetuno} />
      <Catalogue brand="zanetuno" />
    </>
  )
}
