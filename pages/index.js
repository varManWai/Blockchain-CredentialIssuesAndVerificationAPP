import Head from 'next/head'
import styles from '../styles/Home.module.css'

import CertificateItem from '../components/Certificates/Certificate-item';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CertificateItem />

    </div>
  )
}
