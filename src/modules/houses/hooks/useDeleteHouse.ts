import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import showToast from "@/utils/showToast"

export default function useDeleteHouse() {
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, startTransition] = useTransition()
  const router = useRouter()

  const deleteHouse = async (id: string) => {
    try {
      setIsLoading(true)

      const result = await fetch("/api/house", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
      const resultData = await result.json()

      if (resultData) {
        showToast(`A casa foi removida com sucesso`)
        startTransition(() => {
          router.refresh()
        })
      }
    } catch (error: unknown) {
      console.error("deleteHouse: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    isRefreshing,
    deleteHouse,
  }
}
