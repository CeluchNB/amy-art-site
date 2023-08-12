import Carousel from './components/Carousel'
import HamburgerMenu from './components/HamburgerMenu'
import QuoteDisplay from './components/QuoteDisplay'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex row align-middle px-8">
        <span>
          <HamburgerMenu />
        </span>
        <h1 className=" p-2 font-heading text-6xl text-bone-text flex-1 text-center">Amethyst Clare Art</h1>
      </div>
      <div className="pt-4 flex w-full text-center justify-center">
        <QuoteDisplay />
      </div>
      <Carousel />
    </main>
  )
}
