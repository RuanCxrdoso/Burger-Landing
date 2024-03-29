'use client'

import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import burguer1 from '@/public/images/b1.png'
import burguer2 from '@/public/images/b2.png'
import burguer10 from '@/public/images/b10.png'
import burguer11 from '@/public/images/b11.png'
import { BiCycling } from 'react-icons/bi'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
}

export default function Hero() {
  return (
    <Carousel 
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      pauseOnHover={false}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass='item'
      showDots={true}
    >
      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-[#F2A900] md:clip_path'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[0.1rem] md:gap-[2rem] mx-auto'>
          <Image src={burguer11} height={650} width={650} alt='' />
          <div>
            <h1 className='text-[1.5rem] md:text-[50px] font-semibold text-blue-700 '>
              Fast Food Burger
            </h1>

            <h1 className='text-[40px] md:text-[90px] leading-[2.5rem] md:leading-[5rem] uppercase text-amber-950 font-bold'>
              Big 
              <br /> 
              Stacker 2.0
            </h1>

            <p className='mt-[0.5rem] mb-[0.7rem] md:mt-[1rem] md:mb-[2rem] text-amber-950 text-opacity-70 text-[18px] md:text-[20px]'>
              Duas deliciosas carnes grelhadas no fogo como churrasco, cheddar fatiado, bacon e molho Stacker!
            </p>

            <button 
              className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] transition-all duration-300 bg-green-700 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.8rem] h-[1.8rem]" />
              </span>

              <span className="font-bold text-[1.2rem]">
                Order Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-orange-500 md:clip_path'>
        <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-[0.1rem] md:gap-[2rem] mx-auto'>
          <Image src={burguer10} height={700} width={700} alt='' />
          <div>
            <h1 className='text-[1.5rem] md:text-[50px] font-semibold text-green-900 '>
              Fast Food Burger
            </h1>

            <h1 className='text-[40px] md:text-[90px] leading-[2.5rem] md:leading-[5rem] uppercase text-amber-950 font-bold'>
              Cheeseburger
              <br />
              Triple 3.0
            </h1>

            <p className='mt-[0.5rem] mb-[0.7rem] md:mt-[1rem] md:mb-[2rem] text-amber-950 text-opacity-90 text-[18px] md:text-[20px]'>
              Pão com gergelim, três suculentos hambúrgueres de pura carne bovina, três fatias de queijo derretido, picles, ketchup e mostarda.
            </p>

            <button
              className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] transition-all duration-300 bg-green-700 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.8rem] h-[1.8rem]" />
              </span>
              <span className="font-bold text-[1.2rem]">
                Order Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-500 md:clip_path'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[0.1rem] md:gap-[2rem] mx-auto'>
          <Image src={burguer2} alt='' />
          <div>
            <h1 className='text-[1.5rem] md:text-[50px] font-semibold text-[#F2A900] '>
              Fast Food Burger
            </h1>

            <h1 className='text-[40px] md:text-[90px] leading-[2.5rem] md:leading-[5rem] uppercase text-amber-950 font-bold'>Fat Double <br/> Cheddar</h1>

            <p className='mt-[0.5rem] mb-[0.7rem] md:mt-[1rem] md:mb-[2rem] text-amber-950 text-opacity-70 text-[18px] md:text-[20px]'>
              Duas deliciosas carnes grelhadas no fogo como churrasco, cheddar inglês, bacon e molho barbecue!
            </p>

            <button 
              className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] transition-all duration-300 bg-green-700 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.8rem] h-[1.8rem]" />
              </span>

              <span className="font-bold text-[1.2rem]">
                Order Now
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-400 md:clip_path'>
        <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[0.1rem] md:gap-[2rem] mx-auto'>
          <Image src={burguer1} height={650} width={650} alt='' />
          <div>
            <h1 className='text-[1.5rem] md:text-[50px] font-semibold text-[#F2A900] '>
              Fast Food Burger
            </h1>

            <h1 className='text-[40px] md:text-[90px] leading-[2.5rem] md:leading-[5rem] uppercase text-amber-950 font-bold'>Furious <br />Mexico Spicy</h1>

            <p className='mt-[0.5rem] mb-[0.7rem] md:mt-[1rem] md:mb-[2rem] text-amber-950 text-opacity-70 text-[18px] md:text-[20px]'>
              Pão brioche, um farto hambúrguer de pura carne bovina, cheddar americano, picles, alface, maionese e a mais forte pimenta mexicana.
            </p>

            <button 
              className="px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] transition-all duration-300 bg-green-700 hover:bg-red-600 flex items-center rounded-md space-x-2 text-white"
            >
              <span>
                <BiCycling className="w-[1.8rem] h-[1.8rem]" />
              </span>

              <span className="font-bold text-[1.2rem]">
                Order Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  )
}
