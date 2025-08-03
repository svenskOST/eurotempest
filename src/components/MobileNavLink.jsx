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
        className={`flex h-full items-center justify-center px-18 py-3 transition-all duration-200 hover:text-red-600/90 ${
          isActive(href) ? 'text-gray-500' : 'text-gray-300'
        } ${className} relative`}
        aria-busy={isNavigating}
      >
        {isNavigating ? (
          <div className='flex h-[54px] w-full items-center justify-center'>
            <span className='h-6 w-6 animate-spin rounded-full border-3 border-red-600/80 border-t-red-600/20'></span>
          </div>
        ) : (
          children
        )}
      </a>
      <div className='h-0.5 w-1/2 max-w-9/10 min-w-70 rounded-3xl bg-gradient-to-r from-transparent via-gray-600/50 to-transparent'></div>
    </>
  )
}
