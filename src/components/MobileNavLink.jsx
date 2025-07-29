import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, className, setIsMenuOpen }) {
   const isActive = path => useRouter().pathname === path

   return (
      <Link
         href={href}
         onClick={() => setIsMenuOpen(false)}
         className={`flex items-center justify-center px-18 h-full py-3 transition-all duration-200 hover:text-red-600/90 ${
            isActive(href) ? 'text-gray-500' : 'text-gray-300'
         } ${className}`}
      >
         {children}
      </Link>
   )
}
