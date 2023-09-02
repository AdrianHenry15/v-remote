import React from "react"

interface TitleProps {
  name: string
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  )
}

export default Title
