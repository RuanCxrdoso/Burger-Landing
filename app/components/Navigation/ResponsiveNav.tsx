'use client'

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)

  function handleOpenNav() {
    setShowNav(true)
  }

  function handleCloseNav() {
    setShowNav(false)
  }

  return (
    <div>
      <Nav openNav={handleOpenNav} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  )
}
