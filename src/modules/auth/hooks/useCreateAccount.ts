import { useRouter } from "next/navigation"
import { useState } from "react"

import { useApp } from "@/contexts/app"
import showToast from "@/utils/showToast"

export interface LoginData {
  name: string
  houseType: string
  street: string
  number: string
}

export default function useCreateAccount() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { setState } = useApp()

  const createAccount = async (data: LoginData) => {
    try {
      setIsLoading(true)

      const response = await fetch("/api/auth/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      if (result.house.id) {
        setState("house", result.house)
        showToast("Cadastro concluido com sucesso")
        router.push("/app")
      }
    } catch (error: unknown) {
      console.log("Login error: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createAccount,
    isLoading,
  }
}
