import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

export default function Navbar() {
   return (
      <nav className='fixed raised-700 shadow-black top-0 w-full h-18 flex items-center justify-around bg-black/80 bg-gradient-to-r from-gray-900/75 via-red-900/25 to-gray-900/75 backdrop-blur-xs'>
         <div className='container flex items-center justify-between h-full px-4 lg:px-22 xl:gap-36 2xl:gap-44'>
            <div className='w-2/3 md:w-1/3 lg:w-1/4'>
               <Link href='/'>
                  <Image src='/logo.png' alt='Eurotempest Logo' width={827} height={44}></Image>
               </Link>
            </div>

            <div className='w-1/3 h-ful lg:w-3/4 flex justify-end items-center lg:justify-start'>
               <button className='px-2 py-1 cursor-pointer text-gray-200 transition hover:bg-red-900/50 rounded-md flex justify-center items-center lg:hidden'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 20 20'
                     fill='currentColor'
                     className='size-10 sm:size-12'
                  >
                     <path
                        fillRule='evenodd'
                        d='M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z'
                        clipRule='evenodd'
                     />
                  </svg>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 20 20'
                     fill='currentColor'
                     className='size-10 sm:size-12'
                  >
                     <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
                  </svg>
               </button>

               <div className='hidden items-center h-full lg:flex'>
                  <NavLink href='/'>Home</NavLink>
                  <NavLink href='/credentials'>Credentials</NavLink>
                  <NavLink href='/about'>About</NavLink>
                  <NavLink href='/products'>Products</NavLink>
                  <NavLink href='/support'>Support</NavLink>
                  <NavLink href='/news'>News</NavLink>
               </div>
            </div>
         </div>
      </nav>
   )
}
