import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Features from '../components/Features'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Carousel />
      <Features />
    </div>
  )
}
