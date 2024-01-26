"use client"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as Yup from "yup"

import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import Input from "@/components/Input"
import Paper from "@/components/Paper"
import Select from "@/components/Select"
import houseTypes from "@/data/houseTypes"
import streets from "@/data/streets"
import AppLayout from "@/layouts/AppLayout"
import House from "@/models/House"

import styles from "./EditHouseView.module.scss"
import useUpdateHouse, { UpdateHousePayload } from "../../hooks/useUpdateHouse"

interface EditHouseViewProps {
  house: House
}

const editHouseSchema = Yup.object({
  street: Yup.string().required("Este campo é obrigatório"),
  number: Yup.string().required("Este campo é obrigatório"),
  type: Yup.string().required("Este campo é obrigatório"),
})

const TITLE = "Editar perfil"

export default function EditHouseView({ house }: EditHouseViewProps) {
  const { updateHouse, isLoading } = useUpdateHouse()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateHousePayload>({
    resolver: yupResolver(editHouseSchema),
    defaultValues: {
      street: house.street,
      number: house.number,
      type: house.type,
    },
  })

  return (
    <AppLayout title={TITLE}>
      <form onSubmit={handleSubmit(updateHouse(house.id))}>
        <Header className={styles.header}>
          <Heading>{TITLE}</Heading>
          <Button type="submit" isInline isLoading={isLoading}>
            Salvar
          </Button>
        </Header>
        <Paper className={styles.paper}>
          <Select
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
            id="number"
            label="Número"
            placeholder="Digite o número da casa"
            error={errors.number?.message}
            {...register("number")}
          />
          <Select
            className={styles.input}
            id="type"
            label="Tipo de imóvel"
            placeholder="Selecione um tipo"
            error={errors.type?.message}
            {...register("type")}
          >
            {houseTypes.map((houseType) => (
              <option key={houseType.value} value={houseType.value}>
                {houseType.label}
              </option>
            ))}
          </Select>
        </Paper>
      </form>
    </AppLayout>
  )
}
