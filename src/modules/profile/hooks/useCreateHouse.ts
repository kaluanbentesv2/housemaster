import { useRouter } from "next/navigation"
import { useState } from "react"
import showToast from "@/utils/showToast"

export interface CreateHousePayload {
  street: string
  number: string
  type: string
}

export default function useCreateHouse() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const createHouse = async (data: CreateHousePayload) => {
    try {
      setIsLoading(true)

      const result = await fetch("/api/house", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const resultData = await result.json()

      if (resultData) {
        showToast(`A casa ${resultData.number} foi criada com sucesso`)
        router.push("/app/profile")
      }
    } catch (error: unknown) {
      console.error("createHouse: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    createHouse,
  }
}
