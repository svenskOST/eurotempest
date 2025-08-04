import Link from 'next/link'

export default function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className='lg:text-500 text-300 weight-500 text-light-300 bg-primary-700 flex w-fit items-center gap-2 rounded-md px-4 py-3 transition hover:scale-105 active:scale-95 lg:rounded-lg lg:px-5 lg:py-3'
    >
      {children}
    </Link>
  )
}
