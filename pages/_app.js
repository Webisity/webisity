import Layout from '../components/Layout'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
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