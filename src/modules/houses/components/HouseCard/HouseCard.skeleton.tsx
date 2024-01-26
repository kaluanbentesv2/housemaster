import Skeleton from "@/components/Skeleton"
import styles from "./HouseCard.module.scss"

export default function HouseCardSkeleton() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Skeleton className={styles.titleSkeleton} />
      </header>
      <Skeleton className={styles.streetSkeleton} />
      <Skeleton className={styles.typeSkeleton} />
    </div>
  )
}
