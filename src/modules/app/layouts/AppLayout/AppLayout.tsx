"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useState } from "react"

import navItems from "@/config/navItems"
import useBreakpoint from "@/hooks/useBreakpoint"

import styles from "./AppLayout.module.scss"
import AppBar from "../../components/AppBar"
import SideNav from "../../components/SideNav"

interface AppLayoutProps {
  title: string
  children: ReactNode
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const breakpoint = useBreakpoint()

  return (
    <div className={styles.wrapper}>
      {["tablet", "mobile"].includes(breakpoint!) && (
        <AppBar
          title={title}
          onMenuClick={() => setIsOpen(true)}
          onUserClick={() => router.push("/user")}
        />
      )}
      <SideNav
        isStatic
        isOpen={isOpen}
        navItems={navItems}
        onClose={() => setIsOpen(false)}
        onLogout={() => alert("logout")}
      />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  )
}
