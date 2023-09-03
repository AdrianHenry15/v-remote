"use client"

import React, { useState } from "react"
import Container from "./Container"
import Header from "./header/Header"
import CarDisplay from "./car-display/CarDisplay"
import WidgetContainer from "./widgets/WidgetContainer"
import OptionsContainer from "./options/OptionsContainer"
import GasDisplay from "./gas-display/GasDisplay"

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
        <div className="backSplash">
          <Header mainOwner={mainOwner} />
          {/* <GasDisplay /> */}
          <CarDisplay />
          <WidgetContainer />
        </div>
        <OptionsContainer mainOwner={mainOwner} setMainOwner={setMainOwner} />
      </Container>
    </div>
  )
}

export default CarLayout
