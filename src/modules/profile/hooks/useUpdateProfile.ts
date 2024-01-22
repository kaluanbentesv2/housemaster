import { useRouter } from "next/navigation"
import { useState } from "react"

import showToast from "@/utils/showToast"

import { EditProfileData } from "../views/EditProfileView/EditProfileView"

export default function useUpdateProfile() {
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()

  const updateProfile = async (data: EditProfileData) => {
    try {
      setIsLoading(true)

      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      if (result) {
        showToast("Perfil atualizado com sucesso")
        route.push("/app/profile")
      }
    } catch (error: unknown) {
      console.error("updateProfile: ", error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    updateProfile,
  }
}
