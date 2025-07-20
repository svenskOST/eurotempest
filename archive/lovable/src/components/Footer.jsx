import { Shield, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
   const currentYear = new Date().getFullYear()

   const footerLinks = {
      products: [
         { label: 'Computers', href: '#computers' },
         { label: 'IP Phones', href: '#ip-phones' },
         { label: 'Laptops', href: '#laptops' },
         { label: 'Monitors', href: '#monitors' },
         { label: 'Printers', href: '#printers' },
         { label: 'Scanners', href: '#scanners' },
      ],
      solutions: [
         { label: 'TEMPEST Testing', href: '#tempest' },
         { label: 'Multi-Domain Computing', href: '#multi-domain' },
         { label: 'Data Visibility Protection', href: '#data-protection' },
         { label: 'All-in-One Solutions', href: '#all-in-one' },
         { label: 'Custom Solutions', href: '#custom' },
      ],
      company: [
         { label: 'About Us', href: '#about' },
         { label: 'Credentials', href: '#credentials' },
         { label: 'News & Announcements', href: '#news' },
         { label: 'Product Support', href: '#support' },
         { label: 'Privacy Policy', href: '#privacy' },
      ],
   }

   return (
      <footer className='bg-primary text-primary-foreground'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Main Footer Content */}
            <div className='py-16 lg:py-20'>
               <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12'>
                  {/* Company Info */}
                  <div className='lg:col-span-1'>
                     <div className='flex items-center space-x-2 mb-6'>
                        <div className='flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg'>
                           <Shield className='h-6 w-6 text-white' />
                        </div>
                        <span className='text-xl font-bold'>EUROTEMPEST</span>
                     </div>

                     <p className='text-primary-foreground/80 mb-6 leading-relaxed'>
                        Leading provider of high-assurance IT products and cybersecurity solutions
                        for defense, government, and critical infrastructure applications.
                     </p>

                     <div className='space-y-3'>
                        <div className='flex items-center space-x-3'>
                           <Mail className='h-4 w-4 text-white/60' />
                           <span className='text-sm text-primary-foreground/80'>
                              info@eurotempest.net
                           </span>
                        </div>
                        <div className='flex items-center space-x-3'>
                           <Phone className='h-4 w-4 text-white/60' />
                           <span className='text-sm text-primary-foreground/80'>
                              +31 (0) 70 123 4567
                           </span>
                        </div>
                        <div className='flex items-center space-x-3'>
                           <MapPin className='h-4 w-4 text-white/60' />
                           <span className='text-sm text-primary-foreground/80'>
                              The Hague, Netherlands
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Products Links */}
                  <div>
                     <h3 className='text-lg font-semibold mb-6'>Products</h3>
                     <ul className='space-y-3'>
                        {footerLinks.products.map(link => (
                           <li key={link.label}>
                              <a
                                 href={link.href}
                                 className='text-primary-foreground/80 hover:text-white transition-colors duration-300 text-sm'
                              >
                                 {link.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Solutions Links */}
                  <div>
                     <h3 className='text-lg font-semibold mb-6'>Solutions</h3>
                     <ul className='space-y-3'>
                        {footerLinks.solutions.map(link => (
                           <li key={link.label}>
                              <a
                                 href={link.href}
                                 className='text-primary-foreground/80 hover:text-white transition-colors duration-300 text-sm'
                              >
                                 {link.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Company Links */}
                  <div>
                     <h3 className='text-lg font-semibold mb-6'>Company</h3>
                     <ul className='space-y-3'>
                        {footerLinks.company.map(link => (
                           <li key={link.label}>
                              <a
                                 href={link.href}
                                 className='text-primary-foreground/80 hover:text-white transition-colors duration-300 text-sm'
                              >
                                 {link.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* Bottom Footer */}
            <div className='border-t border-white/10 py-8'>
               <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
                  <div className='text-sm text-primary-foreground/60'>
                     Copyright © {currentYear} Eurotempest. All rights reserved.
                  </div>

                  <div className='flex space-x-6 text-sm'>
                     <a
                        href='#privacy'
                        className='text-primary-foreground/60 hover:text-white transition-colors duration-300'
                     >
                        Privacy Policy
                     </a>
                     <a
                        href='#terms'
                        className='text-primary-foreground/60 hover:text-white transition-colors duration-300'
                     >
                        Terms of Service
                     </a>
                     <a
                        href='#cookies'
                        className='text-primary-foreground/60 hover:text-white transition-colors duration-300'
                     >
                        Cookie Policy
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
