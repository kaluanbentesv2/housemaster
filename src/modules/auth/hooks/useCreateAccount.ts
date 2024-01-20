import { useRouter } from "next/navigation"
import { useState } from "react"
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
        showToast("Cadastro concluido com sucesso")
        router.push("/")
      }
    } catch (error: unknown) {
      console.log("Login error: ", error)
    }
  }

  return {
    createAccount,
    isLoading,
  }
}
