import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import authOptions from "@/infra/next-auth/authOptions"

import getCurrentUser from "./getCurrentUser"

export default async function verifyAuth() {
  const user = await getCurrentUser()
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/login")
  }

  if (!user?.houses.length) {
    redirect("/auth/create-account")
  }
}
