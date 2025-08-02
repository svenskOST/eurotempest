import TextType from '../components/TextType'

export default function Home() {
   return (
      <>
         <div className='bg-[url(/blue-background.jpg)] bg-cover bg-center min-h-screen flex justify-center items-center'>
            <TextType
               text={['How visible is your data?', 'TEMPEST certified products', 'Secure solutions for government and defense']}
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
