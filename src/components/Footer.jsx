import FooterSection from './FooterSection'
import Image from 'next/image'

const footerContent = [
   {
      title: 'Company',
      links: [
         { href: '/about', text: 'About' },
         { href: '/credentials', text: 'Credentials' },
         { href: '/news', text: 'News' },
      ],
   },
   {
      title: 'Products',
      links: [
         { href: '/products/computers', text: 'Computers' },
         { href: '/products/ip-phones', text: 'IP Phones' },
         { href: '/products/laptops', text: 'Laptops' },
         { href: '/products/monitors', text: 'Monitors' },
         { href: '/products/printers', text: 'Printers' },
         { href: '/products/scanners', text: 'Scanners' },
      ],
   },
   {
      title: 'Support',
      links: [
         { href: '/contact', text: 'Contact' },
         { href: '/faq', text: 'FAQ' },
         { href: '/rma-ticket', text: 'RMA Ticket' },
      ],
   },
]

export default function Footer() {
   return (
      <footer className='w-full bg-gray-800 relative -raised-500'>
         <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'></div>
         <div className='w-full text-white p-4 flex flex-col justify-center items-center relative'>
            <div className='container flex justify-around items-center md:items-start mt-6 flex-col md:flex-row'>
               {footerContent.map((section, index) => (
                  <FooterSection key={index} title={section.title} links={section.links} />
               ))}
            </div>
            <div className='w-lg md:w-xl lg:w-3xl bg-gradient-to-r from-transparent via-gray-600/50 to-transparent h-0.5 rounded-3xl my-8'></div>
            <p className='text-center mb-2 text-gray-300'>© 2025 Eurotempest. All rights reserved.</p>
            <Image
               src='/logo-alt.svg'
               alt='Eurotempest Logo'
               className='w-30 md:w-12 md:absolute bottom-0 right-0 m-8'
               width={115}
               height={150}
            />
         </div>
      </footer>
   )
}
