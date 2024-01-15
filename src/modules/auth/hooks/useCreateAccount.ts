import { useRouter } from "next/router"
import { useState } from "react"

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

      if (result.id) {
        router.push("/")
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
