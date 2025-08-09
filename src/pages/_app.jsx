import RootLayout from '../components/RootLayout'
import '../theme.css'

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
