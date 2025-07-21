import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Placeholder from '../components/Placeholder'

const carouselItems = [
   {
      title: 'Weather Intelligence',
      description: 'Providing critical weather data and analysis for the insurance industry',
      image: <Placeholder height={600} text='Weather Intelligence' />,
   },
   {
      title: 'Natural Catastrophe Services',
      description: 'Expert analysis and reporting on natural catastrophe events',
      image: <Placeholder height={600} text='Natural Catastrophe Services' />,
   },
   {
      title: 'Insurance Solutions',
      description: 'Tailored solutions for insurance companies across Europe',
      image: <Placeholder height={600} text='Insurance Solutions' />,
   },
]

const features = [
   {
      title: 'Weather Intelligence',
      description: 'Real-time weather monitoring and forecasting for informed decision making',
   },
   {
      title: 'Catastrophe Response',
      description: 'Rapid response and analysis of natural catastrophe events',
   },
   {
      title: 'Insurance Support',
      description: 'Comprehensive support for insurance claims and risk assessment',
   },
]

function Home() {
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
   }

   return (
      <div className='min-h-screen'>
         {/* Hero Section with Carousel */}
         <section className='relative'>
            <Slider {...sliderSettings} className='overflow-hidden'>
               {carouselItems.map((item, index) => (
                  <div key={index} className='relative h-[600px]'>
                     <div className='absolute inset-0 bg-gray-900'>
                        {item.image}
                        <div className='absolute inset-0 bg-black bg-opacity-50' />
                     </div>
                     <div className='relative h-full flex items-center'>
                        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                           <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className='text-center'
                           >
                              <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>
                                 {item.title}
                              </h1>
                              <p className='text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto'>
                                 {item.description}
                              </p>
                           </motion.div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </section>

         {/* Features Section */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                     Our Services
                  </h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     EuroTempest provides essential weather intelligence and natural catastrophe
                     services to support the insurance industry across Europe.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {features.map((feature, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow overflow-hidden'
                     >
                        <Placeholder
                           height={200}
                           text={feature.title}
                           className='mb-6 rounded-lg'
                        />
                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                           {feature.title}
                        </h3>
                        <p className='text-gray-600'>{feature.description}</p>
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

export default Home
