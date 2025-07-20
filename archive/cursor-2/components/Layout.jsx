import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
   { name: 'Home', href: '/' },
   { name: 'About', href: '/about' },
   { name: 'Services', href: '/services' },
   { name: 'Contact', href: '/contact' },
]

function Layout({ children }) {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <div className='min-h-screen flex flex-col'>
         {/* Navigation */}
         <nav className='bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='flex justify-between h-16'>
                  <div className='flex'>
                     {/* Logo */}
                     <Link to='/' className='flex-shrink-0 flex items-center'>
                        <span className='text-xl font-bold text-gray-900'>EuroTempest</span>
                     </Link>

                     {/* Desktop Navigation */}
                     <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                        {navigation.map(item => (
                           <Link
                              key={item.name}
                              to={item.href}
                              className='inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600'
                           >
                              {item.name}
                           </Link>
                        ))}
                     </div>
                  </div>

                  {/* Mobile menu button */}
                  <div className='sm:hidden flex items-center'>
                     <button
                        type='button'
                        className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                     >
                        <span className='sr-only'>Open main menu</span>
                        {mobileMenuOpen ? (
                           <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                        ) : (
                           <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                        )}
                     </button>
                  </div>
               </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
               <div className='sm:hidden'>
                  <div className='pt-2 pb-3 space-y-1'>
                     {navigation.map(item => (
                        <Link
                           key={item.name}
                           to={item.href}
                           className='block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                           onClick={() => setMobileMenuOpen(false)}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </nav>

         {/* Main content */}
         <main className='flex-grow'>{children}</main>

         {/* Footer */}
         <footer className='bg-gray-800 text-white'>
            <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div>
                     <h3 className='text-lg font-semibold mb-4'>EuroTempest</h3>
                     <p className='text-gray-300'>
                        Weather intelligence and natural catastrophe services for the insurance
                        industry
                     </p>
                  </div>
                  <div>
                     <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                     <ul className='space-y-2'>
                        {navigation.map(item => (
                           <li key={item.name}>
                              <Link to={item.href} className='text-gray-300 hover:text-white'>
                                 {item.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h3 className='text-lg font-semibold mb-4'>Contact</h3>
                     <p className='text-gray-300'>
                        Email: info@eurotempest.net
                        <br />
                        Phone: +44 (0)20 7283 4646
                     </p>
                  </div>
               </div>
               <div className='mt-8 pt-8 border-t border-gray-700 text-center text-gray-300'>
                  <p>&copy; {new Date().getFullYear()} EuroTempest. All rights reserved.</p>
               </div>
            </div>
         </footer>
      </div>
   )
}

export default Layout
