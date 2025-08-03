import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className='lg:text-500 text-300 weight-500 border-light-500 bg-dark-600/60 text-light-300 flex items-center gap-2 rounded-lg border-2 px-4 py-2 transition hover:scale-105 active:scale-95 lg:px-5 lg:py-3'
    >
      {children}
    </Link>
  )
}
