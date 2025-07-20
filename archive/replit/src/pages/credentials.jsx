import { Card, CardContent } from '@/components/ui/card'
import { Award, Globe, Shield, Users, CheckCircle, Star } from 'lucide-react'

export default function Credentials() {
   const credentials = [
      {
         authority: 'Dutch Accreditation Council',
         logo: '/images/rva_logo.png',
         name: 'RVA',
         certificate: 'ISO 17025 declaration of accreditation',
         link: 'https://eurotempest.net/wp-content/uploads/2022/06/L585-RvA-declaration-of-accreditation-ISO17025.pdf',
      },
      {
         authority: 'Dutch Min of Interior and Kingdom relations',
         logo: '/images/nci_logo.png',
         name: 'NCI',
         certificate: 'Statement NIAPC listing',
         link: 'https://eurotempest.net/wp-content/uploads/2019/03/NIAPC-listing-of-Eurotempest-BV_1.pdf',
      },
      {
         authority: 'AIVD/NL NCSA',
         logo: '/images/aivd.jpg',
         name: 'AIVD',
         certificate: 'Facility Security Clearance Certificate (FSCC)',
         link: 'https://eurotempest.net/wp-content/uploads/2016/09/facility-security-2013.pdf',
      },
      {
         authority: 'NATO C3 Agency',
         logo: '/images/aivd.jpg',
         name: 'NATO C3',
         certificate:
            'NATO BOA listed supplier of Securised Hardware and Tempest SDIP 27 Level A/B/C Products',
         link: null,
      },
      {
         authority: 'NATO SHAPE',
         logo: '/images/aivd.jpg',
         name: 'NATO SHAPE',
         certificate: 'NATO SHAPE NIAPC product list',
         link: 'http://www.ia.nato.int/niapc/Product/Eurotempest-products_356',
      },
      {
         authority: 'EU',
         logo: '/images/aivd.jpg',
         name: 'EU',
         certificate: 'List of accredited TEMPEST companies',
         link: 'https://www.consilium.europa.eu/sv/general-secretariat/corporate-policies/classified-information/information-assurance/tempest/',
      },
   ]

   const partners = ['Panasonic', 'HP', 'DELL', 'Fujitsu', 'Sharp NEC', 'Allied Telesis']

   return (
      <div className='py-16'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
               <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Credentials</h1>
               <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  Eurotempest holds the following credentials and certificates as an accredited
                  supplier of TEMPEST equipment:
               </p>
            </div>

            <div className='bg-white rounded-lg shadow-sm border overflow-hidden mb-16'>
               <div className='overflow-x-auto'>
                  <table className='w-full'>
                     <thead className='bg-gray-50'>
                        <tr>
                           <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                              Authority
                           </th>
                           <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                              Name
                           </th>
                           <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                              Certificate / Statement
                           </th>
                           <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                              Link
                           </th>
                        </tr>
                     </thead>
                     <tbody className='bg-white divide-y divide-gray-200'>
                        {credentials.map((credential, index) => (
                           <tr key={index} className='hover:bg-gray-50'>
                              <td className='px-6 py-4 whitespace-nowrap'>
                                 <div className='flex items-center'>
                                    <img
                                       src={credential.logo}
                                       alt={credential.name}
                                       className='h-12 w-12 object-contain mr-3'
                                    />
                                    <span className='text-sm font-medium text-gray-900'>
                                       {credential.authority}
                                    </span>
                                 </div>
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                                 {credential.name}
                              </td>
                              <td className='px-6 py-4 text-sm text-gray-600'>
                                 {credential.certificate}
                              </td>
                              <td className='px-6 py-4 whitespace-nowrap text-sm'>
                                 {credential.link ? (
                                    <a
                                       href={credential.link}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className='text-accent hover:text-accent/80'
                                    >
                                       [english]
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

            <div className='flex justify-center mb-16'>
               <Card className='bg-gray-50'>
                  <CardContent className='p-8 text-center'>
                     <img
                        src='/images/panasonic_partner.png'
                        alt='Panasonic Premium Partner'
                        className='h-16 w-auto mx-auto mb-4'
                     />
                     <h3 className='text-lg font-semibold text-gray-900'>
                        Panasonic Premium Partner
                     </h3>
                  </CardContent>
               </Card>
            </div>

            <Card className='bg-gray-50'>
               <CardContent className='p-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                     Manufacturing Partners
                  </h2>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center'>
                     {partners.map((partner, index) => (
                        <div
                           key={index}
                           className='flex items-center justify-center p-4 bg-white rounded-lg'
                        >
                           <span className='text-gray-700 font-medium'>{partner}</span>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
   )
}
