import { SplideSlide } from '@splidejs/react-splide'

export default function CarouselCard({ icon: Icon, title, description, button }) {
  return (
    <SplideSlide>
      <div className='flex flex-col items-center h-full p-6 my-10 text-center bg-white rounded-lg'>
        <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50 text-primary-600'>
          {<Icon className='w-8 h-8' />}
        </div>
        <h3 className='mb-2 text-xl font-semibold text-dark-800'>{title}</h3>
        <p className='flex-grow text-dark-600'>{description}</p>
        {button}
      </div>
    </SplideSlide>
  )
}
