"use client"

import { useRouter } from "next/navigation"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import User from "@/models/User"

interface AppState {
  house?: string
}

interface AppDispatch {
  setState?: (key: string, value: unknown) => void
}

const appDefaultState = {
  house: undefined,
}

export const AppStateContext = createContext<AppState>(appDefaultState)

export const AppDispatchContext = createContext<AppDispatch>({
  setState: undefined,
})

interface AppProviderProps {
  children: ReactNode
  user: User
}

const STORAGE_KEY = "housemaster.app"

export function AppProvider({ children, user }: AppProviderProps) {
  const [app, setApp] = useState(appDefaultState)
  const [isDataReady, setIsDataReady] = useState(false)
  const router = useRouter()

  const setState = (key: string, value: unknown) => {
    setApp((prev) => {
      const nextValue = {
        ...prev,
        [key]: value,
      }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(nextValue))
      return nextValue
    })
  }

  useEffect(() => {
    if (!app.house && isDataReady && user?.houses?.length) {
      router.push("/app/houses/select")
    }
  }, [app, router, isDataReady, user])

  useEffect(() => {
    const session = sessionStorage.getItem(STORAGE_KEY)

    if (session) {
      setApp(JSON.parse(session))
    }

    setIsDataReady(true)
  }, [])

  return (
    <AppStateContext.Provider value={app}>
      <AppDispatchContext.Provider value={{ setState }}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

export function useApp() {
  const app = useContext(AppStateContext)
  const { setState } = useContext(AppDispatchContext)

  if (!app || !setState) {
    throw new Error("Wrap root component with AppProvider")
  }

  return { app, setState }
}
