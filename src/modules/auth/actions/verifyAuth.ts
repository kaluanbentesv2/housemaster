import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import authOptions from "@/infra/next-auth/authOptions"

import getCurrentUser from "./getCurrentUser"

export default async function verifyAuth() {
  const user = await getCurrentUser()
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  if (!user?.houseId) {
    redirect("/create-account")
  }
}