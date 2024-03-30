import Image from "next/image"
import { BiShoppingBag } from "react-icons/bi"
import { FaStar } from "react-icons/fa6"

interface BurgerCardProps {
  title: string
  image: string
  reviews: string
  price: string
  description: string
}

export default function BurgerCard({ title, image, reviews, price, description }: BurgerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg m-3">
      <div className="h-[200px] w-[200px] mx-auto">
        <Image src={image} alt={title} width={200} height={200} className="w-[100%] h-[100%] object-cover" />
      </div>
      <h1 className="mt-[1.3rem] text-[22px] text-amber-950 font-semibold">
        {title}
      </h1>

      <div className="flex items-center mt-[0.5rem] space-x-3">
        <div className="flex items-center">
          <FaStar className="w-[1rem] h-[1rem] text-[#F2A900]" />
          <FaStar className="w-[1rem] h-[1rem] text-[#F2A900]" />
          <FaStar className="w-[1rem] h-[1rem] text-[#F2A900]" />
          <FaStar className="w-[1rem] h-[1rem] text-[#F2A900]" />
          <FaStar className="w-[1rem] h-[1rem] text-[#F2A900]" />
        </div>

        <div className="opacity-60">({reviews})</div>
      </div>

      <p className="mt-[0.5rem] text-black text-opacity-70 h-[5rem]">
        {description}
      </p>

      <div className="mt-[1.4rem] flex justify-between items-center">
        <h1 className="text-[25px] font-bold text-red-600">{price}</h1>

        <button
          className="px-4 py-2 transition-all duration-300 bg-[#F2A900] hover:bg-green-700 flex items-center rounded-md text-white"
        >
          <BiShoppingBag className="w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]" />
        </button>
      </div>
    </div>
  )
}