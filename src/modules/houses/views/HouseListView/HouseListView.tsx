"use client"

import { range } from "lodash"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useTransition } from "react"

import Button from "@/components/Button"
import Header from "@/components/Header"
import Heading from "@/components/Heading"
import AppLayout from "@/layouts/AppLayout"
import House from "@/models/House"
import HouseCard from "@/modules/houses/components/HouseCard"

import styles from "./HouseListView.module.scss"

interface HouseListViewProps {
  houses?: House[]
}

const TITLE = "Casas"

export default function HouseListView({ houses = [] }: HouseListViewProps) {
  const searchParams = useSearchParams()
  const refresh = searchParams.get("refresh")
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const renderHouseCards = () => {
    return (
      !isPending &&
      houses.map((house) => (
        <HouseCard
          key={house.id}
          street={house.street}
          number={house.number}
          type={house.type}
        />
      ))
    )
  }

  const renderSkeletons = () => {
    return isPending && range(6).map((key) => <HouseCard.Skeleton key={key} />)
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
    </AppLayout>
  )
}
