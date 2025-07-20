import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
   return (
      <section className='pt-24 pb-12 md:pt-32 md:pb-20'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
               {/* Content */}
               <div className='space-y-8'>
                  <div className='space-y-4'>
                     <div className='inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm'>
                        <span>🔒 Enterprise Cybersecurity Solutions</span>
                     </div>
                     <h1 className='text-4xl md:text-5xl lg:text-6xl tracking-tight'>
                        Protect Your Business from
                        <span className='text-primary'> Cyber Threats</span>
                     </h1>
                     <p className='text-xl text-muted-foreground leading-relaxed'>
                        Advanced cybersecurity solutions that safeguard your digital assets, ensure
                        compliance, and give you peace of mind in an increasingly connected world.
                     </p>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4'>
                     <Button size='lg' className='group'>
                        Get Free Security Assessment
                        <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                     </Button>
                     <Button variant='outline' size='lg' className='group'>
                        <Play className='mr-2 h-4 w-4' />
                        Watch Demo
                     </Button>
                  </div>

                  <div className='flex items-center space-x-8 pt-4'>
                     <div className='text-center'>
                        <div className='text-2xl font-semibold text-foreground'>99.9%</div>
                        <div className='text-sm text-muted-foreground'>Threat Detection</div>
                     </div>
                     <div className='text-center'>
                        <div className='text-2xl font-semibold text-foreground'>24/7</div>
                        <div className='text-sm text-muted-foreground'>Monitoring</div>
                     </div>
                     <div className='text-center'>
                        <div className='text-2xl font-semibold text-foreground'>500+</div>
                        <div className='text-sm text-muted-foreground'>Clients Protected</div>
                     </div>
                  </div>
               </div>

               {/* Image */}
               <div className='relative'>
                  <div className='aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8'>
                     <ImageWithFallback
                        src='https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800&h=800'
                        alt='Cybersecurity Dashboard'
                        className='w-full h-full object-cover rounded-xl'
                     />
                  </div>

                  {/* Floating cards */}
                  <div className='absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg'>
                     <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                        <span className='text-sm'>Secure</span>
                     </div>
                  </div>

                  <div className='absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg'>
                     <div className='flex items-center space-x-2'>
                        <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                        <span className='text-sm'>Protected</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
