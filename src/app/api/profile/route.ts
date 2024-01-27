import { NextResponse } from "next/server"

import prisma from "@/infra/prisma/prisma"
import getCurrentUser from "@/modules/auth/actions/getCurrentUser"

export async function PATCH(request: Request) {
  try {
    const user = await getCurrentUser()
    const body = await request.json()

    const result = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: body.name,
      },
    })

    return NextResponse.json(result)
  } catch (error: unknown) {
    return NextResponse.json({ error })
  }
}
