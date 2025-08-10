import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function FeatureSection({ reverse, list, image }) {
  return (
    <div className={`container flex items-center px-20 justify-evenly perspective-[1000px] ${reverse && 'flex-row-reverse'}`}>
      <ul className='w-1/2 list-none'>
        {list.map((item, index) => (
          <li key={index}>
            <IoCheckmarkCircle className='inline size-6 text-primary-700' />
            {item}
          </li>
        ))}
      </ul>
      <div
        className={`relative w-1/2 aspect-2/1 rounded-xl transform-3d overflow-clip shadow-md/40 rotate-x-2  ${reverse ? 'rotate-y-30 rounded-l-2xl border-l-4 border-blue-950/80' : '-rotate-y-30 rounded-r-2xl border-r-4 border-yellow-800/40'}`}
      >
        <Image className='object-cover object-bottom-right' fill src={image.src} alt={image.alt} />
      </div>
    </div>
  )
}
