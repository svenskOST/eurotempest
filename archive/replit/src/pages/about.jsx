import { Card, CardContent } from '@/components/ui/card'

export default function About() {
   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                  About Eurotempest
               </h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Specializing in high-assurance IT products and systems for defense and government
                  customers.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
               <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Who We Are</h2>
                  <p className='text-lg text-gray-600 mb-6'>
                     Eurotempest specialises in qualified defence- and government customers' needs
                     of high-assurance IT products and systems. Our products are used throughout EU
                     and NATO in over 30 countries, by national as well as central authorities.
                  </p>
                  <p className='text-lg text-gray-600 mb-6'>
                     Our customers enjoy being able to select the latest technology with confidence
                     that formal requirements and standards are met.
                  </p>
                  <Card className='bg-gray-50'>
                     <CardContent className='p-6'>
                        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Our Background</h3>
                        <p className='text-gray-600'>
                           Eurotempest operations in the Netherlands and in Sweden are part of
                           Eurotempest AB group, the IT branch of Boxholms AB group. Boxholm AB is
                           one of Sweden's oldest industrial companies with stable finances and a
                           solid trading record.
                        </p>
                     </CardContent>
                  </Card>
               </div>
               <div>
                  <img
                     src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
                     alt='Modern office building interior'
                     className='rounded-lg shadow-lg'
                  />
               </div>
            </div>

            <div className='mb-16'>
               <p className='text-lg text-gray-600 mb-8 text-center'>
                  Eurotempest staff has decades of experience from various high-assurance projects
                  involving TEMPEST, environmental requirements and crypto.
               </p>
            </div>

            <div>
               <h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
                  Our Product Development Policy
               </h3>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <Card className='bg-gray-50'>
                     <CardContent className='p-6'>
                        <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                           Latest Technology
                        </h4>
                        <p className='text-gray-600'>
                           Our ambition is that our customers should be able to select the latest
                           and most adequate commercial IT equipment for their needs and be able
                           order the corresponding certified unit from Eurotempest. We continually
                           develop reference units from the leading computer manufacturers which we
                           are able to provide on short notice.
                        </p>
                     </CardContent>
                  </Card>
                  <Card className='bg-gray-50'>
                     <CardContent className='p-6'>
                        <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                           Manufacturing Partners
                        </h4>
                        <p className='text-gray-600'>
                           We have parallel process flows for development, production, production
                           testing and TEMPEST reference testing and duplicate test chambers. We
                           work directly with most of the major manufacturers of IT equipment and
                           have partnering agreements with companies like Panasonic, HP, DELL,
                           Fujitsu, Sharp NEC and Allied Telesis.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </div>
   )
}
