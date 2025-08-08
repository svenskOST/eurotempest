import Image from 'next/image'
import FooterSection from './ui/FooterSection'

const data = {
  sections: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Credentials', href: '/credentials' },
        { text: 'News', href: '/news' },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Computers', href: '/products/computers' },
        { text: 'IP Phones', href: '/products/ip-phones' },
        { text: 'Laptops', href: '/products/laptops' },
        { text: 'Monitors', href: '/products/monitors' },
        { text: 'Printers', href: '/products/printers' },
        { text: 'Scanners', href: '/products/scanners' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact', href: '/contact' },
        { text: 'FAQ', href: '/faq' },
        { text: 'RMA Ticket', href: '/rma-ticket' },
      ],
    },
  ],
  copyright: '© 2025 Eurotempest. All rights reserved.',
  image: { src: '/logos/logo-alt.svg', alt: 'Eurotempest logo' },
}

export default function Footer() {
  return (
    <footer className='-raised-500 bg-dark-600 relative w-full'>
      <div className='from-dark-700 via-dark-600 to-dark-700 absolute inset-0 bg-gradient-to-r'></div>
      <div className='relative flex w-full flex-col items-center justify-center p-4'>
        <div className='container mt-6 flex flex-col items-center justify-around md:flex-row md:items-start'>
          {data.sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <div className='via-light-300/50 my-8 h-0.5 w-lg max-w-full rounded-3xl bg-gradient-to-r from-transparent to-transparent md:w-xl lg:w-3xl'></div>
        <p className='text-light-500 mb-2 text-center'>{data.copyright}</p>
        <Image
          className='text-light-300 right-0 bottom-0 m-8 w-30 md:absolute md:w-12'
          width={115}
          height={150}
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
    </footer>
  )
}
