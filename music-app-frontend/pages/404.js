import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div>
      <FaExclamationTriangle/>
      <h1>404</h1>
      <h4>I'm sorry, but this page is not found.</h4>
      <Link href="/">Click Here to go back to HOME</Link>
    </div>
  )
}
