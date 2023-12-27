"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Button.module.scss"

interface ButtonProps {
  className?: string
  children: ReactNode
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={() => console.log("asd")}
    >
      {children}
    </button>
  )
}
