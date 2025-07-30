import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function MobileNavLink({ href, children, className, setIsMenuOpen }) {
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
         className={`flex items-center justify-center px-18 h-full py-3 transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-gray-500' : 'text-gray-300'
         } ${className} relative`}
         aria-busy={isNavigating}
      >
         {isNavigating ? (
            <div className='flex items-center justify-center w-full h-[54px]'>
               <div className='w-6 h-6 border-3 border-red-600/90 border-t-2 border-t-transparent rounded-full animate-spin'></div>
            </div>
         ) : (
            children
         )}
      </a>
   )
}
