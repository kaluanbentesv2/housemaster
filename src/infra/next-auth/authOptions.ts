import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"

import prisma from "@/infra/database/prisma"

import sendVerificationRequest from "./sendVerificationRequest"

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: null,
      type: "email",
      sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
}

export default authOptions
