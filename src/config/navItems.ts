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
    label: "Usuário",
    href: "/user",
    icon: BiUser,
  },
]

export default navItems
