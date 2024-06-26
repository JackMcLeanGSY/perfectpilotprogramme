import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Perfect Pilot Programme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the perfect pilot programme!" />
        <p className="description">
        </p>
      </main>

      <Footer />
    </div>
  )
}
