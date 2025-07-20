import { motion } from 'framer-motion'
import { useState } from 'react'

function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
   })

   const handleSubmit = e => {
      e.preventDefault()
      // In a real implementation, this would send the form data to a server
      console.log('Form submitted:', formData)
      alert('Thank you for your message. We will get back to you soon!')
      setFormData({ name: '', email: '', company: '', message: '' })
   }

   const handleChange = e => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
   }

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
                  <h1 className='text-4xl sm:text-5xl font-bold text-white mb-6'>Contact Us</h1>
                  <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                     Get in touch with our team to learn more about our services
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Contact Form Section */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                  {/* Contact Information */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                     className='bg-gray-50 p-8 rounded-lg'
                  >
                     <h2 className='text-2xl font-bold text-gray-900 mb-6'>Get in Touch</h2>
                     <div className='space-y-6'>
                        <div>
                           <h3 className='text-lg font-semibold text-gray-900 mb-2'>Address</h3>
                           <p className='text-gray-600'>
                              EuroTempest Ltd
                              <br />
                              71-75 Shelton Street
                              <br />
                              Covent Garden
                              <br />
                              London
                              <br />
                              WC2H 9JQ
                           </p>
                        </div>
                        <div>
                           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                              Contact Details
                           </h3>
                           <p className='text-gray-600'>
                              Phone: +44 (0)20 7283 4646
                              <br />
                              Email: info@eurotempest.net
                           </p>
                        </div>
                        <div>
                           <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                              Business Hours
                           </h3>
                           <p className='text-gray-600'>
                              Monday - Friday: 9:00 AM - 5:30 PM
                              <br />
                              Saturday - Sunday: Closed
                           </p>
                        </div>
                     </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     <form onSubmit={handleSubmit} className='space-y-6'>
                        <div>
                           <label
                              htmlFor='name'
                              className='block text-sm font-medium text-gray-700'
                           >
                              Name
                           </label>
                           <input
                              type='text'
                              name='name'
                              id='name'
                              required
                              value={formData.name}
                              onChange={handleChange}
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-700'
                           >
                              Email
                           </label>
                           <input
                              type='email'
                              name='email'
                              id='email'
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='company'
                              className='block text-sm font-medium text-gray-700'
                           >
                              Company
                           </label>
                           <input
                              type='text'
                              name='company'
                              id='company'
                              value={formData.company}
                              onChange={handleChange}
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='message'
                              className='block text-sm font-medium text-gray-700'
                           >
                              Message
                           </label>
                           <textarea
                              name='message'
                              id='message'
                              rows={4}
                              required
                              value={formData.message}
                              onChange={handleChange}
                              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
                           />
                        </div>
                        <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           type='submit'
                           className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors'
                        >
                           Send Message
                        </motion.button>
                     </form>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Map Section */}
         <section className='py-20 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='rounded-lg overflow-hidden shadow-lg h-[400px]'>
                  {/* Replace with actual map implementation */}
                  <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                     <p className='text-gray-600'>Map placeholder</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Contact
