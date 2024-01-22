import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "normalize.css/normalize.css"
import "@/styles/global.scss"
import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import Providers from "./providers"

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "Housemaster",
  description: "Sistema interno do Conjunto Residencial Parque das Palmeiras",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers user={user}>{children}</Providers>
      </body>
    </html>
  )
}
