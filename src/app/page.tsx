import HamburgerMenu from './components/HamburgerMenu'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col px-8">
      <div className="flex row align-middle">
        <span>
          <HamburgerMenu />
        </span>
        <h1 className=" p-2 font-heading text-6xl text-bone-text flex-1 text-center">Amethyst Clare Art</h1>
      </div>
    </main>
  )
}
