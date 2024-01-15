import { NextResponse } from "next/server"

import prisma from "@/infra/database/prisma"
import getCurrentUser from "@/modules/auth/actions/getCurrentUser"

export async function POST(request: Request) {
  const user = await getCurrentUser()

  try {
    const body = await request.json()

    const house = await prisma.house.create({
      data: {
        street: body.street,
        number: body.number,
        type: body.houseType,
        users: {
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
