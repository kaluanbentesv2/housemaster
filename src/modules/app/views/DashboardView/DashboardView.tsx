import Heading from "@/components/Heading"

import styles from "./DashboardView.module.scss"
import LatestPaymentCard from "../../components/LatestPaymentCard"
import AppLayout from "../../layouts/AppLayout"

export default function DashboardView() {
  return (
    <AppLayout title="Dashboard">
      <Heading className={styles.title}>Dashboard</Heading>
      <LatestPaymentCard status="paid" />
    </AppLayout>
  )
}
