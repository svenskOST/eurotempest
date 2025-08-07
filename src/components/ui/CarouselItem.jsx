import { SplideSlide } from '@splidejs/react-splide'

export default function CarouselItem({ icon: Icon, title, description }) {
  return (
    <SplideSlide>
      <div className='flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-lg'>
        <div className='bg-primary-50 text-primary-600 mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
          {Icon && <Icon className='h-8 w-8' />}
        </div>
        <h3 className='text-dark-800 mb-2 text-xl font-semibold'>{title}</h3>
        <p className='text-dark-600 flex-grow'>{description}</p>
      </div>
    </SplideSlide>
  )
}
