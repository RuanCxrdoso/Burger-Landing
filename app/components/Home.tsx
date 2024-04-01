'use client'

import { useEffect } from "react"
import Chefs from "./Chefs/Chefs"
import Delivery from "./Delivery/Delivery"
import Feature from "./Features/Feature"
import Hero from "./Hero/Hero"
import Newsletter from "./Newsletter/Newsletter"
import PopularBurger from "./PopularBurger/PopularBurger"
import Reservation from "./Reservations/Reservation"

import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: 'top-center',
      })
    }

    initAOS()
  }, [])

  return (
    <main className="overflow-hidden">
      <span id="home"></span>
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Chefs />
      <Reservation />
      <Newsletter />
    </main>
  )
}
