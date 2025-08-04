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
    <footer className='-raised-500 bg-dark-600 relative w-full'>
      <div className='from-dark-700 via-dark-600 to-dark-700 absolute inset-0 bg-gradient-to-r'></div>
      <div className='relative flex w-full flex-col items-center justify-center p-4'>
        <div className='container mt-6 flex flex-col items-center justify-around md:flex-row md:items-start'>
          {footerContent.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <div className='via-light-300/50 my-8 h-0.5 w-lg max-w-full rounded-3xl bg-gradient-to-r from-transparent to-transparent md:w-xl lg:w-3xl'></div>
        <p className='text-light-500 mb-2 text-center'>© 2025 Eurotempest. All rights reserved.</p>
        <Image
          src='/logos/logo-alt.svg'
          alt='Eurotempest Logo'
          className='text-light-300 right-0 bottom-0 m-8 w-30 md:absolute md:w-12'
          width={115}
          height={150}
        />
      </div>
    </footer>
  )
}
