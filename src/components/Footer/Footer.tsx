import styles from "./Footer.module.css"
import Logo from "../Logo"
import { Link } from "react-router"

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
