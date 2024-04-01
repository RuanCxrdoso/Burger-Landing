export default function Newsletter() {
  return (
    <section className="pt-20 pb-20 mb-24 mt-24">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] uppercase text-black font-bold">
          Join for hot offers
        </h1>

        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorem neque saepe eum aspernatur doloribus iusto maiores excepturi atque voluptates esse, itaque voluptatem quos. Nobis nisi quae exercitationem repellat!
        </p>

        <div className="flex justify-center items-center space-x-2 mt-8 md:mt-12">
          <input type="email" placeholder="Email adress" className="px-5 py-4 bg-gray-300 w-[50%] outline-none rounded-lg placeholder:text-black" />

          <button className="px-5 py-4 md:px-8 bg-[#F2A900] hover:bg-green-700 transition-all duration-300 rounded-md text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
