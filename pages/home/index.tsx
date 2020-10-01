import Head from 'next/head'
import styles from '@StyleModules/Home.module.scss'
import { Footer, Navbar } from '@Components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Pankod Frontend Challenge</title>
        <link rel="icon" href="images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Project
        </h1>

        <p className={styles.description}>
          Frontend Challenge
        </p>
      </main>
      <Footer />
    </div>
  )
}
