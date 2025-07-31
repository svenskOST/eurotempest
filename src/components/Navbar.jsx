import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DesktopNavLink from './DesktopNavLink'
import MobileNavLink from './MobileNavLink'

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuRef = useRef(null)
   const buttonRef = useRef(null)

   useEffect(() => {
      function handleClickOutside(event) {
         if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
         ) {
            setIsMenuOpen(false)
         }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   const toggleMenu = () => {
      setIsMenuOpen(prev => !prev)
   }

   return (
      <>
         <nav className='fixed raised-700 shadow-black top-0 w-full h-18 flex items-center justify-around bg-black/80 bg-gradient-to-r from-gray-900/75 via-red-900/25 to-gray-900/75 backdrop-blur-xs z-100'>
            <div className='container flex items-center justify-between h-full px-4'>
               <div className='mx-4 w-70 sm:w-80 md:w-90 lg:w-70'>
                  <Link href='/' onClick={() => setIsMenuOpen(false)}>
                     <Image src='/logo.svg' alt='Eurotempest Logo' width={827} height={44} />
                  </Link>
               </div>

               <div className='w-fit h-full flex items-center'>
                  <div className='relative lg:hidden'>
                     <button
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className='cursor-pointer text-gray-200 hover:bg-red-900/50 rounded-md flex justify-center items-center transition-colors duration-300 h-12 w-14'
                        aria-label='Toggle menu'
                        aria-expanded={isMenuOpen}
                     >
                        <div className='relative w-full h-full flex items-center justify-center'>
                           <span
                              className={`absolute w-8 h-[3px] bg-current rounded-full transition-all duration-300 ${
                                 isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'
                              }`}
                           ></span>
                           <span
                              className={`absolute w-8 h-[3px] bg-current rounded-full transition-all duration-300 ${
                                 isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                              }`}
                           ></span>
                           <span
                              className={`absolute w-8 h-[3px] bg-current rounded-full transition-all duration-300 ${
                                 isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'
                              }`}
                           ></span>
                        </div>
                     </button>
                  </div>

                  <div className='hidden items-center h-full lg:flex xl:pr-10'>
                     <DesktopNavLink href='/' setIsMenuOpen={setIsMenuOpen}>
                        Home
                     </DesktopNavLink>
                     <DesktopNavLink href='/credentials' setIsMenuOpen={setIsMenuOpen}>
                        Credentials
                     </DesktopNavLink>
                     <DesktopNavLink href='/about' setIsMenuOpen={setIsMenuOpen}>
                        About
                     </DesktopNavLink>
                     <DesktopNavLink href='/products' setIsMenuOpen={setIsMenuOpen}>
                        Products
                     </DesktopNavLink>
                     <DesktopNavLink href='/contact' setIsMenuOpen={setIsMenuOpen}>
                        Contact
                     </DesktopNavLink>
                     <DesktopNavLink href='/news' setIsMenuOpen={setIsMenuOpen}>
                        News
                     </DesktopNavLink>
                  </div>
               </div>
            </div>
         </nav>

         <div
            className={`fixed z-50 w-full pt-24 left-0 bg-gray-800 py-8 raised-700 text-700 flex items-center flex-col lg:hidden transition-all duration-300 ease-in-out transform ${
               isMenuOpen
                  ? 'opacity-100 translate-y-0 visible'
                  : 'opacity-0 -translate-y-20 pointer-events-none invisible'
            }`}
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
            <MobileNavLink href='/contact' setIsMenuOpen={setIsMenuOpen}>
               Contact
            </MobileNavLink>
            <MobileNavLink href='/news' setIsMenuOpen={setIsMenuOpen}>
               News
            </MobileNavLink>
         </div>
      </>
   )
}
