import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwipeable } from 'react-swipeable'

const slides = [
   {
      id: 1,
      title: 'How visible is your data?',
      subtitle: 'High assurance IT products for defense and government',
      image: '/images/et_facegraphics.jpg',
      cta: 'Explore Products',
      ctaLink: '/products',
   },
   {
      id: 2,
      title: 'Evolving design',
      subtitle: "– The market's most sought-after brands drive our product design –",
      image: '/images/sff_new.png',
      cta: 'View Products',
      ctaLink: '/products',
   },
   {
      id: 3,
      title: 'Multi-domain computing',
      subtitle: 'Galvanic separation between domains',
      image: '/images/mpc20.png',
      cta: 'Learn More',
      ctaLink: '/about',
   },
   {
      id: 4,
      title: 'TEMPEST expertise',
      subtitle: 'Certified testers and state-of-the-art laboratories',
      image: '/images/anachoic.png',
      cta: 'View Credentials',
      ctaLink: '/credentials',
   },
   {
      id: 5,
      title: 'All-in-one solutions',
      subtitle: 'Space-saving alternatives',
      image: '/images/aio1920.png',
      cta: 'Explore Solutions',
      ctaLink: '/products',
   },
]

export default function HeroCarousel() {
   const [currentSlide, setCurrentSlide] = useState(0)
   const [isPaused, setIsPaused] = useState(false)

   useEffect(() => {
      if (isPaused) return

      const timer = setInterval(() => {
         setCurrentSlide(prev => (prev + 1) % slides.length)
      }, 6000)

      return () => clearInterval(timer)
   }, [isPaused])

   const goToSlide = index => {
      setCurrentSlide(index)
   }

   const nextSlide = () => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
   }

   const prevSlide = () => {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
   }

   const swipeHandlers = useSwipeable({
      onSwipedLeft: nextSlide,
      onSwipedRight: prevSlide,
      trackMouse: true,
      preventScrollOnSwipe: true,
   })

   return (
      <section
         className='relative h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
         {...swipeHandlers}
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
      >
         {slides.map((slide, index) => (
            <div
               key={slide.id}
               className={`carousel-slide absolute inset-0 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
               }`}
            >
               <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-gray-900/60 z-10' />
               <img src={slide.image} alt={slide.title} className='w-full h-full object-cover' />
               <div className='absolute inset-0 flex items-center z-20'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                     <div className='max-w-3xl'>
                        <h1 className='text-4xl md:text-6xl font-bold mb-6 text-white fade-in'>
                           {slide.title}
                        </h1>
                        <p className='text-xl md:text-2xl mb-8 text-gray-200 fade-in leading-relaxed'>
                           {slide.subtitle}
                        </p>
                        <Button
                           asChild
                           className='bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold fade-in shadow-lg hover:shadow-xl transition-all duration-300'
                        >
                           <a href={slide.ctaLink}>{slide.cta}</a>
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         ))}

         {/* Navigation Arrows */}
         <button
            onClick={prevSlide}
            className='absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 text-white/80 hover:text-white transition-all duration-300'
            aria-label='Previous slide'
         >
            <ChevronLeft className='h-6 w-6' />
         </button>
         <button
            onClick={nextSlide}
            className='absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 text-white/80 hover:text-white transition-all duration-300'
            aria-label='Next slide'
         >
            <ChevronRight className='h-6 w-6' />
         </button>

         {/* Dots Navigation */}
         <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30'>
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                     index === currentSlide
                        ? 'bg-primary scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>
      </section>
   )
}
