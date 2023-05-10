import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import Logo from '@/public/images/logo-notext.png'

export default function Header() {
  return (
    <header className="absolute w-full px-2">
      <div className="grid w-screen place-items-center">
          {/* Site branding */}
            {/* Logo */}
            <Link href="/" className="block" aria-label="The Monacle Group">
              <Image src={Logo} alt="Logo" width={224} height={224} />
            </Link>

          {/* Desktop navigation */}
          {/* <nav className="hidden md:flex md:grow"> */}
            {/* Desktop sign in links */}
          {/* </nav> */}

          {/* <MobileMenu /> */}

      </div>
    </header>
  )
}
