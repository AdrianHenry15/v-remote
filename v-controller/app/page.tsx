import Image from "next/image"
import CarLayout from "./components/CarLayout"

export default function Home() {
  return (
    <main className="flex flex-col text-white items-center">
      <CarLayout />
    </main>
  )
}
