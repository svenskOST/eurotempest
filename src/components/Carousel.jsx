import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import CarouselCard from './ui/CarouselCard'
import Button from './ui/Button'
import { IoArrowForwardCircle } from 'react-icons/io5'

const data = {
  title: 'Why Eurotempest?',
  cards: [
    {
      icon: IoArrowForwardCircle,
      title: 'Protect Your Operations',
      description: 'Consumer electronics radiate signals that are prone to hostile surveillance. Ours do not.',
      button: {
        text: 'Learn More',
        icon: IoArrowForwardCircle,
        href: '/products',
        type: 'primary',
      },
    },
    {
      icon: IoArrowForwardCircle,
      title: 'Trusted Leader in Europe',
      description: 'Eurotempest has been the number one TEMPEST-supplier in Europe since 2004.',
      button: {
        text: 'Find Out Why',
        icon: IoArrowForwardCircle,
        href: '/about',
        type: 'primary',
      },
    },
    {
      icon: IoArrowForwardCircle,
      title: 'State-of-the-art Security',
      description: 'Our proven methods are backed by numerous official certificates.',
      button: {
        text: 'See Certificates',
        icon: IoArrowForwardCircle,
        href: '/credentials',
        type: 'primary',
      },
    },
    {
      icon: IoArrowForwardCircle,
      title: 'Always at Your Service',
      description: 'We strive to meet your particular needs and provide support in any way possible.',
      button: {
        text: "Let's Talk",
        icon: IoArrowForwardCircle,
        href: '/contact',
        type: 'primary',
      },
    },
  ],
}

const options = {
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
}

export default function Carousel() {
  return (
    <section className='bg-light-300 flex min-h-screen flex-col items-center justify-center gap-20'>
      <div className='container'>
        <h1 className='text-600 sm:text-700 md:text-800 text-dark-800 font-display weight-600'>{data.title}</h1>
        <Splide aria-label='Why Eurotempest?' hasTrack={false} className='w-full' options={options}>
          <SplideTrack>
            {data.cards.map((card, index) => (
              <CarouselCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                button={
                  <Button href={card.button.href} type={card.button.type}>
                    {card.button.text}
                    {<card.button.icon className='size-6 lg:size-8' />}
                  </Button>
                }
              />
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  )
}
