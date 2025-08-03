import Image from 'next/image'
import TextType from '../components/TextType'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

export default function Hero() {
  return (
    <div className='bg-dark-700 relative flex h-screen items-center justify-center'>
      <Image
        src='/images/dark-background.jpg'
        alt='Data visualization'
        className='absolute inset-0 h-full w-full object-cover'
        width={2362}
        height={1329}
      />
      <div className='relative flex h-full w-full items-center justify-center md:items-end md:justify-start md:pb-20 md:pl-15 xl:container xl:aspect-video xl:h-fit xl:pb-35 xl:pl-30'>
        <div className='flex w-full flex-col gap-10 px-3 md:w-[41rem] md:gap-5 md:px-0 lg:w-[52rem] lg:gap-4'>
          <div className='flex flex-col items-center md:block'>
            <div className='sr-only' aria-hidden='true'>
              <h1>How visible is your data?</h1>
              <h1>TEMPEST-certified products</h1>
              <h1>Secure solutions for government and defense</h1>
            </div>
            <TextType
              text={[
                'How visible is your data?',
                'TEMPEST-certified products',
                'Secure solutions for government and defense',
              ]}
              typingSpeed={50}
              pauseDuration={3000}
              deletingSpeed={30}
              showCursor={true}
              cursorCharacter='|'
              textColors={['#d1d5dc']}
              className='lg:text-700 text-500 weight-600 mb-4 md:mb-2'
              cursorClassName='text-light-600'
            />
            <p className='lg:text-400 text-light-500 text-200'>
              Protect your information systems and communications from
              unauthorized interception. Our TEMPEST-certified products ensure
              no emanations are leaked.
            </p>
          </div>
          <div className='flex w-full items-center justify-center gap-5 md:justify-start lg:gap-6'>
            <PrimaryButton href='/products'>
              Explore Products
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5 md:size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                />
              </svg>
            </PrimaryButton>
            <SecondaryButton href='/contact'>
              Contact Us
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5 md:size-6'
              >
                <path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
              </svg>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
