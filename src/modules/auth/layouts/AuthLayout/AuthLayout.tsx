import Image from "next/image"
import { ReactNode } from "react"

import styles from "./AuthLayout.module.scss"
import "./global.scss"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.formBox}>
        <div className={styles.form}>
          <div className={styles.formImageBox}>
            <Image
              src="/logo.png"
              alt="Conjunto Parque das Palmeiras"
              width={180}
              height={180}
            />
          </div>
          {children}
        </div>
      </div>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src="/logo.png"
          alt="Conjunto Parque das Palmeiras"
          width={300}
          height={300}
        />
      </div>
    </main>
  )
}
