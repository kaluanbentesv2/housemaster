import { SendVerificationRequestParams } from "next-auth/providers/email"
import { Resend } from "resend"

import html from "./html"

export default async function sendVerificationRequest(
  params: SendVerificationRequestParams
) {
  const { identifier, url, theme } = params

  const resend = new Resend(process.env.RESEND_API_KEY!)

  resend.emails.send({
    to: identifier,
    from: "onboarding@resend.dev",
    subject: "Housemaster: Entre na sua conta",
    html: html({ url, theme }),
  })
}
