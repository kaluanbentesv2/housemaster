import { toast } from "react-toastify"

export default function showToast(message: string) {
  return toast(message, {
    position: "top-right",
    theme: "dark",
    style: {
      fontFamily: "__Poppins_078436",
      fontSize: "0.875rem",
    },
  })
}
