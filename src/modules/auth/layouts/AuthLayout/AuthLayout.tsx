import Image from "next/image"
import { ReactNode } from "react"

import styles from "./AuthLayout.module.scss"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className={styles.main}>
      <div className={styles.formBox}>
        <form className={styles.form}>
          <div className={styles.formImageBox}>
            <Image
              src="/logo.png"
              alt="Conjunto Parque das Palmeiras"
              width={100}
              height={100}
            />
          </div>
          {children}
        </form>
      </div>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src="/logo.png"
          alt="Conjunto Parque das Palmeiras"
          width={500}
          height={500}
        />
      </div>
    </main>
  )
}
