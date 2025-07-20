import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
   })

   const handleSubmit = e => {
      e.preventDefault()
      // Handle form submission here
      console.log('Form submitted:', formData)
   }

   const handleChange = e => {
      const { name, value } = e.target
      setFormData(prev => ({
         ...prev,
         [name]: value,
      }))
   }

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
                  <h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Us</h1>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                     Get in touch with our team of experts to discuss your weather risk management
                     needs.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Contact Form and Info */}
         <section className='mb-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid md:grid-cols-2 gap-12'>
                  {/* Contact Form */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                     className='bg-white p-8 rounded-lg shadow-lg'
                  >
                     <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                        Send us a Message
                     </h2>
                     <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                           <label
                              htmlFor='name'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Name
                           </label>
                           <input
                              type='text'
                              id='name'
                              name='name'
                              value={formData.name}
                              onChange={handleChange}
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                              required
                           />
                        </div>

                        <div>
                           <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Email
                           </label>
                           <input
                              type='email'
                              id='email'
                              name='email'
                              value={formData.email}
                              onChange={handleChange}
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                              required
                           />
                        </div>

                        <div>
                           <label
                              htmlFor='subject'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Subject
                           </label>
                           <input
                              type='text'
                              id='subject'
                              name='subject'
                              value={formData.subject}
                              onChange={handleChange}
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                              required
                           />
                        </div>

                        <div>
                           <label
                              htmlFor='message'
                              className='block text-sm font-medium text-gray-700 mb-1'
                           >
                              Message
                           </label>
                           <textarea
                              id='message'
                              name='message'
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500'
                              required
                           />
                        </div>

                        <button
                           type='submit'
                           className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors'
                        >
                           Send Message
                        </button>
                     </form>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8 }}
                     className='space-y-8'
                  >
                     <div>
                        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                           Contact Information
                        </h2>
                        <div className='space-y-4'>
                           <div className='flex items-start'>
                              <div className='flex-shrink-0'>
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
                                       d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                    />
                                    <path
                                       strokeLinecap='round'
                                       strokeLinejoin='round'
                                       strokeWidth='2'
                                       d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                 </svg>
                              </div>
                              <div className='ml-4'>
                                 <h3 className='text-lg font-medium text-gray-900'>Address</h3>
                                 <p className='text-gray-600'>
                                    123 Weather Street
                                    <br />
                                    London, UK
                                 </p>
                              </div>
                           </div>

                           <div className='flex items-start'>
                              <div className='flex-shrink-0'>
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
                                       d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                 </svg>
                              </div>
                              <div className='ml-4'>
                                 <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                                 <p className='text-gray-600'>info@eurotempest.net</p>
                              </div>
                           </div>

                           <div className='flex items-start'>
                              <div className='flex-shrink-0'>
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
                                       d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                    />
                                 </svg>
                              </div>
                              <div className='ml-4'>
                                 <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                                 <p className='text-gray-600'>+44 (0) 123 456 7890</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div>
                        <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Office Hours</h2>
                        <div className='bg-white p-6 rounded-lg shadow-lg'>
                           <div className='space-y-2'>
                              <p className='flex justify-between'>
                                 <span className='text-gray-600'>Monday - Friday</span>
                                 <span className='text-gray-900'>9:00 AM - 5:30 PM</span>
                              </p>
                              <p className='flex justify-between'>
                                 <span className='text-gray-600'>Saturday - Sunday</span>
                                 <span className='text-gray-900'>Closed</span>
                              </p>
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

export default Contact
