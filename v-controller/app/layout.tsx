import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import CarLayout from "./components/CarLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "V-Controller",
  description: "Control Your Car",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}