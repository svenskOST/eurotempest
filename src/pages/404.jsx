import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
   return (
      <div className='bg-gray-100 min-h-screen flex items-center justify-center flex-col leading-loose'>
         <Image
            className='w-100'
            src='404.svg'
            width={150}
            height={150}
            alt='Error 404: Page Not Found'
         ></Image>
         <h1 className='text-400 weight-500 text-zinc-800'>That page could not be found!</h1>
         <p className='text-100'>
            Illustration from{' '}
            <a className='underline text-zinc-500' href='https://storyset.com/web'>
               Web illustrations by Storyset
            </a>
         </p>
         <Link
            href='/'
            className='bg-red-800 mt-8 text-white text-600 weight-600 px-6 py-2 rounded-xl hover:bg-red-700 hover:scale-110 transition-all duration-200 active:scale-95 raised-300 shadow-red-700 hover:shadow-red-600 hover:raised-500'
         >
            Take me home
         </Link>
      </div>
   )
}
