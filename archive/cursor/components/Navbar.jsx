import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [scrolled, setScrolled] = useState(false)

   const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' },
   ]

   useEffect(() => {
      const handleScroll = () => {
         const offset = window.scrollY
         if (offset > 50) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
         }`}
      >
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
               <Link to='/' className='flex items-center'>
                  <span
                     className={`text-xl font-bold transition-colors ${
                        scrolled ? 'text-gray-900' : 'text-white'
                     }`}
                  >
                     EuroTempest
                  </span>
               </Link>

               {/* Desktop Navigation */}
               <div className='hidden md:flex space-x-8'>
                  {navItems.map(item => (
                     <Link
                        key={item.name}
                        to={item.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                           scrolled
                              ? 'text-gray-600 hover:text-gray-900'
                              : 'text-gray-200 hover:text-white'
                        }`}
                     >
                        {item.name}
                     </Link>
                  ))}
               </div>

               {/* Mobile Menu Button */}
               <div className='md:hidden'>
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className={`p-2 rounded-md transition-colors ${
                        scrolled
                           ? 'text-gray-600 hover:text-gray-900'
                           : 'text-gray-200 hover:text-white'
                     }`}
                     aria-label='Toggle menu'
                  >
                     {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className='md:hidden bg-white/80 backdrop-blur-md'
               >
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {navItems.map(item => (
                        <Link
                           key={item.name}
                           to={item.path}
                           className='block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium'
                           onClick={() => setIsOpen(false)}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </nav>
   )
}

export default Navbar
