import { Metadata } from 'next'
import { FeaturedWorksSection, HeroSection, RecentPostsSection } from '@/app/(main-layout)/_components'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage of the personal portfolio',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </main>
  )
}
