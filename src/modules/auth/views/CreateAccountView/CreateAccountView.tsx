import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paragraph from "@/components/Paragraph"
import Select from "@/components/Select"
import streets from "@/data/streets"

import styles from "./CreateAccountView.module.scss"
import AuthLayout from "../../layouts/AuthLayout"

export default function CreateAccountView() {
  return (
    <AuthLayout>
      <Heading className={styles.heading}>Crie sua conta</Heading>
      <Paragraph className={styles.paragraph} weight="medium" variant="muted">
        Preencha o formulário abaixo para cadastrar as informações de sua
        residência.
      </Paragraph>
      <Input
        className={styles.input}
        id="name"
        label="Nome Completo"
        placeholder="Digite o seu nome completo"
      />
      <Select
        className={styles.input}
        id="type"
        label="Tipo de imóvel"
        placeholder="Selecione um tipo"
      >
        <option value="RESIDENCE">Residencial</option>
        <option value="POOLHOUSE">Imóvel com piscina</option>
        <option value="COMERCIAL">Comercial</option>
      </Select>
      <Select
        className={styles.input}
        id="street"
        label="Rua"
        placeholder="Selecione sua rua"
      >
        {streets.map((street) => (
          <option value={street} key={street}>
            {street}
          </option>
        ))}
      </Select>
      <Input
        className={styles.input}
        id="number"
        label="Número"
        placeholder="Digite o número de sua casa"
      />
      <Button>Criar conta</Button>
    </AuthLayout>
  )
}
