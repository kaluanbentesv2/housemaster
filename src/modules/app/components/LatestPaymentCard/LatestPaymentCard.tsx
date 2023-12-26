import clsx from "clsx"
import { BiHistory, BiLike } from "react-icons/bi"

import styles from "./LatestPaymentCard.module.scss"

interface LatestPaymentCardProps {
  status: "paid" | "pending"
}

const statuses = {
  paid: styles.paid,
  pending: styles.pending,
}

export default function LatestPaymentCard({ status }: LatestPaymentCardProps) {
  const content = {
    paid: {
      title: "Pagamento em dia",
      text: "Parabéns, você está com o seu pagamento mensal em dia.",
    },
    pending: {
      title: "Pagamento pendente",
      text: "Você não está em dia com o seu pagamento mensal.",
    },
  }

  return (
    <article className={clsx(styles.container, statuses[status])}>
      {status === "paid" ? <BiLike /> : <BiHistory />}
      <div className={styles.content}>
        <h3 className={styles.title}>{content[status].title}</h3>
        <p className={styles.text}>{content[status].text}</p>
        <button className={styles.button}>Ir para pagamentos</button>
      </div>
    </article>
  )
}
