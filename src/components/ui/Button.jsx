import Link from 'next/link'

export default function Button({ type, href, children }) {
  return (
    <Link
      className={`flex items-center justify-center gap-3 px-4 py-3 transition rounded-sm text-300 weight-500 font-display shadow-sm/50 hover:shadow-lg/20 active:shadow-xs/60 text-light-300 hover:scale-105 active:scale-95 lg:gap-4 lg:px-4.5 lg:py-3 lg:rounded-md lg:text-400 ${type === 'primary' ? 'bg-primary-700' : type === 'secondary' ? 'bg-dark-600/60' : type === 'card' ? 'bg-linear-65 from-primary-300/50 to-blue-950/50' :''}`}
      href={href}
    >
      {children}
    </Link>
  )
}
