import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import authOptions from "@/infra/next-auth/authOptions"

import getUser from "./getUser"

export default async function verifyAuth() {
  const user = await getUser()
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  if (!user?.houseId) {
    redirect("/create-account")
  }
}
