import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>2020 made me do this.</p>
          <p>
            I will be posting my notes from{' '}
            <a href="https://collectednotes.com/camilaebf">Collected Notes</a> here.
          </p>
          <p>
            You can find out more about me on{' '}
            <a href="https://www.linkedin.com/in/camilablancfick/">LinkedIn</a> or{' '}
            <a href="https://twitter.com/Cami__bf">follow me on Twitter</a>.
          </p>
        </section>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://github.com/CamilaEBF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Camilaebf --
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  )
}
