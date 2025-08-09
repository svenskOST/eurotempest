import Link from 'next/link'

export default function Button({ type, href, children }) {
  return (
    <Link
      className={`flex items-center gap-3 px-4 py-3 transition rounded-sm text-300 weight-500 font-display raised-300 text-light-300 hover:scale-105 active:scale-95 lg:gap-4 lg:px-4.5 lg:py-3 lg:rounded-md lg:text-400 ${type === 'primary' ? 'bg-primary-700' : type === 'secondary' ? 'bg-dark-600/60' : ''}`}
      href={href}
    >
      {children}
    </Link>
  )
}
