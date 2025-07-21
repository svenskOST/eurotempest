import HeroCarousel from '@/components/hero-carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Laptop, Network, Settings } from 'lucide-react'
import { Link } from 'wouter'

export default function Home() {
   const services = [
      {
         icon: Shield,
         title: 'Data Visibility',
         description: 'High assurance IT products for defense and government applications.',
      },
      {
         icon: Laptop,
         title: 'Evolving Design',
         description: "The market's most sought-after brands drive our product design.",
      },
      {
         icon: Network,
         title: 'Multi-domain Computing',
         description: 'Galvanic separation between domains for enhanced security.',
      },
      {
         icon: Settings,
         title: 'All-in-one Solutions',
         description: 'Space-saving alternatives for efficient deployment.',
      },
   ]

   const products = [
      {
         title: 'Computers',
         description: 'High-performance computing solutions for secure environments.',
         image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#computers',
      },
      {
         title: 'Laptops',
         description: 'Portable computing solutions with enhanced security features.',
         image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#laptops',
      },
      {
         title: 'Monitors',
         description: 'Professional displays for critical applications.',
         image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#monitors',
      },
      {
         title: 'Printers',
         description: 'Secure printing solutions for sensitive documents.',
         image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#printers',
      },
      {
         title: 'IP Phones',
         description: 'Secure communication devices for professional environments.',
         image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#ip-phones',
      },
      {
         title: 'Video Conferencing',
         description: 'High-quality video communication systems.',
         image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
         link: '/products#video-conferencing',
      },
   ]

   return (
      <div>
         <HeroCarousel />

         {/* Services Overview */}
         <section className='py-20 bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                     Our Expertise
                  </h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                     Specialized solutions for defense and government customers requiring
                     high-assurance IT products and systems.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                  {services.map((service, index) => (
                     <Card key={index} className='hover-lift'>
                        <CardContent className='p-6'>
                           <div className='bg-primary/10 rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-6'>
                              <service.icon className='h-8 w-8 text-primary' />
                           </div>
                           <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                              {service.title}
                           </h3>
                           <p className='text-gray-600 leading-relaxed'>{service.description}</p>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Products Section */}
         <section className='py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                     Our Products
                  </h2>
                  <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                     Comprehensive range of high-assurance IT equipment for defense and government
                     applications.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {products.map((product, index) => (
                     <Card key={index} className='overflow-hidden hover-lift'>
                        <img
                           src={product.image}
                           alt={product.title}
                           className='w-full h-48 object-cover'
                        />
                        <CardContent className='p-6'>
                           <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                              {product.title}
                           </h3>
                           <p className='text-gray-600 mb-4 leading-relaxed'>
                              {product.description}
                           </p>
                           <Button
                              variant='link'
                              className='p-0 h-auto text-primary hover:text-primary/80 font-medium'
                           >
                              <Link href={product.link}>Learn More →</Link>
                           </Button>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>
      </div>
   )
}
