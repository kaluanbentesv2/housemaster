import Dropdown from "@/components/Dropdown"
import Paper from "@/components/Paper"

import styles from "./HouseCard.module.scss"

interface HouseCardProps {
  street: string
  number: string
  type: string
}

const menuItems = [
  {
    label: "Editar",
    value: "edit",
  },
  {
    label: "Remover",
    value: "remove",
  },
]

export default function HouseCard({ street, number, type }: HouseCardProps) {
  return (
    <Paper className={styles.container}>
      <header className={styles.header}>
        <h4 className={styles.number}>{number}</h4>
        <Dropdown items={menuItems} />
      </header>
      <p className={styles.street}>{street}</p>
      <p className={styles.type}>{type}</p>
    </Paper>
  )
}
