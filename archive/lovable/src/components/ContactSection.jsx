import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from './ui/button'

const ContactSection = () => {
   return (
      <section id='contact' className='py-20 lg:py-32'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='section-header'>Contact Us</h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                  Get in touch with our cybersecurity experts to discuss your requirements and
                  discover how we can help secure your critical infrastructure.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
               {/* Contact Information */}
               <div className='space-y-8'>
                  <div className='card-elegant'>
                     <h3 className='text-2xl font-bold text-foreground mb-6'>Get in Touch</h3>

                     <div className='space-y-6'>
                        <div className='flex items-start space-x-4'>
                           <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                              <Mail className='h-6 w-6 text-white' />
                           </div>
                           <div>
                              <h4 className='font-semibold text-foreground mb-1'>Email</h4>
                              <p className='text-muted-foreground'>info@eurotempest.net</p>
                              <p className='text-muted-foreground'>sales@eurotempest.net</p>
                           </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                           <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                              <Phone className='h-6 w-6 text-white' />
                           </div>
                           <div>
                              <h4 className='font-semibold text-foreground mb-1'>Phone</h4>
                              <p className='text-muted-foreground'>+31 (0) 70 123 4567</p>
                              <p className='text-muted-foreground'>+1 (555) 123-4567</p>
                           </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                           <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                              <MapPin className='h-6 w-6 text-white' />
                           </div>
                           <div>
                              <h4 className='font-semibold text-foreground mb-1'>Address</h4>
                              <p className='text-muted-foreground'>
                                 Lange Voorhout 123
                                 <br />
                                 2514 EC The Hague
                                 <br />
                                 Netherlands
                              </p>
                           </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                           <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0'>
                              <Clock className='h-6 w-6 text-white' />
                           </div>
                           <div>
                              <h4 className='font-semibold text-foreground mb-1'>Business Hours</h4>
                              <p className='text-muted-foreground'>
                                 Monday - Friday: 9:00 AM - 6:00 PM CET
                              </p>
                              <p className='text-muted-foreground'>
                                 24/7 Emergency Support Available
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Quick Links */}
                  <div className='card-elegant'>
                     <h3 className='text-xl font-bold text-foreground mb-4'>Quick Links</h3>
                     <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <a href='#products' className='nav-link block py-2'>
                           Product Catalog
                        </a>
                        <a href='#support' className='nav-link block py-2'>
                           Product Support
                        </a>
                        <a href='#credentials' className='nav-link block py-2'>
                           Credentials
                        </a>
                        <a href='#news' className='nav-link block py-2'>
                           Announcements
                        </a>
                        <a href='#privacy' className='nav-link block py-2'>
                           Privacy Policy
                        </a>
                        <a href='#rma' className='nav-link block py-2'>
                           RMA Ticket
                        </a>
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className='card-elegant'>
                  <h3 className='text-2xl font-bold text-foreground mb-6'>Send us a Message</h3>

                  <form className='space-y-6'>
                     <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                           <label
                              htmlFor='firstName'
                              className='block text-sm font-medium text-foreground mb-2'
                           >
                              First Name *
                           </label>
                           <input
                              type='text'
                              id='firstName'
                              name='firstName'
                              required
                              className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300'
                           />
                        </div>
                        <div>
                           <label
                              htmlFor='lastName'
                              className='block text-sm font-medium text-foreground mb-2'
                           >
                              Last Name *
                           </label>
                           <input
                              type='text'
                              id='lastName'
                              name='lastName'
                              required
                              className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300'
                           />
                        </div>
                     </div>

                     <div>
                        <label
                           htmlFor='email'
                           className='block text-sm font-medium text-foreground mb-2'
                        >
                           Email Address *
                        </label>
                        <input
                           type='email'
                           id='email'
                           name='email'
                           required
                           className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300'
                        />
                     </div>

                     <div>
                        <label
                           htmlFor='company'
                           className='block text-sm font-medium text-foreground mb-2'
                        >
                           Company/Organization
                        </label>
                        <input
                           type='text'
                           id='company'
                           name='company'
                           className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300'
                        />
                     </div>

                     <div>
                        <label
                           htmlFor='subject'
                           className='block text-sm font-medium text-foreground mb-2'
                        >
                           Subject *
                        </label>
                        <select
                           id='subject'
                           name='subject'
                           required
                           className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300'
                        >
                           <option value=''>Select a subject</option>
                           <option value='product-inquiry'>Product Inquiry</option>
                           <option value='custom-solution'>Custom Solution</option>
                           <option value='support'>Technical Support</option>
                           <option value='partnership'>Partnership</option>
                           <option value='other'>Other</option>
                        </select>
                     </div>

                     <div>
                        <label
                           htmlFor='message'
                           className='block text-sm font-medium text-foreground mb-2'
                        >
                           Message *
                        </label>
                        <textarea
                           id='message'
                           name='message'
                           rows={6}
                           required
                           className='w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-vertical'
                           placeholder='Please provide details about your requirements...'
                        />
                     </div>

                     <div className='flex items-start space-x-3'>
                        <input
                           type='checkbox'
                           id='privacy'
                           name='privacy'
                           required
                           className='mt-1 h-4 w-4 text-accent border-input rounded focus:ring-2 focus:ring-ring'
                        />
                        <label htmlFor='privacy' className='text-sm text-muted-foreground'>
                           I agree to the{' '}
                           <a href='#privacy' className='text-accent hover:underline'>
                              Privacy Policy
                           </a>{' '}
                           and consent to the processing of my personal data for the purpose of
                           responding to my inquiry.
                        </label>
                     </div>

                     <Button type='submit' className='btn-hero w-full text-lg py-4'>
                        Send Message
                        <Send className='ml-2 h-5 w-5' />
                     </Button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactSection
