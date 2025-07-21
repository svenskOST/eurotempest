import { Shield, Network, Zap, Settings, Eye, Lock } from 'lucide-react'

const SolutionsSection = () => {
   const solutions = [
      {
         icon: Eye,
         title: 'Data Visibility Protection',
         description:
            'Advanced TEMPEST solutions that prevent electromagnetic emanations from revealing sensitive data to unauthorized parties.',
         features: [
            'Electromagnetic shielding',
            'Signal suppression',
            'Compliance testing',
            'Risk assessment',
         ],
      },
      {
         icon: Network,
         title: 'Multi-Domain Computing',
         description:
            'Secure separation between different security domains with galvanic isolation and air-gap protection.',
         features: [
            'Domain separation',
            'Galvanic isolation',
            'Secure switching',
            'Cross-domain solutions',
         ],
      },
      {
         icon: Zap,
         title: 'TEMPEST Expertise',
         description:
            'Certified testing laboratories and expert technicians providing comprehensive TEMPEST evaluation services.',
         features: [
            'Certified testing',
            'Compliance verification',
            'Technical consultation',
            'Standards compliance',
         ],
      },
      {
         icon: Settings,
         title: 'All-in-One Solutions',
         description:
            'Space-efficient integrated systems combining multiple security functions in compact form factors.',
         features: ['Compact design', 'Integrated security', 'Easy deployment', 'Cost-effective'],
      },
      {
         icon: Shield,
         title: 'High Assurance Systems',
         description:
            'Military-grade security solutions designed for the most demanding defense and government applications.',
         features: [
            'Military standards',
            'Security clearance',
            'Rugged design',
            'Mission-critical reliability',
         ],
      },
      {
         icon: Lock,
         title: 'Custom Security Solutions',
         description:
            'Tailored cybersecurity implementations designed to meet specific organizational requirements and threat models.',
         features: [
            'Custom development',
            'Threat modeling',
            'Security architecture',
            'Implementation support',
         ],
      },
   ]

   return (
      <section id='solutions' className='py-20 lg:py-32'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='section-header'>Security Solutions</h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                  Comprehensive cybersecurity and TEMPEST solutions designed to protect your most
                  sensitive information and critical infrastructure from advanced threats.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
               {solutions.map((solution, index) => {
                  const IconComponent = solution.icon
                  return (
                     <div
                        key={solution.title}
                        className='card-elegant group'
                        style={{ animationDelay: `${index * 150}ms` }}
                     >
                        <div className='flex items-start space-x-6'>
                           <div className='flex-shrink-0'>
                              <div className='w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                 <IconComponent className='h-7 w-7 text-white' />
                              </div>
                           </div>

                           <div className='flex-grow'>
                              <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors'>
                                 {solution.title}
                              </h3>

                              <p className='text-muted-foreground mb-4 leading-relaxed'>
                                 {solution.description}
                              </p>

                              <ul className='space-y-2'>
                                 {solution.features.map((feature, featureIndex) => (
                                    <li
                                       key={featureIndex}
                                       className='flex items-center text-sm text-muted-foreground'
                                    >
                                       <div className='w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0' />
                                       {feature}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  )
               })}
            </div>

            <div className='mt-16 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center'>
               <h3 className='text-2xl lg:text-3xl font-bold text-white mb-4'>
                  Need a Custom Solution?
               </h3>
               <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
                  Our expert team can design and implement tailored security solutions to meet your
                  specific requirements and compliance needs.
               </p>
               <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button className='bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105'>
                     Schedule Consultation
                  </button>
                  <button className='border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300'>
                     Download Brochure
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SolutionsSection
