import { redirect } from "next/navigation"

import getCurrentUser from "@/modules/auth/actions/getCurrentUser"
import CreateAccountView from "@/modules/auth/views/CreateAccountView"

export default async function LoginPage() {
  const user = await getCurrentUser()

  if (user?.houseId) {
    redirect("/")
  }

  return <CreateAccountView />
}
