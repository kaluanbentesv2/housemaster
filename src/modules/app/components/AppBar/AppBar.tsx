import { BiMenu, BiUser } from "react-icons/bi"

import styles from "./AppBar.module.scss"

interface AppBarProps {
  title: string
}

export default function AppBar({ title }: AppBarProps) {
  return (
    <header className={styles.header}>
      <button className={styles.iconButton}>
        <BiMenu />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.iconButton}>
        <BiUser />
      </button>
    </header>
  )
}
