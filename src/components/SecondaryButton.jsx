import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className='active:raised-300 hover:raised-700 raised-500 text-500 weight-500 flex items-center gap-2 rounded-lg border-2 border-gray-400 bg-gray-700/40 px-6 py-4 text-gray-100 transition hover:scale-105 active:scale-95'
    >
      {children}
    </Link>
  )
}
