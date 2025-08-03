import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
   return (
      <Link
         href={href}
         className='bg-red-800 active:scale-95 active:raised-300 transition hover:scale-105 hover:raised-700 raised-500 text-gray-100 text-500 weight-500 px-6 py-4 rounded-lg flex gap-2 items-center'
      >
         {children}
      </Link>
   )
}
