import { signIn } from "next-auth/react"
import { useState } from "react"

export interface LoginData {
  email: string
}

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const login = async (data: LoginData) => {
    try {
      setIsLoading(true)

      await signIn("email", {
        email: data.email,
        redirect: false,
        callbackUrl: "/create-account",
      })

      setIsSent(true)
    } catch (error: unknown) {
      console.log("Login error: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    login,
    isLoading,
    isSent,
  }
}
