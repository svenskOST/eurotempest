import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Bell } from 'lucide-react'

export default function Announcements() {
   const announcements = [
      {
         id: 1,
         title: 'Expanded Nuenen Facility with New Logistics Center',
         date: '2024-03-01',
         category: 'Facility Expansion',
         excerpt:
            'Eurotempest has expanded its Nuenen facility with a logistics center in the Netherlands, increasing delivery capacity and production workflow with state-of-the-art automated systems.',
         priority: 'high',
         image: '/images/et_facegraphics.jpg',
      },
      {
         id: 2,
         title: 'New TEMPEST Conference Speaker SP 20T-A Available',
         date: '2021-11-01',
         category: 'Product Release',
         excerpt:
            'The TEMPEST conference speaker Modulus SP 20T-A is compliant with the NATO SDIP-27 standard, Level A. It can be used for medium-sized conferences with up to 8 participants.',
         priority: 'medium',
         image: '/images/anachoic.png',
      },
      {
         id: 3,
         title: 'Second TEMPEST Laboratory in Linköping, Sweden',
         date: '2020-10-01',
         category: 'Facility Update',
         excerpt:
            'Eurotempest has invested in a second laboratory for TEMPEST testing in Linköping, Sweden, adding two more test chambers for increased delivery capacity.',
         priority: 'medium',
         image: '/images/mpc20.png',
      },
      {
         id: 4,
         title: 'Exhibition at NATO Information Assurance Symposium',
         date: '2018-10-01',
         category: 'Exhibition',
         excerpt:
            'Eurotempest exhibits at NIAS in Belgium, showcasing 3rd generation All-in-One PC, updated multi-layer PC and rugged PC for naval use.',
         priority: 'low',
         image: '/images/sff_new.png',
      },
      {
         id: 5,
         title: 'New Dutch Operations Facility in Nuenen',
         date: '2018-01-01',
         category: 'Facility Move',
         excerpt:
            'Eurotempest moves Dutch operations to new building in Nuenen to increase TEMPEST measurement capacity and improve workflow efficiency.',
         priority: 'medium',
         image: '/images/collse_heide.jpg',
      },
   ]

   const getPriorityColor = priority => {
      switch (priority) {
         case 'high':
            return 'bg-red-100 text-red-800'
         case 'medium':
            return 'bg-yellow-100 text-yellow-800'
         case 'low':
            return 'bg-green-100 text-green-800'
         default:
            return 'bg-gray-100 text-gray-800'
      }
   }

   const formatDate = dateString => {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
         year: 'numeric',
         month: 'long',
         day: 'numeric',
      })
   }

   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Announcements</h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Stay updated with the latest news, product releases, and important information
                  from Eurotempest.
               </p>
            </div>

            <div className='space-y-6'>
               {announcements.map(announcement => (
                  <Card key={announcement.id} className='hover-lift overflow-hidden'>
                     <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                        <div className='md:col-span-1'>
                           <img
                              src={announcement.image}
                              alt={announcement.title}
                              className='w-full h-48 md:h-full object-cover'
                           />
                        </div>
                        <div className='md:col-span-3'>
                           <CardContent className='p-6'>
                              <div className='flex items-start justify-between mb-4'>
                                 <div className='flex items-center space-x-3'>
                                    <div className='bg-primary/10 rounded-full p-2'>
                                       <Bell className='h-5 w-5 text-primary' />
                                    </div>
                                    <div>
                                       <h2 className='text-xl font-semibold text-gray-900'>
                                          {announcement.title}
                                       </h2>
                                       <div className='flex items-center space-x-4 mt-1'>
                                          <div className='flex items-center text-gray-500'>
                                             <CalendarDays className='h-4 w-4 mr-1' />
                                             <span className='text-sm'>
                                                {formatDate(announcement.date)}
                                             </span>
                                          </div>
                                          <Badge variant='outline'>{announcement.category}</Badge>
                                       </div>
                                    </div>
                                 </div>
                                 <Badge className={getPriorityColor(announcement.priority)}>
                                    {announcement.priority.charAt(0).toUpperCase() +
                                       announcement.priority.slice(1)}
                                 </Badge>
                              </div>
                              <p className='text-gray-600 leading-relaxed'>
                                 {announcement.excerpt}
                              </p>
                           </CardContent>
                        </div>
                     </div>
                  </Card>
               ))}
            </div>

            <div className='mt-12 text-center'>
               <Card className='bg-gray-50'>
                  <CardContent className='p-8'>
                     <h2 className='text-2xl font-bold text-gray-900 mb-4'>Stay Informed</h2>
                     <p className='text-lg text-gray-600 mb-6'>
                        For the latest updates and detailed information about our products and
                        services, please contact our team directly.
                     </p>
                     <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <div className='text-center'>
                           <p className='text-sm text-gray-500'>Netherlands Office</p>
                           <p className='font-semibold text-gray-900'>+31 (0) 40 290 6934</p>
                        </div>
                        <div className='text-center'>
                           <p className='text-sm text-gray-500'>Sweden Office</p>
                           <p className='font-semibold text-gray-900'>+46 10 585 52 00</p>
                        </div>
                        <div className='text-center'>
                           <p className='text-sm text-gray-500'>Email</p>
                           <p className='font-semibold text-gray-900'>info@eurotempest.net</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </div>
   )
}
