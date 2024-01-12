import { getServerSession } from "next-auth"

import prisma from "@/infra/database/prisma"
import authOptions from "@/infra/next-auth/authOptions"

export default async function getUser() {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  return user
}
