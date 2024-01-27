"use client"

import clsx from "clsx"
import Link from "next/link"
import { ReactNode } from "react"

import Spinner from "@/components/Spinner"
import { MapType } from "@/config/maps"

import styles from "./Button.module.scss"

interface ButtonProps {
  variant?: "primary" | "secondary"
  type?: "submit" | "reset" | "button"
  className?: string
  children: ReactNode
  href?: string
  onClick?: () => void
  isLoading?: boolean
  isInline?: boolean
}

const BUTTON_VARIANTS: MapType = {
  primary: styles.primary,
  secondary: styles.secondary,
}

export default function Button({
  variant = "primary",
  type = "button",
  children,
  className,
  href,
  onClick,
  isLoading,
  isInline,
}: ButtonProps) {
  const classNameString = clsx(
    styles.button,
    isInline && styles.inline,
    BUTTON_VARIANTS[variant],
    className
  )

  if (href) {
    return (
      <Link className={classNameString} href={href}>
        {isLoading ? <Spinner /> : children}
      </Link>
    )
  }

  return (
    <button type={type} className={classNameString} onClick={onClick}>
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
