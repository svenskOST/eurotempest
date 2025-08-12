import Image from 'next/image'
import { IoIosSend } from 'react-icons/io'
import { IoArrowForwardCircle } from 'react-icons/io5'
import TextType from './TextType'
import Button from './ui/Button'

const data = {
  image: { src: '/images/dark-keyboard.jpg', alt: 'Cybersecurity' },
  titles: ['How visible is your data?', 'TEMPEST-certified products', 'Secure solutions for government and defence'],
  description:
    'Our TEMPEST-certified products safeguard against electromagnetic eavesdropping, providing a vital defence in the ever-evolving landscape of cyber threats.',
  buttons: [
    {
      text: 'Explore Products',
      icon: IoArrowForwardCircle,
      href: '/products',
      type: 'primary',
    },
    {
      text: 'Contact Us',
      icon: IoIosSend,
      href: '/contact',
      type: 'secondary',
    },
  ],
}

export default function Hero() {
  return (
    <section className='flex justify-center min-h-screen lg:min-h-0 mb-30 md:mb-60'>
      <div className='absolute flex items-center justify-center w-full h-screen lg:relative lg:aspect-3/2 lg:h-fit xl:container xl:w-9/10 xl:items-end xl:justify-start xl:p-20'>
        <Image
          className='object-cover object-center shadow-[0_4px_6px_hsla(0,0%,0%,0.5)] lg:shadow-[0_6px_8px_hsla(0,0%,0%,0.5)] xl:rounded-b-4xl'
          fill
          src={data.image.src}
          alt={data.image.alt}
        />
        <div className='flex w-full translate-y-10 flex-col gap-10 px-2 md:w-[46rem] md:gap-5 md:px-0 lg:w-[55rem] lg:gap-7 xl:translate-y-0'>
          <div className='flex flex-col items-center xl:block'>
            <div className='sr-only' aria-hidden='true'>
              <h1>{data.titles[0]}</h1>
              <h1>{data.titles[1]}</h1>
              <h1>{data.titles[2]}</h1>
            </div>
            <TextType
              text={data.titles}
              typingSpeed={50}
              pauseDuration={3000}
              deletingSpeed={30}
              showCursor={true}
              cursorCharacter='|'
              textColors={['#e5e7eb']}
              className='mb-3 lg:text-700 text-500 sm:text-600 weight-700'
              cursorClassName='text-light-500 weight-500'
            />
            <p className='lg:text-300 text-light-300 text-300 text-center leading-relaxed lg:w-[46rem] xl:text-start'>
              {data.description}
            </p>
          </div>
          <div className='flex flex-wrap items-center justify-center w-full gap-4 md:gap-6 lg:gap-8 xl:justify-start'>
            {data.buttons.map((btn, index) => (
              <Button key={index} href={btn.href} type={btn.type}>
                {btn.text}
                {<btn.icon className='size-6 lg:size-8' />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
