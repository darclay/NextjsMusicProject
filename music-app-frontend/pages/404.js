import Link from 'next/link'

export default function PageNotFound() {
  return (
    <div>
      <h1>404</h1>
      <h4>I'm sorry, but this page is not found.</h4>
      <Link href="/">Click Here to go back to HOME</Link>
    </div>
  )
}
