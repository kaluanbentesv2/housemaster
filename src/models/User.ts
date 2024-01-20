import House from "./House"

export default interface User {
  id: string
  name: string
  email: string
  emailVerified: string
  image: string
  role: string
  houses: House[]
}
