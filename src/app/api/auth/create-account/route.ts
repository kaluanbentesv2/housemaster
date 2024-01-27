import { NextResponse } from "next/server"

import prisma from "@/infra/prisma/prisma"
import getCurrentUser from "@/modules/auth/actions/getCurrentUser"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    const body = await request.json()

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        name: body.name,
      },
    })

    const house = await prisma.house.create({
      data: {
        street: body.street,
        number: body.number,
        type: body.houseType,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    })

    return NextResponse.json({ house })
  } catch (error: unknown) {
    return NextResponse.json({ error })
  }
}
