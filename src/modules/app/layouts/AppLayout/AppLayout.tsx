import { ReactNode } from "react"

import AppBar from "../../components/AppBar"

interface AppLayoutProps {
  title: string
  children: ReactNode
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <div>
      <AppBar title={title} />
      <main>{children}</main>
    </div>
  )
}
