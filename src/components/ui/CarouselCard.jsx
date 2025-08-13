import { motion } from 'motion/react'

export default function CarouselCard({ icon: Icon, title, description, button }) {
  return (
    <motion.div
      className='flex w-full max-w-sm md:max-w-[26rem] px-8 flex-col items-center bg-dark-700 bg-linear-65 from-primary-300/50 to-blue-950/50 text-light-200 rounded-lg gap-8 py-16 shadow-lg/30 hover:scale-105 hover:shadow-xl/30 transition-[box-shadow,_scale] md:max-lg:h-[31rem]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className=''>{<Icon className='text-800 size-14' />}</div>
      <h3 className='weight-600 text-500 text-center'>{title}</h3>
      <p className='text-300 flex-1 text-light-300'>{description} </p>
      <div className='md:w-4/5'>{button}</div>
    </motion.div>
  )
}
