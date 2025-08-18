import Image from 'next/image'

const data = {
  title: 'Our Credentials',
  description:
    'As the leading TEMPEST supplier in Europe, we are committed to providing the highest level of security for our customers. Our products are designed to meet the highest security standards and are tested to ensure they are free from any emanations that could be intercepted.',
  table: {
    head: ['AUTHORITY', 'NAME', 'CERTIFICATE', 'LINK'],
    rows: [
      {
        authority: 'Dutch Accreditation Council',
        logo: '/certs/rva.png',
        name: 'RVA',
        certificate: 'ISO 17025 Declaration of Accreditation',
        link: 'https://eurotempest.net/wp-content/uploads/2022/06/L585-RvA-declaration-of-accreditation-ISO17025.pdf',
      },
      {
        authority: 'Dutch Min of Interior and Kingdom relations',
        logo: '/certs/nci.png',
        name: 'NCI',
        certificate: 'Statement NIAPC listing',
        link: 'https://eurotempest.net/wp-content/uploads/2019/03/NIAPC-listing-of-Eurotempest-BV_1.pdf',
      },
      {
        authority: 'AIVD/NL NCSA',
        logo: '/certs/aivd.jpg',
        name: 'AIVD',
        certificate: 'Facility Security Clearance Certificate (FSCC)',
        link: 'https://eurotempest.net/wp-content/uploads/2016/09/facility-security-2013.pdf',
      },
      {
        authority: 'NATO C3 Agency',
        logo: '/certs/aivd.jpg',
        name: 'NATO C3',
        certificate: 'NATO BOA listed supplier of Securised Hardware and Tempest SDIP 27 Level A/B/C Products',
        link: null,
      },
      {
        authority: 'NATO SHAPE',
        logo: '/certs/aivd.jpg',
        name: 'NATO SHAPE',
        certificate: 'NATO SHAPE NIAPC product list',
        link: 'http://www.ia.nato.int/niapc/Product/Eurotempest-products_356',
      },
      {
        authority: 'EU',
        logo: '/certs/aivd.jpg',
        name: 'EU',
        certificate: 'List of accredited TEMPEST companies',
        link: 'https://www.consilium.europa.eu/sv/general-secretariat/corporate-policies/classified-information/information-assurance/tempest/',
      },
    ],
  },
}

export default function Credentials() {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Header Section */}
        <div className='mb-12 mt-30 ml-2'>
          <h1 className='mb-4 text-4xl font-bold font-display text-dark-800 md:text-5xl'>{data.title}</h1>
          <p className='max-w-3xl text-lg text-dark-600'>{data.description}</p>
        </div>

        {/* Mobile View - Card Layout */}
        <div className='space-y-6 md:hidden'>
          {data.table.rows.map((row, index) => (
            <div key={index} className='overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg'>
              <div className='p-6'>
                <div className='flex items-center mb-4 space-x-4'>
                  <div className='flex-shrink-0'>
                    <Image src={row.logo} alt={row.name} width={60} height={60} className='rounded-lg' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-dark-800'>{row.name}</h3>
                    <p className='text-dark-600'>{row.authority}</p>
                  </div>
                </div>

                <div className='mt-4 space-y-2'>
                  <div>
                    <span className='font-medium text-dark-700'>Certificate:</span>
                    <p className='text-dark-600'>{row.certificate}</p>
                  </div>

                  {row.link && (
                    <div className='pt-2'>
                      <a
                        href={row.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center font-medium transition-colors text-primary-600 hover:text-primary-700'
                      >
                        View Certificate
                        <svg
                          className='w-4 h-4 ml-1'
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
        <div className='hidden overflow-hidden bg-white shadow-md rounded-xl md:block'>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th scope='col' className='px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Logo
                  </th>
                  <th scope='col' className='px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Authority
                  </th>
                  <th scope='col' className='px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Certificate
                  </th>
                  <th scope='col' className='px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase'>
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {data.table.rows.map((row, index) => (
                  <tr key={index} className='transition-colors hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex-shrink-0 w-10 h-10'>
                        <Image src={row.logo} alt={row.name} width={40} height={40} className='rounded-md' />
                      </div>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-900 whitespace-nowrap'>{row.authority}</td>
                    <td className='px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap'>{row.name}</td>
                    <td className='px-6 py-4 text-sm text-gray-500'>{row.certificate}</td>
                    <td className='px-6 py-4 text-sm whitespace-nowrap'>
                      {row.link ? (
                        <a
                          href={row.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center font-medium text-primary-600 hover:text-primary-700'
                        >
                          View
                          <svg
                            className='w-4 h-4 ml-1'
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
