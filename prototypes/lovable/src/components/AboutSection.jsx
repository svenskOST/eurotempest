import { Award, Users, Globe, CheckCircle } from 'lucide-react'

const AboutSection = () => {
   const stats = [
      {
         icon: Award,
         number: '25+',
         label: 'Years Experience',
         description: 'Decades of expertise in cybersecurity and TEMPEST solutions',
      },
      {
         icon: Users,
         number: '500+',
         label: 'Government Clients',
         description: 'Trusted by defense and government organizations worldwide',
      },
      {
         icon: Globe,
         number: '50+',
         label: 'Countries Served',
         description: 'Global reach with local support and compliance expertise',
      },
      {
         icon: CheckCircle,
         number: '100%',
         label: 'Compliance Rate',
         description: 'Perfect track record for meeting security standards',
      },
   ]

   const credentials = [
      'NATO TEMPEST Certification',
      'EU Common Criteria Evaluation',
      'US NIST Cybersecurity Framework',
      'ISO 27001 Information Security',
      'FIPS 140-2 Cryptographic Module',
      'Common Criteria EAL4+',
   ]

   return (
      <section id='about' className='py-20 lg:py-32 bg-muted/30'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='section-header'>About Eurotempest</h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
                  Leading provider of high-assurance IT products and cybersecurity solutions for
                  defense, government, and critical infrastructure applications worldwide.
               </p>
            </div>

            {/* Company Overview */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
               <div className='slide-up'>
                  <h3 className='text-3xl font-bold text-foreground mb-6'>
                     Protecting What Matters Most
                  </h3>
                  <p className='text-lg text-muted-foreground mb-6 leading-relaxed'>
                     Eurotempest provides high-assurance IT products to qualified defense and
                     government customers. We modify or enhance off-the-shelf IT products and
                     networking solutions to meet formal EU, NATO or bespoke standards for formal
                     compliance.
                  </p>
                  <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                     Our expertise spans TEMPEST testing, electromagnetic compatibility (EMC),
                     cybersecurity, and multi-domain computing solutions. We operate
                     state-of-the-art laboratories with certified testers and cutting-edge
                     equipment.
                  </p>

                  <div className='grid grid-cols-2 gap-4'>
                     {credentials.map((credential, index) => (
                        <div key={index} className='flex items-center space-x-2'>
                           <CheckCircle className='h-5 w-5 text-accent flex-shrink-0' />
                           <span className='text-sm text-muted-foreground'>{credential}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className='relative slide-up'>
                  <div className='bg-gradient-primary rounded-2xl p-8 text-white'>
                     <h4 className='text-2xl font-bold mb-6 text-center'>Our Mission</h4>
                     <p className='text-lg leading-relaxed text-center text-white/90'>
                        To deliver cutting-edge cybersecurity and TEMPEST solutions that protect
                        sensitive information and critical infrastructure, enabling our clients to
                        operate securely in an increasingly connected world.
                     </p>
                  </div>
               </div>
            </div>

            {/* Statistics */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
               {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                     <div
                        key={stat.label}
                        className='text-center card-elegant'
                        style={{ animationDelay: `${index * 100}ms` }}
                     >
                        <div className='w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4'>
                           <IconComponent className='h-8 w-8 text-white' />
                        </div>
                        <div className='text-3xl lg:text-4xl font-bold text-foreground mb-2'>
                           {stat.number}
                        </div>
                        <div className='text-lg font-semibold text-accent mb-2'>{stat.label}</div>
                        <p className='text-sm text-muted-foreground leading-relaxed'>
                           {stat.description}
                        </p>
                     </div>
                  )
               })}
            </div>

            {/* Call to Action */}
            <div className='mt-16 text-center'>
               <h3 className='text-2xl lg:text-3xl font-bold text-foreground mb-4'>
                  Ready to Secure Your Infrastructure?
               </h3>
               <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
                  Contact our expert team to discuss your cybersecurity requirements and discover
                  how we can help protect your critical assets.
               </p>
               <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <button className='btn-hero'>Contact Us Today</button>
                  <button className='border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300'>
                     View Credentials
                  </button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutSection
