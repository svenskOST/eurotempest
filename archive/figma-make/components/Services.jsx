import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Shield, Lock, Eye, Database, Cloud, Users } from 'lucide-react'

export function Services() {
   const services = [
      {
         icon: Shield,
         title: 'Threat Detection & Response',
         description:
            'Advanced AI-powered threat detection with real-time response capabilities to neutralize cyber attacks before they impact your business.',
      },
      {
         icon: Lock,
         title: 'Endpoint Security',
         description:
            'Comprehensive protection for all devices in your network, ensuring every endpoint is secured against malware and unauthorized access.',
      },
      {
         icon: Eye,
         title: 'Security Monitoring',
         description:
            '24/7 security operations center monitoring your infrastructure with expert analysts ready to respond to any security incident.',
      },
      {
         icon: Database,
         title: 'Data Protection',
         description:
            'Enterprise-grade encryption and data loss prevention solutions to keep your sensitive information secure and compliant.',
      },
      {
         icon: Cloud,
         title: 'Cloud Security',
         description:
            'Secure your cloud infrastructure with comprehensive security solutions designed for modern cloud environments and hybrid setups.',
      },
      {
         icon: Users,
         title: 'Security Training',
         description:
            'Employee cybersecurity awareness training to build your human firewall and reduce the risk of social engineering attacks.',
      },
   ]

   return (
      <section id='services' className='py-20 bg-muted/30'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16'>
               <h2 className='text-3xl md:text-4xl tracking-tight'>
                  Comprehensive Cybersecurity Services
               </h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                  From threat detection to employee training, we provide end-to-end cybersecurity
                  solutions tailored to your business needs.
               </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {services.map((service, index) => (
                  <Card
                     key={index}
                     className='group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border'
                  >
                     <CardHeader>
                        <div className='flex items-center space-x-3'>
                           <div className='p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                              <service.icon className='h-6 w-6' />
                           </div>
                           <CardTitle className='text-lg'>{service.title}</CardTitle>
                        </div>
                     </CardHeader>
                     <CardContent>
                        <CardDescription className='text-base leading-relaxed'>
                           {service.description}
                        </CardDescription>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   )
}
