'use client'

import BurgerCard from './BurgerCard/BurgerCard'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktopUltra: {
    breakpoint: { max: 3000, min: 1700 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
}

export default function PopularBurger() {
  return (
    <div className='pt-[3rem] pb-[3rem]'>
      <h1 className="heading">
        Our Popular <span className="text-[#F2A900]">Burgers</span>
      </h1>

      <div className='w-[80%] mt-[4rem] mx-auto'>
        <Carousel 
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          pauseOnHover={false}
          centerMode={false}
          infinite={true}
          responsive={responsive}
          itemClass='item'
          showDots={false}
        >
          <BurgerCard title="Big Stacker 2.0" image="/images/b11.png" reviews="64" price="$ 7.99" description="Duas deliciosas carnes grelhadas no fogo como churrasco, cheddar fatiado, bacon e molho Stacker!" />
          <BurgerCard title="Cheeseburger Triple 3.0" image="/images/b10.png" reviews="38" price="$ 13.99" description="Pão com gergelim, três suculentos hambúrgueres de pura carne bovina, três fatias de queijo derretido, picles, ketchup e mostarda." />
          <BurgerCard title="Fat Double Cheddar" image="/images/b2.png" reviews="25" price="$ 9.49" description="Duas suculentas carnes grelhadas na brasa, cheddar inglês, bacon e molho barbecue!" />
          <BurgerCard title="Furious Mexico Spicy" image="/images/b1.png" reviews="147" price="$ 11.99" description="Pão brioche, um farto hambúrguer de pura carne bovina, cheddar americano, picles, alface, maionese e a mais forte pimenta mexicana." />
          <BurgerCard title="Crispy" image="/images/b3.png" reviews="55" price="$ 4.99" description="Pão brioche, um farto hambúrguer de pura carne bovina, cheddar americano, picles, alface, maionese e a mais forte pimenta mexicana." />
          <BurgerCard title="Gold Chicken" image="/images/b4.png" reviews="71" price="$ 6.49" description="Pão brioche, um farto hambúrguer de frango, cheddar americano, alface, maionese e a molho chipotle." />
          <BurgerCard title="Melt" image="/images/b7.png" reviews="86" price="$ 5.49" description="Uma carne grelhada em brasa holandesa, cheddar americano, alface e molho barbecue!" />
          <BurgerCard title="Double Melt" image="/images/b5.png" reviews="19" price="$ 8.99" description="Duas deliciosas carnes grelhadas no fogo como churrasco, cheddar inglês, bacon e molho barbecue!" />
          <BurgerCard title="Big Fish" image="/images/b6.png" reviews="32" price="$ 3.99" description="Dois filés de peixe grelhados na brasa, cheddar espanhol, alface e molho tártaro!" />
          <BurgerCard title="Bacon Rich" image="/images/b8.png" reviews="231" price="$ 10.49" description="Uma carne bovína grelhada com sal do himalaia, bacon do Texas, alface e molho cítrico!" />
        </Carousel>
      </div>
    </div>
  )
}
