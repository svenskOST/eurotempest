import Link from 'next/link'

export default function FooterSection({ title, links }) {
  return (
    <div className='w-full my-5 text-center md:w-fit md:my-0 md:text-left'>
      <h3 className='text-600 font-display weight-600 text-light-300 md:text-500'>{title}</h3>
      <div className='flex flex-col'>
        {links.map((link, index) => (
          <Link className='leading-loose text-400 text-light-500 hover:underline active:underline md:text-300' href={link.href} key={index}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
