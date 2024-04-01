import img1 from '@/public/images/f1.jpg'
import img2 from '@/public/images/f2.jpg'
import img3 from '@/public/images/f3.jpg'
import Image from 'next/image'

export default function Feature() {
  return (
    <section className="pt-[5rem] pb-[3rem] about" id="about">
      <h1 className="heading">
        Burgers made with
        <br />
        love and
        <span className='text-[#F2A900]'> care</span>
      </h1>

      <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div data-aos="fade-left" data-aos-anchor=".about">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300">
            <Image src={img1}  alt='' className='rounded-3xl' />

            <h1 className='text-center font-semibold text-[1.5rem] mt-[1.5rem]'>Our Burger</h1>

            <p className='text-center opacity-60'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem quaerat quo nisi, veniam at nesciunt eaque dolorum fugit nam quidem commodi !
            </p>
          </div>

        </div>

        <div data-aos="zoom-in" data-aos-delay="250" data-aos-anchor=".about">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300 md:translate-y-24">
            <Image src={img2}  alt='' className='rounded-3xl' />

            <h1 className='text-center font-semibold text-[1.5rem] mt-[1.5rem]'>Your Opinion is Important</h1>

            <p className='text-center opacity-60'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem quaerat quo nisi, veniam at nesciunt eaque dolorum fugit nam quidem commodi !
            </p>
          </div>

        </div>

        <div data-aos="fade-right" data-aos-delay="500" data-aos-anchor=".about">
          <div className="p-6 hover:bg-white rounded-lg transition-all duration-300 md:-translate-y-8">
            <Image src={img3}  alt='' className='rounded-3xl' />

            <h1 className='text-center font-semibold text-[1.5rem] mt-[1.5rem]'>Chicken Burgers</h1>

            <p className='text-center opacity-60'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem quaerat quo nisi, veniam at nesciunt eaque dolorum fugit nam quidem commodi !
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
