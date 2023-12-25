import { BiMenu, BiUser } from "react-icons/bi"

import styles from "./AppBar.module.scss"

interface AppBarProps {
  title: string
  onMenuClick: () => void
  onUserClick: () => void
}

export default function AppBar({
  title,
  onMenuClick,
  onUserClick,
}: AppBarProps) {
  return (
    <header className={styles.header}>
      <button onClick={onMenuClick} className={styles.iconButton}>
        <BiMenu />
      </button>
      <h1 className={styles.title}>{title}</h1>
      <button onClick={onUserClick} className={styles.iconButton}>
        <BiUser />
      </button>
    </header>
  )
}
