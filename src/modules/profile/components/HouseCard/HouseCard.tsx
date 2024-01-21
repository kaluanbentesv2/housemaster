import { HouseType } from "@prisma/client"
import clsx from "clsx"
import Dropdown from "@/components/Dropdown"

import { HOUSE_TYPES } from "@/config/maps"
import styles from "./HouseCard.module.scss"

interface HouseCardProps {
  street: string
  number: string
  type: HouseType
  onClick?: () => void
  onRemove?: () => void
  onEdit?: () => void
}

export default function HouseCard({
  street,
  number,
  type,
  onClick,
  onRemove,
  onEdit,
}: HouseCardProps) {
  const menuItems = [
    {
      label: "Editar",
      value: "edit",
      action: onEdit,
    },
    {
      label: "Remover",
      value: "remove",
      action: onRemove,
    },
  ]

  return (
    <button
      onClick={onClick}
      className={clsx(styles.container, !onClick && styles.noAction)}
      type="button"
    >
      <header className={styles.header}>
        <h4 className={styles.number}>{number}</h4>
        {Boolean(menuItems[0].action) && <Dropdown items={menuItems} />}
      </header>
      <p className={styles.street}>{street}</p>
      <p className={styles.type}>{HOUSE_TYPES[type]}</p>
    </button>
  )
}
