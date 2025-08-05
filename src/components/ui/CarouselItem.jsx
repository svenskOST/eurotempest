import { SplideSlide } from '@splidejs/react-splide'

export default function CarouselItem({ children }) {
  return (
    <SplideSlide>
      <h1>{children}</h1>
    </SplideSlide>
  )
}
