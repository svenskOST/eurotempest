import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className='lg:text-400 text-300 weight-500 font-display text-light-300 bg-primary-700 flex items-center gap-3 rounded-sm px-4 py-3 transition hover:scale-105 active:scale-95 lg:gap-4 lg:rounded-md lg:px-4.5 lg:py-3'
    >
      {children}
    </Link>
  )
}
