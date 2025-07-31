import Image from 'next/image'


export default function Home() {
   return (
      <>
         <div className='bg-neutral-100 min-h-screen flex items-center'>
            <Image src='img1.jpg' width={1536} height={616} alt=''></Image>
         </div>
      </>
   )
}
