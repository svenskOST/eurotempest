import { motion } from 'framer-motion'
import Carousel from '../components/Carousel'

const Home = () => {
   return (
      <div>
         {/* Hero Carousel */}
         <Carousel />

         {/* Main Content */}
         <section className='py-16 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='text-center mb-12'
               >
                  <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                     TEMPEST and Rugged Equipment
                  </h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     We provide high-assurance IT products to qualified defence and government
                     customers. Our solutions meet formal EU, NATO, and bespoke standards for
                     compliance.
                  </p>
               </motion.div>

               <div className='grid md:grid-cols-3 gap-8'>
                  {/* Product Categories */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className='bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
                  >
                     <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                        <svg
                           className='h-6 w-6 text-blue-600'
                           fill='none'
                           stroke='currentColor'
                           viewBox='0 0 24 24'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                           />
                        </svg>
                     </div>
                     <h3 className='text-xl font-semibold text-gray-900 mb-2'>Computers</h3>
                     <p className='text-gray-600'>
                        High-security computing solutions for sensitive environments.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className='bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
                  >
                     <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                        <svg
                           className='h-6 w-6 text-blue-600'
                           fill='none'
                           stroke='currentColor'
                           viewBox='0 0 24 24'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                           />
                        </svg>
                     </div>
                     <h3 className='text-xl font-semibold text-gray-900 mb-2'>Mobile Devices</h3>
                     <p className='text-gray-600'>Secure mobile computing for field operations.</p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className='bg-gray-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow'
                  >
                     <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                        <svg
                           className='h-6 w-6 text-blue-600'
                           fill='none'
                           stroke='currentColor'
                           viewBox='0 0 24 24'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
                           />
                        </svg>
                     </div>
                     <h3 className='text-xl font-semibold text-gray-900 mb-2'>Network Security</h3>
                     <p className='text-gray-600'>
                        Advanced networking solutions with built-in security.
                     </p>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className='py-16 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid md:grid-cols-2 gap-12 items-center'>
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                        Why Choose EuroTempest?
                     </h2>
                     <p className='text-gray-600 mb-6'>
                        We modify and enhance off-the-shelf IT products and networking solutions to
                        meet the highest security standards.
                     </p>
                     <ul className='space-y-4'>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2 flex-shrink-0'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth={2}
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>NATO and EU certified solutions</span>
                        </li>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2 flex-shrink-0'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth={2}
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>Comprehensive security testing</span>
                        </li>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2 flex-shrink-0'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth={2}
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>Expert technical support</span>
                        </li>
                     </ul>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className='bg-white p-6 rounded-lg shadow-lg'
                  >
                     <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                        Our Certifications
                     </h3>
                     <div className='space-y-4'>
                        <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                              <svg
                                 className='h-6 w-6 text-blue-600'
                                 fill='none'
                                 stroke='currentColor'
                                 viewBox='0 0 24 24'
                              >
                                 <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                 />
                              </svg>
                           </div>
                           <div>
                              <h4 className='font-medium text-gray-900'>NATO SDIP-27/2</h4>
                              <p className='text-sm text-gray-600'>Level A Certified</p>
                           </div>
                        </div>
                        <div className='flex items-center p-4 bg-gray-50 rounded-lg'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                              <svg
                                 className='h-6 w-6 text-blue-600'
                                 fill='none'
                                 stroke='currentColor'
                                 viewBox='0 0 24 24'
                              >
                                 <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                 />
                              </svg>
                           </div>
                           <div>
                              <h4 className='font-medium text-gray-900'>EU IASG 7-03</h4>
                              <p className='text-sm text-gray-600'>Level A Certified</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Home
