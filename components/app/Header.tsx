import Link from "next/link"
import Logo from './Logo'

export default function Header() {
  return <header className='fixed w-full top-0 left-0 right-0 h-24 z-30 transition-all ease duration-150 flex py-4'>
  {/* bg-good-bg */}
  <div className='container mx-auto flex'>
    <Link href='/'>
      <Logo />
    </Link>
  </div>
</header>
}