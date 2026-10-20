import styles from "./Header.module.css"
import { Link } from "react-router"
import Logo from "../Logo"
import MenuIcon from "../MenuIcon"

function Header() {
  return (
    <header className={styles.header}>
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
    </header>
  )
}

export default Header
