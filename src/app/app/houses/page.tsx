import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import verifyAuth from "@/modules/auth/actions/verifyAuth"
import HouseListView from "@/modules/houses/views/HouseListView/HouseListView"

export default async function HouseListPage() {
  await verifyAuth()

  const user = await getCurrentUser()

  return <HouseListView houses={user?.houses} />
}
