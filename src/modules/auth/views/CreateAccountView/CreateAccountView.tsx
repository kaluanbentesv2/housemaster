"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paragraph from "@/components/Paragraph"
import Select from "@/components/Select"
import houseTypes from "@/data/houseTypes"
import streets from "@/data/streets"

import styles from "./CreateAccountView.module.scss"
import useCreateAccount from "../../hooks/useCreateAccount"
import AuthLayout from "../../layouts/AuthLayout"

interface CreateAccountData {
  name: string
  houseType: string
  street: string
  number: string
}

const createAccountSchema = Yup.object({
  name: Yup.string().required("Este campo é obrigatório"),
  houseType: Yup.string().required("Este campo é obrigatório"),
  street: Yup.string().required("Este campo é obrigatório"),
  number: Yup.string().required("Este campo é obrigatório"),
})

export default function CreateAccountView() {
  const { createAccount, isLoading } = useCreateAccount()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountData>({
    resolver: yupResolver(createAccountSchema),
  })

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(createAccount)}>
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
          error={errors.name?.message}
          {...register("name")}
        />
        <Select
          className={styles.input}
          id="type"
          label="Tipo de imóvel"
          placeholder="Selecione um tipo"
          error={errors.houseType?.message}
          {...register("houseType")}
        >
          {houseTypes.map((houseType) => (
            <option key={houseType.value} value={houseType.value}>
              {houseType.label}
            </option>
          ))}
        </Select>
        <Select
          className={styles.input}
          id="street"
          label="Rua"
          placeholder="Selecione sua rua"
          error={errors.street?.message}
          {...register("street")}
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
          error={errors.number?.message}
          {...register("number")}
        />
        <Button type="submit" isLoading={isLoading}>
          Criar conta
        </Button>
      </form>
    </AuthLayout>
  )
}
