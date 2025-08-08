import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function FeatureSection({ list, image }) {
  return (
    <div className='flex'>
      <ul className='list-none'>
        {list.map((item, index) => (
          <li key={index}>
            <IoCheckmarkCircle className='inline size-6' />
            {item}
          </li>
        ))}
      </ul>
      <div className='relative h-50 w-50 bg-red-100'>
        <Image className='object-cover object-bottom-right' fill src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
