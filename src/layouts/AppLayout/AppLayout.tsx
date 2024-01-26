"use client"

import { usePathname, useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { ReactNode, useState } from "react"

import appNavItems from "@/config/appNavItems"
import { useApp } from "@/contexts/app"
import useBreakpoint from "@/hooks/useBreakpoint"
import House from "@/models/House"

import styles from "./AppLayout.module.scss"
import "./global.scss"
import AppBar from "../../components/AppBar"
import SideNav from "../../components/SideNav"

interface AppLayoutProps {
  title: string
  children: ReactNode
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { app } = useApp()
  const house = app.house as unknown as House
  const breakpoint = useBreakpoint()

  return (
    <div className={styles.wrapper}>
      {["mobile"].includes(breakpoint!) && (
        <AppBar
          title={title}
          onMenuClick={() => setIsOpen(true)}
          onUserClick={() => router.push("/profile")}
        />
      )}
      <SideNav
        isOpen={isOpen}
        house={house?.number}
        navItems={appNavItems}
        onClose={() => setIsOpen(false)}
        pathname={pathname}
        onSelectHouse={() => router.push("/app/houses/select")}
        onLogout={() => {
          signOut()
          router.push("/login")
        }}
      />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}
