import { ReactNode } from "react"

import styles from "./Table.module.scss"
import Paper from "../Paper"

interface CommonProps {
  children: ReactNode
}

export const Table = ({ children }: CommonProps) => (
  <Paper className={styles.wrapper}>
    <table className={styles.table}>{children}</table>
  </Paper>
)
