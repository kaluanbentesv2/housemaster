import prisma from "@/infra/prisma/prisma"
import House from "@/models/House"

export default async function getHouse(id: string) {
  return prisma.house.findFirst({
    where: {
      id,
    },
  }) as unknown as House
}
