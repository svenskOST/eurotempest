import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Separator } from './ui/separator'

export function Footer() {
   const footerSections = [
      {
         title: 'Services',
         links: [
            'Threat Detection',
            'Endpoint Security',
            'Cloud Security',
            'Security Training',
            'Compliance',
            'Incident Response',
         ],
      },
      {
         title: 'Solutions',
         links: [
            'Enterprise Security',
            'Small Business',
            'Healthcare',
            'Financial Services',
            'Government',
            'Education',
         ],
      },
      {
         title: 'Resources',
         links: [
            'Security Blog',
            'Whitepapers',
            'Case Studies',
            'Webinars',
            'Documentation',
            'Support Center',
         ],
      },
      {
         title: 'Company',
         links: ['About Us', 'Careers', 'Partners', 'Press', 'Contact', 'Privacy Policy'],
      },
   ]

   const socialLinks = [
      { icon: Linkedin, href: '#', label: 'LinkedIn' },
      { icon: Twitter, href: '#', label: 'Twitter' },
      { icon: Facebook, href: '#', label: 'Facebook' },
   ]

   return (
      <footer className='bg-card border-t border-border'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
               {/* Company Info */}
               <div className='lg:col-span-2 space-y-6'>
                  <div className='flex items-center space-x-2'>
                     <Shield className='h-8 w-8 text-primary' />
                     <span className='text-xl font-semibold text-foreground'>Tempest</span>
                  </div>

                  <p className='text-muted-foreground leading-relaxed'>
                     Leading cybersecurity firm protecting businesses from evolving cyber threats
                     with cutting-edge technology and expert knowledge.
                  </p>

                  <div className='space-y-3'>
                     <div className='flex items-center space-x-3 text-sm text-muted-foreground'>
                        <Mail className='h-4 w-4' />
                        <span>security@tempest.com</span>
                     </div>
                     <div className='flex items-center space-x-3 text-sm text-muted-foreground'>
                        <Phone className='h-4 w-4' />
                        <span>+1 (555) 123-4567</span>
                     </div>
                     <div className='flex items-center space-x-3 text-sm text-muted-foreground'>
                        <MapPin className='h-4 w-4' />
                        <span>123 Security Blvd, New York, NY 10001</span>
                     </div>
                  </div>

                  <div className='flex space-x-4'>
                     {socialLinks.map((social, index) => (
                        <a
                           key={index}
                           href={social.href}
                           className='p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
                           aria-label={social.label}
                        >
                           <social.icon className='h-5 w-5 text-muted-foreground' />
                        </a>
                     ))}
                  </div>
               </div>

               {/* Footer Links */}
               {footerSections.map((section, index) => (
                  <div key={index} className='space-y-4'>
                     <h3 className='font-medium text-foreground'>{section.title}</h3>
                     <ul className='space-y-3'>
                        {section.links.map((link, linkIndex) => (
                           <li key={linkIndex}>
                              <a
                                 href='#'
                                 className='text-sm text-muted-foreground hover:text-foreground transition-colors'
                              >
                                 {link}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <Separator className='my-8' />

            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
               <div className='text-sm text-muted-foreground'>
                  © 2025 Tempest Cybersecurity. All rights reserved.
               </div>

               <div className='flex space-x-6 text-sm'>
                  <a
                     href='#'
                     className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                     Privacy Policy
                  </a>
                  <a
                     href='#'
                     className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                     Terms of Service
                  </a>
                  <a
                     href='#'
                     className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                     Cookie Policy
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
