import Link from 'next/link'

export default function FooterSection({ title, links }) {
   return (
      <div className='text-gray-300 md:my-0 my-5 w-full md:w-fit text-center md:text-left'>
         <h3 className='text-700 md:text-500 weight-600'>{title}</h3>
         <div className='flex flex-col'>
            {links.map((link, index) => (
               <Link key={index} href={link.href} className='leading-loose hover:underline text-600 text-gray-400 md:text-300'>
                  {link.text}
               </Link>
            ))}
         </div>
      </div>
   )
}
