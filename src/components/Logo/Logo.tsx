import styles from "./Logo.module.css"
import { Link } from "react-router"
import { motion } from "motion/react"

function Logo() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <Link to="/" className={styles.link}>
        <article className={styles.logo}>{`< Ulathi.Ncube />`}</article>
      </Link>
    </motion.article>
  )
}

export default Logo
