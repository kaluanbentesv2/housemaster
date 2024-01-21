import { HouseType } from "@prisma/client"
import SelectHouseView from "@/modules/profile/views/SelectHouseView"

const housesMock: {
  id: string
  street: string
  number: string
  type: HouseType
}[] = [
  {
    id: "123",
    street: "Rua Lima Monteiro",
    number: "300",
    type: "RESIDENCE",
  },
]

export default function SelectHousePage() {
  return <SelectHouseView houses={housesMock} />
}
