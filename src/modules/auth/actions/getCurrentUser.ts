import { getServerSession } from "next-auth"

import prisma from "@/infra/database/prisma"
import authOptions from "@/infra/next-auth/authOptions"
import User from "@/models/User"

export default async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  const user = (await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      houses: true,
    },
  })) as unknown as User

  return user
}
