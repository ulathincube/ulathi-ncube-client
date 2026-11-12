import styles from "./Header.module.css"
import { Link } from "react-router"
import Logo from "../Logo"
import MenuIcon from "../MenuIcon"
import { motion } from "motion/react"

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.header}
    >
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
      <MenuIcon />
    </motion.header>
  )
}

export default Header
