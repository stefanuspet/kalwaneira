import type { Metadata } from 'next'
import BrandHero from '@/components/sections/BrandHero'
import Catalogue from '@/components/sections/Catalogue'
import { nusateraso } from '@/data/brands'

export const metadata: Metadata = {
  title: 'Nusateraso — Indonesian Agriculture & Spices',
  description: 'Nusateraso curates vanilla beans, single-origin coffee, and essential spices from selected Indonesian farming regions — graded for the world\'s finest buyers.',
}

export default function NusaterasoPage() {
  return (
    <>
      <BrandHero brand={nusateraso} />
      <Catalogue brand="nusateraso" />
    </>
  )
}
