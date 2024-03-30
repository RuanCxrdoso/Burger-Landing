import Delivery from "./Delivery/Delivery"
import Feature from "./Features/Feature"
import Hero from "./Hero/Hero"
import PopularBurger from "./PopularBurger/PopularBurger"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
    </div>
  )
}