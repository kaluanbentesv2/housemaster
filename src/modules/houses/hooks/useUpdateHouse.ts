import { useRouter } from "next/navigation"
import { useState } from "react"
import showToast from "@/utils/showToast"

export interface UpdateHousePayload {
  street: string
  number: string
  type: string
}

export default function useUpdateHouse() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const updateHouse = (id: string) => async (data: UpdateHousePayload) => {
    try {
      setIsLoading(true)

      const result = await fetch("/api/house", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          id,
        }),
      })
      const resultData = await result.json()

      if (resultData) {
        showToast(`A casa ${resultData.number} foi atualizada com sucesso`)
        router.push("/app/houses?refresh=true")
      }
    } catch (error: unknown) {
      console.error("updateHouse: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    updateHouse,
  }
}
