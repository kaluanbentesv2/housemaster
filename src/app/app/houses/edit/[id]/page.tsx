import getHouse from "@/modules/houses/actions/getHouse"
import EditHouseView from "@/modules/houses/views/EditHouseView"

export default async function EditHousePage({
  params,
}: {
  params: { id: string }
}) {
  const id = params?.id as string
  const house = await getHouse(id)

  return <EditHouseView house={house} />
}
