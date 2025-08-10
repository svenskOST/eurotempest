import Image from 'next/image'
import { IoMdCheckmark, IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function FeatureSection({ reverse, list, image }) {
  return (
    <div
      className={`w-full items-center lg:items-stretch flex flex-col lg:flex-row 2xl:px-20 gap-10 lg:max-xl:gap-0 2xl:gap-20 ${reverse && 'lg:flex-row-reverse'}`}
    >
      <div className='relative w-full lg:w-2/5 xl:w-1/2 lg:max-xl:aspect-4/3 aspect-7/4 rounded-xl overflow-clip shadow-md/40'>
        <Image className='object-cover object-center' fill src={image.src} alt={image.alt} />
      </div>
      <div className='w-full lg:w-3/5 xl:w-1/2 flex flex-col justify-center items-center'>
        <ul
          className={`h-2/3 list-none xl:text-300 2xl:text-400 weight-600 text-light-300 flex flex-col justify-between items-center gap-8 ${reverse ? 'lg:items-end' : 'lg:items-start'}`}
        >
          {list.map((item, index) => (
            <li className='flex gap-2 items-center rounded-full bg-dark-600 w-fit py-1.5 pl-2 pr-4 shadow-md/40' key={index}>
              <div className='relative'>
                <IoMdCheckmarkCircleOutline className='size-8 xl:size-9 2xl:size-10 text-primary-300/80' />
                <IoMdCheckmark className='size-7 xl:size-8 2xl:size-9 text-secondary-300 absolute top-1/2 left-1/2 -translate-x-[12px] -translate-y-[17px] xl:-translate-x-[13px] xl:-translate-y-[19px] 2xl:-translate-x-[15px] 2xl:-translate-y-[22px]' />
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
