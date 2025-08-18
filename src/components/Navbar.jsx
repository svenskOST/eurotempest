import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoLogoRss } from 'react-icons/io'
import DesktopNavLink from './ui/DesktopNavLink'
import MobileNavLink from './ui/MobileNavLink'

const data = {
  navLinks: [
    { text: 'Home', href: '/' },
    { text: 'Credentials', href: '/credentials' },
    { text: 'About', href: '/about' },
    { text: 'Products', href: '/products' },
    { text: 'Contact', href: '/contact' },
    { text: 'News', href: '/news' },
  ],
}

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
      <nav className='fixed top-0 flex items-center justify-around w-full h-18 z-100 bg-gradient-to-r backdrop-blur-sm shadow-[0_4px_6px_hsla(0,0%,0%,0.5)] bg-dark-900/70 from-dark-700/75 via-primary-700/25 to-dark-700/75'>
        <div className='container flex items-center justify-between h-full px-4 xl:px-10'>
          <div className='mx-2 w-70 opacity-80 md:mx-4 lg:w-60'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              <div className='text-light-300'>
                <IoLogoRss />
                <div>Cybersafe</div>
              </div>
            </Link>
          </div>
          <div className='flex items-center h-full w-fit'>
            <div className='relative lg:hidden'>
              <button
                className='flex items-center justify-center h-12 transition-colors duration-300 rounded-md cursor-pointer w-14 text-light-300 hover:bg-primary-300/50'
                ref={buttonRef}
                onClick={toggleMenu}
                aria-label='Toggle menu'
                aria-expanded={isMenuOpen}
              >
                <div className='relative flex items-center justify-center w-full h-full'>
                  <span
                    className={`absolute h-[3px] w-8 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2.5'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-[3px] w-8 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                    }`}
                  ></span>
                  <span
                    className={`absolute h-[3px] w-8 rounded-full bg-current transition-all duration-300 ${
                      isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2.5'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
            <div className='items-center hidden h-full lg:flex'>
              {data.navLinks.map((link, index) => (
                <DesktopNavLink href={link.href} setIsMenuOpen={setIsMenuOpen} key={index}>
                  {link.text}
                </DesktopNavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed left-0 z-50 flex flex-col items-center w-full pt-24 pb-14 transition-all duration-300 ease-in-out transform shadow-[0_6px_8px_hsla(0,0%,0%,0.5)] text-600 bg-dark-600 lg:hidden ${
          isMenuOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-20 opacity-0'
        }`}
        ref={menuRef}
      >
        {data.navLinks.map((link, index) => (
          <MobileNavLink href={link.href} setIsMenuOpen={setIsMenuOpen} key={index}>
            {link.text}
          </MobileNavLink>
        ))}
      </div>
    </>
  )
}
