import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <article className={styles.logo}>{`< Ulathi.Ncube />`}</article>
    </footer>
  )
}

export default Footer
