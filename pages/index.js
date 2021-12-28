import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header />
      <section className={utilStyles.headingMd}>
        <p>TestTestTestTestTestTest</p>
        <p>Aaaaaaaaaaaaaaaaaaaaaaaa</p>
      </section>
      <Footer />
    </Layout>
  )
}
