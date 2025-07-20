import { motion } from 'framer-motion'
import Placeholder from '../components/Placeholder'

const teamMembers = [
   {
      name: 'Nick Wood',
      role: 'Managing Director',
      image: <Placeholder height={400} text='Nick Wood' />,
   },
   {
      name: 'James Orr',
      role: 'Director',
      image: <Placeholder height={400} text='James Orr' />,
   },
   // Add more team members as needed
]

function About() {
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
                  <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>
                     About EuroTempest
                  </h1>
                  <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                     Providing weather intelligence and natural catastrophe services to the
                     insurance industry since 2004
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Company Overview */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                  >
                     <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Story</h2>
                     <p className='text-lg text-gray-600 mb-6'>
                        EuroTempest was established in 2004 to provide weather intelligence services
                        to the insurance industry. Since then, we have expanded our services to
                        include natural catastrophe response and analysis, becoming a trusted
                        partner for insurance companies across Europe.
                     </p>
                     <p className='text-lg text-gray-600'>
                        Our team combines expertise in meteorology, insurance, and technology to
                        deliver accurate, timely, and actionable intelligence that helps our clients
                        make informed decisions and respond effectively to weather-related events.
                     </p>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className='relative h-[400px] rounded-lg overflow-hidden'
                  >
                     <Placeholder height={400} text='Company Overview' className='rounded-lg' />
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Our Values */}
         <section className='py-20 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className='text-center mb-16'
               >
                  <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Values</h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     We are committed to delivering excellence through our core values
                  </p>
               </motion.div>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {[
                     {
                        title: 'Accuracy',
                        description: 'We provide precise and reliable weather intelligence',
                     },
                     {
                        title: 'Innovation',
                        description: 'Continuously improving our services through technology',
                     },
                     {
                        title: 'Partnership',
                        description: 'Building long-term relationships with our clients',
                     },
                  ].map((value, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-white rounded-lg shadow-lg p-8 text-center'
                     >
                        <Placeholder height={150} text={value.title} className='mb-6 rounded-lg' />
                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>{value.title}</h3>
                        <p className='text-gray-600'>{value.description}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className='text-center mb-16'
               >
                  <h2 className='text-3xl font-bold text-gray-900 mb-6'>Our Team</h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     Meet the experts behind EuroTempest
                  </p>
               </motion.div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {teamMembers.map((member, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-white rounded-lg overflow-hidden shadow-lg'
                     >
                        {member.image}
                        <div className='p-6 text-center'>
                           <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                              {member.name}
                           </h3>
                           <p className='text-gray-600'>{member.role}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   )
}

export default About
