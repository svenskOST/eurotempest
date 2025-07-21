import { motion } from 'framer-motion'

const About = () => {
   return (
      <div className='py-16 bg-gray-50'>
         {/* Company Overview Section */}
         <section className='mb-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='text-center mb-12'
               >
                  <h1 className='text-4xl font-bold text-gray-900 mb-4'>About EuroTempest</h1>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     EuroTempest provides weather intelligence and risk management solutions to help
                     businesses make informed decisions.
                  </p>
               </motion.div>

               <div className='grid md:grid-cols-2 gap-12 items-center'>
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Our Mission</h2>
                     <p className='text-gray-600 mb-6'>
                        We help organizations understand and manage their exposure to
                        weather-related risk through innovative solutions and expert analysis.
                     </p>
                     <ul className='space-y-4'>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>Accurate weather intelligence</span>
                        </li>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>Risk assessment and management</span>
                        </li>
                        <li className='flex items-start'>
                           <svg
                              className='h-6 w-6 text-blue-600 mr-2'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M5 13l4 4L19 7'
                              />
                           </svg>
                           <span>Expert consultation and support</span>
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
                     <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Our Expertise</h2>
                     <p className='text-gray-600 mb-6'>
                        With years of experience in weather risk management, our team provides
                        comprehensive solutions tailored to your needs.
                     </p>
                     <div className='space-y-4'>
                        <div className='flex items-center'>
                           <div className='flex-shrink-0'>
                              <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                 <svg
                                    className='h-6 w-6 text-blue-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                 >
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       strokeWidth='2'
                                       d='M13 10V3L4 14h7v7l9-11h-7z'
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className='ml-4'>
                              <h3 className='text-lg font-medium text-gray-900'>
                                 Advanced Analytics
                              </h3>
                              <p className='text-gray-500'>
                                 State-of-the-art weather forecasting and analysis
                              </p>
                           </div>
                        </div>
                        <div className='flex items-center'>
                           <div className='flex-shrink-0'>
                              <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center'>
                                 <svg
                                    className='h-6 w-6 text-blue-600'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                 >
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       strokeWidth='2'
                                       d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className='ml-4'>
                              <h3 className='text-lg font-medium text-gray-900'>Risk Management</h3>
                              <p className='text-gray-500'>
                                 Comprehensive risk assessment and mitigation strategies
                              </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className='bg-white py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='text-center mb-12'
               >
                  <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Team</h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     Meet our team of experts dedicated to providing you with the best weather risk
                     management solutions.
                  </p>
               </motion.div>

               <div className='grid md:grid-cols-3 gap-8'>
                  {/* Team Member Cards */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className='bg-gray-50 rounded-lg p-6 text-center'
                  >
                     <div className='w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4' />
                     <h3 className='text-xl font-semibold text-gray-900'>John Smith</h3>
                     <p className='text-gray-600'>Chief Executive Officer</p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className='bg-gray-50 rounded-lg p-6 text-center'
                  >
                     <div className='w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4' />
                     <h3 className='text-xl font-semibold text-gray-900'>Sarah Johnson</h3>
                     <p className='text-gray-600'>Head of Analytics</p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className='bg-gray-50 rounded-lg p-6 text-center'
                  >
                     <div className='w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4' />
                     <h3 className='text-xl font-semibold text-gray-900'>Michael Brown</h3>
                     <p className='text-gray-600'>Risk Management Director</p>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default About
