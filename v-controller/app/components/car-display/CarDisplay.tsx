"use client"

import Image from "next/image"
import React from "react"
import CarDemo from "../../../public/images/bmw_e39_m5.png"

const CarDisplay = () => {
  return (
    <div className="carDisplayBg">
      <Image src={CarDemo} alt="car-model" />
    </div>
  )
}

export default CarDisplay
