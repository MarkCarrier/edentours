import 'tailwindcss/tailwind.css'
import '../page-styles.css'
import Head from 'next/head'
import TopBar from '../components/top-bar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eden Tours</title>
      </Head>
      <div className="flex flex-col h-screen">
        <div className="">
          <TopBar />
        </div>
        <div className="page-content flex-1 overflow-y-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
