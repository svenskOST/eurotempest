export default function CarouselCard({ icon: Icon, title, description, button }) {
  return (
    <div className='flex w-full max-w-sm md:max-w-[26rem] px-8 flex-col items-center bg-light-200 text-dark-700 rounded-lg gap-8 py-16 shadow-lg hover:scale-105 hover:shadow-xl transition-[box-shadow,_scale] md:max-lg:h-[31rem]'>
      <div className=''>{<Icon className='text-800 size-14' />}</div>
      <h3 className='weight-600 text-500 text-center'>{title}</h3>
      <p className='text-300 flex-1'>{description}</p>
      <div className='md:w-4/5'>{button}</div>
    </div>
  )
}
