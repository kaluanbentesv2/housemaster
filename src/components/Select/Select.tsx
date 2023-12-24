"use client"

import clsx from "clsx"
import { ReactNode } from "react"

import styles from "./Select.module.scss"

interface SelectProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
  children: ReactNode
}

export default function Select({
  className,
  id,
  label,
  children,
  placeholder,
}: SelectProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <select className={styles.input} id={id}>
        <option value="">{placeholder || "Selecione"}</option>
        {children}
      </select>
    </div>
  )
}
