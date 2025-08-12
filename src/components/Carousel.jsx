import '@splidejs/react-splide/css'
import { BsQuestionCircleFill } from 'react-icons/bs'
import { FaInfoCircle } from 'react-icons/fa'
import { FaBuildingLock } from 'react-icons/fa6'
import { IoShieldCheckmark } from 'react-icons/io5'
import { MdLeaderboard, MdQuestionAnswer } from 'react-icons/md'
import { PiCertificateFill } from 'react-icons/pi'
import { RiServiceFill } from 'react-icons/ri'
import Section from './Section'
import Button from './ui/Button'
import CarouselCard from './ui/CarouselCard'
import SectionTitle from './ui/SectionTitle'

const data = {
  title: 'Why Choose Eurotempest?',
  cards: [
    {
      icon: FaBuildingLock,
      title: 'Protect Your Operations',
      description: 'All IT equipment needs specialist shielding to eliminate the threat of covert eavesdropping. We\'ve got you covered.',
      button: {
        text: 'Learn More',
        icon: FaInfoCircle,
        href: '/products',
      },
    },
    {
      icon: MdLeaderboard,
      title: 'Trusted Leader in Europe',
      description: 'Eurotempest has been the number one TEMPEST-supplier in Europe since 2014.',
      button: {
        text: 'Find Out Why',
        icon: BsQuestionCircleFill,
        href: '/about',
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
      },
    },
  ],
}

export default function Carousel() {
  return (
    <Section>
      <SectionTitle title={data.title} />
      <div className='grid grid-cols-1 md:grid-cols-2 md:max-lg:gap-8 gap-16 place-items-center'>
        {data.cards.map((card, index) => (
          <CarouselCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            button={
              <Button href={card.button.href} type='secondary'>
                {card.button.text}
                {<card.button.icon className='size-6 lg:size-8' />}
              </Button>
            }
          />
        ))}
      </div>
    </Section>
  )
}
