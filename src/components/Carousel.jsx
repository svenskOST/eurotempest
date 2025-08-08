import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import CarouselItem from './ui/CarouselItem'
import { FiLayers, FiCode, FiShield, FiGlobe, FiCpu, FiDatabase } from 'react-icons/fi'

const data = [
  {
    icon: FiLayers,
    title: 'Modern Stack',
    description: 'Built with the latest technologies for optimal performance and developer experience.',
  },
  {
    icon: FiCode,
    title: 'Clean Code',
    description: 'Well-structured and maintainable code following best practices and patterns.',
  },
  {
    icon: FiShield,
    title: 'Secure',
    description: 'Industry-standard security practices to keep your data safe and protected.',
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Optimized for performance across all devices and locations worldwide.',
  },
  {
    icon: FiCpu,
    title: 'High Performance',
    description: 'Lightning-fast load times and smooth interactions for the best user experience.',
  },
  {
    icon: FiDatabase,
    title: 'Scalable',
    description: 'Designed to grow with your needs, handling increased load with ease.',
  },
]

const options = {
  type: 'loop',
  perPage: 2.5,
  perMove: 1,
  gap: '2rem',
  padding: { left: '5%', right: '5%' },
  focus: 'center',
  updateOnMove: true,
  pagination: false,
  arrows: false,
  drag: 'free',
  snap: true,
  breakpoints: {
    1024: {
      perPage: 2,
      padding: { left: '10%', right: '10%' },
    },
    768: {
      perPage: 1.5,
      padding: { left: '15%', right: '15%' },
    },
    640: {
      perPage: 1,
      padding: { left: '10%', right: '10%' },
    },
  },
}

export default function Carousel() {
  return (
    <div className='bg-light-300 flex h-screen items-center justify-center'>
      <Splide aria-label='My Favorite Images' hasTrack={false} className='w-1/2' options={options}>
        <SplideTrack>
          {data.map((card, index) => (
            <CarouselItem key={index} icon={card.icon} title={card.title} description={card.description} />
          ))}
        </SplideTrack>
      </Splide>
    </div>
  )
}
