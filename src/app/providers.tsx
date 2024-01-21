"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
      <ToastContainer />
    </SessionProvider>
  )
}
