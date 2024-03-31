import Image from "next/image"

import ChefCard from "./ChefCard/ChefCards"

import chef1 from '@/public/images/t1.jpg'
import chef2 from '@/public/images/t2.jpg'
import chef3 from '@/public/images/t3.jpg'

export default function Chefs() {
  return (
    <div className="pt-[5rem] pb-[3rem] w-[80%] mx-auto">
      <h1 className="heading">
        Meet our experts <span className="text-[#F2A900]">Chefs</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[3rem] mt-[5rem]">
        <ChefCard 
          image={chef1}
          name="Ramsey"
          role="Head Chef"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur blanditiis recusandae maxime omnis est possimus odio repellat optio."
        />

        <ChefCard 
          image={chef2}
          name="Carosella"
          role="Executive Chef"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur blanditiis recusandae maxime omnis est possimus odio repellat optio."
        />

        <ChefCard 
          image={chef3}
          name="Linguini"
          role="Kitchen Porter"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur blanditiis recusandae maxime omnis est possimus odio repellat optio."
        />
      </div>
    </div>
  )
}
