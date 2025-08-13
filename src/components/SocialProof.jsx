import Image from 'next/image'
import Section from './Section'

const data = {
  title: 'Trusted by government and defence agencies across EU and NATO',
  logos: [
    { src: 'customers/forsvarsmakten.png', alt: 'Försvarsmakten' },
    { src: 'customers/saab.svg', alt: 'SAAB' },
    { src: 'customers/ministerie-van-defensie.webp', alt: 'Ministerie van Defensie' },
    { src: 'customers/european-defence-agency.png', alt: 'European Defence Agency' },
    { src: 'customers/vsse.png', alt: "Sûreté de l'Etat" },
  ],
}

export default function SocialProof() {
  return (
    <Section>
      <div className='w-full bg-black'>
        <div className='relative flex flex-nowrap justify-center gap-8 opacity-90 fade-in-out'>
          {data.logos.map((logo, index) => (
            <div className='relative w-[200px] h-[150px] mx-4 inline-block' key={`first-${index}`}>
              <Image className='object-contain grayscale' fill src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
      <p className='text-center text-light-600'>{data.title}</p>
    </Section>
  )
}
