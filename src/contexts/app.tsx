"use client"

import { useRouter } from "next/navigation"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

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
}

const STORAGE_KEY = "housemaster.app"

export function AppProvider({ children }: AppProviderProps) {
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
    if (!app.house && isDataReady) {
      router.push("/app/profile/select-house")
    }
  }, [app, router, isDataReady])

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
