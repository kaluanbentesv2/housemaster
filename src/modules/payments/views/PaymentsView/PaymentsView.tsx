import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import { Table } from "@/components/Table"
import AppLayout from "@/modules/app/layouts/AppLayout"

export default function PaymentsView() {
  return (
    <AppLayout title="Dashboard">
      <Header>
        <Heading>Mensalidades</Heading>
        <Button href="/payments/create-payment">Pagar mensalidade</Button>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Mês</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023</td>
            <td>Julho</td>
            <td>R$ 95,00</td>
            <td>Pago</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Julho</td>
            <td>R$ 95,00</td>
            <td>Pago</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Julho</td>
            <td>R$ 95,00</td>
            <td>Pago</td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Julho</td>
            <td>R$ 95,00</td>
            <td>Pago</td>
          </tr>
        </tbody>
      </Table>
    </AppLayout>
  )
}
