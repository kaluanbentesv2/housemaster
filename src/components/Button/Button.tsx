"use client"

import clsx from "clsx"
import Link from "next/link"
import { ReactNode } from "react"

import Spinner from "@/components/Spinner"

import styles from "./Button.module.scss"

interface ButtonProps {
  type?: "submit" | "reset" | "button"
  className?: string
  children: ReactNode
  href?: string
  onClick?: () => void
  isLoading?: boolean
}

export default function Button({
  type = "button",
  children,
  className,
  href,
  onClick,
  isLoading,
}: ButtonProps) {
  if (href) {
    return (
      <Link className={clsx(styles.button, className)} href={href}>
        {isLoading ? <Spinner /> : children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={clsx(styles.button, className)}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
