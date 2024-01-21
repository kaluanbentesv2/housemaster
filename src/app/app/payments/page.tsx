import verifyAuth from "@/modules/auth/actions/verifyAuth"
import PaymentsView from "@/modules/payments/views/PaymentsView"

export default async function PaymentsPage() {
  await verifyAuth()

  return <PaymentsView />
}
