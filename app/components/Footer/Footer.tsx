import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaBurger, FaFacebook, FaX } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-amber-950 pt-32 pb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-[80%] mx-auto border-b-2 border-gray-500 border-opacity-20 pb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />

            <h1 className="text-[20px] sm:text-[30px] text-white font-semibold">
              BurgerBit
            </h1>
          </div>

          <p className="text-white text-opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis deserunt qui laudantium dolore. Earum aliquam perferendis molestias in quo!
          </p>

          <div className="mt-6">
            <p className="text-white text-lg">
              support@example.com
            </p>
            <p className="text-[#F2A900] text-xl md:text-3xl font-bold">
              +71 9 9999-9999
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-semibold">
            Products
          </h1>

          <ul className="space-y-4">
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100">Gold Chicken</li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100">Double Melt</li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100">Furious Mexico Spicy</li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100">Big Stacker 2.0</li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100">Bacon Rich</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-semibold">
            Quick Link
          </h1>

          <ul className="space-y-4">
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100"><Link href="#home">Home</Link></li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100"><Link href="#about">About</Link></li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100"><Link href="#burgers">Burgers</Link></li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100"><Link href="#delivery">Delivery</Link></li>
            <li className="text-white text-opacity-60 text-lg transition-all duration-300 hover:text-opacity-100"><Link href="#chefs">Chefs</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="text-white text-2xl font-semibold">
            Opening Hours
          </h1>

          <div className="flex flex-col">
            <p className="text-white text-lg">
              Monday - Friday: <span className="text-[#F2A900]"> 8am ~ 4pm</span>
            </p>

            <p className="text-white text-lg">
              Saturday: <span className="text-[#F2A900]"> 8am ~ 12m</span>
            </p>
          </div>

          <div className="flex items-center gap-6 md:gap-10 mt-12">
            <FaFacebook size={32} className="text-[#3b5998]"/>
            <BsInstagram size={32} className="text-[#E4405F]"/>
            <BsTwitterX size={32} />
          </div>
        </div>
      </div>

      <p className="text-center text-lg text-white text-opacity-50 mt-12">
        Copyright © 2024 WebDev Warriors and <Link href="https://rcardoso.vercel.app" target="_black" className="italic text-[#F2A900]">Ruan</Link>
      </p>
    </footer>
  )
}
