import Head from 'next/head'
import { Montserrat, Inter } from 'next/font/google'
import TailwindScreenSize from '@svenskost/tailwind-screen-size'
import Navbar from './Navbar'
import Footer from './Footer'

const display = Montserrat({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-display',
})

const body = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
})

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          key='keywords'
          content='TEMPEST certified, NATO, data security, government, defense, cybersecurity, secure solutions'
        />
        <title>Leading TEMPEST Supplier in Europe | Eurotempest</title>
        <meta property='og:title' key='og-title' content='Leading TEMPEST Supplier in Europe' />
        <meta property='twitter:title' key='twitter-title' content='Leading TEMPEST Supplier in Europe' />
        <meta
          name='description'
          key='description'
          content='Eurotempest is the leading supplier of TEMPEST-certified equipment in Europe. We supply qualified defense and government customers in over 30 countries.'
        />
        <meta
          property='og:description'
          key='og-description'
          content='Eurotempest is the leading supplier of TEMPEST-certified equipment in Europe. We supply qualified defense and government customers in over 30 countries.'
        />
        <meta
          property='twitter:description'
          key='twitter-description'
          content='Eurotempest is the leading supplier of TEMPEST-certified equipment in Europe. We supply qualified defense and government customers in over 30 countries.'
        />
        <meta property='og:image' content='/logo.svg' />
        <meta property='twitter:image' content='/logo.svg' />
        <meta property='og:site_name' content='Eurotempest' />
        <meta name='twitter:site' content='@Eurotempest' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://eurotempest.net/' />
        <meta name='twitter:url' content='https://eurotempest.net/' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@Eurotempest' />
        <meta name='apple-mobile-web-app-title' content='Eurotempest' />
        <link rel='canonical' href='https://eurotempest.net/' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={display.variable + ' ' + body.variable}>
        <TailwindScreenSize />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
