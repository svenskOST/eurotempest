import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
   HelpCircle,
   Phone,
   Mail,
   FileText,
   Download,
   MessageSquare,
   Clock,
   CheckCircle2,
   AlertCircle,
} from 'lucide-react'

export default function Support() {
   const supportOptions = [
      {
         icon: Phone,
         title: 'Technical Support Hotline',
         description: 'Direct phone support for technical issues and product inquiries.',
         details: [
            'Netherlands: +31 (0) 40 290 6934',
            'Sweden: +46 10 585 52 00',
            'Business hours: 9:00 AM - 5:00 PM CET',
         ],
      },
      {
         icon: Mail,
         title: 'Email Support',
         description: 'Send detailed support requests and technical documentation.',
         details: [
            'info@eurotempest.net',
            'Response time: 24-48 hours',
            'Include product model and serial number',
         ],
      },
      {
         icon: MessageSquare,
         title: 'RMA (Return Merchandise Authorization)',
         description: 'Request authorization for product returns and repairs.',
         details: [
            'Submit RMA request online',
            'Include purchase information',
            'Tracking and status updates provided',
         ],
      },
   ]

   const supportResources = [
      {
         title: 'Product Documentation',
         description: 'Access user manuals, technical specifications, and installation guides.',
         icon: FileText,
         items: [
            'User Manuals',
            'Technical Specifications',
            'Installation Guides',
            'Configuration Files',
         ],
      },
      {
         title: 'Software Downloads',
         description: 'Download drivers, firmware updates, and configuration tools.',
         icon: Download,
         items: [
            'Device Drivers',
            'Firmware Updates',
            'Configuration Utilities',
            'Security Patches',
         ],
      },
      {
         title: 'Knowledge Base',
         description: 'Find answers to frequently asked questions and troubleshooting guides.',
         icon: HelpCircle,
         items: ['FAQ Database', 'Troubleshooting Guides', 'Best Practices', 'Common Issues'],
      },
   ]

   const supportLevels = [
      {
         level: 'Standard Support',
         badge: 'Included',
         color: 'bg-green-100 text-green-800',
         features: [
            'Email support',
            'Phone support during business hours',
            'Access to documentation',
            'Software downloads',
         ],
      },
      {
         level: 'Priority Support',
         badge: 'Premium',
         color: 'bg-blue-100 text-blue-800',
         features: [
            'Priority email and phone support',
            'Extended support hours',
            'Direct technical contact',
            'Priority RMA processing',
         ],
      },
      {
         level: 'Enterprise Support',
         badge: 'Custom',
         color: 'bg-purple-100 text-purple-800',
         features: [
            'Dedicated support manager',
            '24/7 critical issue support',
            'On-site support options',
            'Custom SLA agreements',
         ],
      },
   ]

   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                  Product Support
               </h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Get comprehensive support for your Eurotempest products with our expert technical
                  team and extensive resources.
               </p>
            </div>

            {/* Support Options */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
               {supportOptions.map((option, index) => (
                  <Card key={index} className='hover-lift'>
                     <CardContent className='p-6 text-center'>
                        <div className='bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4'>
                           <option.icon className='h-10 w-10 text-primary' />
                        </div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>{option.title}</h3>
                        <p className='text-gray-600 mb-4'>{option.description}</p>
                        <div className='space-y-2'>
                           {option.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className='text-sm text-gray-500'>
                                 {detail}
                              </p>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* Support Resources */}
            <div className='mb-16'>
               <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
                  Support Resources
               </h2>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {supportResources.map((resource, index) => (
                     <Card key={index} className='hover-lift'>
                        <CardContent className='p-6'>
                           <div className='flex items-center mb-4'>
                              <div className='bg-primary/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center mr-4'>
                                 <resource.icon className='h-6 w-6 text-primary' />
                              </div>
                              <div>
                                 <h3 className='text-lg font-semibold text-gray-900'>
                                    {resource.title}
                                 </h3>
                              </div>
                           </div>
                           <p className='text-gray-600 mb-4'>{resource.description}</p>
                           <div className='space-y-2'>
                              {resource.items.map((item, itemIndex) => (
                                 <div
                                    key={itemIndex}
                                    className='flex items-center text-sm text-gray-600'
                                 >
                                    <CheckCircle2 className='h-4 w-4 text-green-500 mr-2' />
                                    {item}
                                 </div>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>

            {/* Support Levels */}
            <div className='mb-16'>
               <h2 className='text-3xl font-bold text-gray-900 mb-8 text-center'>Support Levels</h2>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {supportLevels.map((level, index) => (
                     <Card key={index} className='hover-lift'>
                        <CardContent className='p-6'>
                           <div className='flex items-center justify-between mb-4'>
                              <h3 className='text-lg font-semibold text-gray-900'>{level.level}</h3>
                              <Badge className={level.color}>{level.badge}</Badge>
                           </div>
                           <div className='space-y-3'>
                              {level.features.map((feature, featureIndex) => (
                                 <div
                                    key={featureIndex}
                                    className='flex items-center text-sm text-gray-600'
                                 >
                                    <CheckCircle2 className='h-4 w-4 text-green-500 mr-2' />
                                    {feature}
                                 </div>
                              ))}
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>

            {/* RMA Section */}
            <Card className='bg-gray-50'>
               <CardContent className='p-8'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
                     <div>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                           RMA (Return Merchandise Authorization)
                        </h2>
                        <p className='text-lg text-gray-600 mb-6'>
                           Need to return or repair a product? Our RMA process ensures quick and
                           efficient handling of your return requests with full tracking and status
                           updates.
                        </p>
                        <div className='space-y-3 mb-6'>
                           <div className='flex items-center text-gray-600'>
                              <Clock className='h-5 w-5 text-primary mr-2' />
                              <span>Fast processing times</span>
                           </div>
                           <div className='flex items-center text-gray-600'>
                              <CheckCircle2 className='h-5 w-5 text-primary mr-2' />
                              <span>Full tracking and status updates</span>
                           </div>
                           <div className='flex items-center text-gray-600'>
                              <AlertCircle className='h-5 w-5 text-primary mr-2' />
                              <span>Expert technical evaluation</span>
                           </div>
                        </div>
                        <Button>Submit RMA Request</Button>
                     </div>
                     <div className='text-center'>
                        <div className='bg-white rounded-lg p-6 shadow-sm'>
                           <h3 className='text-lg font-semibold text-gray-900 mb-4'>RMA Process</h3>
                           <div className='space-y-4'>
                              <div className='flex items-center'>
                                 <div className='bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-bold mr-3'>
                                    1
                                 </div>
                                 <span className='text-sm text-gray-600'>Submit RMA request</span>
                              </div>
                              <div className='flex items-center'>
                                 <div className='bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-bold mr-3'>
                                    2
                                 </div>
                                 <span className='text-sm text-gray-600'>
                                    Receive authorization
                                 </span>
                              </div>
                              <div className='flex items-center'>
                                 <div className='bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-bold mr-3'>
                                    3
                                 </div>
                                 <span className='text-sm text-gray-600'>Ship product</span>
                              </div>
                              <div className='flex items-center'>
                                 <div className='bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-bold mr-3'>
                                    4
                                 </div>
                                 <span className='text-sm text-gray-600'>Receive resolution</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
