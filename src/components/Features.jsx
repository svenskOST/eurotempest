import SectionTitle from './ui/SectionTitle'
import FeatureSection from './ui/FeatureSection'

const data = {
  title: 'Expertise You Can Trust',
  sections: [
    {
      list: ['Supplying defence and government in over 30 countries', 'Entrusted by over 300 organizations', 'Market leader in Europe'],
      image: { src: '/images/earth.jpg', alt: 'Earth seen from space' },
    },
    {
      list: ['Rigid testing and quality assurance in dedicated labs', 'Secure products for all your needs', 'Living up to NATO standards'],
      image: { src: '/images/earth.jpg', alt: 'Earth seen from space' },
    },
  ],
}

export default function Features() {
  return (
    <div className='bg-light-300 flex h-screen flex-col items-center justify-center'>
      <SectionTitle title={data.title} />
      {data.sections.map((section, index) => (
        <FeatureSection key={index} list={section.list} image={section.image} />
      ))}
    </div>
  )
}
