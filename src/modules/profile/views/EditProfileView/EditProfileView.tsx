"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paper from "@/components/Paper"
import { USER_ROLES } from "@/config/maps"
import AppLayout from "@/layouts/AppLayout"
import User from "@/models/User"

import styles from "./EditProfileView.module.scss"
import useUpdateProfile from "../../hooks/useUpdateProfile"

interface ProfileViewProps {
  user: User
}

export interface EditProfileData {
  name: string
}

const editProfileSchema = Yup.object({
  name: Yup.string().required("Este campo é obrigatório"),
})

const TITLE = "Editar perfil"

export default function ProfileView({ user }: ProfileViewProps) {
  const { updateProfile, isLoading } = useUpdateProfile()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: user.name,
    },
  })

  return (
    <AppLayout title={TITLE}>
      <form onSubmit={handleSubmit(updateProfile)}>
        <Header className={styles.header}>
          <Heading>{TITLE}</Heading>
          <Button type="submit" isInline isLoading={isLoading}>
            Salvar
          </Button>
        </Header>
        <Paper className={styles.paper}>
          <Input
            id="name"
            label="Nome Completo"
            placeholder="Digite o seu nome completo"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input isDisabled id="email" label="Email" value={user.email} />
          <Input
            isDisabled
            id="role"
            label="Permissão"
            value={USER_ROLES[user?.role]}
          />
        </Paper>
      </form>
    </AppLayout>
  )
}
