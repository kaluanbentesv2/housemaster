import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import SelectHouseView from "@/modules/profile/views/SelectHouseView"

export default async function SelectHousePage() {
  const user = await getCurrentUser()

  return <SelectHouseView houses={user?.houses} />
}
