import PaymentsView from "@/modules/app/views/PaymentsView"
import verifyAuth from "@/modules/auth/actions/verifyAuth"

export default async function PaymentsPage() {
  await verifyAuth()

  return <PaymentsView />
}
