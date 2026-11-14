import styles from "./Main.module.css"
import Articles from "../Articles/"
import { motion } from "motion/react"

function Main() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <Articles />
    </motion.main>
  )
}

export default Main
