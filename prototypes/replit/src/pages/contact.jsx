import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Mail, Phone, Printer } from 'lucide-react'

export default function Contact() {
   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Contact Us</h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Eurotempest offices are located in The Netherlands and Sweden. Get in touch with
                  our team.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
               {/* Netherlands Office */}
               <Card className='bg-gray-50'>
                  <CardContent className='p-8'>
                     <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0 w-24 h-16'>
                           <img
                              src='/images/collse_heide.jpg'
                              alt='Eurotempest Netherlands Office'
                              className='w-full h-full object-cover rounded-lg'
                           />
                        </div>
                        <div className='flex-1'>
                           <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                              Eurotempest NL
                           </h3>
                           <p className='text-gray-600 mb-4'>Eurotempest B.V.</p>
                           <div className='space-y-2 text-gray-600 mb-4'>
                              <p>Collse Heide 44</p>
                              <p>5674 VN Nuenen</p>
                              <p>The Netherlands</p>
                           </div>
                           <div className='space-y-2'>
                              <p className='flex items-center text-gray-600'>
                                 <Mail className='h-4 w-4 text-primary mr-2' />
                                 info@eurotempest.net
                              </p>
                              <p className='flex items-center text-gray-600'>
                                 <Phone className='h-4 w-4 text-primary mr-2' />
                                 +31 (0) 40 290 6934
                              </p>
                              <p className='flex items-center text-gray-600'>
                                 <Printer className='h-4 w-4 text-primary mr-2' />
                                 +31 (0) 40 291 3323
                              </p>
                           </div>
                           <a
                              href='https://www.google.se/maps/place/Collse+Heide+44,+5674+VN+Nuenen,+Netherlands/@51.4461746,5.5585071,17z/data=!3m1!4b1!4m5!3m4!1s0x47c7276a83ed046d:0xb5bf6b765d1f8431!8m2!3d51.4461713!4d5.5607011'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-block mt-4 text-accent hover:text-accent/80 font-medium'
                           >
                              show on map
                           </a>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Sweden Office */}
               <Card className='bg-gray-50'>
                  <CardContent className='p-8'>
                     <div className='flex items-start space-x-4'>
                        <div className='flex-shrink-0 w-24 h-16'>
                           <img
                              src='/images/algol.jpg'
                              alt='Eurotempest Sweden Office'
                              className='w-full h-full object-cover rounded-lg'
                           />
                        </div>
                        <div className='flex-1'>
                           <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                              Eurotempest SE
                           </h3>
                           <p className='text-gray-600 mb-4'>Eurotempest AB</p>
                           <div className='space-y-2 text-gray-600 mb-4'>
                              <p>Algolgatan 10</p>
                              <p>583 30 Linköping</p>
                              <p>Sweden</p>
                           </div>
                           <div className='space-y-2'>
                              <p className='flex items-center text-gray-600'>
                                 <Mail className='h-4 w-4 text-primary mr-2' />
                                 info@eurotempest.net
                              </p>
                              <p className='flex items-center text-gray-600'>
                                 <Phone className='h-4 w-4 text-primary mr-2' />
                                 +46 10 585 52 00
                              </p>
                           </div>
                           <a
                              href='https://www.google.se/maps/search/Algolgatan+10,+583+35+Link%C3%B6ping/@58.3917306,15.5459668,17z/data=!3m1!4b1'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-block mt-4 text-accent hover:text-accent/80 font-medium'
                           >
                              show on map
                           </a>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>

            <div className='text-center'>
               <p className='text-gray-600 mb-4'>
                  Eurotempest is part of the{' '}
                  <a
                     href='http://www.boxholmsab.com/'
                     target='_blank'
                     rel='noopener noreferrer'
                     className='text-accent hover:text-accent/80'
                  >
                     Boxholms AB group
                  </a>{' '}
                  in Boxholm, Sweden.
               </p>
               <div className='inline-block'>
                  <img
                     src='/images/boxholms_ab.png'
                     alt='Boxholms AB Group'
                     className='h-20 w-auto'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
