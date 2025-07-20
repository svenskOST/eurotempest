import { Link } from 'wouter'

export default function Footer() {
   return (
      <footer className='bg-gray-900 text-white py-16 relative'>
         <div className='absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'></div>
         <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
               <div>
                  <h3 className='text-xl font-bold mb-4'>Eurotempest</h3>
                  <p className='text-gray-400'>
                     High assurance IT products for defense and government applications.
                  </p>
               </div>

               <div>
                  <h4 className='text-lg font-semibold mb-4'>Products</h4>
                  <ul className='space-y-2 text-gray-400'>
                     <li>
                        <a
                           href='/products#computers'
                           className='hover:text-white transition-colors'
                        >
                           Computers
                        </a>
                     </li>
                     <li>
                        <a href='/products#laptops' className='hover:text-white transition-colors'>
                           Laptops
                        </a>
                     </li>
                     <li>
                        <a href='/products#monitors' className='hover:text-white transition-colors'>
                           Monitors
                        </a>
                     </li>
                     <li>
                        <a href='/products#printers' className='hover:text-white transition-colors'>
                           Printers
                        </a>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className='text-lg font-semibold mb-4'>Company</h4>
                  <ul className='space-y-2 text-gray-400'>
                     <li>
                        <Link
                           href='/about'
                           className='hover:text-primary transition-all duration-200 hover:translate-x-1'
                        >
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='/credentials'
                           className='hover:text-primary transition-all duration-200 hover:translate-x-1'
                        >
                           Credentials
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='/announcements'
                           className='hover:text-primary transition-all duration-200 hover:translate-x-1'
                        >
                           Announcements
                        </Link>
                     </li>
                     <li>
                        <Link
                           href='/support'
                           className='hover:text-primary transition-all duration-200 hover:translate-x-1'
                        >
                           Support
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h4 className='text-lg font-semibold mb-4'>Contact</h4>
                  <ul className='space-y-2 text-gray-400'>
                     <li>Netherlands: +31 (0) 40 290 6934</li>
                     <li>Sweden: +46 10 585 52 00</li>
                     <li>info@eurotempest.net</li>
                  </ul>
               </div>
            </div>

            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
               <p>&copy; 2024 Eurotempest. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}
