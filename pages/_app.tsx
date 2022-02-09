import '../globals.css'
import  Header  from '../components/Header'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Seen From Shadow</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Header></Header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
