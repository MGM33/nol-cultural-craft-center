import { HomeHero } from '@/components/home/hero'
import { HomeVision } from '@/components/home/vision'
import { HomeHighlights } from '@/components/home/highlights'
import { HomeExperience } from '@/components/home/experience'
import { HomeGalleryStrip } from '@/components/home/gallery-strip'
import { HomeCta } from '@/components/home/cta'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeVision />
      <HomeHighlights />
      <HomeExperience />
      <HomeGalleryStrip />
      <HomeCta />
    </main>
  )
}
