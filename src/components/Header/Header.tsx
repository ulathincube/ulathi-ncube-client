import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <article className={styles.logo}>{`< Ulathi.Ncube />`}</article>
    </header>
  )
}

export default Header
