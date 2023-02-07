import Link from "next/link"
import Logo from './Logo'

export default function Header() {
  return <header className='fixed w-full top-0 left-0 right-0 h-22 z-30 transition-all ease bg-white duration-150 flex py-2 drop-shadow-md'>
  {/* bg-good-bg */}
  <div className='container mx-auto flex px-1'>
    <Link href='/'>
      <Logo />
    </Link>
  </div>
</header>
}