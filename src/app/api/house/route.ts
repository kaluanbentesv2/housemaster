import { NextResponse } from "next/server"

import prisma from "@/infra/database/prisma"
import getCurrentUser from "@/modules/auth/actions/getCurrentUser"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    const body = await request.json()

    const result = await prisma.house.create({
      data: {
        street: body.street,
        number: body.number,
        type: body.type,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    })

    return NextResponse.json(result)
  } catch (error: unknown) {
    return NextResponse.json({ error })
  }
}
