import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function zztop({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main>
        <Header/>
        {children}
        <Footer />
        </main>
    </>
  )
}
