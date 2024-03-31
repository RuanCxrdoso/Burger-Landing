import Chefs from "./Chefs/Chefs"
import Delivery from "./Delivery/Delivery"
import Feature from "./Features/Feature"
import Hero from "./Hero/Hero"
import Newsletter from "./Newsletter/Newsletter"
import PopularBurger from "./PopularBurger/PopularBurger"
import Reservation from "./Reservations/Reservation"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Chefs />
      <Reservation />
      <Newsletter />
    </div>
  )
}
