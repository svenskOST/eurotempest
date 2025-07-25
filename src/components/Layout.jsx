import { Newsreader, Work_Sans } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'

const newsreader = Newsreader({
   subsets: ['latin'],
   weight: 'variable',
   variable: '--font-display',
})

const workSans = Work_Sans({
   subsets: ['latin'],
   weight: 'variable',
   variable: '--font-body',
})

const Layout = ({ children }) => {
   return (
      <div className={newsreader.variable + ' ' + workSans.variable}>
         <Navbar />
         <main>{children}</main>
         <Footer />
      </div>
   )
}

export default Layout
