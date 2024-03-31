import { GrRestaurant } from "react-icons/gr";

export default function ReservationForm() {
  return (
    <div className="bg-green-700 p-6 rounded-lg">
      <GrRestaurant className="w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto" />
      <h1 className="text-center font-bold uppercase text-[30px] md:text-[40px] lg:text-[50px] text-white">
        Reservation
      </h1>

      <p className="uppercase text-[20px] md:text-[25px] text-white font-semibold text-center">
        Book your table
      </p>
      
      <div className="mt-[2rem]">
        <select name="people" id="people" className="px-10 py-2.5 block w-[80%] mx-auto bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100">
          <option value="1" className="text-black">1 People</option>
          <option value="2" className="text-black">2 Peoples</option>
          <option value="3" className="text-black">3 Peoples</option>
          <option value="4" className="text-black">4 Peoples</option>
          <option value="5" className="text-black">5 Peoples</option>
        </select>

          <input type="date" className="px-10 py-2.5 block w-[80%] mt-4 mx-auto bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100" />
        <input type="time" className="px-10 py-2.5 bg-transparent block w-[80%] mx-auto mt-[1rem] rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100" />

        <div className="mt-[2rem] w-[80%] text-center mx-auto">
          <button className="px-8 py-3 rounded-lg mb-[3rem] text-lg w-full bg-[#F2A900] transition-all duration-300 hover:bg-green-600 text-white">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}