import Link from 'next/link'

export default function FooterSection({ title, links }) {
  return (
    <div className='w-full my-5 text-center md:my-0 md:w-fit md:text-left'>
      <h3 className='text-600 text-light-300 font-display md:text-500 weight-600'>{title}</h3>
      <div className='flex flex-col'>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className='leading-loose text-400 md:text-300 text-light-500 hover:underline active:underline'>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
