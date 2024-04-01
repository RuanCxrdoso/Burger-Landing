import { FaBurger } from "react-icons/fa6"
import Link from "next/link"
import { BiCycling, BiShoppingBag } from "react-icons/bi"
import { HiBars3BottomRight } from "react-icons/hi2"

interface NavProps {
  openNav: () => void
}

export default function Nav({ openNav }: NavProps) {
  return (
    <header className="h-[12vh] bg-[#fff]" id="home">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />

          <h1 className="text-[20px] sm:text-[30px] font-semibold">
            BurgerBit
          </h1>
        </div>

        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[20px] font-medium transition-all duration-300 hover:text-[#F2A900]">
           <Link href="#home">Home</Link>
          </li>
          <li className="text-[20px] font-medium transition-all duration-300 hover:text-[#F2A900]">
            <Link href="#about">About</Link>
          </li>
          <li className="text-[20px] font-medium transition-all duration-300 hover:text-[#F2A900]">
            <Link href="#burgers">Burgers</Link>
          </li>
          <li className="text-[20px] font-medium transition-all duration-300 hover:text-[#F2A900]">
            <Link href="#delivery">Delivery</Link>
          </li>
          <li className="text-[20px] font-medium transition-all duration-300 hover:text-[#F2A900]">
            <Link href="#chefs">Chefs</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button 
            className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] transition-all duration-300 bg-blue-950 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
          >
            <span>
              <BiCycling className="sm:w-[1.7rem] sm:h-[1.7rem] w-[1.3rem] h-[1.3rem]" />
            </span>

            <span className="font-bold">
              Order Now
            </span>
          </button>

          <button
            className="sm:px-6 sm:py-3 px-4 py-2 transition-all duration-300 bg-[#f2a900] hover:bg-green-700 flex items-center rounded-md text-white"
          >
            <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
          </button>

          <HiBars3BottomRight onClick={openNav} className="lg:hidden w-[2rem] h-[2rem] text-black" />
        </div>
      </div>
    </header>
  )
}
