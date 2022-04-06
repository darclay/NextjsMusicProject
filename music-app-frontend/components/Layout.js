import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
      </Head>
      <Header>
        <div className={styles.container}>
          {children}
        </div> 
      </Header>
      <Footer></Footer>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Music Events',
  keywords: 'music, dj, edm, hard rock, country, blah',
  description: 'Find the latest music events',
  children: '<h1>hello there people</h1>'
}
