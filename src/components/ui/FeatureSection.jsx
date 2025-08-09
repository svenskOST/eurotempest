import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function FeatureSection({ reverse, list, image }) {
  return (
    <div className={`container flex ${reverse && 'flex-row-reverse'}`}>
      <ul className='w-1/2 list-none'>
        {list.map((item, index) => (
          <li key={index}>
            <IoCheckmarkCircle className='inline size-6 text-primary-700' />
            {item}
          </li>
        ))}
      </ul>
      <div className='relative w-1/2'>
        <Image className='object-cover object-bottom-right' fill src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
