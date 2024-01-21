import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import authOptions from "@/infra/next-auth/authOptions"
import LoginView from "@/modules/auth/views/LoginView"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/app")
  }

  return <LoginView />
}
