import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const navItems = [
      { label: 'Home', href: '#home' },
      { label: 'Products', href: '#products' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
   ]

   return (
      <header
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
               ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
               : 'bg-transparent'
         }`}
      >
         <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16 lg:h-20'>
               {/* Logo */}
               <a href='#home' className='flex items-center space-x-2 group'>
                  <div className='flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg'>
                     <Shield className='h-6 w-6 text-white' />
                  </div>
                  <span className='text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors'>
                     EUROTEMPEST
                  </span>
               </a>

               {/* Desktop Navigation */}
               <div className='hidden md:flex items-center space-x-8'>
                  {navItems.map(item => (
                     <a
                        key={item.label}
                        href={item.href}
                        className='nav-link text-sm lg:text-base'
                        onClick={() => setIsMenuOpen(false)}
                     >
                        {item.label}
                     </a>
                  ))}
                  <Button className='btn-hero ml-4'>Get Quote</Button>
               </div>

               {/* Mobile Menu Button */}
               <button
                  className='md:hidden p-2 rounded-lg hover:bg-muted transition-colors'
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label='Toggle menu'
               >
                  {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
               </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
               <div className='md:hidden bg-background/95 backdrop-blur-md border-t border-border'>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {navItems.map(item => (
                        <a
                           key={item.label}
                           href={item.href}
                           className='block px-3 py-2 text-base font-medium nav-link'
                           onClick={() => setIsMenuOpen(false)}
                        >
                           {item.label}
                        </a>
                     ))}
                     <div className='px-3 pt-4'>
                        <Button className='btn-hero w-full'>Get Quote</Button>
                     </div>
                  </div>
               </div>
            )}
         </nav>
      </header>
   )
}

export default Header
