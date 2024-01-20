import User from "./User"

export default interface House {
  id: string
  street: string
  number: string
  userId: string
  type: "RESIDENCE" | "POOLHOUSE" | "COMERCIAL"
  user: User
}
