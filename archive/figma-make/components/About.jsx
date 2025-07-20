import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Check, Award, Users, Clock } from 'lucide-react'

export function About() {
   const features = [
      'Industry-leading threat detection accuracy',
      '24/7 security operations center',
      'Certified cybersecurity experts',
      'Compliance with major security frameworks',
      'Rapid incident response times',
      'Comprehensive security assessments',
   ]

   const stats = [
      {
         icon: Award,
         value: '15+',
         label: 'Years Experience',
      },
      {
         icon: Users,
         value: '500+',
         label: 'Clients Protected',
      },
      {
         icon: Clock,
         value: '99.9%',
         label: 'Uptime SLA',
      },
   ]

   return (
      <section id='about' className='py-20'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
               {/* Image */}
               <div className='relative'>
                  <div className='aspect-[4/3] rounded-2xl overflow-hidden'>
                     <ImageWithFallback
                        src='https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600'
                        alt='Cybersecurity Team'
                        className='w-full h-full object-cover'
                     />
                  </div>

                  {/* Stats overlay */}
                  <div className='absolute -bottom-8 left-8 right-8'>
                     <div className='bg-card border border-border rounded-xl p-6 shadow-lg'>
                        <div className='grid grid-cols-3 gap-4'>
                           {stats.map((stat, index) => (
                              <div key={index} className='text-center'>
                                 <stat.icon className='h-6 w-6 mx-auto mb-2 text-primary' />
                                 <div className='text-lg font-semibold text-foreground'>
                                    {stat.value}
                                 </div>
                                 <div className='text-xs text-muted-foreground'>{stat.label}</div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Content */}
               <div className='space-y-8 lg:pl-8'>
                  <div className='space-y-4'>
                     <div className='inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm'>
                        About Tempest
                     </div>
                     <h2 className='text-3xl md:text-4xl tracking-tight'>
                        Why Choose Tempest for Your Cybersecurity Needs?
                     </h2>
                     <p className='text-lg text-muted-foreground leading-relaxed'>
                        With over 15 years of experience in cybersecurity, Tempest has been at the
                        forefront of protecting businesses from evolving cyber threats. Our team of
                        certified experts uses cutting-edge technology and proven methodologies to
                        safeguard your digital assets.
                     </p>
                  </div>

                  <div className='space-y-4'>
                     {features.map((feature, index) => (
                        <div key={index} className='flex items-center space-x-3'>
                           <div className='flex-shrink-0'>
                              <Check className='h-5 w-5 text-green-500' />
                           </div>
                           <span className='text-foreground'>{feature}</span>
                        </div>
                     ))}
                  </div>

                  <div className='pt-4'>
                     <Button size='lg'>Learn More About Our Approach</Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
