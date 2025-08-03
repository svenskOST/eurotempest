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
      <div className='weight-500 text-200 xl:text-300 relative flex items-center justify-center'>
        <span className='relative'>
          {children}
          {isNavigating && (
            <span className='border-primary-300/80 border-t-primary-300/20 absolute -right-7 h-5 w-5 translate-y-1 animate-spin rounded-full border-3'></span>
          )}
        </span>
        <span className='bg-primary-300/90 absolute -bottom-1 left-0 h-[2px] w-0 transition-[width] duration-200 group-hover:w-full'></span>
      </div>
    </a>
  )
}
