import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MobileNavLink({
  href,
  children,
  className,
  setIsMenuOpen,
}) {
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
        href={href}
        onClick={handleClick}
        className={`hover:text-primary-300/90 flex h-full items-center justify-center px-18 py-3 transition-colors duration-300 ${
          isActive(href) ? 'text-light-600' : 'text-light-400'
        } ${className} relative`}
        aria-busy={isNavigating}
      >
        {isNavigating ? (
          <div className='flex h-[54px] w-full items-center justify-center'>
            <span className='border-primary-300/80 border-t-primary-300/20 h-6 w-6 animate-spin rounded-full border-3'></span>
          </div>
        ) : (
          children
        )}
      </a>
      <div className='via-light-600/50 h-0.5 w-1/2 max-w-9/10 min-w-70 rounded-3xl bg-gradient-to-r from-transparent to-transparent'></div>
    </>
  )
}
