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
  isInline?: boolean
}

export default function Button({
  type = "button",
  children,
  className,
  href,
  onClick,
  isLoading,
  isInline,
}: ButtonProps) {
  if (href) {
    return (
      <Link
        className={clsx(styles.button, className, isInline && styles.inline)}
        href={href}
      >
        {isLoading ? <Spinner /> : children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={clsx(styles.button, className, isInline && styles.inline)}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
