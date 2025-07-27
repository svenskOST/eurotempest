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
               <button className='w-14 aspect-square cursor-pointer bg-white lg:hidden'></button>
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
