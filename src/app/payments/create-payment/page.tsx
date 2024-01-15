import verifyAuth from "@/modules/auth/actions/verifyAuth"
import CreatePaymentView from "@/modules/payments/views/CreatePaymentView"

export default async function PaymentsPage() {
  await verifyAuth()

  return <CreatePaymentView />
}
