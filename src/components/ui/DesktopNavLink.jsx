import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NavLink({ href, setIsMenuOpen, children }) {
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
    <a
      className={`relative flex items-center justify-center h-full px-6 transition-all duration-200 group hover:text-primary-300/90 xl:px-7 ${
        isActive(href) ? 'text-primary-300/90' : 'text-light-300'
      }`}
      href={href}
      onClick={handleClick}
      aria-busy={isNavigating}
    >
      <div className='relative flex items-center justify-center weight-500 text-200 xl:text-300'>
        <span className='relative font-display'>
          {children}
          {isNavigating && (
            <span className='absolute w-5 h-5 translate-y-1 rounded-full -right-7 border-3 border-primary-300/80 border-t-primary-300/20 animate-spin'></span>
          )}
        </span>
        <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-primary-300/90 transition-[width] duration-200 group-hover:w-full'></span>
      </div>
    </a>
  )
}
