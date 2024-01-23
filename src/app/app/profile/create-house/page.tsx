import verifyAuth from "@/modules/auth/actions/verifyAuth"
import CreateHouseView from "@/modules/profile/views/CreateHouseView"

export default async function CreateHousePage() {
  await verifyAuth()

  return <CreateHouseView />
}
