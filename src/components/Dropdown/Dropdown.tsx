import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiDotsVerticalRounded } from "react-icons/bi"

import styles from "./Dropdown.module.scss"

interface DropdownProps {
  items: {
    label: string
    value: string
  }[]
}

export default function Dropdown({ items }: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.trigger}>
          <BiDotsVerticalRounded />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.menu} align="end">
          {items.map((item, index) => (
            <DropdownMenu.Item key={index} className={styles.menuItem}>
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
