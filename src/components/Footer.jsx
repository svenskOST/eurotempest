import FooterSection from './FooterSection'

const footerContent = [
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
      title: 'Company',
      links: [
         { href: '/about', text: 'About' },
         { href: '/news', text: 'News' },
         { href: '/credentials', text: 'Credentials' },
      ],
   },
   {
      title: 'Contact',
      links: [
         { href: '/contact', text: 'Contact' },
         { href: '/news', text: 'News' },
      ],
   },
]

export default function Footer() {
   return (
      <footer className='w-full bg-gray-800 text-white p-4'>
         <div className='container flex items-center justify-between'>
            {footerContent.map((section, index) => (
               <FooterSection key={index} title={section.title} links={section.links} />
            ))}
         </div>
         <p className='text-center'>© 2025 Eurotempest. All rights reserved.</p>
      </footer>
   )
}
