import { motion } from 'motion/react'

export default function SectionTitle({ title }) {
  return (
    <motion.h1
      className='text-center text-700 weight-600 font-display text-dark-900 md:text-800 w-full'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {title}
    </motion.h1>
  )
}
