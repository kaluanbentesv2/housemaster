import NextAuth from "next-auth"

import authOptions from "@/infra/next-auth/authOptions"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
