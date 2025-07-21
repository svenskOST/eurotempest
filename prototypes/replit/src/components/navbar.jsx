import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ChevronDown } from 'lucide-react'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Navbar() {
   const [location] = useLocation()
   const [isOpen, setIsOpen] = useState(false)

   const isActive = path => location === path

   const NavLink = ({ href, children, className = '' }) => (
      <Link
         href={href}
         className={`relative text-sm font-medium transition-all duration-200 hover:text-primary ${
            isActive(href) ? 'text-primary' : 'text-white/90'
         } ${className} group`}
      >
         {children}
         <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
      </Link>
   )

   const productLinks = [
      { href: '/products#computers', label: 'Computers' },
      { href: '/products#laptops', label: 'Laptops' },
      { href: '/products#monitors', label: 'Monitors' },
      { href: '/products#printers', label: 'Printers' },
      { href: '/products#ip-phones', label: 'IP Phones' },
      { href: '/products#scanners', label: 'Scanners' },
      { href: '/products#video-conferencing', label: 'Video Conferencing' },
   ]

   return (
      <nav className='sticky top-0 z-50 w-full border-b border-gray-800/20 bg-gray-900/95 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-900/95'>
         <div className='absolute inset-0 bg-gradient-to-r from-gray-900/60 via-red-900/10 to-gray-900/60'></div>
         <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
               <div className='flex items-center'>
                  <Link
                     href='/'
                     className='text-2xl font-bold text-primary hover:text-primary/80 transition-colors'
                  >
                     Eurotempest
                  </Link>
               </div>

               {/* Desktop Navigation */}
               <div className='hidden md:flex items-center space-x-8'>
                  <NavLink href='/'>Home</NavLink>

                  <DropdownMenu>
                     <DropdownMenuTrigger className='relative flex items-center text-sm font-medium text-white/90 hover:text-primary transition-all duration-200 group'>
                        Products{' '}
                        <ChevronDown className='ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180' />
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full'></span>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent className='w-56 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl'>
                        {productLinks.map(link => (
                           <DropdownMenuItem
                              key={link.href}
                              className='text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 cursor-pointer'
                           >
                              <a href={link.href} className='w-full flex items-center space-x-2'>
                                 <span>{link.label}</span>
                              </a>
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>

                  <NavLink href='/announcements'>Announcements</NavLink>
                  <NavLink href='/credentials'>Credentials</NavLink>
                  <NavLink href='/support'>Support</NavLink>
                  <NavLink href='/about'>About</NavLink>
                  <NavLink href='/contact'>Contact</NavLink>
               </div>

               {/* Mobile Navigation */}
               <div className='md:hidden'>
                  <Sheet open={isOpen} onOpenChange={setIsOpen}>
                     <SheetTrigger asChild>
                        <Button
                           variant='ghost'
                           size='icon'
                           className='text-white/90 hover:text-primary hover:bg-gray-800/20 transition-all duration-200'
                        >
                           <Menu className='h-5 w-5' />
                           <span className='sr-only'>Toggle menu</span>
                        </Button>
                     </SheetTrigger>
                     <SheetContent
                        side='right'
                        className='w-[280px] sm:w-[320px] bg-white/95 backdrop-blur-xl border-gray-200'
                     >
                        <div className='flex flex-col space-y-6 mt-8'>
                           <Link
                              href='/'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              Home
                           </Link>
                           <div className='space-y-3'>
                              <span className='text-lg font-medium text-primary'>Products</span>
                              <div className='pl-4 space-y-2'>
                                 {productLinks.map(link => (
                                    <a
                                       key={link.href}
                                       href={link.href}
                                       className='block text-sm text-gray-600 hover:text-primary hover:pl-2 transition-all duration-200'
                                       onClick={() => setIsOpen(false)}
                                    >
                                       {link.label}
                                    </a>
                                 ))}
                              </div>
                           </div>
                           <Link
                              href='/announcements'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              Announcements
                           </Link>
                           <Link
                              href='/credentials'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              Credentials
                           </Link>
                           <Link
                              href='/support'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              Support
                           </Link>
                           <Link
                              href='/about'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              About
                           </Link>
                           <Link
                              href='/contact'
                              className='text-lg font-medium text-gray-900 hover:text-primary transition-colors'
                           >
                              Contact
                           </Link>
                        </div>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </div>
      </nav>
   )
}
