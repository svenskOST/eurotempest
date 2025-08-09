import { useRouter } from 'next/router'
import { useState } from 'react'

export default function NavLink({ href, children, className, setIsMenuOpen }) {
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
      href={href}
      onClick={handleClick}
      className={`hover:text-primary-300/90 flex h-full items-center justify-center px-6 transition-all duration-200 xl:px-7 ${
        isActive(href) ? 'text-primary-300/90' : 'text-light-300'
      } ${className} group relative`}
      aria-busy={isNavigating}
    >
      <div className='relative flex items-center justify-center weight-500 text-200 xl:text-300'>
        <span className='relative font-display'>
          {children}
          {isNavigating && (
            <span className='absolute w-5 h-5 translate-y-1 rounded-full border-primary-300/80 border-t-primary-300/20 -right-7 animate-spin border-3'></span>
          )}
        </span>
        <span className='bg-primary-300/90 absolute -bottom-1 left-0 h-[2px] w-0 transition-[width] duration-200 group-hover:w-full'></span>
      </div>
    </a>
  )
}
