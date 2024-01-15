import { BiMoney, BiSolidDashboard, BiUser } from "react-icons/bi"

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: BiSolidDashboard,
  },
  {
    label: "Mensalidades",
    href: "/payments",
    icon: BiMoney,
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: BiUser,
  },
]

export default navItems
