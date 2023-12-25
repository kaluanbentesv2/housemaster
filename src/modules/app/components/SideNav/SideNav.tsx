import clsx from "clsx"
import Link from "next/link"
import { IconType } from "react-icons"

import styles from "./SideNav.module.scss"

interface SideNavProps {
  navItems: {
    label: string
    href: string
    icon: IconType
  }[]
  onClose: () => void
  isOpen: boolean
}

export default function SideNav({ navItems, onClose, isOpen }: SideNavProps) {
  return (
    <div className={clsx(isOpen && styles.isOpen)}>
      <nav className={styles.sideNav}>
        {navItems.map((navItem) => {
          const LinkIcon = navItem.icon

          return (
            <Link
              className={styles.link}
              key={navItem.label}
              href={navItem.href}
            >
              <LinkIcon />
              <p className={styles.linkLabel}>{navItem.label}</p>
            </Link>
          )
        })}
      </nav>
      <button onClick={onClose} className={styles.overlay} />
    </div>
  )
}
