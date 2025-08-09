import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function FeatureSection({ reverse, list, image }) {
  return (
    <div className={`flex ${reverse && 'flex-row-reverse'} container`}>
      <ul className='w-1/2 list-none'>
        {list.map((item, index) => (
          <li key={index}>
            <IoCheckmarkCircle className='inline text-primary-700 size-6' />
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
