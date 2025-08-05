import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DesktopNavLink from './ui/DesktopNavLink'
import MobileNavLink from './ui/MobileNavLink'
import data from '../data.json'

const navLinks = data.navLinks

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
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
      <nav className='raised-500 bg-dark-900/70 from-dark-700/75 via-primary-700/25 to-dark-800/75 shadow-dark-900 fixed top-0 z-100 flex h-18 w-full items-center justify-around bg-gradient-to-r backdrop-blur-xs'>
        <div className='container flex h-full items-center justify-between px-4 xl:px-10'>
          <div className='mx-4 w-70 opacity-80 lg:w-60'>
            <Link href='/' onClick={() => setIsMenuOpen(false)}>
              <Image src='/logos/logo.svg' alt='Eurotempest Logo' className='text-light-300' width={827} height={44} />
            </Link>
          </div>
          <div className='flex h-full w-fit items-center'>
            <div className='relative lg:hidden'>
              <button
                ref={buttonRef}
                onClick={toggleMenu}
                className='text-light-300 hover:bg-primary-300/50 flex h-12 w-14 cursor-pointer items-center justify-center rounded-md transition-colors duration-300'
                aria-label='Toggle menu'
                aria-expanded={isMenuOpen}
              >
                <div className='relative flex h-full w-full items-center justify-center'>
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
            <div className='hidden h-full items-center lg:flex'>
              {navLinks.map((link, index) => (
                <DesktopNavLink key={index} href={link.href} setIsMenuOpen={setIsMenuOpen}>
                  {link.text}
                </DesktopNavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`raised-700 text-600 bg-dark-700 fixed left-0 z-50 flex w-full transform flex-col items-center pt-24 pb-16 transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-20 opacity-0'
        }`}
        ref={menuRef}
      >
        {navLinks.map((link, index) => (
          <MobileNavLink key={index} href={link.href} setIsMenuOpen={setIsMenuOpen}>
            {link.text}
          </MobileNavLink>
        ))}
      </div>
    </>
  )
}
