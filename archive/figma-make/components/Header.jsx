import { Button } from './ui/button'
import { Menu, Shield, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   const navItems = [
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Solutions', href: '#solutions' },
      { name: 'Contact', href: '#contact' },
   ]

   return (
      <header className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
               {/* Logo */}
               <div className='flex items-center space-x-2'>
                  <Shield className='h-8 w-8 text-primary' />
                  <span className='text-xl font-semibold text-foreground'>Tempest</span>
               </div>

               {/* Desktop Navigation */}
               <nav className='hidden md:flex items-center space-x-8'>
                  {navItems.map(item => (
                     <a
                        key={item.name}
                        href={item.href}
                        className='text-muted-foreground hover:text-foreground transition-colors'
                     >
                        {item.name}
                     </a>
                  ))}
               </nav>

               {/* Desktop CTA */}
               <div className='hidden md:flex items-center space-x-4'>
                  <Button variant='outline' size='sm'>
                     Get Assessment
                  </Button>
                  <Button size='sm'>Contact Us</Button>
               </div>

               {/* Mobile menu button */}
               <button className='md:hidden p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
               </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
               <div className='md:hidden border-t border-border'>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {navItems.map(item => (
                        <a
                           key={item.name}
                           href={item.href}
                           className='block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors'
                           onClick={() => setIsMenuOpen(false)}
                        >
                           {item.name}
                        </a>
                     ))}
                     <div className='px-3 py-2 space-y-2'>
                        <Button variant='outline' className='w-full' size='sm'>
                           Get Assessment
                        </Button>
                        <Button className='w-full' size='sm'>
                           Contact Us
                        </Button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </header>
   )
}
