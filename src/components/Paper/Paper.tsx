"use client"

import { ReactNode } from "react"

import styles from "./Paper.module.scss"

interface PaperProps {
  children: ReactNode
}

export default function Paper({ children }: PaperProps) {
  return <div className={styles.paper}>{children}</div>
}
