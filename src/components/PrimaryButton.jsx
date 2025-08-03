import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className='active:raised-300 hover:raised-700 raised-500 text-500 weight-500 text-light-300 bg-primary-700 flex items-center gap-2 rounded-lg px-6 py-4 transition hover:scale-105 active:scale-95'
    >
      {children}
    </Link>
  )
}
