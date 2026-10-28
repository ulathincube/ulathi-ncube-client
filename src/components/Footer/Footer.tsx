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
            <h3 className={styles.title}>Working on</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/blog" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/portfolio" className={styles.link}>
                  Portfolio
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <h3 className={styles.title}>General</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li className={styles.item}>
                <Link to="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
