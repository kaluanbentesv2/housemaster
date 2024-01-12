import CreatePaymentView from "@/modules/app/views/CreatePaymentView"
import verifyAuth from "@/modules/auth/actions/verifyAuth"

export default async function PaymentsPage() {
  await verifyAuth()

  return <CreatePaymentView />
}
