import { HouseType } from "@prisma/client"
import clsx from "clsx"
import { BiDotsVerticalRounded } from "react-icons/bi"

import Dropdown from "@/components/Dropdown"
import { HOUSE_TYPES } from "@/config/maps"

import styles from "./HouseCard.module.scss"
import HouseCardSkeleton from "./HouseCard.skeleton"

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
  return (
    <div
      onClick={onClick}
      className={clsx(styles.container, !onClick && styles.noAction)}
      role="button"
      tabIndex={0}
    >
      <header className={styles.header}>
        <h4 className={styles.number}>{number}</h4>
        <Dropdown trigger={<BiDotsVerticalRounded />}>
          {Boolean(onEdit) && (
            <Dropdown.Item onSelect={onEdit!}>Editar</Dropdown.Item>
          )}
          {Boolean(onRemove) && (
            <Dropdown.Item onSelect={onRemove!}>Remover</Dropdown.Item>
          )}
        </Dropdown>
      </header>
      <p className={styles.street}>{street}</p>
      <p className={styles.type}>{HOUSE_TYPES[type]}</p>
    </div>
  )
}

HouseCard.Skeleton = HouseCardSkeleton
