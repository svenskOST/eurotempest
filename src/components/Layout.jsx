import { Poppins, Titillium_Web } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['200', '300', '400', '600', '700', '900'],
   variable: '--font-body',
})

const titilliumWeb = Titillium_Web({
   subsets: ['latin'],
   weight: ['200', '300', '400', '600', '700', '900'],
   variable: '--font-display',
})

const Layout = ({ children }) => {
   return <div className={poppins.variable + ' ' + titilliumWeb.variable}>{children}</div>
}

export default Layout
