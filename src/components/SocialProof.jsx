import { motion } from 'motion/react'
import Image from 'next/image'
import Section from './Section'

const data = {
  title: 'Trusted by government and defence agencies across EU and NATO',
  logos: [
    { width: 731, height: 540, src: 'customers/forsvarsmakten.png', alt: 'Försvarsmakten' },
    { width: 557, height: 180, src: 'customers/saab.svg', alt: 'SAAB' },
    { width: 1200, height: 497, src: 'customers/ministerie-van-defensie.webp', alt: 'Ministerie van Defensie' },
    { width: 778, height: 321, src: 'customers/european-defence-agency.png', alt: 'European Defence Agency' },
    { width: 300, height: 204, src: 'customers/vsse.png', alt: "Sûreté de l'Etat" },
  ],
}

export default function SocialProof() {
  return (
    <Section>
      <motion.div
        className='relative w-full h-20 opacity-90 fade-in-out overflow-hidden'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='absolute h-full whitespace-nowrap animate-[scroll_3s_linear_both_infinite]'>
          {data.logos.map((logo, index) => (
            <Image
              className='grayscale h-full w-fit inline-block mx-14'
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={logo.alt}
              key={index}
            />
          ))}
          {data.logos.map((logo, index) => (
            <Image
              className='grayscale h-full w-fit inline-block mx-14'
              width={logo.width}
              height={logo.height}
              src={logo.src}
              alt={logo.alt}
              key={index}
            />
          ))}
        </div>
      </motion.div>
      <motion.p
        className='text-center text-300 text-light-600'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {data.title}
      </motion.p>
    </Section>
  )
}
