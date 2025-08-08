// Checkmark icon for the list items
import Image from 'next/image'
import { IoCheckmarkCircle } from 'react-icons/io5'

const data = {
  title: 'We Are Experts at What We Do',
  list: [
    'Entrusted by over 300 organizations',
    'Supplying defense and government authorities in over 30 countries',
    'Market leader in Europe',
    'Rigid testing and quality assurance in dedicated labs',
    'Secure products for all your needs',
    'Living up to NATO standards',
  ],
}

export default function Features() {
  return (
    <div className='bg-light-300 flex h-screen flex-col items-center justify-center'>
      <h1>{data.title}</h1>
      <div>
        {/*List on the left and image on the right, first half of list */}
        <ul className='list-disc'>
          {data.list.map((item, index) => (
            <li key={index}>
              <IoCheckmarkCircle />
              {item}
            </li>
          ))}
        </ul>
        <Image src='/images/feature.png' alt='Feature' width={500} height={500} />
      </div>
      <div>{/* Image on the left and list on the right, second half of list */}</div>
    </div>
  )
}
