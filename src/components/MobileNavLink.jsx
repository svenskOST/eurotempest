import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, className, setIsMenuOpen }) {
   const isActive = path => useRouter().pathname === path

   return (
      <Link
         href={href}
         onClick={() => setIsMenuOpen(false)}
         className={`flex items-center justify-center px-18 relative h-full py-3 transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-red-600/90' : 'text-gray-300'
         } ${className}`}
      >
         {isActive(href) && (
            <svg
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               className='size-8 absolute left-10 translate-y-[1px]'
            >
               <path d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z' />
            </svg>
         )}
         {children}
      </Link>
   )
}
