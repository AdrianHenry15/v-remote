"use client"

import React, { useState } from "react"
import Container from "./Container"
import Header from "./header/Header"
import CarDisplay from "./car-display/CarDisplay"
import WidgetContainer from "./widgets/WidgetContainer"
import OptionsContainer from "./options/OptionsContainer"

interface CarLayoutProps {
  climate: string
  controls: string
  trunk: string
  hood: string
}

const CarLayout = () => {
  const [mainOwner, setMainOwner] = useState(false)
  return (
    <div>
      <Container>
        <Header mainOwner={mainOwner} />
        <CarDisplay />
        <WidgetContainer />
        <OptionsContainer mainOwner={mainOwner} setMainOwner={setMainOwner} />
      </Container>
    </div>
  )
}

export default CarLayout
