import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Music Events Copyright &copy; 2022</p>
      <Link href="/about">About</Link>
      <br/>
      <a href="http://www.david-barclay-gurule.com" target="_blank">D. Gurule</a>
    </footer>
  )
}
