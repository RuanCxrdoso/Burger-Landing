import Feature from "./Features/Feature"
import Hero from "./Hero/Hero"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Feature />
    </div>
  )
}