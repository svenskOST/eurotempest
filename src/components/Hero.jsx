import TextType from './TextType'
import Button from './ui/Button'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { IoIosSend } from 'react-icons/io'

const data = {
  titles: ['How visible is your data?', 'TEMPEST-certified products', 'Secure solutions for government and defense'],
  description:
    'Protect your information- and communication systems from unauthorized interception. Our TEMPEST-certified products ensure no emanations are leaked.',
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
    <section className='bg-light-300 flex min-h-screen justify-center lg:min-h-0'>
      <div className='raised-500 lg:raised-700 absolute flex h-screen w-full items-center justify-center bg-[url(/images/dark-keyboard.jpg)] bg-cover bg-center lg:relative lg:aspect-2/1 lg:h-fit xl:items-end xl:container xl:w-9/10 xl:justify-start xl:rounded-b-4xl xl:p-20'>
        <div className='flex w-full flex-col gap-10 px-2 md:w-[46rem] md:gap-5 md:px-0 lg:w-[55rem] lg:gap-7 translate-y-10 xl:translate-y-0'>
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
              className='lg:text-700 text-500 sm:text-600 weight-700 mb-3'
              cursorClassName='text-light-500 weight-500'
            />
            <p className='lg:text-300 text-light-400 text-300 text-center leading-relaxed lg:w-[46rem] xl:text-start'>{data.description}</p>
          </div>
          <div className='flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:justify-start'>
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
