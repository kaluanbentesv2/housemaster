"use client"

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { AppProvider } from "@/contexts/app"
import User from "@/models/User"

interface ProvidersProps {
  children: ReactNode
  user: User
}

export default function Providers({ children, user }: ProvidersProps) {
  return (
    <SessionProvider>
      <AppProvider user={user}>
        {children}
        <ToastContainer />
      </AppProvider>
    </SessionProvider>
  )
}
