import { Newsreader, Work_Sans } from 'next/font/google'
import TailwindScreenSize from '@svenskost/tailwind-screen-size'
import Navbar from './Navbar'
import Footer from './Footer'

const newsreader = Newsreader({
   subsets: ['latin'],
   weight: 'variable',
   variable: '--font-paragraph',
})

const workSans = Work_Sans({
   subsets: ['latin'],
   weight: 'variable',
   variable: '--font-default',
})

export default function Layout({ children }) {
   return (
      <div className={newsreader.variable + ' ' + workSans.variable}>
         <TailwindScreenSize />
         <Navbar />
         <main>{children}</main>
         <Footer />
      </div>
   )
}
