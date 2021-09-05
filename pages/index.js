import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '@components/Footer/Footer'
import Header from '@components/ComingSoon/Header'
import Navbar from '@components/Nav/Navbar'
import Speakers from '@components/Speakers/Speakers'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>DHRUVA - IIITK</title>
          <meta name="description" content="Dhruva IIITK Technical Fest" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Header />
        <Speakers />
      </div>
      <Footer></Footer>
    </>
  )
}
