import styles from "./Logo.module.css"
import { Link } from "react-router"

function Logo() {
  return (
    <Link to="/" className={styles.link}>
      <article className={styles.logo}>{`< Ulathi.Ncube />`}</article>
    </Link>
  )
}

export default Logo
