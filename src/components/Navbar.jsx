import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DesktopNavLink from './DesktopNavLink'
import MobileNavLink from './MobileNavLink'

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuRef = useRef(null)

   useEffect(() => {
      function handleClickOutside(event) {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false)
         }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   return (
      <>
         <nav className='fixed raised-700 shadow-black top-0 w-full h-18 flex items-center justify-around bg-black/80 bg-gradient-to-r from-gray-900/75 via-red-900/25 to-gray-900/75 backdrop-blur-xs z-100'>
            <div className='container flex items-center justify-between h-full px-4 lg:px-22 xl:gap-36 2xl:gap-44'>
               <div className='w-2/3 md:w-1/3 lg:w-1/4'>
                  <Link href='/' onClick={() => setIsMenuOpen(false)}>
                     <Image src='/logo.png' alt='Eurotempest Logo' width={827} height={44} />
                  </Link>
               </div>

               <div
                  className='w-fit h-full lg:w-3/4 flex justify-end items-center lg:justify-start'
                  ref={menuRef}
               >
                  <div className='relative lg:hidden'>
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='px-2 py-1 cursor-pointer text-gray-200 transition hover:bg-red-900/50 rounded-md flex justify-center items-center'
                        aria-label='Toggle menu'
                        aria-expanded={isMenuOpen}
                     >
                        {isMenuOpen ? (
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              className='size-10 sm:size-12'
                           >
                              <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
                           </svg>
                        ) : (
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              className='size-10 sm:size-12'
                           >
                              <path d='M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z' />
                           </svg>
                        )}
                     </button>
                  </div>

                  <div className='hidden items-center h-full lg:flex text-100 lg:text-200 2xl:text-300'>
                     <DesktopNavLink href='/'>Home</DesktopNavLink>
                     <DesktopNavLink href='/credentials'>Credentials</DesktopNavLink>
                     <DesktopNavLink href='/about'>About</DesktopNavLink>
                     <DesktopNavLink href='/products'>Products</DesktopNavLink>
                     <DesktopNavLink href='/contact'>Contact</DesktopNavLink>
                     <DesktopNavLink href='/news'>News</DesktopNavLink>
                  </div>
               </div>
            </div>
         </nav>

         {isMenuOpen && (
            <div
               className='fixed z-50 w-full top-18 left-0 bg-gray-800 py-8 raised-700 text-700 flex items-center flex-col lg:hidden'
               ref={menuRef}
            >
               <MobileNavLink href='/' setIsMenuOpen={setIsMenuOpen}>
                  Home
               </MobileNavLink>
               <MobileNavLink href='/credentials' setIsMenuOpen={setIsMenuOpen}>
                  Credentials
               </MobileNavLink>
               <MobileNavLink href='/about' setIsMenuOpen={setIsMenuOpen}>
                  About
               </MobileNavLink>
               <MobileNavLink href='/products' setIsMenuOpen={setIsMenuOpen}>
                  Products
               </MobileNavLink>
               <MobileNavLink href='/Contact' setIsMenuOpen={setIsMenuOpen}>
                  Contact
               </MobileNavLink>
               <MobileNavLink href='/news' setIsMenuOpen={setIsMenuOpen}>
                  News
               </MobileNavLink>
            </div>
         )}
      </>
   )
}
