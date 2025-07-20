import {
   Monitor,
   Smartphone,
   Laptop,
   Printer,
   Camera,
   Phone,
   MoreHorizontal,
   ArrowRight,
} from 'lucide-react'
import { Button } from './ui/button'

const ProductsSection = () => {
   const productCategories = [
      {
         icon: Monitor,
         title: 'Computers',
         description:
            'High-security desktop systems with TEMPEST compliance and multi-domain capabilities.',
         link: '#computers',
      },
      {
         icon: Phone,
         title: 'IP Phones',
         description:
            'Secure communication devices designed for sensitive government and defense applications.',
         link: '#ip-phones',
      },
      {
         icon: Laptop,
         title: 'Laptops',
         description:
            'Portable secure computing solutions with advanced TEMPEST shielding and encryption.',
         link: '#laptops',
      },
      {
         icon: Monitor,
         title: 'Monitors',
         description:
            'TEMPEST-compliant displays with superior visual security and electromagnetic protection.',
         link: '#monitors',
      },
      {
         icon: Printer,
         title: 'Printers',
         description:
            'Secure printing solutions with advanced security features and compliance certifications.',
         link: '#printers',
      },
      {
         icon: Camera,
         title: 'Scanners',
         description:
            'High-security document scanning systems for classified and sensitive information processing.',
         link: '#scanners',
      },
      {
         icon: Monitor,
         title: 'Video Conferencing',
         description:
            'Secure video communication systems with end-to-end encryption and TEMPEST compliance.',
         link: '#video-conferencing',
      },
      {
         icon: MoreHorizontal,
         title: 'More Products',
         description: 'Explore our complete range of cybersecurity and TEMPEST solutions.',
         link: '#all-products',
      },
   ]

   return (
      <section id='products' className='py-20 lg:py-32 bg-muted/30'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='section-header'>Our Products</h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                  Comprehensive range of TEMPEST-compliant and high-security IT products designed
                  for defense, government, and critical infrastructure applications.
               </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
               {productCategories.map((category, index) => {
                  const IconComponent = category.icon
                  return (
                     <div
                        key={category.title}
                        className='card-elegant group cursor-pointer'
                        style={{ animationDelay: `${index * 100}ms` }}
                     >
                        <div className='flex flex-col items-center text-center h-full'>
                           <div className='w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                              <IconComponent className='h-8 w-8 text-white' />
                           </div>

                           <h3 className='text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors'>
                              {category.title}
                           </h3>

                           <p className='text-muted-foreground mb-6 flex-grow leading-relaxed'>
                              {category.description}
                           </p>

                           <Button
                              variant='outline'
                              asChild
                              className='w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300'
                           >
                              <a href={category.link} className='flex items-center justify-center'>
                                 Learn More
                                 <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300' />
                              </a>
                           </Button>
                        </div>
                     </div>
                  )
               })}
            </div>

            <div className='text-center mt-16'>
               <Button asChild className='btn-hero text-lg px-8 py-4 h-auto'>
                  <a href='#all-products'>
                     View All Products
                     <ArrowRight className='ml-2 h-5 w-5' />
                  </a>
               </Button>
            </div>
         </div>
      </section>
   )
}

export default ProductsSection
