import Link from 'next/link'

export default function FooterSection({ title, links }) {
   return (
      <div className=''>
         <h3>{title}</h3>
         {links.map((link, index) => (
            <Link key={index} href={link.href}>
               {link.text}
            </Link>
         ))}
      </div>
   )
}
