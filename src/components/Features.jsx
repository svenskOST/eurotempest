import Section from './Section'
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
      image: { src: '/images/tempest-lab.png', alt: 'Earth seen from space' },
    },
  ],
}

export default function Features() {
  return (
    <Section>
      <SectionTitle title={data.title} />
      {data.sections.map((section, index) => (
        <FeatureSection key={index} reverse={index % 2 == 0 ? true : false} list={section.list} image={section.image} />
      ))}
    </Section>
  )
}
