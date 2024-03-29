import Link from "next/link";
import { ImCross } from "react-icons/im";

interface MobileNavProps {
  showNav: boolean
  closeNav: () => void
}

export default function MobileNav({ showNav, closeNav }: MobileNavProps) {
  const navStyle = showNav ? 'translate-x-0' : '-translate-x-full'

  return (
    <div className={`fixed inset-0 transition-all duration-500 h-[100vh] bg-[#000000e0] z-[1002] ${navStyle}`}>
      <ImCross onClick={closeNav} className="absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white" />

      <div className={`bg-emerald-700 transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%] ${navStyle}`}>
        <ul className="space-y-10">
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Menu</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
