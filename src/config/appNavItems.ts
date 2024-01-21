import { BiMoney, BiSolidDashboard, BiUser } from "react-icons/bi"

const appNavItems = [
  {
    label: "Dashboard",
    href: "/app",
    icon: BiSolidDashboard,
  },
  {
    label: "Mensalidades",
    href: "/app/payments",
    icon: BiMoney,
  },
  {
    label: "Perfil",
    href: "/app/profile",
    icon: BiUser,
  },
]

export default appNavItems
