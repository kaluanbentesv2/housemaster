import {
  BiBuildingHouse,
  BiMoney,
  BiSolidDashboard,
  BiUser,
} from "react-icons/bi"

const appNavItems = [
  {
    label: "Dashboard",
    href: "/app",
    icon: BiSolidDashboard,
  },
  {
    label: "Pagamentos",
    href: "/app/payments",
    icon: BiMoney,
  },
  {
    label: "Casas",
    href: "/app/houses",
    icon: BiBuildingHouse,
  },
  {
    label: "Perfil",
    href: "/app/profile",
    icon: BiUser,
  },
]

export default appNavItems
