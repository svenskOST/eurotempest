import { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
   const slides = [
      {
         title: 'How visible is your data?',
         description: 'High assurance IT products for defense and government customers',
         image: '/img1.jpg',
      },
      {
         title: 'TEMPEST Expertise',
         description: 'Certified testers and state-of-the-art laboratories',
         image: '/img2.png',
      },
      {
         title: 'Evolving Design',
         description: "The market's most sought-after brands drive our product design",
         image: '/img3.png',
      },
      {
         title: 'Multi-domain computing solutions',
         description: 'Galvanic separation between domains',
         image: '/img4.png',
      },
      {
         title: 'Multi-domain computing solutions',
         description: 'Galvanic separation between domains',
         image: '/img5.png',
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
      <div className='relative max-w-6xl mx-auto'>
         <Slider {...settings}>
            {slides.map((slide, index) => (
               <div key={index} className='flex flex-col bg-gray-900'>
                  {/* Text Section */}
                  <div className='py-10 px-4 sm:px-6 lg:px-8'>
                     <div className='max-w-3xl mx-auto text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                           {slide.title}
                        </h2>
                        <p className='text-lg md:text-xl text-gray-200'>{slide.description}</p>
                     </div>
                  </div>

                  {/* Image Section */}
                  <div className='relative h-[400px] overflow-hidden'>
                     <img
                        src={slide.image}
                        alt={slide.title}
                        className='w-full h-full object-contain bg-black/50'
                     />
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
