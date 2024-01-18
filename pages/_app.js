import 'nextra-theme-blog/style.css'
import '../styles/main.css'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'


export default function Nextra({ Component, pageProps }) {
  return (
    <Layout>
      <Sidebar />
      <>
        <Component {...pageProps} />
      </>
    </Layout>
  )
}

