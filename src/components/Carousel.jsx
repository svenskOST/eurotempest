import { Splide } from '@splidejs/react-splide'
import CarouselItem from './ui/CarouselItem'
import '@splidejs/react-splide/css'
import data from '../data.json'

const items = data.carouselItems

export default function Carousel() {
  return (
    <div className='bg-light-300 flex h-screen items-center justify-center'>
      <Splide aria-label='My Favorite Images' className='w-1/2' options={{ type: 'loop', drag: 'free', snap: true, perPage: 3 }}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </Splide>
    </div>
  )
}
