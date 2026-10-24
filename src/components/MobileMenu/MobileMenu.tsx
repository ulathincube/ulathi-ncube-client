import styles from "./MobileMenu.module.css"
import { Link } from "react-router"
import { createPortal } from "react-dom"

const container: HTMLElement = document.querySelector("#modal")!

function MobileMenu() {
  return createPortal(
    <main className={styles.wrapper}>
      <div className={styles.overlay}>
        <article className={styles.modal}>
          <nav className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
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
              <li className={styles.item}>
                <Link to="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    </main>,
    container
  )
}

export default MobileMenu
