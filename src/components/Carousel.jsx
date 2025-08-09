import { Splide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Section from './Section'
import SectionTitle from './ui/SectionTitle'
import CarouselCard from './ui/CarouselCard'
import Button from './ui/Button'
import { IoShieldCheckmark } from 'react-icons/io5'
import { MdLeaderboard, MdQuestionAnswer } from 'react-icons/md'
import { FaBuildingLock } from 'react-icons/fa6'
import { FaInfoCircle } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { PiCertificateFill } from 'react-icons/pi'
import { BsQuestionCircleFill } from 'react-icons/bs'

const data = {
  title: 'Why Eurotempest?',
  cards: [
    {
      icon: FaBuildingLock,
      title: 'Protect Your Operations',
      description: 'Consumer electronics radiate signals that are prone to hostile surveillance. Ours do not.',
      button: {
        text: 'Learn More',
        icon: FaInfoCircle,
        href: '/products',
        type: 'primary',
      },
    },
    {
      icon: MdLeaderboard,
      title: 'Trusted Leader in Europe',
      description: 'Eurotempest has been the number one TEMPEST-supplier in Europe since 2004.',
      button: {
        text: 'Find Out Why',
        icon: BsQuestionCircleFill,
        href: '/about',
        type: 'primary',
      },
    },
    {
      icon: IoShieldCheckmark,
      title: 'State-of-the-art Security',
      description: 'Our proven methods are backed by numerous official certificates.',
      button: {
        text: 'See Certificates',
        icon: PiCertificateFill,
        href: '/credentials',
        type: 'primary',
      },
    },
    {
      icon: RiServiceFill,
      title: 'Always at Your Service',
      description: 'We strive to meet your particular needs and provide support in any way possible.',
      button: {
        text: "Let's Talk",
        icon: MdQuestionAnswer,
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
    <Section>
      <SectionTitle title={data.title} />
      <Splide hasTrack={false} options={options} aria-label='Why Eurotempest?'>
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
    </Section>
  )
}
