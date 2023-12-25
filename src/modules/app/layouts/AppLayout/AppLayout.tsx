"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useState } from "react"

import navItems from "@/config/navItems"

import AppBar from "../../components/AppBar"
import SideNav from "../../components/SideNav"

interface AppLayoutProps {
  title: string
  children: ReactNode
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div>
      <AppBar
        title={title}
        onMenuClick={() => setIsOpen(true)}
        onUserClick={() => router.push("/user")}
      />
      <SideNav
        isOpen={isOpen}
        navItems={navItems}
        onClose={() => setIsOpen(false)}
      />
      <main>{children}</main>
    </div>
  )
}
