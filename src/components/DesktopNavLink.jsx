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
         className={`flex items-center justify-center h-full px-6 xl:px-7 transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-red-600/90' : 'text-gray-200'
         } ${className} group relative`}
         aria-busy={isNavigating}
      >
         <div className='relative flex justify-center items-center weight-500 text-200 xl:text-300'>
            <span className='relative'>
               {children}
               {isNavigating && (
                  <span className='w-5 h-5 absolute border-3 border-red-600/80  border-t-red-600/20 rounded-full animate-spin -right-7 translate-y-1'></span>
               )}
            </span>
            <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600/90 transition-[width] duration-200 group-hover:w-full'></span>
         </div>
      </a>
   )
}
