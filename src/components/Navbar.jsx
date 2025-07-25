import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

export default function Navbar() {
   return (
      <nav className='fixed raised-700 shadow-black top-0 w-full h-18 flex items-center justify-around bg-black/80 bg-gradient-to-r from-gray-900/75 via-red-900/25 to-gray-900/75 backdrop-blur-xs'>
         <div className='w-2/3 flex items-center justify-between'>
            <div className='w-1/4'>
               <Link href='/' className='w-full'>
                  <Image
                     src='/logo.png'
                     alt='Eurotempest Logo'
                     className='w-full'
                     width={827}
                     height={44}
                  ></Image>
               </Link>
            </div>
            <div className='w-2/4 pr-12 h-full'>
               <div className='hidden lg:flex items-center h-full justify-between'>
                  <NavLink href='/'>Home</NavLink>
                  <NavLink href='/credentials'>Credentials</NavLink>
                  <NavLink href='/news'>News</NavLink>
                  <NavLink href='/about'>About</NavLink>
                  <NavLink href='/products'>Products</NavLink>
                  <NavLink href='/support'>Support</NavLink>
               </div>
            </div>
         </div>
      </nav>
   )
}
