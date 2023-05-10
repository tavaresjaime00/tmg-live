export const metadata = {
  title: 'The Monocle Group',
  description: 'Discover the Uncommon: We\'ll find your next collectable',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
    <br />
      <Hero />
      {/* <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
