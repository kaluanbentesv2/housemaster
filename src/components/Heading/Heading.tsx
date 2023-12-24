"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Heading.module.scss"

interface HeadingProps {
  className?: string
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const levels = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
  4: styles.h4,
  5: styles.h5,
  6: styles.h6,
}

export default function Heading({
  className,
  children,
  level = 2,
}: HeadingProps) {
  return (
    <h2 className={clsx(styles.base, levels[level], className)}>{children}</h2>
  )
}
