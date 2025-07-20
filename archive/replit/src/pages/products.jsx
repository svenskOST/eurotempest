import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Products() {
   const productCategories = [
      {
         id: 'computers',
         title: 'Computers',
         description:
            'High-performance computing solutions for secure environments with enhanced security features and TEMPEST compliance.',
         image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: ['TEMPEST Certified', 'High Performance', 'Secure Boot', 'Hardware Encryption'],
      },
      {
         id: 'laptops',
         title: 'Laptops',
         description:
            'Portable computing solutions with enhanced security features for mobile defense and government applications.',
         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: ['Rugged Design', 'Long Battery Life', 'Secure Storage', 'MIL-STD Compliance'],
      },
      {
         id: 'monitors',
         title: 'Monitors',
         description:
            'Professional displays for critical applications with enhanced security and electromagnetic compatibility.',
         image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: ['EMC Compliant', 'High Resolution', 'Multiple Inputs', 'Secure Display'],
      },
      {
         id: 'printers',
         title: 'Printers',
         description:
            'Secure printing solutions for sensitive documents with advanced security features and audit trails.',
         image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: ['Secure Print', 'Audit Trail', 'Data Encryption', 'Access Control'],
      },
      {
         id: 'ip-phones',
         title: 'IP Phones',
         description:
            'Secure communication devices for professional environments with encrypted voice transmission.',
         image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: [
            'Voice Encryption',
            'Secure Protocols',
            'High Audio Quality',
            'Enterprise Features',
         ],
      },
      {
         id: 'scanners',
         title: 'Scanners',
         description:
            'High-quality document scanning solutions with secure processing and storage capabilities.',
         image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: [
            'High Resolution',
            'Secure Processing',
            'Multiple Formats',
            'Network Integration',
         ],
      },
      {
         id: 'video-conferencing',
         title: 'Video Tele-Conferencing',
         description:
            'High-quality video communication systems with secure transmission and advanced collaboration features.',
         image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         features: ['HD Video', 'Secure Transmission', 'Multi-party Support', 'Screen Sharing'],
      },
   ]

   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Our Products</h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Comprehensive range of high-assurance IT equipment for defense and government
                  applications, certified to meet the most stringent security requirements.
               </p>
            </div>

            <div className='space-y-16'>
               {productCategories.map((category, index) => (
                  <div key={category.id} id={category.id} className='scroll-mt-20'>
                     <Card className='overflow-hidden'>
                        <div
                           className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                              index % 2 === 1 ? 'lg:grid-cols-2' : ''
                           }`}
                        >
                           <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                              <img
                                 src={category.image}
                                 alt={category.title}
                                 className='w-full h-64 lg:h-full object-cover'
                              />
                           </div>
                           <CardContent
                              className={`p-8 flex flex-col justify-center ${
                                 index % 2 === 1 ? 'lg:order-1' : ''
                              }`}
                           >
                              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                                 {category.title}
                              </h2>
                              <p className='text-lg text-gray-600 mb-6'>{category.description}</p>
                              <div className='mb-6'>
                                 <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                                    Key Features:
                                 </h3>
                                 <ul className='grid grid-cols-2 gap-2'>
                                    {category.features.map((feature, featureIndex) => (
                                       <li
                                          key={featureIndex}
                                          className='flex items-center text-gray-600'
                                       >
                                          <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                                          {feature}
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              <Button className='self-start'>
                                 Learn More About {category.title}
                              </Button>
                           </CardContent>
                        </div>
                     </Card>
                  </div>
               ))}
            </div>

            <div className='mt-16 text-center'>
               <Card className='bg-gray-50'>
                  <CardContent className='p-8'>
                     <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                        Need a Custom Solution?
                     </h2>
                     <p className='text-lg text-gray-600 mb-6'>
                        We continually develop reference units from the leading computer
                        manufacturers which we are able to provide on short notice. Contact us for
                        custom requirements.
                     </p>
                     <Button asChild>
                        <a href='/contact'>Contact Our Team</a>
                     </Button>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   )
}
