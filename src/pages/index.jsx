import Image from 'next/image'

export default function Home() {
   return (
      <>
         <div className='bg-neutral-100 min-h-screen flex items-center'>
            <Image
               src='blue-background.jpg'
               width={2362}
               height={1329}
               alt='Blue data background'
            ></Image>
         </div>
      </>
   )
}
