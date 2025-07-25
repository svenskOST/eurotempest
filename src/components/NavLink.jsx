import Link from 'next/link'

import { useRouter } from 'next/router'

export default function NavLink({ href, children, className }) {
   const isActive = path => useRouter().pathname === path

   return (
      <Link
         href={href}
         className={`relative flex items-centerh-full text-300 weight-500 transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-red-600/90' : 'text-gray-200'
         } ${className} group`}
      >
         {children}
         <span className='absolute -bottom-1 left-0 w-0 h-[3px] bg-red-600/90 transition-[width] duration-200 group-hover:w-full'></span>
      </Link>
   )
}
