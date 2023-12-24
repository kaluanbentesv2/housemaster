"use client"

import clsx from "clsx"
import styles from "./Input.module.scss"

interface InputProps {
  className?: string
  id: string
  label?: string
  placeholder?: string
}

export default function Input({
  className,
  id,
  label,
  placeholder,
}: InputProps) {
  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} placeholder={placeholder} />
    </div>
  )
}
