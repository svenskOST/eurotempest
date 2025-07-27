import { useEffect, useState } from 'react'

export default function TailwindScreenSize() {
   const [width, setWidth] = useState()

   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth)
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [width])

   return (
      <div className='fixed mt-2 ml-2 text-400 text-green-800 z-100'>
         {width > 1536
            ? '2xl'
            : width > 1280
            ? 'xl'
            : width > 1024
            ? 'lg'
            : width > 768
            ? 'md'
            : width > 640
            ? 'sm'
            : 'xs'}
      </div>
   )
}
