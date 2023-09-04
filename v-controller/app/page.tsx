"use client"

import CarLayout from "./components/CarLayout"

export default function Home() {
  return (
    <main className="flex flex-col text-white items-center">
      <div className="mainWrapper">
        <CarLayout />
      </div>
    </main>
  )
}
