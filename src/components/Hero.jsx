import TextType from '../components/TextType'
import Button from './ui/Button'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { IoIosSend } from 'react-icons/io'
import { hero } from '../data/home.json'

const icons = [<IoArrowForwardCircle className='size-6 lg:size-8' />, <IoIosSend className='size-6 lg:size-8' />]

export default function Hero() {
  return (
    <section className='bg-light-300 flex min-h-screen justify-center lg:min-h-0'>
      <div className='raised-500 lg:raised-700 absolute flex h-screen w-full items-end justify-center bg-[url(/images/dark-keyboard.jpg)] bg-cover bg-center pb-50 md:pb-30 lg:relative lg:aspect-2/1 lg:h-fit xl:container xl:w-9/10 xl:justify-start xl:rounded-b-4xl xl:p-20'>
        <div className='flex w-full flex-col gap-10 px-2 md:w-[46rem] md:gap-5 md:px-0 lg:w-[55rem] lg:gap-7'>
          <div className='flex flex-col items-center xl:block'>
            <div className='sr-only' aria-hidden='true'>
              <h1>{hero.titles[0]}</h1>
              <h1>{hero.titles[1]}</h1>
              <h1>{hero.titles[2]}</h1>
            </div>
            <TextType
              text={hero.titles}
              typingSpeed={50}
              pauseDuration={3000}
              deletingSpeed={30}
              showCursor={true}
              cursorCharacter='|'
              textColors={['#e5e7eb']}
              className='lg:text-700 text-500 sm:text-600 weight-700 mb-3'
              cursorClassName='text-light-500 weight-500'
            />
            <p className='lg:text-300 text-light-400 text-300 text-center leading-relaxed lg:w-[46rem] xl:text-start'>{hero.description}</p>
          </div>
          <div className='flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:justify-start'>
            {hero.buttons.map((btn, index) => (
              <Button key={index} href={btn.href} type={btn.type}>
                {btn.text}
                {icons[index]}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
