import { FiPhone } from "react-icons/fi"
import ReservationForm from "./ReservationForm/ReservationForm"

export default function Reservation() {
  return (
    <div className="relative pt-[5rem] mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/images/bg-black.jpg')] bg-no-repeat bg-cover w-full h-full">
      <div className="absolute inset-0 bg-[#000000a6]" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[3rem] w-[80%] mx-auto mt-[4rem] mb-[4rem] relative">
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] uppercase text-white md:leading-[4rem] leading-[3rem] font-bold">
            DO YOU HAVE ANY DINNER PLAN TODAY?
            <br /> 
            RESERVE YOUR TABLE
          </h1>

          <p className="text-white opacity-50 text-[17px] mt-[1rem]">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis illum veniam sed hic minus. Nam at qui eos nihil ipsum. Consequatur porro eligendi fuga aliquid.
          </p>

          <div className="flex items-center gap-4 mt-[2rem]">
            <div className="text-white text-[1.4rem] p-3 rounded-full bg-red-500">
              <FiPhone />
            </div>

            <div>
              <p className="font-semibold text-[25px] text-white">
                Quick order 24/7
              </p>

              <p className="font-semibold text-[#F2A900] text-[30px]">
                +71 9 9999 9999
              </p>
            </div>
          </div>
        </div>

        <ReservationForm />
      </div>
    </div>
  )
}
