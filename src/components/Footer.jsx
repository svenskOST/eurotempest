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
    <footer className='relative w-full -raised-500 bg-dark-600'>
      <div className='absolute inset-0 bg-gradient-to-r from-dark-700 via-dark-600 to-dark-700'></div>
      <div className='relative flex flex-col items-center justify-center w-full p-4'>
        <div className='container flex flex-col items-center justify-around mt-6 md:flex-row md:items-start'>
          {data.sections.map((section, index) => (
            <FooterSection title={section.title} links={section.links} key={index} />
          ))}
        </div>
        <div className='w-lg h-0.5 max-w-full my-8 rounded-3xl bg-gradient-to-r from-transparent via-light-300/50 to-transparent md:w-xl lg:w-3xl'></div>
        <p className='mb-2 text-center text-light-500'>{data.copyright}</p>
        <Image
          className='bottom-0 right-0 m-8 w-30 text-light-300 md:absolute md:w-12'
          width={115}
          height={150}
          src={data.image.src}
          alt={data.image.alt}
        />
      </div>
    </footer>
  )
}
