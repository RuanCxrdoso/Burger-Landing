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

      <div className={`bg-[#F2A900] transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%] ${navStyle}`}>
        <ul className="space-y-10">
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="#home">Home</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="/">Shop</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="#about">About</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="#burgers">Burgers</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="#delivery">Delivery</Link>
          </li>
          <li className="text-[35px] font-medium transition-all duration-300 text-white hover:text-yellow-400">
            <Link href="#chefs">Chefs</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
