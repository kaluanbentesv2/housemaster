import Header from "@/components/Header"
import Heading from "@/components/Heading"

import AppLayout from "@/layouts/AppLayout"
import LatestPaymentCard from "../../components/LatestPaymentCard"

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
