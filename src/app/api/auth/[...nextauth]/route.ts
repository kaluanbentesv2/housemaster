import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { render } from "jsx-email"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { Resend } from "resend"

import { MagicLink } from "@/emails/MagicLink"
import prisma from "@/infra/database/prisma"

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {},
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async (params) => {
        const { identifier, url } = params

        const resend = new Resend(process.env.RESEND_API_KEY!)

        resend.emails.send({
          to: identifier,
          from: process.env.EMAIL_FROM!,
          subject: "Housemaster: Entre na sua conta",
          html: await render(MagicLink({ url })),
        })
      },
    }),
  ],
})

export { handler as GET, handler as POST }
