import { Poppins } from 'next/font/google'
import TailwindScreenSize from '@svenskost/tailwind-screen-size'
import Navbar from './Navbar'
import Footer from './Footer'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-default',
})

export default function Layout({ children }) {
   return (
      <div className={poppins.variable}>
         <TailwindScreenSize />
         <Navbar />
         <main>{children}</main>
         <Footer />
      </div>
   )
}
