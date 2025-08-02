import Image from 'next/image'
import TextType from '../components/TextType'

export default function Home() {
   return (
      <>
         <div className='bg-gray-900 min-h-screen flex justify-center items-center'>
            <Image src='/images/blue-background.jpg' alt='Data visualization' className='absolute inset-0 w-full h-full object-cover text-gray-200' width={2362} height={1329} />
            <div className='sr-only' aria-hidden='true'>
               <h1>How visible is your data?</h1>
               <h1>TEMPEST certified products</h1>
               <h1>Secure solutions for government and defense</h1>
            </div>
            <TextType
               text={[
                  'How visible is your data?',
                  'TEMPEST certified products',
                  'Secure solutions for government and defense',
               ]}
               typingSpeed={50}
               pauseDuration={3000}
               deletingSpeed={30}
               showCursor={true}
               cursorCharacter='|'
               textColors={['#e4e4e7']}
               className='text-900 weight-600 translate-x-2 w-1/2 text-shadow-black text-shadow-sm'
               cursorClassName='text-gray-300 weight-400'
            />
         </div>
      </>
   )
}
