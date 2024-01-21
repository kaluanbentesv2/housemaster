import clsx from "clsx"
import Link from "next/link"
import { IconType } from "react-icons"

import { BiHome, BiPowerOff } from "react-icons/bi"
import styles from "./SideNav.module.scss"

interface SideNavProps {
  isOpen: boolean
  house: string
  pathname: string
  navItems: {
    label: string
    href: string
    icon: IconType
  }[]
  onClose: () => void
  onLogout: () => void
  onSelectHouse: () => void
}

export default function SideNav({
  isOpen,
  house,
  navItems,
  pathname,
  onClose,
  onLogout,
  onSelectHouse,
}: SideNavProps) {
  return (
    <div className={clsx(styles.container, isOpen && styles.isOpen)}>
      <nav className={styles.sideNav}>
        <h2 className={styles.brand}>Housemaster</h2>
        {navItems.map((navItem) => {
          const LinkIcon = navItem.icon

          return (
            <Link
              className={clsx(
                styles.link,
                pathname === navItem.href && styles.linkActive
              )}
              key={navItem.label}
              href={navItem.href}
            >
              <LinkIcon />
              <p className={styles.linkLabel}>{navItem.label}</p>
            </Link>
          )
        })}
        <button className={styles.link} onClick={onLogout}>
          <BiPowerOff />
          <p className={styles.linkLabel}>Sair</p>
        </button>
        <button
          className={clsx(styles.link, styles.houseButton)}
          onClick={onSelectHouse}
        >
          <BiHome />
          <p className={styles.linkLabel}>Casa {house}</p>
        </button>
      </nav>
      <button onClick={onClose} className={styles.overlay} />
    </div>
  )
}
