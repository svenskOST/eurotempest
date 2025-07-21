import { motion } from 'framer-motion'

const Services = () => {
   const services = [
      {
         title: 'Weather Intelligence',
         description:
            'Access real-time weather data and advanced forecasting to make informed business decisions.',
         icon: (
            <svg
               className='h-8 w-8 text-blue-600'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
               />
            </svg>
         ),
      },
      {
         title: 'Risk Assessment',
         description:
            'Comprehensive analysis of weather-related risks and their potential impact on your operations.',
         icon: (
            <svg
               className='h-8 w-8 text-blue-600'
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
         ),
      },
      {
         title: 'Consulting Services',
         description: 'Expert guidance on weather risk management strategies and implementation.',
         icon: (
            <svg
               className='h-8 w-8 text-blue-600'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
               />
            </svg>
         ),
      },
   ]

   return (
      <div className='py-16 bg-gray-50'>
         {/* Hero Section */}
         <section className='mb-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className='text-center mb-12'
               >
                  <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Services</h1>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     Comprehensive weather risk management solutions tailored to your business
                     needs.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Services Grid */}
         <section className='mb-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid md:grid-cols-3 gap-8'>
                  {services.map((service, index) => (
                     <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className='bg-white p-6 rounded-lg shadow-lg'
                     >
                        <div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
                           {service.icon}
                        </div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                           {service.title}
                        </h3>
                        <p className='text-gray-600'>{service.description}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Features Section */}
         <section className='bg-white py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className='text-center mb-12'
               >
                  <h2 className='text-3xl font-bold text-gray-900 mb-4'>Why Choose Us</h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     We combine advanced technology with expert analysis to deliver superior weather
                     risk management solutions.
                  </p>
               </motion.div>

               <div className='grid md:grid-cols-2 gap-12'>
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className='space-y-6'
                  >
                     <div className='flex items-start'>
                        <div className='flex-shrink-0'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
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
                                    d='M5 13l4 4L19 7'
                                 />
                              </svg>
                           </div>
                        </div>
                        <div className='ml-4'>
                           <h3 className='text-lg font-medium text-gray-900'>
                              Advanced Technology
                           </h3>
                           <p className='text-gray-600'>
                              State-of-the-art forecasting and analysis tools
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <div className='flex-shrink-0'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
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
                                    d='M5 13l4 4L19 7'
                                 />
                              </svg>
                           </div>
                        </div>
                        <div className='ml-4'>
                           <h3 className='text-lg font-medium text-gray-900'>Expert Team</h3>
                           <p className='text-gray-600'>
                              Experienced professionals in weather risk management
                           </p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className='space-y-6'
                  >
                     <div className='flex items-start'>
                        <div className='flex-shrink-0'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
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
                                    d='M5 13l4 4L19 7'
                                 />
                              </svg>
                           </div>
                        </div>
                        <div className='ml-4'>
                           <h3 className='text-lg font-medium text-gray-900'>
                              Customized Solutions
                           </h3>
                           <p className='text-gray-600'>
                              Tailored approaches for your specific needs
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <div className='flex-shrink-0'>
                           <div className='h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center'>
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
                                    d='M5 13l4 4L19 7'
                                 />
                              </svg>
                           </div>
                        </div>
                        <div className='ml-4'>
                           <h3 className='text-lg font-medium text-gray-900'>24/7 Support</h3>
                           <p className='text-gray-600'>
                              Round-the-clock assistance and monitoring
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Services
