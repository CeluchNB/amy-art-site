import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <Image src="https://placekitten.com/640/360" height="320" width="640" alt='A placeholder image' />
      <h1>Amethyst&apos;s Art</h1>
      <nav>
        <ul className="flex justify-between">
          <li className="p-2"><Link href="/vision">My Vision</Link></li>
          <li className="p-2"><Link href="/gallery">Gallery</Link></li>
          <li className="p-2"><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  )
}
