import Image from "next/image"
import DeliveryImg from '@/public/images/delivery.svg'
import { RiEBike2Fill } from "react-icons/ri"
import { IoFastFood } from "react-icons/io5"
import { BsDoorOpen } from "react-icons/bs"

export default function Delivery() {
  return(
    <div className="pt-[8rem] pb-[3rem]" id="delivery">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        <div>
          <Image src={DeliveryImg} alt="Delivery" />
        </div>

        <div>
          <h1 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] uppercase text-gray-900 md:leading-[4rem] leading-[3rem] font-bold">
            Your <span className="text-[#F2A900]">favorite burger</span> on 
            <br />
            the way
          </h1>

          <p className="opacity-70 mt-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, impedit sunt. Ipsa, atque nihil ea repudiandae exercitationem eaque molestias sequi est hic numquam sed sit necessitatibus facere, nam a quisquam temporibus libero, quam ad odio voluptatem itaque. Sunt, dicta dolorum?
          </p>

          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-[#F2A900]" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-[#F2A900]" />
            <h1 className="text-[18px] text-black font-medium">
              Free shipping from $ 50
            </h1>
          </div>

          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-[#F2A900]" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}