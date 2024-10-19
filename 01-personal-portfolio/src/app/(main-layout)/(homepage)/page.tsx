import { Header } from '@/components/shared/header'
import { Footer } from '@/components/shared/footer'
import { FeaturedWorksSection, HeroSection, RecentPostsSection } from '@/app/(main-layout)/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RecentPostsSection />
        <FeaturedWorksSection />
      </main>
      <Footer />
    </>
  )
}
