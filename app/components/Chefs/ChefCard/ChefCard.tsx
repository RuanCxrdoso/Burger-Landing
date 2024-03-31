import Image, { StaticImageData } from "next/image"

interface ChefCardProps {
  image: StaticImageData
  name: string
  role: string
  description: string
}

export default function ChefCard({ image, name, role, description }: ChefCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src={image} alt="Chef 1" className="rounded-2xl object-cover" />
      </div>

      <h1 className="text-[2.5rem] font-semibold text-center mt-[1rem] text-gray-700">
        {name}
      </h1>

      <p className="text-base text-white mt-[0.5rem] px-4 py-1 bg-[#F2A900]">
        {role}
      </p>

      <p className="text-center w-[70%] mt-[1rem] opacity-70 text-gray-500">
        {description}
      </p>
  </div>
  )
}
