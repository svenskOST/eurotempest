import React from 'react'

function Placeholder({ width = 800, height = 600, text = 'Placeholder Image', className = '' }) {
   return (
      <div
         className={`bg-gray-200 flex items-center justify-center ${className}`}
         style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
         }}
      >
         <div className='text-gray-500 text-center'>
            <svg
               className='w-12 h-12 mx-auto mb-4'
               fill='none'
               stroke='currentColor'
               viewBox='0 0 24 24'
               xmlns='http://www.w3.org/2000/svg'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
               />
            </svg>
            <p>{text}</p>
         </div>
      </div>
   )
}

export default Placeholder
