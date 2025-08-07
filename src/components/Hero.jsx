import Image from 'next/image'
import TextType from '../components/TextType'
import Button from './ui/Button'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { IoIosSend } from 'react-icons/io'
import { hero } from '../data/home.json'

const icons = [<IoArrowForwardCircle className='size-6 lg:size-8' />, <IoIosSend className='size-6 lg:size-8' />]

export default function Hero() {
  return (
    <div className='bg-light-300 relative flex min-h-[80vh] items-end justify-center'>
      <Image
        src={hero.image}
        alt='Data visualization'
        className='raised-500 lg:raised-700 absolute h-full w-full rounded-b-[50px] object-cover md:rounded-b-[60px] xl:w-9/10 xl:rounded-b-[70px] 2xl:rounded-b-[80px]'
        width={2362}
        height={1329}
      />
      <div className='relative flex h-full w-full justify-center py-50 xl:container xl:justify-start xl:pb-28 xl:pl-40'>
        <div className='flex w-full flex-col gap-10 px-3 md:w-[46rem] md:gap-5 md:px-0 lg:w-[52rem] lg:gap-7 xl:w-[60rem]'>
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
              className='lg:text-700 text-600 weight-700 mb-4 lg:mb-6'
              cursorClassName='text-light-500 weight-500'
            />
            <p className='lg:text-400 text-light-400 text-300 text-center leading-relaxed xl:w-[52rem] xl:text-start'>{hero.description}</p>
          </div>
          <div className='flex w-full items-center justify-center gap-6 lg:gap-8 xl:justify-start'>
            {hero.buttons.map((btn, index) => (
              <Button key={index} href={btn.href} type={btn.type}>
                {btn.text}
                {icons[index]}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
