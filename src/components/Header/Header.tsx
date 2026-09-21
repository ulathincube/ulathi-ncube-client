import styles from "./Header.module.css"
import { Link } from "react-router"

function Header() {
  return (
    <header className={styles.header}>
      <article className={styles.logo}>{`< Ulathi />`}</article>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li className={styles.item}>
            <Link className={styles.link} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
