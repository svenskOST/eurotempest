import Hero from '../components/Hero'
import Carousel from '../components/ui/Carousel'
import CarouselItem from '../components/ui/CarouselItem'
import { FiLayers, FiCode, FiShield, FiGlobe, FiCpu, FiDatabase } from 'react-icons/fi'

const carouselItems = [
  {
    id: 1,
    icon: FiLayers,
    title: 'Modern Stack',
    description: 'Built with the latest technologies for optimal performance and developer experience.',
  },
  {
    id: 2,
    icon: FiCode,
    title: 'Clean Code',
    description: 'Well-structured and maintainable code following best practices and patterns.',
  },
  {
    id: 3,
    icon: FiShield,
    title: 'Secure',
    description: 'Industry-standard security practices to keep your data safe and protected.',
  },
  {
    id: 4,
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Optimized for performance across all devices and locations worldwide.',
  },
  {
    id: 5,
    icon: FiCpu,
    title: 'High Performance',
    description: 'Lightning-fast load times and smooth interactions for the best user experience.',
  },
  {
    id: 6,
    icon: FiDatabase,
    title: 'Scalable',
    description: 'Designed to grow with your needs, handling increased load with ease.',
  },
]

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-dark-800 mb-12 text-center text-3xl font-bold md:text-4xl'>Our Features</h2>
          <Carousel>
            {carouselItems.map(item => (
              <CarouselItem key={item.id} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}
