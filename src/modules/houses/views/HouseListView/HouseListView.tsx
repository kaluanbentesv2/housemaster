"use client"

import { range } from "lodash"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useTransition } from "react"

import AlertDialog from "@/components/AlertDialog/AlertDialog"
import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import AppLayout from "@/layouts/AppLayout"
import House from "@/models/House"
import HouseCard from "@/modules/houses/components/HouseCard"

import styles from "./HouseListView.module.scss"
import useDeleteHouse from "../../hooks/useDeleteHouse"

interface HouseListViewProps {
  houses?: House[]
}

const TITLE = "Casas"

export default function HouseListView({ houses = [] }: HouseListViewProps) {
  const searchParams = useSearchParams()
  const refresh = searchParams.get("refresh")
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [currentHouse, setCurrentHouse] = useState<House | undefined>()
  const { deleteHouse, isLoading, isRefreshing } = useDeleteHouse()

  const handleRemove = (house: House) => {
    setCurrentHouse(house)
  }

  const confirmDeletion = async () => {
    if (currentHouse) {
      await deleteHouse(currentHouse?.id)
      setCurrentHouse(undefined)
    }
  }

  const renderHouseCards = () => {
    return (
      !isPending &&
      houses.map((house) => (
        <HouseCard
          key={house.id}
          street={house.street}
          number={house.number}
          type={house.type}
          onRemove={houses.length === 1 ? undefined : () => handleRemove(house)}
          onEdit={() => router.push(`/app/houses/edit/${house.id}`)}
        />
      ))
    )
  }

  const renderSkeletons = () => {
    return (
      (isPending || isRefreshing) &&
      range(6).map((key) => <HouseCard.Skeleton key={key} />)
    )
  }

  useEffect(() => {
    if (refresh) {
      startTransition(() => {
        router.refresh()
      })
    }
  }, [refresh, router])

  return (
    <AppLayout title={TITLE}>
      <Header className={styles.header}>
        <Heading className={styles.housesTitle}>Casas</Heading>
        <Button href="/app/houses/create" isInline>
          Adicionar
        </Button>
      </Header>
      <div className={styles.housesGrid}>
        {renderSkeletons()}
        {renderHouseCards()}
      </div>
      <AlertDialog
        title="Você tem certeza?"
        description="Essa ação não pode ser desfeita. Isso vai permanentemente deletar a casa."
        rejectText="Cancelar"
        confirmText="Confirmar"
        isOpen={Boolean(currentHouse)}
        isLoading={isLoading}
        onReject={() => setCurrentHouse(undefined)}
        onConfirm={confirmDeletion}
      />
    </AppLayout>
  )
}
