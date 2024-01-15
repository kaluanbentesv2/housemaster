import verifyAuth from "@/modules/auth/actions/verifyAuth"
import DashboardView from "@/modules/dashboard/views/DashboardView"

export default async function DashboardPage() {
  await verifyAuth()

  return <DashboardView />
}
