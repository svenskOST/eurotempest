import Link from 'next/link'

export default function FooterSection({ title, links }) {
  return (
    <div className='my-5 w-full text-center text-gray-300 md:my-0 md:w-fit md:text-left'>
      <h3 className='text-700 md:text-500 weight-600'>{title}</h3>
      <div className='flex flex-col'>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className='text-600 md:text-300 leading-loose text-gray-400 hover:underline'
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
