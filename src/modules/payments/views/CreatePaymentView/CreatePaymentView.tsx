import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Paper from "@/components/Paper"
import Select from "@/components/Select"
import AppLayout from "@/modules/app/layouts/AppLayout"

import styles from "./CreatePaymentView.module.scss"

export default function CreatePaymentView() {
  return (
    <AppLayout title="Dashboard">
      <Header>
        <Heading>Pagar mensalidade</Heading>
      </Header>
      <Paper className={styles.box}>
        <Select id="year" label="Qual ano?">
          <option value="">Selecione</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </Select>
        <Select id="month" label="Qual mês?">
          <option value="">Selecione</option>
          <option>Janeiro</option>
          <option>Feveireiro</option>
        </Select>
      </Paper>
      <Button className={styles.button}>Gerar QR Code</Button>
    </AppLayout>
  )
}
