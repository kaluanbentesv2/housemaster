"use client"

import { ReactNode } from "react"

import { AppProvider } from "@/contexts/app"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return <AppProvider>{children}</AppProvider>
}
