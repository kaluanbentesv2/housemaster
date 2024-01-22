import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import verifyAuth from "@/modules/auth/actions/verifyAuth"
import EditProfileView from "@/modules/profile/views/EditProfileView"

export default async function ProfilePage() {
  await verifyAuth()

  const user = await getCurrentUser()

  return <EditProfileView user={user} />
}
