import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, className, setIsMenuOpen }) {
   const isActive = path => useRouter().pathname === path

   return (
      <Link
         href={href}
         onClick={() => setIsMenuOpen(false)}
         className={`flex items-center justify-center h-full px-[5%] transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-red-600/90' : 'text-gray-200'
         } ${className} group relative`}
      >
         <div className='relative text-center text-100 weight-500 lg:text-200 2xl:text-300'>
            {children}
            <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600/90 transition-[width] duration-200 group-hover:w-full'></span>
         </div>
      </Link>
   )
}
