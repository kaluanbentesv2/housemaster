import { BiMoney, BiSolidDashboard, BiUser } from "react-icons/bi"

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
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
