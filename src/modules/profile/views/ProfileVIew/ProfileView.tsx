"use client"

import Button from "@/components/Button"
import Data from "@/components/Data"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Paper from "@/components/Paper"
import { USER_ROLES } from "@/config/maps"
import AppLayout from "@/layouts/AppLayout"
import User from "@/models/User"

import styles from "./ProfileView.module.scss"

interface ProfileViewProps {
  user: User
}

const TITLE = "Perfil"

export default function ProfileView({ user }: ProfileViewProps) {
  return (
    <AppLayout title={TITLE}>
      <Header className={styles.header}>
        <Heading>{TITLE}</Heading>
        <Button href="/app/profile/edit" isInline>
          Editar
        </Button>
      </Header>
      <Paper className={styles.profilePaper}>
        <Data label="Nome" value={user.name} />
        <Data label="Email" value={user.email} />
        <Data label="Permissão" value={USER_ROLES[user.role]} />
      </Paper>
    </AppLayout>
  )
}
