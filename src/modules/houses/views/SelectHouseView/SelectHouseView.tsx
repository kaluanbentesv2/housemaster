"use client"

import { HouseType } from "@prisma/client"
import Image from "next/image"
import { useRouter } from "next/navigation"

import Heading from "@/components/Heading"
import { useApp } from "@/contexts/app"

import styles from "./SelectHouseView.module.scss"
import HouseCard from "../../components/HouseCard"
import "./global.scss"

interface SelectHouseViewProps {
  houses: {
    id: string
    street: string
    number: string
    type: HouseType
  }[]
}

export default function SelectHouseView({ houses }: SelectHouseViewProps) {
  const { setState } = useApp()
  const router = useRouter()

  return (
    <main className={styles.container}>
      <Image
        className={styles.image}
        src="/logo.png"
        alt="Conjunto Parque das Palmeiras"
        width={100}
        height={100}
      />
      <Heading className={styles.title}>Selecione uma casa</Heading>
      <div className={styles.housesGrid}>
        {houses.map((house) => (
          <HouseCard
            key={house.id}
            street={house.street}
            number={house.number}
            type={house.type}
            onClick={() => {
              setState("house", house)
              router.back()
            }}
          />
        ))}
      </div>
    </main>
  )
}
