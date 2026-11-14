import styles from "./Info.module.css"
import Hero from "../Hero"
import { motion } from "motion/react"

function Info() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <Hero />
    </motion.main>
  )
}

export default Info
