import { revalidatePath } from "next/cache"

import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import verifyAuth from "@/modules/auth/actions/verifyAuth"
import ProfileView from "@/modules/profile/views/ProfileVIew"

export default async function ProfilePage() {
  await verifyAuth()

  revalidatePath("/app/profile")

  const user = await getCurrentUser()

  return <ProfileView user={user} />
}
