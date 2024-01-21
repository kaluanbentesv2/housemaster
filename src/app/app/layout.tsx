import type { Metadata } from "next"

import "normalize.css/normalize.css"
import "@/styles/global.scss"
import Providers from "./providers"

export const metadata: Metadata = {
  title: "Housemaster",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Providers>{children}</Providers>
}
