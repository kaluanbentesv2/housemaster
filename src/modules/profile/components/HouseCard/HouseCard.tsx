import Paper from "@/components/Paper"

import styles from "./HouseCard.module.scss"

interface HouseCardProps {
  street: string
  number: string
  type: string
}

export default function HouseCard({ street, number, type }: HouseCardProps) {
  return (
    <Paper className={styles.container}>
      <h4 className={styles.number}>{number}</h4>
      <p className={styles.street}>{street}</p>
      <p className={styles.type}>{type}</p>
    </Paper>
  )
}
