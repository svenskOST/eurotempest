import '../theme.css'
import Layout from '../layouts/RootLayout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
