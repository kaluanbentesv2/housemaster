import clsx from "clsx"
import Link from "next/link"
import { IconType } from "react-icons"

import { BiHome, BiPowerOff } from "react-icons/bi"
import styles from "./SideNav.module.scss"

interface SideNavProps {
  isStatic?: boolean
  pathname: string
  navItems: {
    label: string
    href: string
    icon: IconType
  }[]
  onClose: () => void
  onLogout: () => void
  isOpen: boolean
}

export default function SideNav({
  isStatic = false,
  navItems,
  pathname,
  onClose,
  onLogout,
  isOpen,
}: SideNavProps) {
  return (
    <div className={clsx(isOpen && styles.isOpen, isStatic && styles.static)}>
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
          onClick={onLogout}
        >
          <BiHome />
          <p className={styles.linkLabel}>Casa 273</p>
        </button>
      </nav>
      <button onClick={onClose} className={styles.overlay} />
    </div>
  )
}
