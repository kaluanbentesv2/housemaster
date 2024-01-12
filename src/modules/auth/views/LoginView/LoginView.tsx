"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import Button from "@/components/Button"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paragraph from "@/components/Paragraph"

import styles from "./LoginView.module.scss"
import useLogin from "../../hooks/useLogin"
import AuthLayout from "../../layouts/AuthLayout"

interface LoginData {
  email: string
}

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .required("Este campo é obrigatório"),
})

export default function LoginView() {
  const { login, isSent, isLoading } = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  })

  return (
    <AuthLayout>
      {isSent && (
        <>
          <Heading className={styles.sentHeading}>Verifique seu email</Heading>
          <Paragraph
            className={styles.paragraph}
            weight="medium"
            variant="muted"
          >
            Para conectar a sua conta verifique sua caixa de entrada, enviamos
            um email contendo um link para você logar na sua conta.
          </Paragraph>
        </>
      )}
      {!isSent && (
        <form onSubmit={handleSubmit(login)}>
          <Heading className={styles.heading}>Bem-vindo</Heading>
          <Paragraph
            className={styles.paragraph}
            weight="medium"
            variant="muted"
          >
            Para entrar em sua conta digite seu email abaixo.
          </Paragraph>
          <Input
            className={styles.input}
            id="email"
            label="Email"
            type="email"
            placeholder="Digite seu email"
            error={errors.email?.message}
            {...register("email", { required: true })}
          />
          <Button type="submit" isLoading={isLoading}>
            Entrar
          </Button>
        </form>
      )}
    </AuthLayout>
  )
}
