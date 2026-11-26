import { useEffect } from "react"
import styles from "./Toast.module.css"
import { createPortal } from "react-dom"
import useToastMessage from "../../hooks/useToastMessage"
import { motion } from "motion/react"

const container: HTMLElement = document.getElementById("notifications")!

function Toast() {
  const { message } = useToastMessage()

  useEffect(() => {
    if (message.length > 0) {
      container.style.display = "flex"
      container.style.visibility = "visible"
      container.style.pointerEvents = "all"
    }

    return () => {
      container.style.display = "none"
      container.style.visibility = "hidden"
      container.style.pointerEvents = "none"
    }
  }, [message])

  if (message.length > 0)
    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.wrapper}
      >
        <h3 className={styles.heading}>{message}</h3>
      </motion.div>,
      container
    )
}

export default Toast
