import React from "react"

interface TitleProps {
  name: string
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Title
