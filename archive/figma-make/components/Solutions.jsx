import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowRight, Zap, Shield, Target } from 'lucide-react'

export function Solutions() {
   const solutions = [
      {
         icon: Zap,
         title: 'Rapid Response',
         description:
            'Immediate threat neutralization with our advanced AI-powered security platform.',
         features: ['Real-time threat detection', 'Automated response', 'Zero-day protection'],
         image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400',
         color: 'bg-blue-500/10 text-blue-600',
      },
      {
         icon: Shield,
         title: 'Enterprise Protection',
         description:
            'Comprehensive security suite designed for large-scale enterprise environments.',
         features: ['Multi-layer defense', 'Compliance management', 'Risk assessment'],
         image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600&h=400',
         color: 'bg-green-500/10 text-green-600',
      },
      {
         icon: Target,
         title: 'Targeted Security',
         description:
            'Customized security solutions tailored to your specific industry and threat landscape.',
         features: ['Industry-specific solutions', 'Custom threat modeling', 'Dedicated support'],
         image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600&h=400',
         color: 'bg-purple-500/10 text-purple-600',
      },
   ]

   return (
      <section id='solutions' className='py-20 bg-muted/30'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16'>
               <h2 className='text-3xl md:text-4xl tracking-tight'>Advanced Security Solutions</h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                  Our cutting-edge cybersecurity solutions are designed to adapt and evolve with the
                  changing threat landscape.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
               {solutions.map((solution, index) => (
                  <Card
                     key={index}
                     className='group hover:shadow-xl transition-all duration-300 overflow-hidden'
                  >
                     <div className='aspect-video overflow-hidden'>
                        <ImageWithFallback
                           src={solution.image}
                           alt={solution.title}
                           className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                     </div>

                     <CardHeader className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                           <div className={`p-2 rounded-lg ${solution.color}`}>
                              <solution.icon className='h-6 w-6' />
                           </div>
                           <CardTitle className='text-xl'>{solution.title}</CardTitle>
                        </div>
                        <CardDescription className='text-base leading-relaxed'>
                           {solution.description}
                        </CardDescription>
                     </CardHeader>

                     <CardContent className='space-y-4'>
                        <div className='flex flex-wrap gap-2'>
                           {solution.features.map((feature, featureIndex) => (
                              <Badge key={featureIndex} variant='secondary' className='text-xs'>
                                 {feature}
                              </Badge>
                           ))}
                        </div>

                        <div className='flex items-center text-primary group-hover:text-primary/80 transition-colors cursor-pointer'>
                           <span className='text-sm'>Learn More</span>
                           <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   )
}
