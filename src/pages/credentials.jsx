import Image from 'next/image'
import data from '../data/credentials.json'

export default function Credentials() {
  return (
    <div className='from-light-200 to-light-100 min-h-screen bg-gradient-to-b px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header Section */}
        <div className='mb-12 text-center'>
          <h1 className='font-display text-dark-800 mb-4 text-4xl font-bold md:text-5xl'>{data.title}</h1>
          <p className='text-dark-600 mx-auto max-w-3xl text-lg'>{data.description}</p>
        </div>

        {/* Mobile View - Card Layout */}
        <div className='space-y-6 md:hidden'>
          {data.table.rows.map((row, index) => (
            <div key={index} className='overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'>
              <div className='p-6'>
                <div className='mb-4 flex items-center space-x-4'>
                  <div className='flex-shrink-0'>
                    <Image src={row.logo} alt={row.name} width={60} height={60} className='rounded-lg' />
                  </div>
                  <div>
                    <h3 className='text-dark-800 text-lg font-semibold'>{row.name}</h3>
                    <p className='text-dark-600'>{row.authority}</p>
                  </div>
                </div>

                <div className='mt-4 space-y-2'>
                  <div>
                    <span className='text-dark-700 font-medium'>Certificate:</span>
                    <p className='text-dark-600'>{row.certificate}</p>
                  </div>

                  {row.link && (
                    <div className='pt-2'>
                      <a
                        href={row.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary-600 hover:text-primary-700 inline-flex items-center font-medium transition-colors'
                      >
                        View Certificate
                        <svg
                          className='ml-1 h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className='hidden overflow-hidden rounded-xl bg-white shadow-md md:block'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                    Logo
                  </th>
                  <th scope='col' className='px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                    Authority
                  </th>
                  <th scope='col' className='px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                    Certificate
                  </th>
                  <th scope='col' className='px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase'>
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {data.table.rows.map((row, index) => (
                  <tr key={index} className='transition-colors hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='h-10 w-10 flex-shrink-0'>
                        <Image src={row.logo} alt={row.name} width={40} height={40} className='rounded-md' />
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap text-gray-900'>{row.authority}</td>
                    <td className='px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900'>{row.name}</td>
                    <td className='px-6 py-4 text-sm text-gray-500'>{row.certificate}</td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                      {row.link ? (
                        <a
                          href={row.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-primary-600 hover:text-primary-700 flex items-center font-medium'
                        >
                          View
                          <svg
                            className='ml-1 h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                            />
                          </svg>
                        </a>
                      ) : (
                        <span className='text-gray-400'>-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
