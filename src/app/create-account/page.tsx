import { redirect } from "next/navigation"

import getUser from "@/modules/auth/actions/getUser"
import CreateAccountView from "@/modules/auth/views/CreateAccountView"

export default async function LoginPage() {
  const user = await getUser()

  if (user?.houseId) {
    redirect("/")
  }

  return <CreateAccountView />
}
