import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
   const slides = [
      {
         title: 'TEMPEST and Rugged Equipment',
         description: 'High-assurance IT products for qualified defence and government customers',
         image: '/public/img1.jpg',
      },
      {
         title: 'Evolving Design',
         description: "The market's most sought-after brands drive our product design",
         image: '/images/carousel/evolving-design.jpg',
      },
      {
         title: 'Multi-layer Security',
         description: 'Multi-domain computing solutions for confined spaces',
         image: '/images/carousel/multi-layer.jpg',
      },
   ]

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
      ],
   }

   useEffect(() => {
      // Preload images
      slides.forEach(slide => {
         const img = new Image()
         img.src = slide.image
      })
   }, [])

   return (
      <div className='relative'>
         <Slider {...settings}>
            {slides.map((slide, index) => (
               <div key={index} className='relative h-[80vh] bg-gray-900'>
                  <div
                     className='absolute inset-0 bg-cover bg-center'
                     style={{
                        backgroundImage: `url(${slide.image})`,
                        filter: 'brightness(0.7)',
                     }}
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70' />
                  <div className='relative h-full flex items-center z-10'>
                     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='max-w-3xl'>
                           <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                              {slide.title}
                           </h2>
                           <p className='text-xl md:text-2xl text-gray-200'>{slide.description}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>

         {/* Custom Navigation Arrows */}
         <button
            className='absolute top-1/2 left-4 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors'
            onClick={() => {
               const prevButton = document.querySelector('.slick-prev')
               if (prevButton) prevButton.click()
            }}
         >
            <svg
               className='w-6 h-6 text-white'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
               />
            </svg>
         </button>
         <button
            className='absolute top-1/2 right-4 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors'
            onClick={() => {
               const nextButton = document.querySelector('.slick-next')
               if (nextButton) nextButton.click()
            }}
         >
            <svg
               className='w-6 h-6 text-white'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
               />
            </svg>
         </button>
      </div>
   )
}

export default Carousel
