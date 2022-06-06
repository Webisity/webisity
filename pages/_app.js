// import Layout from '../components/Layout'
import Layout from '../components/Layout'
// const Layout = ({ children }) => 
// <div className="layout">
//   <Header />
//   {children}
//   <Footer />
//   </div>

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}