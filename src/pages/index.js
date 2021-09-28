import styles from '../styles/Main.module.scss'
import Head from 'next/head'
import MainContainer from '../MainComponents/MainContainer/MainContainer'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContainer />
    </div>
  )
}
