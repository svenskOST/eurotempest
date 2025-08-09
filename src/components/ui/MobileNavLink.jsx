import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MobileNavLink({ href, setIsMenuOpen, children }) {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const isActive = path => router.pathname === path

  const handleClick = e => {
    e.preventDefault()
    if (router.pathname === href) {
      setIsMenuOpen(false)
      return
    }

    setIsNavigating(true)
    router.push(href).then(() => {
      setIsMenuOpen(false)
      setIsNavigating(false)
    })
  }

  return (
    <>
      <a
        className={`relative flex items-center justify-center h-full px-18" py-3 transition-colors duration-300 weight-500 font-display hover:text-primary-300/90 ${
          isActive(href) ? 'text-light-600' : 'text-light-400'
        }`}
        href={href}
        onClick={handleClick}
        aria-busy={isNavigating}
      >
        {isNavigating ? (
          <div className='flex  w-full h-[45px] items-center justify-center'>
            <span className='w-6 h-6 rounded-full border-3 border-primary-300/80 border-t-primary-300/20 animate-spin'></span>
          </div>
        ) : (
          children
        )}
      </a>
      <div className='w-1/2 h-0.5 min-w-70 max-w-9/10 rounded-3xl bg-gradient-to-r from-transparent via-light-600/50 to-transparent'></div>
    </>
  )
}
