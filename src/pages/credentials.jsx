import Image from 'next/image'
import data from '../data/credentials.json'

export default function Credentials() {
  return (
    <>
      <div className='bg-light-300 relative flex min-h-[80vh] items-center justify-center'>
        <div className='container'>
          <h1 className='font-display text-800 weight-600 text-dark-700'>{data.title}</h1>
          <p className='text-400 text-dark-600'>{data.description}</p>
          <table className='bg-light-100 raised-300 outline-light-500 w-fit rounded-lg outline-2'>
            <thead>
              <tr>
                {data.table.head.map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.table.rows.map((row, index) => (
                <tr className='outline outline-light-500' key={index}>
                  <td>
                    <Image src={row.logo} alt={row.name} width={50} height={50} />
                  </td>
                  <td>{row.authority}</td>
                  <td>{row.name}</td>
                  <td>{row.certificate}</td>
                  <td>{row.link ? <a href={row.link}>Link</a> : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
