import Header from "@/components/Header"
import Heading from "@/components/Heading"

import LatestPaymentCard from "../../components/LatestPaymentCard"
import AppLayout from "../../layouts/AppLayout"

export default function DashboardView() {
  return (
    <AppLayout title="Dashboard">
      <Header>
        <Heading>Dashboard</Heading>
      </Header>
      <LatestPaymentCard status="paid" />
    </AppLayout>
  )
}
