"use client"

import Button from "@/components/Button"
import Data from "@/components/Data"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Paper from "@/components/Paper"
import { HOUSE_TYPES, USER_ROLES } from "@/config/maps"
import User from "@/models/User"
import AppLayout from "@/layouts/AppLayout"

import styles from "./ProfileView.module.scss"
import HouseCard from "../../components/HouseCard"

interface ProfileViewProps {
  user: User
}

const TITLE = "Perfil"

export default function ProfileView({ user }: ProfileViewProps) {
  return (
    <AppLayout title={TITLE}>
      <Header className={styles.header}>
        <Heading>{TITLE}</Heading>
        <Button href="/payments/create-payment" isInline>
          Editar
        </Button>
      </Header>
      <Paper className={styles.profilePaper}>
        <Data label="Nome" value={user.name} />
        <Data label="Email" value={user.email} />
        <Data label="Permissão" value={USER_ROLES[user.role]} />
      </Paper>
      <Header className={styles.header}>
        <Heading className={styles.housesTitle} level={3}>
          Casas
        </Heading>
        <Button href="/payments/create-payment" isInline>
          Adicionar
        </Button>
      </Header>

      <div className={styles.housesGrid}>
        {user.houses.map((house) => (
          <HouseCard
            key={house.id}
            street={house.street}
            number={house.number}
            type={HOUSE_TYPES[house.type]}
          />
        ))}
      </div>
    </AppLayout>
  )
}
