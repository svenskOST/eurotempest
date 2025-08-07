'use client'

import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/splide/css'
import { useRef, useEffect } from 'react'

export default function Carousel({ children, options = {}, className = '' }) {
  const splideRef = useRef(null)

  // Default options that can be overridden
  const defaultOptions = {
    type: 'loop',
    perPage: 2.5,
    perMove: 1,
    gap: '2rem',
    padding: { left: '5%', right: '5%' },
    focus: 'center',
    updateOnMove: true,
    pagination: false,
    arrows: false,
    drag: 'free',
    snap: true,
    breakpoints: {
      1024: {
        perPage: 2,
        padding: { left: '10%', right: '10%' },
      },
      768: {
        perPage: 1.5,
        padding: { left: '15%', right: '15%' },
      },
      640: {
        perPage: 1,
        padding: { left: '10%', right: '10%' },
      },
    },
    ...options,
  }

  return (
    <div className={`relative ${className}`}>
      <Splide ref={splideRef} hasTrack={false} options={defaultOptions} className='w-full py-8'>
        <SplideTrack>{children}</SplideTrack>
      </Splide>
    </div>
  )
}
