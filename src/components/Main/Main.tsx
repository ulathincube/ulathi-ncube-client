import styles from "./Main.module.css"
import Articles from "../Articles/"
import { motion } from "motion/react"
import ErrorBoundary from "../ErrorBoundary"

function ErrorFallback() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Unable to fetch articles</h3>
    </div>
  )
}

function Main() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Articles />
      </ErrorBoundary>
    </motion.main>
  )
}

export default Main
