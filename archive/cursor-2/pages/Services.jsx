import { motion } from 'framer-motion'
import Placeholder from '../components/Placeholder'

const services = [
   {
      title: 'Weather Intelligence',
      description: 'Real-time weather monitoring and forecasting for the insurance industry',
      features: [
         '24/7 weather monitoring',
         'Detailed weather forecasts',
         'Historical weather data analysis',
         'Custom weather alerts',
      ],
      image: <Placeholder height={400} text='Weather Intelligence' />,
   },
   {
      title: 'Natural Catastrophe Response',
      description: 'Expert analysis and reporting on natural catastrophe events',
      features: [
         'Rapid event assessment',
         'Detailed damage analysis',
         'Claims validation support',
         'Post-event reporting',
      ],
      image: <Placeholder height={400} text='Natural Catastrophe Response' />,
   },
   {
      title: 'Insurance Support',
      description: 'Comprehensive support for insurance operations',
      features: ['Claims validation', 'Risk assessment', 'Portfolio analysis', 'Custom reporting'],
      image: <Placeholder height={400} text='Insurance Support' />,
   },
]

function Services() {
   return (
      <div className='min-h-screen'>
         {/* Hero Section */}
         <section className='bg-gray-900 py-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-center'
               >
                  <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>Our Services</h1>
                  <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                     Comprehensive weather intelligence and natural catastrophe services tailored
                     for the insurance industry
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Services Section */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='space-y-20'>
                  {services.map((service, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                           index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                        }`}
                     >
                        <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                           <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                              {service.title}
                           </h2>
                           <p className='text-lg text-gray-600 mb-8'>{service.description}</p>
                           <ul className='space-y-4'>
                              {service.features.map((feature, featureIndex) => (
                                 <motion.li
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className='flex items-start'
                                 >
                                    <svg
                                       className='h-6 w-6 text-blue-600 mr-3 flex-shrink-0'
                                       fill='none'
                                       viewBox='0 0 24 24'
                                       stroke='currentColor'
                                    >
                                       <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth={2}
                                          d='M5 13l4 4L19 7'
                                       />
                                    </svg>
                                    <span className='text-gray-600'>{feature}</span>
                                 </motion.li>
                              ))}
                           </ul>
                        </div>
                        <div
                           className={`relative rounded-lg overflow-hidden shadow-xl ${
                              index % 2 === 1 ? 'lg:col-start-1' : ''
                           }`}
                        >
                           {service.image}
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className='bg-blue-600 py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center'>
                  <h2 className='text-3xl font-bold text-white mb-4'>Ready to get started?</h2>
                  <p className='text-xl text-blue-100 mb-8'>
                     Contact us today to learn more about our services and how we can help your
                     business.
                  </p>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
                     onClick={() => (window.location.href = '/contact')}
                  >
                     Contact Us
                  </motion.button>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Services
