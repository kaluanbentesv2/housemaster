import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paragraph from "@/components/Paragraph"

import styles from "./LoginView.module.scss"
import AuthLayout from "../../layouts/AuthLayout"

export default function LoginView() {
  return (
    <AuthLayout>
      <Heading className={styles.heading}>Bem-vindo</Heading>
      <Paragraph className={styles.paragraph} weight="medium" variant="muted">
        Para entrar em sua conta digite seu email abaixo.
      </Paragraph>
      <Input
        className={styles.input}
        id="email"
        label="Email"
        placeholder="Digite seu email"
      />
      <Button>Entrar</Button>
    </AuthLayout>
  )
}
