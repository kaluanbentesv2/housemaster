import DashboardView from "@/modules/app/views/DashboardView"

import verifyAuth from "@/modules/auth/actions/verifyAuth"

export default async function DashboardPage() {
  await verifyAuth()

  return <DashboardView />
}
