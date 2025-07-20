import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

// Import images
import heroDataVisibility from '../assets/hero-data-visibility.jpg'
import heroEvolvingDesign from '../assets/hero-evolving-design.png'
import heroMultiDomain from '../assets/hero-multi-domain.png'
import heroTempestExpertise from '../assets/hero-tempest-expertise.png'
import heroAllInOne from '../assets/hero-all-in-one.png'

const HeroCarousel = () => {
   const [currentSlide, setCurrentSlide] = useState(0)

   const slides = [
      {
         id: 1,
         title: 'How visible is your data?',
         subtitle: 'High assurance IT products for defense and government',
         description:
            'Protecting sensitive information with state-of-the-art TEMPEST and EMC solutions for mission-critical environments.',
         image: heroDataVisibility,
         cta: 'Learn More',
         link: '#solutions',
      },
      {
         id: 2,
         title: 'Evolving design',
         subtitle: "The market's most sought-after brands drive our product design",
         description:
            'Innovative thin-client computing solutions designed to meet the highest security standards while maintaining exceptional performance.',
         image: heroEvolvingDesign,
         cta: 'View Products',
         link: '#products',
      },
      {
         id: 3,
         title: 'Multi-domain computing',
         subtitle: 'Galvanic separation between domains',
         description:
            'Advanced multi-domain solutions providing secure separation between different security levels and classification domains.',
         image: heroMultiDomain,
         cta: 'Explore Solutions',
         link: '#solutions',
      },
      {
         id: 4,
         title: 'TEMPEST expertise',
         subtitle: 'Certified testers and state-of-the-art laboratories',
         description:
            'Comprehensive TEMPEST testing and certification services with cutting-edge laboratory facilities and expert technicians.',
         image: heroTempestExpertise,
         cta: 'Our Credentials',
         link: '#credentials',
      },
      {
         id: 5,
         title: 'All-in-one solutions',
         subtitle: 'Space-saving alternatives',
         description:
            'Compact, integrated solutions that maximize functionality while minimizing footprint for space-constrained environments.',
         image: heroAllInOne,
         cta: 'See Products',
         link: '#products',
      },
   ]

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentSlide(prev => (prev + 1) % slides.length)
      }, 6000)

      return () => clearInterval(timer)
   }, [slides.length])

   const nextSlide = () => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
   }

   const prevSlide = () => {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
   }

   const goToSlide = index => {
      setCurrentSlide(index)
   }

   return (
      <section id='home' className='relative h-screen overflow-hidden'>
         {/* Slides */}
         <div className='relative h-full'>
            {slides.map((slide, index) => (
               <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                     index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                  }`}
               >
                  {/* Background Image */}
                  <div
                     className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                     style={{ backgroundImage: `url(${slide.image})` }}
                  >
                     <div className='absolute inset-0 hero-gradient opacity-80' />
                  </div>

                  {/* Content */}
                  <div className='relative h-full flex items-center'>
                     <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='max-w-4xl'>
                           <div className='fade-in'>
                              <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
                                 {slide.title}
                              </h1>
                              <p className='text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium'>
                                 {slide.subtitle}
                              </p>
                              <p className='text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed'>
                                 {slide.description}
                              </p>
                              <div className='flex flex-col sm:flex-row gap-4'>
                                 <Button asChild className='btn-hero text-lg px-8 py-4 h-auto'>
                                    <a href={slide.link}>
                                       {slide.cta}
                                       <ArrowRight className='ml-2 h-5 w-5' />
                                    </a>
                                 </Button>
                                 <Button
                                    variant='outline'
                                    asChild
                                    className='text-lg px-8 py-4 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20'
                                 >
                                    <a href='#contact'>Contact Us</a>
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         {/* Navigation Arrows */}
         <button
            onClick={prevSlide}
            className='absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 text-white hover:scale-110'
            aria-label='Previous slide'
         >
            <ChevronLeft className='h-6 w-6' />
         </button>
         <button
            onClick={nextSlide}
            className='absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 text-white hover:scale-110'
            aria-label='Next slide'
         >
            <ChevronRight className='h-6 w-6' />
         </button>

         {/* Slide Indicators */}
         <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3'>
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                     index === currentSlide
                        ? 'bg-white shadow-lg scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

         {/* Scroll indicator */}
         <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce'>
            <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
               <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse' />
            </div>
         </div>
      </section>
   )
}

export default HeroCarousel
