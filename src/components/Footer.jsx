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
    <footer className='-raised-500 relative w-full bg-gray-800'>
      <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'></div>
      <div className='relative flex w-full flex-col items-center justify-center p-4 text-white'>
        <div className='container mt-6 flex flex-col items-center justify-around md:flex-row md:items-start'>
          {footerContent.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className='my-8 h-0.5 w-lg max-w-full rounded-3xl bg-gradient-to-r from-transparent via-gray-600/50 to-transparent md:w-xl lg:w-3xl'></div>
        <p className='mb-2 text-center text-gray-300'>
          © 2025 Eurotempest. All rights reserved.
        </p>
        <Image
          src='/logos/logo-alt.svg'
          alt='Eurotempest Logo'
          className='right-0 bottom-0 m-8 w-30 md:absolute md:w-12'
          width={115}
          height={150}
        />
      </div>
    </footer>
  )
}
